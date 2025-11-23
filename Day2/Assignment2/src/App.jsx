import React, { useState, useEffect } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
    profilePic: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    // Name
    if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password
    if (form.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Confirm Password
    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms checkbox
    if (!form.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);
  };

  // Run validation on each input change
  useEffect(() => {
    validateForm();
  }, [form]);

  // To check if form is valid
  const isFormValid = Object.keys(errors).length === 0 &&
    form.name &&
    form.email &&
    form.password &&
    form.confirmPassword;

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
    }
  };

  // Password Strength Check
  const getPasswordStrength = () => {
    const length = form.password.length;
    if (length === 0) return "";
    if (length < 8) return "Weak";
    if (length < 12) return "Medium";
    return "Strong";
  };

  return (
    <div style={{ padding: "25px", maxWidth: "400px", margin: "auto" }}>
      <h2>Mini Greeting App</h2>

      {isSubmitted ? (
        <h3 style={{ color: "green" }}>Registration Successful! 🎉</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          
          {/* Name field */}
          <label>Name:</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          {/* Email field */}
          <label>Email:</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

          {/* Password field */}
          <label>Password:</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}

          {/* Password strength */}
          <p>Password Strength: {getPasswordStrength()}</p>

          {/* Confirm Password */}
          <label>Confirm Password:</label>
          <input
            type="password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}

          {/* Profile Picture */}
          <label>Profile Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setForm({ ...form, profilePic: e.target.files[0] })
            }
          />

          {/* Terms & Conditions */}
          <div style={{ marginTop: "10px" }}>
            <input
              type="checkbox"
              checked={form.terms}
              onChange={(e) =>
                setForm({ ...form, terms: e.target.checked })
              }
            />{" "}
            I agree to the terms and conditions
          </div>
          {errors.terms && (
            <p style={{ color: "red" }}>{errors.terms}</p>
          )}

          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              marginTop: "15px",
              padding: "10px",
              backgroundColor: isFormValid ? "blue" : "gray",
              color: "white",
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            Register
          </button>
        </form>
      )}
    </div>
  );
}
