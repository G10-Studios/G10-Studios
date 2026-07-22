import "./RequestProject.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function RequestProject() {

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("✅ Project request submitted successfully!");

      form.current.reset();

    } catch (error) {

      console.error(error);
      alert("❌ Failed to send request.");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="request-project">

      <div className="request-card">

        <div className="request-header">

          <h1>Request a Project</h1>

          <p>
            Tell us about your project idea. We'll review your request
            personally and contact you through email to discuss the next steps.
          </p>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="project-form"
        >

          {/* Project Type */}

          <div className="form-group">

            <label>Project Type *</label>

            <select
              name="project_type"
              required
            >
              <option value="">Select Project Type</option>
              <option>Landing Page</option>
              <option>Business Website</option>
              <option>Portfolio Website</option>
              <option>E-Commerce Website</option>
              <option>Premium Website</option>
              <option>Web Application</option>
              <option>Custom Website</option>
            </select>

          </div>

          {/* Project Name */}

          <div className="form-group">

            <label>Project Name *</label>

            <input
              type="text"
              name="project_name"
              placeholder="Enter project name"
              required
            />

          </div>

          {/* Description */}

          <div className="form-group">

            <label>Project Description *</label>

            <textarea
              name="description"
              rows="6"
              placeholder="Describe your project idea..."
              required
            />

          </div>

          {/* Features */}

          <div className="form-group">

            <label>Required Features</label>

            <textarea
              name="features"
              rows="4"
              placeholder="Example: Login, Contact Form, Payment Gateway..."
            />

          </div>

          {/* Reference Website */}

          <div className="form-group">

            <label>Reference Website</label>

            <input
              type="url"
              name="reference"
              placeholder="https://example.com"
            />

          </div>

          {/* Budget + Deadline */}

          <div className="form-row">

            <div className="form-group">

              <label>Estimated Budget</label>

              <input
                type="text"
                name="budget"
                placeholder="₹50,000"
              />

            </div>

            <div className="form-group">

              <label>Expected Deadline</label>

              <input
                type="date"
                name="deadline"
              />

            </div>

          </div>

          {/* Contact */}

          <div className="form-row">

            <div className="form-group">

              <label>Full Name *</label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
              />

            </div>

            <div className="form-group">

              <label>Email *</label>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
              />

            </div>

          </div>

          {/* Phone */}

          <div className="form-group">

            <label>Phone Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
            />

          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Sending Request..." : "Submit Request"}
          </button>

        </form>

      </div>

    </div>
  );
}