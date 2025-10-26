import axios, { AxiosError } from "axios";

export type MailRecipient = {
  email: string;
  name?: string;
};

export type MailRequest = {
  to: MailRecipient[];
  subject: string;
  text?: string;
  html?: string;
  cc?: MailRecipient[];
  bcc?: MailRecipient[];
  replyTo?: MailRecipient;
  // you can add more fields if your API supports them
};

export type MailResponse = {
  ok: boolean;
  status: number;
  data?: unknown;
  error?: string;
};

const MAIL_API_URL = (process.env.REACT_APP_MAIL_API_URL || "").trim();

/**
 * Sends an email payload to your Mail API endpoint defined in env.
 * - Reads URL from REACT_APP_MAIL_API_URL, but you can override via options.url
 * - Uses axios POST with JSON body
 */
export async function sendMail(
  payload: MailRequest,
  options?: {
    url?: string;
    headers?: Record<string, string>;
    timeoutMs?: number;
  }
): Promise<MailResponse> {
  const url = (options?.url || MAIL_API_URL).trim();
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
        ...(options?.headers || {}),
      },
      timeout: options?.timeoutMs ?? 15000,
      // withCredentials: true, // enable if your API requires cookies
    });

    return {
      ok: res.status >= 200 && res.status < 300,
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    const ax = err as AxiosError<any>;
    const status = ax.response?.status ?? 0;
    const serverMsg =
      (ax.response?.data &&
        (ax.response.data.message || ax.response.data.error)) ||
      undefined;

    return {
      ok: false,
      status,
      error: serverMsg || ax.message,
      data: ax.response?.data,
    };
  }
}

/**
 * Convenience helper for common minimal use-case.
 */
export async function sendSimpleMail(
  to: MailRecipient[],
  subject: string,
  text: string
): Promise<MailResponse> {
  return sendMail({ to, subject, text });
}
