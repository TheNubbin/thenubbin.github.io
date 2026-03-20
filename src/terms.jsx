import React from "react";
import { ShieldCheck, AlertTriangle, Scale, Lock, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { SectionHeader } from "./assets/section_header.jsx";
import { GlowPanel } from "./assets/glow_panel.jsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const termsSections = [
  {
    title: "Eligibility and account use",
    icon: ShieldCheck,
    body: "You must be at least 18 years old to use Nubbin services. You are responsible for maintaining account security and all activity performed through your credentials.",
  },
  {
    title: "Medical and safety disclaimer",
    icon: AlertTriangle,
    body: "Nubbin products are experimental and not a substitute for licensed medical advice. Always consult a qualified professional before making health-related decisions.",
  },
  {
    title: "Liability limitations",
    icon: Scale,
    body: "Liability placeholder",
  },
  {
    title: "Privacy and data handling",
    icon: Lock,
    body: "By using Nubbin services, you consent to collection and processing of operational and telemetry data as described in our Privacy Policy.",
  },
];

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#06070b] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <h2 className="text-lg font-semibold">Legal</h2>
          <Button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 rounded-full bg-white text-black hover:bg-white/90"
          >
            <Home className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <SectionHeader
          eyebrow="Legal"
          title="Terms and Conditions"
          description="Clear legal language with the same visual style used across the landing experience."
        />

        <GlowPanel className="mt-10 border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="max-w-4xl text-sm leading-7 text-white/70 md:text-base">
            These Terms and Conditions ("Terms") govern your access to and use of
            Nubbin products, software, websites, and developer services provided by
            FutureCorp. By accessing or using any Nubbin service, you agree to these
            Terms.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
                Effective date
              </p>
              <p className="mt-2 text-sm text-white/80">March 12, 2026</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-violet-300/80">
                Jurisdiction
              </p>
              <p className="mt-2 text-sm text-white/80">Global, local law applies</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-yellow-200/80">
                Version
              </p>
              <p className="mt-2 text-sm text-white/80">v1.0 (starter draft)</p>
            </div>
          </div>
        </GlowPanel>

        <GlowPanel className="mt-8 border border-white/10 bg-white/5 p-3 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {termsSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <AccordionItem
                  key={section.title}
                  value={`terms-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="!bg-transparent !py-5 text-left text-lg text-white hover:no-underline md:text-xl">
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                        <Icon className="h-4 w-4 text-cyan-300" />
                      </span>
                      {section.title}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="max-w-4xl pb-5 pl-11 text-sm leading-7 text-white/65 md:text-base">
                    {section.body}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </GlowPanel>
      </section>
    </div>
  );
}
