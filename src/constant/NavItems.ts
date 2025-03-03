/** @format */

import {
  Eye,
  Brain,
  Cpu,
  Layers,
  Search,
  Shield,
  Code,
  Zap,
  Package,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Cloud,
  Paintbrush,
  Book,
  ShoppingBag,
  FilePlus,
  BookOpen,
  Users,
  UserCheck,
  Edit,
  GitMerge,
  PenTool,
  AppWindow,
} from "lucide-react";

export const navItems = [
  {
    navTitle: "Products",
    navContents: [
      {
        title: "Dx Services",
        subNav: [
          {
            heading: "Previews",
            subHeading: "Helping teams ship 6x faster",
            icon: Eye,
          },
          {
            heading: "AI",
            subHeading: "Powering breakthroughs",
            icon: Brain,
          },
        ],
      },
      {
        title: "Managed Infrastructure",
        subNav: [
          {
            heading: "Fluid compute",
            subHeading: "Servers, in serverless form",
            icon: Cpu,
          },
          {
            heading: "Rendering",
            subHeading: "Fast, scalable, and reliable",
            icon: Layers,
          },
          {
            heading: "Observability",
            subHeading: "Trace every step",
            icon: Search,
          },
          {
            heading: "Security",
            subHeading: "Scale without compromising",
            icon: Shield,
          },
        ],
      },
      {
        title: "Open Source",
        subNav: [
          {
            heading: "Next.js",
            subHeading: "The native Next.js platform",
            icon: Code,
          },
          {
            heading: "Turborepo",
            subHeading: "Speed with Enterprise scale",
            icon: Zap,
          },
          {
            heading: "ALSDK",
            subHeading: "The Al Toolkit for TypeScript",
            icon: Package,
          },
        ],
      },
    ],
  },
  {
    navTitle: "Solutions",
    navContents: [
      {
        title: "Use Cases",
        subNav: [
          {
            heading: "Al Apps",
            subHeading: "Deploy at the speed of Al",
            icon: Smartphone,
          },
          {
            heading: "Composable Commerce",
            subHeading: "Power storefronts that convert",
            icon: ShoppingCart,
          },
          {
            heading: "Marketing Sites",
            subHeading: "Launch campaigns fast",
            icon: Megaphone,
          },
          {
            heading: "Multi-tenant Platforms",
            subHeading: "Scale apps with one codebase",
            icon: Cloud,
          },
          {
            heading: "Web Apps",
            subHeading: "Ship features, not infrastructure",
            icon: AppWindow,
          },
        ],
      },
      {
        title: "Users",
        subNav: [
          {
            heading: "Platform Engineers",
            subHeading: "Automate away repetition",
            icon: PenTool,
          },
          {
            heading: "Design Engineers",
            subHeading: "Deploy for every idea",
            icon: Paintbrush,
          },
        ],
      },
    ],
  },
  {
    navTitle: "Resources",
    navContents: [
      {
        title: "Tools",
        subNav: [
          {
            heading: "Resource Center",
            subHeading: "Today's best practices",
            icon: Book,
          },
          {
            heading: "Marketplace",
            subHeading: "Extend and automate workflows",
            icon: ShoppingBag,
          },
          {
            heading: "Templates",
            subHeading: "Jumpstart app development",
            icon: FilePlus,
          },
          {
            heading: "Guides",
            subHeading: "Find help quickly",
            icon: BookOpen,
          },
          {
            heading: "Partner Finder",
            subHeading: "Get help from solution partners",
            icon: Users,
          },
        ],
      },
      {
        title: "Company",
        subNav: [
          {
            heading: "Customers",
            subHeading: "Trusted by the best teams",
            icon: UserCheck,
          },
          {
            heading: "Blog",
            subHeading: "The latest posts and changes",
            icon: Edit,
          },
          {
            heading: "Changelog",
            subHeading: "See what shipped",
            icon: GitMerge,
          },
          {
            heading: "Press",
            subHeading: "Read the latest news",
            icon: Megaphone,
          },
        ],
      },
    ],
  },
  "Enterprise",
  "Docs",
  "Pricing",
];
