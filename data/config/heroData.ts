export const navLinks = [
  { label: 'Products', hasChevron: true, href: '#products' },
  { label: 'Solutions', hasChevron: false, href: '#features' },
  { label: 'Developers', hasChevron: false, href: '#developers' },
  { label: 'JUKUMU', hasChevron: false, href: '#jukumu' },
];

export const heroContent = {
  badge: 'BOT-REGULATED',
  pillLink: {
    label: "nTZS — Tanzania's first regulated stablecoin →",
    href: 'https://www.ntzs.co.tz/',
  },
  headline: 'Building the Future of Finance in Africa',
  subhead:
    'Secure, compliant digital financial infrastructure. Stablecoins, instant payments, and developer APIs powering the modern economy.',
};

export const megaMenuLeft = [
  {
    title: 'BOT-Regulated Stablecoins',
    subtitle: 'Bank of Tanzania regulated digital currency for East Africa',
    iconColor: 'blue' as const,
    href: 'https://www.ntzs.co.tz/',
  },
  {
    title: 'Instant Payments (NEDApay)',
    subtitle: 'Lightning-fast payment infrastructure across borders',
    iconColor: 'orange' as const,
    href: 'https://www.nedapay.xyz/',
  },
  {
    title: 'Developer APIs',
    subtitle: 'Comprehensive API suite for global payouts',
    iconColor: 'yellow' as const,
    href: 'https://nedapayplus.xyz/docs',
  },
  {
    title: 'JUKUMU Network',
    subtitle: 'Regenerative finance for sustainable community impact',
    iconColor: 'green' as const,
    href: '#jukumu',
  },
];

export const megaMenuRight = [
  {
    title: 'Mobile Money Integration',
    subtitle: 'Connect with M-Pesa, Tigo Pesa, and more',
  },
  {
    title: 'Multi-Currency Support',
    subtitle: 'TZS, KES, UGX, and global currencies',
  },
  {
    title: 'Real-Time Analytics',
    subtitle: 'Monitor transactions with comprehensive dashboards',
  },
  {
    title: 'Compliance & Security',
    subtitle: 'Full regulatory compliance and bank-grade encryption',
  },
  {
    title: 'Webhook & Event Streams',
    subtitle: 'Real-time event notifications for your apps',
  },
];

export const megaMenuPromo = {
  title: 'View Documentation',
  subtitle: 'Explore our API docs and get started!',
};

export const products = [
  {
    title: 'BOT-Regulated Stablecoins',
    description: 'Bank of Tanzania regulated digital currency providing stability and trust for East African markets.',
    features: ['Full regulatory compliance', '1:1 TZS backing', 'Instant settlements', 'Transparent reserves'],
    href: 'https://www.ntzs.co.tz/',
  },
  {
    title: 'Instant Payments',
    description: 'Lightning-fast payment infrastructure for businesses and individuals across borders.',
    features: ['Real-time processing', 'Multi-currency support', 'Low transaction fees', '99.99% uptime'],
    href: 'https://www.nedapay.xyz/',
  },
  {
    title: 'Developer APIs',
    description: 'Comprehensive API suite for global payouts and financial integrations.',
    features: ['RESTful & GraphQL APIs', 'Comprehensive documentation', 'Sandbox environment', 'Webhook support'],
    href: 'https://nedapayplus.xyz/docs',
  },
  {
    title: 'JUKUMU Network',
    description: 'Regenerative finance platform supporting sustainable community impact and financial inclusion.',
    features: ['Community impact focus', 'Eco-friendly initiatives', 'Financial inclusion', 'Transparent impact tracking'],
    href: '#jukumu',
  },
];

export const stats = [
  { value: '50K+', label: 'Active Users' },
  { value: '15+', label: 'Countries' },
  { value: '$100M+', label: 'Transaction Volume' },
  { value: '100%', label: 'Secure & Compliant' },
];

export const features = [
  { title: 'Bank-Grade Security', description: 'Enterprise-level encryption and compliance with international security standards.' },
  { title: 'Lightning Fast', description: 'Process transactions in milliseconds with our optimized infrastructure.' },
  { title: 'Global Reach', description: 'Connect with partners and customers across 15+ countries seamlessly.' },
  { title: 'Real-Time Analytics', description: 'Monitor transactions and performance with comprehensive dashboards.' },
  { title: 'Regulatory Compliance', description: 'Full compliance with local and international financial regulations.' },
  { title: '24/7 Support', description: 'Expert support team available round the clock to assist you.' },
];

export const jukumuStats = [
  { value: '$5M+', label: 'Impact Funding' },
  { value: '200+', label: 'Communities Served' },
  { value: '50+', label: 'Green Projects' },
  { value: '100%', label: 'Transparent' },
];

export const developerFeatures = [
  'RESTful & GraphQL APIs',
  'Comprehensive documentation',
  'Sandbox environment for testing',
  'Webhook support for real-time events',
];

export const codeSnippet = `// Initialize Neda Labs SDK
import { NedaLabs } from '@nedalabs/sdk';

const neda = new NedaLabs({
  apiKey: process.env.NEDA_API_KEY
});

// Create a payout
const payout = await neda.payouts.create({
  amount: 50000,
  currency: 'TZS',
  type: 'mobile_money',
  phone: '+255712345678'
});

console.log(payout.status);
// => "processing"`;

