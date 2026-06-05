export async function submitForm(formName, data) {
  const res = await fetch("/api/forms/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form: formName, data }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error || "Failed to submit form");
  return json;
}

export default submitForm;
