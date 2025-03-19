import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

// Import your components
import Login from "./pages/Public/Login/Login";
import Register from "./pages/Public/Register/Register";
import ForgotPassword from "./pages/Public/Forgot/ForgotPassword";
import Dashboard from "./pages/Private/Dashboard/dashboard"; // Added protected route

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Set up auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Clean up subscription
    return () => unsubscribe();
  }, []);

  // Show loading state
  if (loading) return <div>Loading...</div>;

  // Create router with protected routes
  const router = createBrowserRouter([
    {
      path: "/login",
      element: user ? <Navigate to="/dashboard" replace /> : <Login />,
    },
    
    {
      path: "/",
      element: user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />, 
    },
    
    {
      path: "/register",
      element: user ? <Navigate to="/dashboard" replace /> : <Register />,
    },
    {
      path: "/forgot-password",
      element: user ? <Navigate to="/dashboard" replace /> : <ForgotPassword />,
    },
    {
      path: "/dashboard",
      element: user ? <Dashboard /> : <Navigate to="/login" replace />, // Protected route
    },
    {
      path: "*",
      element: <Navigate to={user ? "/dashboard" : "/login"} replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
