import React from "react";

import { Cpu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import "./App.css";
import { SectionHeader } from "@/components/section_header.jsx";
import { GlowPanel } from "@/components/glow_panel.jsx";
import { Carousel } from "@/components/carousel.jsx";
import { Info } from "@/components/info_card.jsx";
import {
  partners,
  features,
  faqs,
  consumerBenefits,
  developerLinks,
  siteTexts,
} from "@/assets/site_content.js";

import { useNavigate } from "react-router-dom";

import NubbinCanvas from "@/components/NubbinCanvas";

export default function App() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#06070b] text-white"
      style={{
        backgroundImage: `radial-gradient(circle at top, rgba(37, 99, 235, 0.18), transparent 30%),
        radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.12), transparent 25%)`,
      }}
    >
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06070b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
              <Cpu className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-white/90">
                {siteTexts.header.logo}
              </p>
              <p className="text-xs text-white/45">
                {siteTexts.header.tagline}
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a
              href="#overview"
              className="transition hover:text-white"
            >
              {siteTexts.header.nav.overview}
            </a>
            <a
              href="#product"
              className="transition hover:text-white"
            >
              {siteTexts.header.nav.product}
            </a>
            <a
              href="#consumers"
              className="transition hover:text-white"
            >
              {siteTexts.header.nav.consumers}
            </a>
            <a href="#faq" className="transition hover:text-white">
              {siteTexts.header.nav.faq}
            </a>
          </nav>

          <Button onClick={() => navigate("/legal")} className="rounded-full bg-white text-black hover:bg-white/90">
            {siteTexts.header.nav.terms}
          </Button>

        </div>
      </header>
      
      <main>
      <NubbinCanvas />
        <section
          id="overview"
          data-nubbin-x="0.35"
          data-nubbin-y="0.55"
          data-nubbin-scale="1"
          className=" mx-auto grid max-w-7xl min-h-[80vh] gap-10 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28 lg:pt-24"
        >
         
          <div className="max-w-[50vw] flex flex-col justify-center gap-8">
            <div className="flex flex-col space-y-5">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white text-wrap md:text-7xl">
                {siteTexts.hero.title}
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {siteTexts.hero.titleHighlight}
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                {siteTexts.hero.description}
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-1 pt-1"
            data-nubbin-x="0.033"
            data-nubbin-y="-0.15"
            data-nubbin-scale=".25"
        >
          <p className="text-center uppercase text-sm tracking-[0.28em] text-gray-500/40">
            {siteTexts.partners.label}
          </p>
          <Carousel logos={partners}></Carousel>
        </div>

        <section id="product" className="w-full py-4 flex flex-col my-5">
          {/* <SectionHeader
            className="m-auto max-w-7xl px-4"
            eyebrow={siteTexts.product.eyebrow}
            title={siteTexts.product.title}
            description={siteTexts.product.description}
          /> */}
          
          {features.map((f, i) => {
            const getNubbinValues = (index) => {
              switch(index) {
                case 0:
                  return { x: "0.033", y: "1.05", scale: ".1" };
                case 1:
                  return { x: "-0.7", y: "0.4", scale: "0.9" };
                case 2:
                  return { x: "0.6", y: "0.65", scale: "1.1" };
                default:
                  return { x: "0", y: "0.5", scale: "1" };
              }
            };
          
            const nubbin = getNubbinValues(i);
            return (
              <Info 
                feature={f} 
                rightAligned={i % 2} 
                key={i}
                x={nubbin.x}
                y={nubbin.y}
                scale={nubbin.scale}
                pin={i === 0}
                pinU="0.5166"
                pinV="-0.05"
              />
            );
          })}
        </section>
        <section
          id="consumers"
          className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16"
        >
          <div className="grid gap-6 lg:grid-cols-2 ">
            <GlowPanel
              id="consumers"
              className="w-full h-full px-6 py-4 lg:px-10 lg:py-8 z-20"
            >
              <Card className="flex h-full w-full flex-col border-0 bg-transparent shadow-none">
                <CardHeader className="p-0">
                  <SectionHeader
                    eyebrow={siteTexts.consumers.eyebrow}
                    title={siteTexts.consumers.title}
                    description={siteTexts.consumers.description}
                  />
                </CardHeader>

                <CardContent className="mt-8 flex-1 p-0 bg-transparent">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {consumerBenefits.map((item) => (
                      <div
                        key={item}
                        className="flex items-center rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/75"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-0 pt-6 bg-transparent">
                  <Button
                    className="
                      w-full
                      rounded-2xl
                      !border 
                      !border-yellow-600/20
                      !bg-yellow-500/10
                      text-yellow-100/90
                      !hover:!bg-red-500/20
                      !p-4
                      text-sm
                      !leading-7
                      !h-auto
                      flex items-center justify-between
                    "
                  >
                    {siteTexts.consumers.buttonText}
                    <ChevronRight className="h-4 w-4 text-white/45" />
                  </Button>
                </CardFooter>
              </Card>
            </GlowPanel>

            <GlowPanel
              id="developers"
              className="w-full h-full px-6 py-4 lg:px-10 lg:py-8 z-20"
            >
              <Card className="flex h-full w-full flex-col border-0 bg-transparent shadow-none">
                <CardHeader className="p-0">
                  <SectionHeader
                    eyebrow={siteTexts.developers.eyebrow}
                    title={siteTexts.developers.title}
                    description={siteTexts.developers.description}
                  />
                </CardHeader>

                <CardContent className="mt-8 flex-1 p-0 bg-transparent ">
                  <div className="space-y-4">
                    {developerLinks.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-white/80"
                      >
                        <span>{item}</span>
                        <ChevronRight className="h-4 w-4 text-white/45" />
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-0 pt-6 bg-transparent">
                  <div className="w-full rounded-2xl border border-yellow-600/20 bg-yellow-500/10 p-4 text-sm leading-7 text-yellow-100/90">
                    {siteTexts.developers.disclaimer}
                  </div>
                </CardFooter>
              </Card>
            </GlowPanel>
          </div>
        </section>

        

        <section
          id="faq"
          className="mx-auto max-w-7xl px-6 pt-12 lg:px-10 lg:pt-16 z-20"
        >
          <SectionHeader
            eyebrow={siteTexts.faq.eyebrow}
            title={siteTexts.faq.title}
          />

          <GlowPanel className="mt-10 rounded-[1rem] border border-white/10 bg-white/5 p-3 md:p-4 z-20">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${index}`}
                  className=""
                >
                  <AccordionTrigger className="!bg-transparent !text-3xl text-base text-white hover:no-underline bg-transparent z-20">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pl-15 pb-5 max-w-4xl text-xl leading-7 text-white/65 z-20">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            </GlowPanel>

          <p className="mt-4 text-sm text-white/40">
            {siteTexts.faq.disclaimer}
          </p>
        </section>


        <section id="newsletter" className="mx-auto max-w-4xl px-6 py-16 lg:px-10 z-50 relative">
          <div className="w-full px-6 py-10 lg:px-12 lg:py-14">
              <SectionHeader
                  eyebrow={siteTexts.newsletter.eyebrow}
                  title={siteTexts.newsletter.title}
                  description={siteTexts.newsletter.description}
                />
            <div className="w-auto flex flex-col gap-4 sm:flex-row">
                  <Input
                    placeholder={siteTexts.newsletter.placeholder}
                    className="
                      h-12
                      rounded-2xl
                      border-white/10
                      bg-black/20
                      text-white
                      placeholder:text-white/40
                      focus-visible:ring-0
                      focus-visible:ring-offset-0
                    "
                  />

                  <Button
                    className="
                      h-12
                      rounded-2xl
                      border border-yellow-600/20
                      bg-yellow-500/10
                      px-6
                      text-yellow-100/90
                      hover:bg-yellow-500/20
                    "
                  >
                    {siteTexts.newsletter.buttonText}
                  </Button>
                </div>
          </div>
        </section>
      </main>


      <footer className="mx-auto w-full border-t border-white/10 bg-[#06070b]/80 z-50 relative">
        <div className="w-full px-5 py-10 lg:px-40 lg:py-10 grid gap-20 lg:grid-cols-4">

                {/* ABOUT */}
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-white">
                    {siteTexts.footer.about.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/60">
                    {siteTexts.footer.about.description}
                  </p>

                  <p className="mt-4 text-xs text-white/40">
                    {siteTexts.footer.about.note}
                  </p>
                </div>


                {/* LINKS */}
                <div className="">
                  <h3 className="text-sm font-semibold text-white">
                    {siteTexts.footer.links.title}
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    {siteTexts.footer.links.items.map((item) => (
                      <li key={item} className="hover:text-white cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>


                {/* COMPANY */}
                <div className="">
                  <h3 className="text-sm font-semibold text-white">
                    {siteTexts.footer.company.title}
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm text-white/70">
                    {siteTexts.footer.company.items.map((item) => (
                      <li key={item} className="hover:text-white cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
        

        <div className="mx-4 border-t border-white/10 p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/40">
                  {siteTexts.footer.copyright}
                </p>

                <div className="flex gap-6 text-xs text-white/50">
                  <span className="hover:text-white cursor-pointer">
                    <a href="/legal">{siteTexts.footer.bottomLinks.terms}</a>
                  </span>
                  <span className="hover:text-white cursor-pointer">
                    {siteTexts.footer.bottomLinks.privacy}
                  </span>
                  <span className="hover:text-white cursor-pointer">
                    {siteTexts.footer.bottomLinks.cookies}
                  </span>
                </div>

              </div>
      </footer>
    </div>
  );
}
