import { useRef, useState } from "react";
import Link from "next/link";
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

const branchTimeRanges = {
  "Sanath Nagar": { start: 10, end: 20 },
  Kukatpally: { start: 9, end: 20 },
};

const formatHour = (hour24) => {
  const hour = hour24 % 12 || 12;
  const period = hour24 >= 12 ? "PM" : "AM";
  return `${String(hour).padStart(2, "0")}:00 ${period}`;
};

const getBranchTimeSlots = (location) => {
  const range = branchTimeRanges[location];
  if (!range) return [];

  return Array.from({ length: range.end - range.start }, (_, index) => {
    const startHour = range.start + index;
    return `${formatHour(startHour)} - ${formatHour(startHour + 1)}`;
  });
};

const getDefaultBranchTime = (location) => getBranchTimeSlots(location)[0] ?? "";

const TextField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  icon,
  inputRef,
  onIconClick,
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
      ref={inputRef}
    />
    <span>{label}</span>
    {onIconClick ? (
      <button
        type="button"
        className={styles["field-icon-button"]}
        onClick={onIconClick}
        aria-label={`Choose ${label.toLowerCase()}`}
      >
        {icon}
      </button>
    ) : (
      icon
    )}
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
const TimeSlotField = ({ value, location, onChange, required = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const availableSlots = getBranchTimeSlots(location);
  const selectedTime = value || "Select available time";
  const branchHours = location
    ? `${availableSlots[0]?.split(" - ")[0]} - ${availableSlots.at(-1)?.split(" - ")[1]}`
    : "Select a hospital location first";

  const updateTime = (slot) => {
    onChange({
      target: {
        name: "timeSlot",
        type: "text",
        value: slot,
      },
    });
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles["appointment-field"]} ${styles["compact-field"]} ${styles["time-slot-field"]} ${value ? styles["is-filled"] : ""} ${isOpen ? styles["time-slot-open"] : ""}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <span className={styles["time-slot-label"]}>Preferred Time slot</span>
      <input type="hidden" name="timeSlot" value={value} />
      <button
        type="button"
        className={styles["time-display-button"]}
        onClick={() => location && setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Choose preferred time"
        disabled={!location}
      >
        <span className={value ? styles["time-value"] : styles["time-placeholder"]}>
          {selectedTime}
        </span>
        <ClockIcon />
        <ChevronIcon />
      </button>

      {isOpen ? (
        <div className={styles["time-picker-panel"]} role="dialog" aria-label="Choose preferred time">
          <div className={styles["time-picker-heading"]}>
            <div>
              <strong>Choose your time</strong>
              <small>{branchHours}</small>
            </div>
            <button
              type="button"
              className={styles["time-picker-done"]}
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
          <div className={styles["time-slot-options"]} role="listbox" aria-label="Available appointment times">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                className={slot === value ? styles["time-option-active"] : ""}
                onClick={() => updateTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const Form = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dateInputRef = useRef(null);
  const router = useRouter();

  const openDatePicker = () => {
    const input = dateInputRef.current;
    if (!input) return;

    input.focus();
    if (typeof input.showPicker === "function") {
      input.showPicker();
    }
  };

  const handleChange = (event) => {
    const { checked, name, type, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "location" ? { timeSlot: getDefaultBranchTime(value) } : {}),
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
            icon={<CalendarIcon />}
            inputRef={dateInputRef}
            onIconClick={openDatePicker}
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
            location={formData.location}
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
              I agree to the <Link href="/terms-and-conditions" className={styles["legal-link-strong"]}>Terms &amp; Conditions</Link> and <Link href="/privacy-policy" className={styles["legal-link-strong"]}>Privacy Policy</Link>
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
              label="Enquire Now"
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
