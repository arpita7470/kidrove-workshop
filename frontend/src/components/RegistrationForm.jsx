import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialForm = { name: "", email: "", phone: "" };

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name looks too short.";
  }

  if (!form.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "That email address doesn't look right.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
    errors.phone = "Enter a valid 10-digit phone number.";
  }

  return errors;
}

export default function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate({ ...form }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, phone: true });

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const response = await fetch(`${API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setServerMessage(data?.message || "You're enrolled! We'll be in touch shortly.");
      setForm(initialForm);
      setTouched({});
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err.message || "Couldn't submit right now. Please check your connection and try again."
      );
    }
  };

  const fieldClasses = (field) =>
    `w-full rounded-xl border px-4 py-3 text-ink placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-circuit/50 transition-colors ${
      touched[field] && errors[field]
        ? "border-spark focus:ring-spark/40"
        : "border-ink/15 focus:border-circuit"
    }`;

  return (
    <section id="enroll-form" className="bg-ink py-16 md:py-20">
      <div className="max-w-lg mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-cream text-center">
          Reserve a seat
        </h2>
        <p className="text-cream/70 text-center mt-3">
          Fill in the details below and our team will confirm your child's spot.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-xl space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-ink mb-1.5">
              Parent / Child's name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Aahh Sharma"
              className={fieldClasses("name")}
              aria-invalid={Boolean(touched.name && errors.name)}
              aria-describedby="name-error"
            />
            {touched.name && errors.name && (
              <p id="name-error" className="text-spark text-sm mt-1.5">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-ink mb-1.5">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
              className={fieldClasses("email")}
              aria-invalid={Boolean(touched.email && errors.email)}
              aria-describedby="email-error"
            />
            {touched.email && errors.email && (
              <p id="email-error" className="text-spark text-sm mt-1.5">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-1.5">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="10-digit mobile number"
              className={fieldClasses("phone")}
              aria-invalid={Boolean(touched.phone && errors.phone)}
              aria-describedby="phone-error"
            />
            {touched.phone && errors.phone && (
              <p id="phone-error" className="text-spark text-sm mt-1.5">
                {errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-spark hover:bg-spark/90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-semibold px-6 py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
          >
            {status === "submitting" ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              "Enroll Now"
            )}
          </button>

          {status === "success" && (
            <p className="text-center text-sm font-medium text-mint bg-mint/10 rounded-lg py-2.5 px-3">
              {serverMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm font-medium text-spark bg-spark/10 rounded-lg py-2.5 px-3">
              {serverMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
