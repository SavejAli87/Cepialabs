import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();       // Get dynamic parameter
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h1>User Details</h1>
      <h3>User ID: {id}</h3>

      {/* Bonus: Go Back Button */}
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
