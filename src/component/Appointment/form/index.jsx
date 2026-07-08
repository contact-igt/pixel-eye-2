import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/Button";
import styles from "./styles.module.css";
import submitForm from "@/lib/formService";
import { NAV_CONTENT } from "@/constant/navContent";

const initialForm = {
  fullName: "",
  email: "",
  countryCode: "+91",
  mobile: "",
  location: "",
  date: "",
  symptoms: "",
  symptomDetails: "",
  timeSlot: "00:00 AM",
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
  <svg
    className={`${styles["form-icon"]} ${styles["calendar-icon"]}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M8 2v4M16 2v4M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    <path d="M8 13h2M12 13h2M16 13h2M8 17h2M12 17h2M16 17h2" />
  </svg>
);

const ClockIcon = () => (
  <svg className={styles["form-icon"]} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>
);

const hourOptions = Array.from({ length: 13 }, (_, index) =>
  String(index).padStart(2, "0"),
);
const minuteOptions = Array.from({ length: 60 }, (_, index) =>
  String(index).padStart(2, "0"),
);
const periodOptions = ["AM", "PM"];

const getTimeParts = (value = "") => {
  const match = value.trim().match(/^(\d{1,2})(?::(\d{1,2}))?\s*(AM|PM)?$/i);
  return {
    hour: match?.[1]?.padStart(2, "0") ?? "00",
    minute: match?.[2]?.padStart(2, "0") ?? "00",
    period: match?.[3]?.toUpperCase() ?? "AM",
  };
};

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
    className={`${styles["appointment-field"]} ${value || type === "date" || type === "time" ? styles["is-filled"] : ""
      } ${type === "date" || type === "time" ? styles["compact-field"] : ""} ${type === "date" && !value ? styles["date-empty"] : ""
      }`}
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
  compact = false,
  children,
}) => (
  <label
    className={`${styles["appointment-field"]} ${value || compact ? styles["is-filled"] : ""
      } ${compact ? styles["compact-field"] : ""}`}
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

const TextAreaField = ({ label, name, value, onChange, required = false }) => (
  <label
    className={`${styles["appointment-field"]} ${styles["textarea-field"]} ${value ? styles["is-filled"] : ""}`}
  >
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder=" "
      required={required}
      aria-label={label}
    />
    <span>{label}</span>
  </label>
);
const TimeSlotField = ({ value, onChange, required = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { hour, minute, period } = getTimeParts(value);

  const updateTime = (nextPart) => {
    const nextHour = nextPart.hour ?? hour ?? "00";
    const nextMinute = nextPart.minute ?? minute ?? "00";
    const nextPeriod = nextPart.period ?? period ?? "AM";
    const nextValue = `${nextHour}:${nextMinute} ${nextPeriod}`;

    onChange({
      target: {
        name: "timeSlot",
        type: "text",
        value: nextValue,
      },
    });
  };

  return (
    <label
      className={`${styles["appointment-field"]} ${styles["compact-field"]} ${styles["time-slot-field"]} ${isOpen ? styles["time-slot-open"] : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <span className={styles["time-slot-label"]}>Preferred Time slot</span>
      <input
        className={styles["time-display"]}
        name="timeSlot"
        value={value}
        onChange={onChange}
        onFocus={() => setIsOpen(true)}
        required={required}
        aria-label="Preferred Time slot"
      />
      <button
        type="button"
        className={styles["time-icon-button"]}
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Choose preferred time"
      >
        <ClockIcon stroke="#2f4c89" />
      </button>

      {isOpen ? (
        <div className={styles["time-picker-panel"]}>
          <div className={styles["time-picker-column"]} role="listbox" aria-label="Hour">
            {hourOptions.map((item) => (
              <button
                key={item}
                type="button"
                className={item === hour ? styles["time-option-active"] : ""}
                onClick={() => updateTime({ hour: item })}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={styles["time-picker-column"]} role="listbox" aria-label="Minute">
            {minuteOptions.map((item) => (
              <button
                key={item}
                type="button"
                className={item === minute ? styles["time-option-active"] : ""}
                onClick={() => updateTime({ minute: item })}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={styles["time-picker-column"]} role="listbox" aria-label="AM or PM">
            {periodOptions.map((item) => (
              <button
                key={item}
                type="button"
                className={item === period ? styles["time-option-active"] : ""}
                onClick={() => updateTime({ period: item })}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </label>
  );
};

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
            <option value="Sanath Nagar">Sanath Nagar</option>
            <option value="Kukatpally">Kukatpally</option>
          </SelectField>

          <TextField
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            required
            // icon={<CalendarIcon />}
          />

          <SelectField
            label="Symptoms/Conditions"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
          >
            <option value="" />
            {NAV_CONTENT.servicesDropdown.map((service) => (
              <option key={service.id} value={service.label}>
                {service.label}
              </option>
            ))}
          </SelectField>

          <TextAreaField
            label="Tell us more about your symptoms"
            name="symptomDetails"
            value={formData.symptomDetails}
            onChange={handleChange}
          />

          <TimeSlotField
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

