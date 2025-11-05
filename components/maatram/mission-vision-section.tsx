"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MissionVisionSection() {
  return (
    <section className="bg-muted/30 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Our Mission & Vision
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Building a better tomorrow through compassion, dedication, and
            sustainable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-lg">
                  To empower underprivileged communities by providing access to
                  quality education and healthcare, fostering sustainable
                  development and creating opportunities for a brighter future.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0" />
                    <span>
                      Provide free education to 10,000 children annually
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0" />
                    <span>Conduct monthly health camps in rural areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0" />
                    <span>
                      Train 1,000 youth in vocational skills each year
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  A world where every individual has equal access to education
                  and healthcare, enabling them to reach their full potential
                  and contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Compassion</li>
                  <li>• Integrity</li>
                  <li>• Transparency</li>
                  <li>• Sustainability</li>
                  <li>• Empowerment</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Our Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We believe in sustainable, community-driven solutions that
                  create lasting impact. Our programs are designed to address
                  root causes and empower individuals to become agents of change
                  in their own communities.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-background p-4 text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Transparency
                    </div>
                  </div>
                  <div className="rounded-lg bg-background p-4 text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">
                      24/7
                    </div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div className="rounded-lg bg-background p-4 text-center">
                    <div className="mb-2 text-3xl font-bold text-primary">
                      15+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
