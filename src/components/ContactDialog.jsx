import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { sendMail, buildMailPayload } from "../utils/sendMail";
import "./css/ContactDialog.css";

const initialForm = { fullName: "", email: "", mobile: "", description: "" };

function validate(form) {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Valid email is required";
  if (form.mobile && !/^\+?[0-9\-()\s]{7,20}$/.test(form.mobile))
    errors.mobile = "Enter a valid phone number";
  if (!form.description.trim())
    errors.description = "Please add a short message";
  return errors;
}

export default function ContactDialog(props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);

//   const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    setResult(null);
    try {
      const payload = buildMailPayload({ ...form }, { format: "object" });
      const res = await sendMail(payload);
      setResult(res);
      if (res.ok) setForm(initialForm);
    } catch (err) {
      setResult({ ok: false, status: 0, error: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {props.triggerChildren}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="cd-Overlay" />
        <Dialog.Content className="cd-Content" aria-label="Contact form dialog">
          <Dialog.Title className="cd-Title">Contact Me</Dialog.Title>
          <Dialog.Description className="cd-Description">
            Fill in the form below and I'll get back to you.
          </Dialog.Description>

          <form className="cd-Form" onSubmit={onSubmit}>
            <div className="cd-Field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={onChange}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <span className="cd-Error">{errors.fullName}</span>
              )}
            </div>

            <div className="cd-Field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
              />
              {errors.email && <span className="cd-Error">{errors.email}</span>}
            </div>

            <div className="cd-Field">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                value={form.mobile}
                onChange={onChange}
                placeholder="+1 555 123 4567"
              />
              {errors.mobile && (
                <span className="cd-Error">{errors.mobile}</span>
              )}
            </div>

            <div className="cd-Field">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={form.description}
                onChange={onChange}
                placeholder="What would you like to build?"
              />
              {errors.description && (
                <span className="cd-Error">{errors.description}</span>
              )}
            </div>

            <div className="cd-Actions">
              <Dialog.Close asChild>
                <button
                  className="cd-Button cd-Cancel"
                  type="button"
                  disabled={submitting}
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                className="cd-Button cd-Submit"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send"}
              </button>
            </div>

            {result && (
              <div className={"cd-Result " + (result.ok ? "ok" : "err")}>
                {result.ok
                  ? "Message sent!"
                  : `Failed: ${result.error || "unknown error"}`}
              </div>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
