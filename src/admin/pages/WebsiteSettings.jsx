import "./WebsiteSettings.css";

import { useEffect, useState } from "react";

import { db } from "../../firebase";

import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export default function WebsiteSettings() {

  const [settings, setSettings] = useState({
    studioName: "",
    contactEmail: "",
    discordInvite: "",
    github: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    phone: "",
    address: "",
    copyright: "",
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {

    const ref = doc(db, "settings", "website");

    const snap = await getDoc(ref);

    if (snap.exists()) {

      setSettings(snap.data());

    }

  };

  const handleChange = (e) => {

    setSettings({

      ...settings,

      [e.target.name]: e.target.value,

    });

  };

  const saveSettings = async (e) => {

    e.preventDefault();

    await setDoc(
      doc(db, "settings", "website"),
      settings
    );

    alert("✅ Website Settings Saved");

  };

  return (

    <div className="website-settings">

      <h1>Website Settings</h1>

      <form onSubmit={saveSettings}>

        <input
          name="studioName"
          placeholder="Studio Name"
          value={settings.studioName}
          onChange={handleChange}
        />

        <input
          name="contactEmail"
          placeholder="Business Email"
          value={settings.contactEmail}
          onChange={handleChange}
        />

        <input
          name="discordInvite"
          placeholder="Discord Invite"
          value={settings.discordInvite}
          onChange={handleChange}
        />

        <input
          name="github"
          placeholder="GitHub"
          value={settings.github}
          onChange={handleChange}
        />

        <input
          name="linkedin"
          placeholder="LinkedIn"
          value={settings.linkedin}
          onChange={handleChange}
        />

        <input
          name="instagram"
          placeholder="Instagram"
          value={settings.instagram}
          onChange={handleChange}
        />

        <input
          name="youtube"
          placeholder="YouTube"
          value={settings.youtube}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={settings.phone}
          onChange={handleChange}
        />

        <input
          name="address"
          placeholder="Address"
          value={settings.address}
          onChange={handleChange}
        />

        <input
          name="copyright"
          placeholder="Copyright"
          value={settings.copyright}
          onChange={handleChange}
        />

        <button type="submit">

          Save Settings

        </button>

      </form>

    </div>

  );

}