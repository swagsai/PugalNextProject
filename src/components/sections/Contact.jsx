"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/data/site";
import { validateContactForm } from "@/lib/validators";

const initialValues = { name: "", email: "", message: "" };

const fieldStyles =
  "mt-2 block w-full rounded-2xl border bg-white px-4 py-3 text-base text-stone-900 placeholder:text-stone-400 transition focus:outline-2 focus:outline-offset-0 focus:outline-fuchsia-500 dark:bg-white/5 dark:text-white dark:placeholder:text-stone-500";

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  // status: "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear the error for a field as soon as the user starts fixing it
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        if (data?.errors) setErrors(data.errors);
        throw new Error("Request failed");
      }

      setValues(initialValues);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <SectionHeading
            id="contact-heading"
            eyebrow="Get in touch"
            title="Let's build something great together."
            description="Tell us about your project and we'll get back to you within one business day."
          />
          <p className="mt-8 text-sm text-stone-500 dark:text-stone-400">
            Prefer email?{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-stone-900 underline underline-offset-4 dark:text-white"
            >
              {siteConfig.email}
            </a>
          </p>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="rounded-3xl border border-stone-200 bg-stone-100/70 p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]">
            {status === "success" ? (
              <div role="status" className="flex flex-col items-start gap-4 py-8">
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <CheckIcon className="size-6" />
                </span>
                <h3 className="text-2xl font-semibold tracking-tight">Message sent. Thank you!</h3>
                <p className="text-stone-600 dark:text-stone-400">
                  We&apos;ve received your note and will reply by email shortly.
                </p>
                <Button variant="secondary" onClick={() => setStatus("idle")} className="cursor-pointer">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`${fieldStyles} ${errors.name ? "border-red-500" : "border-stone-300 dark:border-white/15"}`}
                  />
                  {errors.name && <FieldError id="name-error" message={errors.name} />}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${fieldStyles} ${errors.email ? "border-red-500" : "border-stone-300 dark:border-white/15"}`}
                  />
                  {errors.email && <FieldError id="email-error" message={errors.email} />}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline and goals..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${fieldStyles} resize-y ${errors.message ? "border-red-500" : "border-stone-300 dark:border-white/15"}`}
                  />
                  {errors.message && <FieldError id="message-error" message={errors.message} />}
                </div>

                {status === "error" && (
                  <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                    Something went wrong. Please check the fields and try again.
                  </p>
                )}

                <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto cursor-pointer">
                  {status === "submitting" ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function FieldError({ id, message }) {
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
      {message}
    </p>
  );
}
