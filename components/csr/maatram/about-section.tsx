"use client";

import { BookOpen, Heart, Users, Target } from "lucide-react";

export function MaatramAboutSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-16 px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="relative md:flex-1">
              <img
                className="max-w-md w-full object-cover rounded-2xl shadow-2xl shadow-primary/20"
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                alt="MaatRaM Trust Community"
              />
              <div className="flex items-center gap-2 max-w-72 absolute bottom-8 left-8 bg-background p-4 rounded-xl shadow-lg">
                <div className="flex -space-x-4 shrink-0">
                  <div className="size-9 rounded-full border-[3px] border-background bg-primary/20 flex items-center justify-center">
                    <Heart className="size-4 text-primary" />
                  </div>
                  <div className="size-9 rounded-full border-[3px] border-background bg-secondary/20 flex items-center justify-center">
                    <Users className="size-4 text-secondary" />
                  </div>
                  <div className="flex items-center justify-center text-xs text-primary-foreground size-9 rounded-full border-[3px] border-background bg-primary">
                    50+
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground">
                  Communities Impacted
                </p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground max-w-lg md:flex-1">
              <h2 className="text-3xl uppercase font-semibold text-foreground mb-2">
                About MaatRaM Trust
              </h2>
              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-primary to-primary/30 mb-6"></div>
              <p className="mt-4">
                MaatRaM Trust is a dedicated educational and medical trust
                committed to uplifting communities through accessible education
                and quality healthcare.
              </p>
              <p className="mt-4">
                We believe in creating lasting change through sustainable
                initiatives that empower individuals and strengthen families
                across Madurai and beyond.
              </p>
              <p className="mt-4">
                From educational scholarships to free medical camps, our
                comprehensive programs are designed to address the most pressing
                needs of underserved communities.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-primary/10"></div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="size-12 p-2 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="size-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Educational Excellence
              </h3>
              <p className="text-sm text-muted-foreground">
                Providing quality education and learning resources to
                underprivileged students.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="size-12 p-2 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="size-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Healthcare Access
              </h3>
              <p className="text-sm text-muted-foreground">
                Ensuring accessible and affordable healthcare services for all
                community members.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="size-12 p-2 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="size-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Community Development
              </h3>
              <p className="text-sm text-muted-foreground">
                Building stronger communities through collaborative programs and
                support.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="size-12 p-2 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4">
                <Target className="size-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                Sustainable Impact
              </h3>
              <p className="text-sm text-muted-foreground">
                Creating long-term solutions that empower individuals and
                families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
