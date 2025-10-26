import axios from "axios";

export function buildRecipient(email, name) {
  return { email, ...(name ? { name } : {}) };
}

export async function sendMail(payload, options = {}) {
  const url = (options.url || process.env.REACT_APP_MAIL_API_URL || "").trim();
  if (!url) {
    return {
      ok: false,
      status: 0,
      error:
        "Missing REACT_APP_MAIL_API_URL. Set it in your environment or pass options.url.",
    };
  }

  try {
    const res = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      timeout: options.timeoutMs ?? 15000,
    });
    return {
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const status = err?.response?.status ?? 0;
    const serverMsg =
      err?.response?.data?.message || err?.response?.data?.error;
    return {
      ok: false,
      status,
      error: serverMsg || err.message,
      data: err?.response?.data,
    };
  }
}

export function buildMailPayload(
  { fullName, email, mobile, description, toEmail, toName },
  options = { format: "object" } // "object" | "text" | "both"
) {
  const subject = `Portfolio contact: ${fullName || "Unknown"}`;
  const lines = [
    `Name: ${fullName || ""}`,
    `Email: ${email || ""}`,
    `Mobile: ${mobile || ""}`,
    "",
    description || "",
  ];
  const text = lines.join("\n");

  const toEnv = (process.env.REACT_APP_MAIL_TO || "").trim();
  const toNameEnv = (process.env.REACT_APP_MAIL_TO_NAME || "").trim();

  const to = [];
  if (toEmail)
    to.push(buildRecipient(toEmail, toName || toNameEnv || undefined));
  else if (toEnv) to.push(buildRecipient(toEnv, toNameEnv || undefined));

  const payload = {
    ...(to.length ? { to } : {}),
    subject,
  };

  const format = options?.format || "object";
  if (format === "object" || format === "both") {
    payload.data = {
      fullName: fullName || "",
      email: email || "",
      mobile: mobile || "",
      description: description || "",
    };
  }
  if (format === "text" || format === "both") {
    payload.text = text;
  }

  return payload;
}

export function buildKVPayload(fields) {
  return buildMailPayload(fields, { format: "object" });
}
