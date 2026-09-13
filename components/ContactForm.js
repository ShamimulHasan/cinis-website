"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "Cleanroom / Sterile Cleaning",
  message: "",
  website: "", // honeypot — real visitors never see or fill this field
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus({
        state: "success",
        message: "Thanks — your enquiry has been sent. We'll be in touch shortly.",
      });
      setForm(initialState);
    } catch (err) {
      setStatus({
        state: "error",
        message: err.message || "We couldn't send that. Please call us instead on 1300 933 063.",
      });
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {status.state === "success" && (
        <div className="form-status success">{status.message}</div>
      )}
      {status.state === "error" && (
        <div className="form-status error">{status.message}</div>
      )}

      <div className="hp-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Smith"
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="04xx xxx xxx"
          />
        </div>
        <div className="field full">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com.au"
          />
        </div>
        <div className="field full">
          <label htmlFor="service">Which service do you need?</label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option>Cleanroom / Sterile Cleaning</option>
            <option>Laboratory Cleaning</option>
            <option>Lab Preparation</option>
            <option>Post Maintenance Cleaning</option>
            <option>Office Cleaning</option>
            <option>Not sure / other</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="message">Tell us about the space</label>
          <textarea
            id="message"
            required
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Size of the space, how often you need cleaning, any compliance standards it needs to meet..."
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={status.state === "loading"}>
        {status.state === "loading" ? "Sending..." : "Send enquiry"}
      </button>
    </form>
  );
}
