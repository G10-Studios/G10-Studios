import "./Profile.css";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

import { auth, db } from "../../firebase";

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export default function Profile() {
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
  });

  useEffect(() => {
  const loadProfile = async () => {
    try {
      console.log("Loading profile...");

      const user = auth.currentUser;
      console.log("Current User:", user);

      if (!user) {
        console.log("No user logged in.");
        setLoading(false);
        return;
      }

      const userRef = doc(db, "users", user.uid);
      console.log("User Ref:", userRef.path);

      const userSnap = await getDoc(userRef);
      console.log("Document exists:", userSnap.exists());

      if (userSnap.exists()) {
        console.log("Profile Data:", userSnap.data());
        setProfile(userSnap.data());
      } else {
        console.log("Creating new profile...");

        const newUser = {
          fullName: user.displayName || "",
          email: user.email,
          phone: "",
          company: "",
        };

        await setDoc(userRef, newUser);
        setProfile(newUser);
      }

      setLoading(false);
    } catch (error) {
      console.error("Firestore Error:", error);
      setLoading(false);
    }
  };

  loadProfile();
}, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;

    if (!user) return;

    await updateDoc(doc(db, "users", user.uid), profile);

    alert("✅ Profile updated successfully!");
  };

  if (loading) {
    return (
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          fontSize: "24px",
        }}
      >
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <FaUser />
          </div>

          <h1>My Profile</h1>

          <p>
            Manage your personal information.
          </p>
        </div>

        <form
          className="profile-form"
          onSubmit={saveProfile}
        >
          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Company Name</label>

            <input
              type="text"
              name="company"
              value={profile.company}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="save-btn"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}