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
      "Nubbin allows you to explore your own mind in ways that once felt impossible. Step back into your most meaningful memories with a level of clarity and presence that photos and videos could never touch. Whether revisiting the past or stepping into something entirely new, Nubbin makes every experience feel fully alive.",
    img: sensesBackground,
    img_ar: "16 / 9",
  },
  {
    icon: Gamepad2,
    eyebrow: "Game without",
    keyword: "Limits",
    description:
      "Go beyond a screen and into fully immersive worlds that feel indistinguashable from reality. Explore distant galaxies, command ships, fight alongside your crew, and live out adventures that were once only possible in fiction. The only limit is your imagination.",
    img: gameBackground,
    img_ar: "20 / 9",
  },
  {
    icon: Headphones,
    eyebrow: "Hear exceptional",
    keyword: "Sound",
    description:
      "From voices and songs to concerts and movies. Nubbin delivers sound straight to the mind for a richer, clearer, and more accessible experience. No speakers, no headphones, no aids, just seamless connection.",
    img: musicBackground,
    img_ar: "2039 / 1131",
  },
];

export const faqs = [
  {
    q: "How is my data managed?",
    a: "We collect only the data necessary to provide, maintain, and improve Nubbin services. Please see our Terms and Conditions for full details regarding storage, access, and service optimization.",
  },
  {
    q: "How does Nubbin access my thoughts?",
    a: "The Nubbin does not access conscious thoughts without user consent.*"
  },
  {
    q: "Can someone else view my memories?",
    a: "Shared memory viewing is available only through approved permissions, managed access settings, or authorized legacy requests.",
  },
  {
    q: "Can someone hack my Nubbin?",
    a: "All transmissions are end-to-end encrypted. Unauthorized access of your Nubbin is highly unlikely under normal conditions. Users are repsonsible for maintaining basic digital safetey practices.",
  },
  {
    q: "What happens when I am not using the Nubbin?",
    a: "Inactive sessions may retain limited background processes to ensure continuity, personalization, and seamless re-entry.",
  },
  {
    q: "What happens to memories I delete?",
    a: "Deleted memory files are removed from active user view. Data may be temporarily retained for security purposes up to 180 days.",
  },
  {
    q: "Who owns my memories?",
    a: "Users retain ownership of their biological memories. Derived, assisted, or reconstructed memory assets may be processed in accordance with service agreements.*",
  },
  {
    q: "Is it possible to become stuck in an experience?",
    a: "Users with a physical connection to reality can exit any experience at will.",
  },
  {
    q: "Can Nubbin create copies of people?",
    a: "No. We also actively discourage any injection of a digitalized persons. Use of third-party-systems to generate DNA code will terminate your Nubbin contract. Any irregularities in online persons should be reported to the correct forums of each respective experience.",
  },
  {
    q: "What happened to users that went 'offline' permanently while using the Nubbin?",
    a: "Independent investigations concluded incidents were the result of improper use. When used as directed, Nubbin remains safer than driving a car.",
  },
];

export const consumerBenefits = [
  "Installation takes under 12 minutes.",
  "Trusted by millions of users.",
  "Fully reversible.*",
  "Zero visible scarring.",
  "High survival rate.",
  "Essentially unnoticeable.",
];

export const developerLinks = [
  "Request a Nubbin Dev Kit",
  "Download SDK",
  "Access simulation environment",
  "Documentation",
];

export const siteTexts = {
  // Header
  header: {
    logo: "TEMPLE",
    tagline: "The Nubbin",
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
      "See more. Hear more. Feel more. The future of human experience is here.",
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
      "Learn about the installation procedure and request your Nubbin today.",
    buttonText: "Learn more",
  },

  // Developers Section
  developers: {
    eyebrow: "For developers",
    title: "Build the future.",
    description:
      "We provide many resources for creating cutting-edge experiences.",
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
        "Here at Temple, we built Nubbin on a simple idea: technology should not distance us from life, but bring us closer to it. We believe the future of personal technology lies in seamless integration between mind and machine. By combining neural interface research with consumer-first design, Nubbin creates experiences that feel more immediate, more intuitive, and more human than ever before.",
      note: "The Nubbin is a Temple Product.",
    }, 
    links: {
      title: "Links",
      items: ["Documentation", "SDK", "API status", "Privacy"],
    },
    company: {
      title: "Company",
      items: ["About", "Careers", "Contact", "Press"],
    },
    copyright: "© 2026 Carmen Tan. No rights reserved.",
    bottomLinks: {
      terms: "Terms and Conditions",
    },
  },
};
