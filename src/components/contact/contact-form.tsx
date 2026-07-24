"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type ContactFormProps = {
  labels: {
    name: string;
    email: string;
    subject: string;
    message: string;
    submit: string;
    success: string;
  };
};

export function ContactForm({ labels }: ContactFormProps) {
  const [hint, setHint] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
    const mailto = `mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setHint(labels.success);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">{labels.name}</Label>
        <Input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{labels.email}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject">{labels.subject}</Label>
        <Input id="subject" name="subject" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{labels.message}</Label>
        <Textarea id="message" name="message" required />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        {labels.submit}
      </Button>
      {hint ? (
        <p className="text-sm text-muted-foreground" role="status">
          {hint}
        </p>
      ) : null}
    </form>
  );
}
