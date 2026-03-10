import React from "react";
// import { motion } from "framer-motion";
import { Cpu, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// import "./nubbin-site-styles.css";
import "./App.css";
import { SectionHeader } from "./assets/section_header.jsx";
import { GlowPanel } from "./assets/glow_panel.jsx";
import { partners, features, faqs, consumerBenefits, developerLinks, finePrint } from "./assets/site_content.js";

export default function App() {
  return (
    <div className="nubbin-page min-h-screen text-white">
      <header className="nubbin-header">
        <div className="nubbin-header-container">
          <div className="nubbin-logo-container">
            <div className="nubbin-logo-icon">
              <Cpu className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="nubbin-logo-text">
              <p>NUBBIN</p>
              <p>Neural Experience Platform</p>
            </div>
          </div>

          <nav className="nubbin-nav">
            <a href="#overview" className="transition hover:text-white">Overview</a>
            <a href="#product" className="transition hover:text-white">Product</a>
            <a href="#consumers" className="transition hover:text-white">Consumers</a>
            <a href="#developers" className="transition hover:text-white">Developers</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>

          <Button className="rounded-full bg-white text-black hover:bg-white/90">Request Access</Button>
        </div>
      </header>

      <main>
        <section id="overview" className="nubbin-overview-section">
          <div className="nubbin-overview-content">
            <div className="nubbin-overview-text-block">
              <Badge className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-cyan-200 hover:bg-cyan-300/10">
                Step into the future
              </Badge>
              <h1 className="nubbin-headline">
                Neural immersion,
                <span className="nubbin-headline-gradient">
                  productized.
                </span>
              </h1>
              <p className="nubbin-description">
                A dark, polished landing page framework for a fictional brain-chip company. Sleek on the surface, unsettling underneath.
              </p>
            </div>

            <div className="nubbin-button-group">
              <Button size="lg" className="rounded-full bg-white px-6 text-black hover:bg-white/90">
                Upgrade Yourself
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 px-6 text-white hover:bg-white/10">
                View Dev Kit
              </Button>
            </div>

            <div className="nubbin-partners-section">
              <p className="nubbin-partners-label">Trusted by experimental partners</p>
              <div className="nubbin-partners-list">
                {partners.map((partner) => (
                  <div key={partner} className="nubbin-pill px-4 py-2 text-sm text-white/70">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <GlowPanel className="min-h-[520px] p-6 md:p-8">
            <div className="grid h-full gap-6 md:grid-rows-[auto_1fr_auto]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/50">Flagship Device</p>
                  <h3 className="text-2xl font-medium">Nubbin X</h3>
                </div>
                <Badge className="rounded-full border border-violet-300/30 bg-violet-300/10 text-violet-200 hover:bg-violet-300/10">
                  Gen 4 Neural Shell
                </Badge>
              </div>

              <div className="nubbin-hero-container">
                <motion.div
                  animate={{ rotate: [0, 8, 0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                  className="nubbin-hero-chip"
                >
                  <div className="nubbin-hero-chip-outer" />
                  <div className="nubbin-hero-chip-middle" />
                  <div className="nubbin-hero-chip-inner" />
                  <div className="absolute -right-8 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
                  <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-violet-400/10 blur-3xl" />
                </motion.div>

                <div className="nubbin-placeholder-label">
                  <div className="nubbin-placeholder-label-content">
                    <span className="nubbin-placeholder-text">Interactive 3D model placeholder</span>
                    <span className="nubbin-placeholder-hint">Scroll to orbit</span>
                  </div>
                </div>
              </div>

              <div className="nubbin-chip-stats">
                {[
                  ["Install time", "< 12 min"],
                  ["Reversibility", "Partial*"],
                  ["Visible scarring", "Minimal"],
                ].map(([label, value]) => (
                  <div key={label} className="nubbin-stat-card">
                    <p className="nubbin-stat-label">{label}</p>
                    <p className="nubbin-stat-value">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlowPanel>
        </section>

        <section id="product" className="nubbin-product-section">
          <SectionHeader
            eyebrow="Product narrative"
            title="A modular section system for cinematic propaganda."
            description="Three campaign blocks built around gaming, memory, and sound. Swap in stills, clips, or interactive media later."
          />

          <div className="nubbin-features-grid">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card className="nubbin-feature-card">
                    <CardContent className="nubbin-feature-content">
                      <div className="nubbin-feature-icon">
                        <Icon className="h-5 w-5 text-cyan-300" />
                      </div>
                      <p className="nubbin-feature-eyebrow">{feature.eyebrow}</p>
                      <h3 className="nubbin-feature-title">{feature.title}</h3>
                      <p className="nubbin-feature-description">{feature.description}</p>

                      <div className="nubbin-feature-media-container">
                        <div className="nubbin-media-placeholder flex h-64 items-end rounded-[1.2rem] border border-white/10 p-5">
                          <div>
                            <p className="text-xs uppercase tracking-[0.24em] text-white/40">Media placeholder</p>
                            <p className="mt-2 max-w-[14rem] text-lg text-white/90">Swap in stills or looping footage for this campaign section.</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="consumers" className="nubbin-consumers-section">
          <div className="nubbin-consumers-grid">
            <GlowPanel className="p-8 md:p-10">
              <SectionHeader
                eyebrow="For consumers"
                title="Upgrade yourself."
                description="A benefit-heavy section that sounds reassuring while quietly implying risk."
              />

              <div className="nubbin-benefits-grid">
                {consumerBenefits.map((item) => (
                  <div key={item} className="nubbin-benefit-item">
                    {item}
                  </div>
                ))}
              </div>
            </GlowPanel>

            <section id="developers">
              <GlowPanel className="p-8 md:p-10">
                <SectionHeader
                  eyebrow="For developers"
                  title="Build the future."
                  description="A companion block for SDK access, dev kits, and cheerful legal language."
                />

                <div className="nubbin-developer-links">
                  {developerLinks.map((item) => (
                    <div key={item} className="nubbin-developer-link-item">
                      <span>{item}</span>
                      <ChevronRight className="h-4 w-4 text-white/45" />
                    </div>
                  ))}
                </div>

                <div className="nubbin-warning mt-6 rounded-2xl p-4 text-sm leading-7">
                  *Developer assumes all legal responsibilities.
                </div>
              </GlowPanel>
            </section>
          </div>
        </section>

        <section id="faq" className="nubbin-faq-section">
          <SectionHeader
            eyebrow="FAQ"
            title="Polished answers. Carefully limited reassurance."
            description="Corporate certainty on the surface, small cracks underneath."
          />

          <div className="nubbin-faq-accordion">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem key={item.q} value={`item-${index}`} className="nubbin-accordion-item">
                  <AccordionTrigger className="nubbin-accordion-trigger">{item.q}</AccordionTrigger>
                  <AccordionContent className="nubbin-accordion-content">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="nubbin-faq-footer">
            *Use of the Nubbin means you automatically agree to our terms and conditions.
          </p>
        </section>

        <section className="nubbin-terms-section">
          <GlowPanel className="p-8 md:p-10">
            <div className="nubbin-terms-container">
              <div>
                <p className="nubbin-terms-heading">Terms and conditions</p>
                <h2 className="nubbin-terms-title">Liability, consent, and the fine print.</h2>
                <p className="nubbin-terms-description">
                  This is where the page can tilt from aspirational branding into quietly horrifying disclosures.
                </p>
              </div>

              <div className="nubbin-fine-print-grid">
                {finePrint.map((line) => (
                  <div key={line} className="nubbin-danger-card nubbin-fine-print-item">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </GlowPanel>
        </section>
      </main>
    </div>
  );
}
