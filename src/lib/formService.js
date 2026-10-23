export async function submitForm(formName, data, attribution) {
  const res = await fetch("/api/forms/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      form: formName,
      data,
      ...(attribution ? { attribution } : {}),
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.error || "Failed to submit form");
  return json;
}

export default submitForm;
