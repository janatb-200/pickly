import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedProfile = JSON.parse(
      localStorage.getItem("picklyProfile")
    );

    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !profile.fullName ||
      !profile.email ||
      !profile.phone ||
      !profile.city
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    localStorage.setItem(
      "picklyProfile",
      JSON.stringify(profile)
    );

    setMessage("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your Pickly account information.</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          {profile.fullName
            ? profile.fullName.charAt(0).toUpperCase()
            : "P"}
        </div>

        <form
          className="profile-form"
          onSubmit={handleSubmit}
        >
          <label>Full Name</label>

          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />

          <label>Email</label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Phone Number</label>

          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />

          <label>City</label>

          <input
            type="text"
            name="city"
            value={profile.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />

          {message && (
            <p className="profile-message">
              {message}
            </p>
          )}

          <button type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;