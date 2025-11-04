"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function MaatramCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          {/* Left content */}
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Get Involved
              </div>
              <h2 className="mb-4 text-4xl lg:text-5xl font-semibold">
                Join Us in Making a Difference
              </h2>
              <p className="text-muted-foreground">
                Your support can transform lives. Whether through donations,
                volunteering, or partnerships, every contribution helps us
                expand our reach and impact more communities.
              </p>
            </div>

            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">Phone:</span> +91 (123) 456-7890
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium">Email:</span>
                  <a href="mailto:info@maatramtrust.org" className="underline">
                    info@maatramtrust.org
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium">Location:</span> Madurai, Tamil
                  Nadu
                </li>
              </ul>
            </div>
          </div>

          {/* Right content - Contact Form */}
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border border-border bg-card p-8 shadow-lg">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input type="tel" id="phone" placeholder="+91 1234567890" />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Tell us how you'd like to get involved..."
                id="message"
                rows={4}
              />
            </div>

            <Button className="w-full" size="lg">
              Send Message
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Part of Mariappa Nadar Group's CSR Initiatives
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
