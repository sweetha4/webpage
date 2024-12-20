import React from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css"
const ProfilePage = () => {
  const personalDetails = {
    name: "Sweetha",
    email: "sweetha@example.com",
    address: "2, uc colony, old pallavaram",
    phone: "+91 890-456-7890",
    bio: "Web developer and designer with a passion for creating user-friendly digital experiences."
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="personal-details">
        <p><strong>Name:</strong> {personalDetails.name}</p>
        <p><strong>Email:</strong> {personalDetails.email}</p>
        <p><strong>Phone:</strong> {personalDetails.phone}</p>
        <p><strong>Address:</strong> {personalDetails.address}</p>
        <p><strong>Bio:</strong> {personalDetails.bio}</p>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ProfilePage;
