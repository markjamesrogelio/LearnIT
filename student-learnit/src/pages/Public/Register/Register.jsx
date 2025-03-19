import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    suffixName: "",
    email: "",
    studentID: "",
    password: "",
    confirmPassword: "",
    course: "",
    year: "",
    sex: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      });

      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        middleName: formData.middleName || "",
        suffixName: formData.suffixName || "",
        email: formData.email,
        studentID: formData.studentID,
        course: formData.course,
        year: formData.year,
        sex: formData.sex,
        createdAt: new Date().toISOString(),
        userId: user.uid,
      });

      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email is already in use");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email format");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak");
      } else if (error.code === "auth/network-request-failed") {
        setError("Network error. Check your internet connection.");
      } else {
        setError(`Registration failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Sign up</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="suffixName"
              placeholder="Suffix Name"
              value={formData.suffixName}
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="studentID"
            placeholder="Student ID"
            value={formData.studentID}
            onChange={handleChange}
            required
          />

          <div className="input-group password-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </span>
          </div>

          <div className="input-group password-group">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              👁️
            </span>
          </div>

          <div className="input-group">
            <input
              type="text"
              name="course"
              placeholder="Course"
              value={formData.course}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="sex"
            placeholder="Sex"
            value={formData.sex}
            onChange={handleChange}
            required
          />

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "Creating Account..." : "Create an Account"}
          </button>
        </form>

        <div className="links">
          <Link to="/login">Already have an account? Log in</Link>
        </div>
      </div>
    </div>
  );
}
