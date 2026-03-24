import { Gamepad2, Brain, Headphones } from "lucide-react";

import logoCallister from '@/assets/logo_callister.png'
import logoEulogy from '@/assets/logo_eulogy.png'
import logoMeta from '@/assets/logo_meta.png'
import logoGoogle from '@/assets/logo_google.png'
import logoOpenAI from '@/assets/logo_openai.png'
import logoMicrosoft from '@/assets/logo_microsoft.png'
import logoApple from '@/assets/logo_apple.png'
import logoQualcomm from '@/assets/logo_qualcomm.png'
import logoBlackMirror from '@/assets/logo_black_mirror.png'
import logoNetflix from '@/assets/logo_netflix.png'

import sensesBackground from '@/assets/bg_senses.jpg';
import gameBackground from '@/assets/bg_game.jpg';
import musicBackground from '@/assets/bg_music.png';

export const partners = [
  { name: "Callister Inc.", logo: logoCallister },
  { name: "Eulogy", logo: logoEulogy },
  { name: "Meta", logo: logoMeta },
  { name: "Google", logo: logoGoogle },
  { name: "OpenAI", logo: logoOpenAI },
  { name: "Microsoft", logo: logoMicrosoft },
  { name: "Apple", logo: logoApple },
  { name: "Qualcomm", logo: logoQualcomm },
  { name: "Black Mirror", logo: logoBlackMirror },
  { name: "Netflix", logo: logoNetflix },
];

export const features = [
  {
    icon: Brain,
    eyebrow: "Unleash your",
    keyword: "Senses",
    description:
      "A showcase area for emotional recall, sensory playback, and tightly controlled corporate messaging.",
    img: sensesBackground,
    img_ar: "16 / 9",
  },
  {
    icon: Gamepad2,
    eyebrow: "Game without",
    keyword: "Limits",
    description:
      "A cinematic product section for immersive gameplay, responsive motion, and full sensory interaction.",
    img: gameBackground,
    img_ar: "20 / 9",
  },
  {
    icon: Headphones,
    eyebrow: "Hear exceptional",
    keyword: "Sound",
    description:
      "A media block for premium audio storytelling, performance scenes, and luxury-brand positioning.",
    img: musicBackground,
    img_ar: "2039 / 1131",
  },
];

export const faqs = [
  {
    q: "How is my data managed?",
    a: "Please see our terms and conditions for full details on storage, access, and service optimization.",
  },
  {
    q: "Can it access thoughts?",
    a: "The Nubbin does not access thoughts without user consent.*",
  },
  {
    q: "Can someone hack my Nubbin?",
    a: "All transmissions are end-to-end encrypted. Hacking of your Nubbin is unlikely.",
  },
  {
    q: "Is it possible to become stuck in an experience?",
    a: "Users with a physical connection to reality can exit any experience at will.",
  },
  {
    q: "Who owns my memories?",
    a: "Users retain ownership of their biological memories. User data may be used to improve services.*",
  },
  {
    q: "Can I die using Nubbin?",
    a: "Independent investigations concluded incidents were the result of improper use. When used as directed, Nubbin is safer than driving a car.",
  },
];

export const consumerBenefits = [
  "Installation takes under 12 minutes.",
  "High survival rate.",
  "Fully reversible.*",
  "Zero visible scarring.",
  "You won’t even notice it’s there.",
  "Results may vary.",
];

export const developerLinks = [
  "Request a Nubbin Dev Kit",
  "Download SDK",
  "Access simulation environment",
  "Review neural integration docs",
];

export const siteTexts = {
  // Header
  header: {
    logo: "NUBBIN",
    tagline: "Neural Experience Platform",
    nav: {
      overview: "Overview",
      product: "Product",
      consumers: "Try Now",
      faq: "FAQ",
      terms: "Terms and Conditions"
    },
    requestAccess: "Request Access",
  },

  // Hero Section
  hero: {
    title: "Step into the future with",
    titleHighlight: "Nubbin",
    description:
      "A dark, polished landing page framework for a fictional brain-chip company. Sleek on the surface, unsettling underneath.",
  },

  // Partners Carousel
  partners: {
    label: "Used by many companies you know and love",
  },

  // Product Section
  product: {
    eyebrow: "Product narrative",
    title: "A modular section system for cinematic propaganda.",
    description:
      "Three campaign blocks built around gaming, memory, and sound. Swap in stills, clips, or interactive media later.",
  },

  // Consumers Section
  consumers: {
    eyebrow: "For consumers",
    title: "Upgrade yourself.",
    description:
      "A benefit-heavy section that sounds reassuring while quietly implying risk.",
    buttonText: "Learn more",
  },

  // Developers Section
  developers: {
    eyebrow: "For developers",
    title: "Build the future.",
    description:
      "A companion block for SDK access, dev kits, and cheerful legal language.",
    disclaimer: "*Developer assumes all legal responsibilities.",
  },

  // FAQ Section
  faq: {
    eyebrow: "FAQ",
    title: "Still unsure? We've got all the answers right here.",
    disclaimer:
      "*Use of the Nubbin means you automatically agree to our terms and conditions.",
  },

  // Newsletter Section
  newsletter: {
    eyebrow: "Newsletter",
    title: "Stay updated",
    description: "Get important news and updates about Nubbin.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },

  // Footer
  footer: {
    about: {
      title: "About us",
      description:
        "We build experimental tools, developer kits, and consumer upgrades designed to make the future slightly more predictable and slightly more confusing.",
      note: "Founded somewhere between optimism and legal review.",
    },
    links: {
      title: "Links",
      items: ["Documentation", "Developers", "API status", "Privacy"],
    },
    company: {
      title: "Company",
      items: ["About", "Careers", "Contact", "Press"],
    },
    copyright: "© 2026 Carmen Tan. All rights reserved.",
    bottomLinks: {
      terms: "Terms and Conditions",
    },
  },
};
