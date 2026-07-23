"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const projectOptions = [
  "General enquiry",
  "Rudra Valley",
  "Investor enquiry",
];

// Submits directly to the Saiccha Developers Google Form (entry IDs read from
// that form's own field markup) so responses land in its linked Sheet.
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSc07UjARGUkUiVLXgjmTaCOxJ6-945wz4ToOGLK7N1WnyZZYQ/formResponse";
const ENTRY = {
  name: "entry.183451796",
  phone: "entry.250155298",
  project: "entry.992069922",
  message: "entry.47479220",
};

const inputClasses =
  "h-11 w-full rounded-input border border-border-strong bg-surface-raised px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary";

export function QuickEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = new FormData(e.currentTarget);
    const data = new FormData();
    data.append(ENTRY.name, String(form.get("name") ?? ""));
    data.append(ENTRY.phone, String(form.get("phone") ?? ""));
    data.append(ENTRY.project, String(form.get("project") ?? ""));
    data.append(ENTRY.message, String(form.get("message") ?? ""));

    try {
      // Google's formResponse endpoint doesn't send CORS headers, so the
      // response is opaque; no-cors is the standard way to post to it
      // from a browser without the request being blocked outright.
      await fetch(GOOGLE_FORM_ACTION, { method: "POST", mode: "no-cors", body: data });
    } catch (err) {
      console.error("Enquiry form submission failed", err);
    }
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col gap-2 rounded-card border border-border bg-surface p-8">
        <h3 className="font-display text-xl tracking-tight">Thank you</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We&rsquo;ve received your enquiry and will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone number
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="project" className="text-sm font-medium text-foreground">
          I&rsquo;m interested in
        </label>
        <select id="project" name="project" className={inputClasses} defaultValue={projectOptions[0]}>
          {projectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full resize-none rounded-input border border-border-strong bg-surface-raised px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary"
        />
      </div>

      <Button type="submit" size="lg" disabled={status === "submitting"} className="mt-2">
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
