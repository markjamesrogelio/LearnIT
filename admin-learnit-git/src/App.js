import AdminLogin from './PUBLIC/LOGIN/AdminLogin';
import Dashboard from './MAIN/dashboard';

function App() {
  return (
    <div className="App">
      <AdminLogin />
      {/* Uncomment the line below when you want to use the Dashboard component */}
      { <Dashboard /> }
    </div>
  );
}

export default App;