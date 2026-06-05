import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/Button";
import styles from "./styles.module.css";
import submitForm from "@/lib/formService";

const initialForm = {
  fullName: "",
  email: "",
  countryCode: "+91",
  mobile: "",
  location: "",
  date: "",
  symptoms: "",
  timeSlot: "",
  terms: false,
  whatsapp: false,
  consent: false,
};

const ChevronIcon = () => (
  <svg className={styles["form-icon"]} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const CalendarIcon = () => (
  <svg className={styles["form-icon"]} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 2v4M16 2v4M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    <path d="M8 13h2M12 13h2M16 13h2M8 17h2M12 17h2M16 17h2" />
  </svg>
);

const TextField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  icon,
}) => (
  <label
    className={`${styles["appointment-field"]} ${value ? styles["is-filled"] : ""}`}
  >
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder=" "
      required={required}
      aria-label={label}
    />
    <span>{label}</span>
    {icon}
  </label>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  children,
}) => (
  <label
    className={`${styles["appointment-field"]} ${value ? styles["is-filled"] : ""}`}
  >
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      aria-label={label}
    >
      {children}
    </select>
    <span>{label}</span>
    <ChevronIcon />
  </label>
);

const Form = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (event) => {
    const { checked, name, type, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // formName 'Appointments' matches the sheet name in your Apps Script
      await submitForm("Appointments", formData);
      // On success, redirect to a dedicated thank-you page
      router.push("/thank-you");
      setFormData(initialForm);
    } catch (err) {
      console.error("Appointment submit error", err);
      // Redirect to a separate error page and include message for display
      const msg = encodeURIComponent(
        err?.message || "Failed to submit appointment",
      );
      router.push({ pathname: "/error", query: { msg } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className={styles["specialist-form-section"]}
      aria-labelledby="specialist-form-title"
    >
      <div className={styles["form-watermark"]} aria-hidden="true" />

      <form className={styles["specialist-form"]} onSubmit={handleSubmit}>
        <h1 id="specialist-form-title">
          HELP US CHOOSE THE RIGHT SPECIALIST FOR YOU
        </h1>

        <div className={styles["form-grid"]}>
          <TextField
            label="Patient's Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <TextField
            label="Patient's Email ID (optional)"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />

          <div className={styles["phone-row"]}>
            <label className={styles["country-code"]}>
              <span className={styles["india-flag"]} aria-hidden="true">
                <i />
              </span>
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                aria-label="Country code"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+971">+971</option>
              </select>
              <ChevronIcon />
            </label>

            <TextField
              label="Patient's Mobile Number"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <SelectField
            label="Hospital Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          >
            <option value="" />
            <option value="Hyderabad">Hyderabad</option>
            <option value="Secunderabad">Secunderabad</option>
            <option value="Kukatpally">Kukatpally</option>
          </SelectField>

          <TextField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            icon={<CalendarIcon />}
          />

          <SelectField
            label="Symptoms/Conditions"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
          >
            <option value="" />
            <option value="Blurred vision">Blurred vision</option>
            <option value="Eye irritation">Eye irritation</option>
            <option value="Cataract consultation">Cataract consultation</option>
            <option value="General eye checkup">General eye checkup</option>
          </SelectField>

          <TextField
            label="Preferred Time slot"
            name="timeSlot"
            type="time"
            value={formData.timeSlot}
            onChange={handleChange}
            required
          />

          <label className={`${styles["checkbox-row"]} ${styles["terms-row"]}`}>
            <input
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            <span>
              I agree to the Terms &amp; Conditions and Privacy Policy
            </span>
          </label>

          <div className={styles["consent-list"]}>
            <label className={styles["checkbox-row"]}>
              <input
                name="whatsapp"
                type="checkbox"
                checked={formData.whatsapp}
                onChange={handleChange}
              />
              <span>Send appointment updates via WhatsApp</span>
            </label>

            <label
              className={`${styles["checkbox-row"]} ${styles["consent-long"]}`}
            >
              <input
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
              />
              <span>
                I consent to Pixel Eye Hospital contacting me via call, SMS,
                email, RCS, or WhatsApp. This consent overrides NDNC
                registration
              </span>
            </label>
          </div>

          <div className={styles["submit-area"]}>
            <Button
              label="Book Appointment"
              variant="light"
              as="button"
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            />
            <p>
              {submitted
                ? "Appointment details captured. Our team will review and confirm"
                : "Our team will review your selection and confirm"}
            </p>
            {loading && <p className={styles.loading}>Booking...</p>}
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
