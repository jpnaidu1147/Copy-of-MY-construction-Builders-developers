
import { ShieldCheck, Zap, Award, Clock } from 'lucide-react';
import { ServiceItem, ProjectItem, TestimonialItem, PackageItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'civil-structure',
    title: 'Civil Structure',
    description: 'Expertise in Reinforced RCC frames, heavy foundations, and high-rise structural integrity.',
    icon: 'HardHat'
  },
  {
    id: 'civil-interiors',
    title: 'Civil Interiors',
    description: 'Premium finishing works, aesthetic spatial planning, and high-end fit-outs for corporate and residential spaces.',
    icon: 'Building2'
  },
  {
    id: 'construction-mgmt',
    title: 'Construction Management',
    description: 'Seamless project execution with dedicated site supervision, quality assurance, and timeline tracking.',
    icon: 'Ruler'
  },
  {
    id: 'turnkey-projects',
    title: 'Turnkey Projects',
    description: 'Complete "From Concept to Keys" solutions including design, procurement, and construction.',
    icon: 'Key'
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'basic',
    name: 'BASIC PACKAGE',
    price: '₹1800 / sq.ft',
    description: 'Best for budget-conscious home construction',
    accent: 'bg-zinc-500',
    inclusions: [
      'Design & planning assistance',
      'Standard foundation & RCC structure',
      'Burnt clay bricks for masonry',
      'Basic cement plastering (internal & external)',
      'Standard electrical wiring & switches',
      'Basic plumbing with standard CP fittings',
      'Vitrified tile flooring (standard size)',
      'Flush doors with basic fittings',
      'UPVC windows with clear glass',
      'Interior & exterior emulsion paint (basic grade)'
    ],
    idealFor: 'First-time home builders and rental properties.'
  },
  {
    id: 'standard',
    name: 'STANDARD PACKAGE',
    price: '₹2000 / sq.ft',
    description: 'Balanced quality and durability',
    accent: 'bg-construction-blueprint',
    inclusions: [
      'Architectural drawings & structural design',
      'RCC framed structure with higher-grade concrete',
      'Solid concrete blocks / premium bricks',
      'Superior plastering finish',
      'Modular electrical fittings (ISI certified)',
      'Branded plumbing pipes & fittings',
      'Vitrified flooring in living and bedrooms',
      'Anti-skid tiles for bathrooms & balconies',
      'Main door with teak veneer finish',
      'UPVC or aluminium windows',
      'Premium interior & exterior paint'
    ],
    idealFor: 'Family homes with long-term durability.'
  },
  {
    id: 'premium',
    name: 'PREMIUM PACKAGE',
    price: '₹2200 / sq.ft',
    description: 'High-quality materials with elegant finishes',
    accent: 'bg-construction-safety',
    inclusions: [
      'Complete architectural & 3D elevation design',
      'High-grade RCC & steel',
      'Premium block work',
      'Designer vitrified tiles / wooden finish flooring',
      'Premium sanitaryware & CP fittings',
      'Concealed electrical wiring with modular switches',
      'Teak wood main door',
      'UPVC windows with mesh & toughened glass',
      'False ceiling in living & bedrooms',
      'Texture paint / weatherproof exterior finish'
    ],
    idealFor: 'Premium independent homes & villas.'
  },
  {
    id: 'ultra-luxury',
    name: 'ULTRA LUXURY PACKAGE',
    price: '₹2400 / sq.ft',
    description: 'Luxury living with superior craftsmanship',
    accent: 'bg-construction-deep',
    inclusions: [
      'Customized architectural & luxury interior design',
      'High-strength RCC & branded steel',
      'Imported / large-format flooring options',
      'Designer sanitaryware & premium CP fittings',
      'Smart electrical provisions',
      'Full false ceiling with LED lighting',
      'Teak wood doors & premium hardware',
      'High-end UPVC / aluminium windows',
      'Exterior elevation with stone, wood, or ACP cladding',
      'Weatherproof, long-life exterior coatings'
    ],
    idealFor: 'Luxury villas and high-end residences.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Medreich Office, Bangalore',
    category: 'Commercial',
    status: 'Completed',
    image: 'https://lh3.googleusercontent.com/d/1QeYR74p62caULmkBqI6sg0u1ITjT-pcc',
    description: 'The entire glasswork and interiors were designed and completed By Us.'
  },
  {
    id: 'p2',
    title: 'Flagship Hotel Ganesh Residency',
    category: 'Commercial',
    status: 'Completed',
    image: 'https://lh3.googleusercontent.com/d/12piSCRgvBH2yTD6zHPH0QC6yqLuT1ah_',
    description: 'Mudigere Road, Tholalu Chikmagalur'
  },
  {
    id: 'p3',
    title: 'Primrose Villas',
    category: 'Residential',
    status: 'Completed',
    image: 'https://lh3.googleusercontent.com/d/1CSUY5XRMYI1lQpMJSRgTWZK43JDj8syq',
    description: 'Luxury Holiday villas placed in the beautifull hills of Chikamagaluru'
  },
  {
    id: 'p4',
    title: 'ITC Mudforts Society, TOWER-2, ITC RESIDENCY',
    category: 'Commercial',
    status: 'Completed',
    image: 'https://lh3.googleusercontent.com/d/11bVRgikzIf-eIQ8gPvvaHouyyvlFH6EX',
    description: 'Jeevanhalli, Cox Town, Bengaluru'
  },
  {
    id: 'p5',
    title: 'Lakeside Villas',
    category: 'Residential',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800',
    description: 'Turnkey residential project featuring high-end architectural finishing.'
  },
  {
    id: 'p6',
    title: 'Logistics Hub',
    category: 'Industrial',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Large-span structural steel and concrete flooring project.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Ramesh Iyer',
    role: 'Whitefield, Bangalore',
    content: 'MY Constructions delivered our independent house exactly as promised. From foundation to finishing, their team was transparent, punctual, and highly professional. The quality of workmanship exceeded our expectations, and they maintained clear communication throughout the project. I would confidently recommend MY Constructions to anyone planning to build in Bangalore.',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 't2',
    name: 'Anitha Rao',
    role: 'JP Nagar, Bangalore',
    content: 'We hired MY Constructions for our home renovation, and the experience was smooth from start to finish. The engineers were knowledgeable, site supervision was excellent, and the final output was elegant and durable. What impressed us most was their commitment to timelines and cost control.',
    avatar: 'https://picsum.photos/id/65/100/100'
  },
  {
    id: 't3',
    name: 'Suresh Kumar',
    role: 'Yelahanka, Bangalore',
    content: 'MY Constructions handled our villa construction with great attention to detail and structural quality. They used good materials, followed proper safety standards, and kept us updated at every stage. The project was completed on schedule, and the final result speaks for itself.',
    avatar: 'https://picsum.photos/id/66/100/100'
  }
];

export const WHY_CHOOSE_US = [
  { title: 'Quality Assurance', icon: ShieldCheck, desc: 'ISO certified processes for every build phase.' },
  { title: 'Safety First', icon: Zap, desc: 'Zero accident policy with rigorous site protocols.' },
  { title: 'Timely Delivery', icon: Clock, desc: 'Optimized project execution to meet strict deadlines.' },
  { title: 'Expert Engineering', icon: Award, desc: 'Specialized in complex Reinforced RCC structures.' }
];
