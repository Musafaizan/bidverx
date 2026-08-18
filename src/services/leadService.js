export async function submitLead(payload) {
  const endpoint = process.env.REACT_APP_LEAD_API_URL;

  if (endpoint) {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error("The request could not be completed.");
    }
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, 1200));
}
