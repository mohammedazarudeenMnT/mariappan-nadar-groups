"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CTASection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-gradient-to-b from-primary to-primary/80 p-10 text-center text-primary-foreground md:p-16">
          <div className="mx-auto mb-6 flex w-fit flex-wrap items-center justify-center rounded-full border border-white/20 bg-white/10 p-1 text-sm backdrop-blur">
            <div className="flex items-center px-4 py-2">
              <Avatar className="h-7 w-7 border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-3 h-7 w-7 border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <Avatar className="-ml-3 h-7 w-7 border-2 border-white">
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <p className="ml-3 font-medium">Join 10,000+ supporters</p>
            </div>
          </div>

          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Be Part of the Change
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-foreground/90">
            Your support can transform lives. Join us in our mission to provide
            education and healthcare to those who need it most.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Donate Now
                <Heart className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                Become a Volunteer
              </Button>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
              <div className="flex flex-col justify-center gap-6 text-sm md:flex-row">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@maatram.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 452 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Madurai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
