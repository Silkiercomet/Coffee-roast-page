export interface Option {
    content: string;
    value: string;
  }
  
  
export interface FormDataSection {
    legend: string;
    title: string;
    options: Option[];
}

export const formData = [
    {
      legend: 'preferences',
      title: "How do you drink your coffee?",
      options: [
        { value: 'Capsule', content: 'Compatible with Nespresso systems and similar brewers' },
        { value: 'Filter', content: 'For pour over or drip methods like Aeropress, Chemex, and V60' },
        { value: 'Espresso', content: 'Dense and finely ground beans for an intense, flavorful experience' },
      ],
    },
    {
      legend: 'bean-type',
      title: "What type of coffee?",
      options: [
        { value: 'Single origin', content: 'Distinct, high quality coffee from a specific family-owned farm' },
        { value: 'Decaf', content: 'Just like regular coffee, except the caffeine has been removed' },
        { value: 'Blended', content: 'Combination of two or three dark roasted beans of organic coffees' },
      ],
    },
    {
      legend: 'quantity',
      title: "How much would you like?",
      options: [
        { value: '250g', content: 'Perfect for the solo drinker. Yields about 12 delicious cups.' },
        { value: '500g', content: 'Perfect option for a couple. Yields about 40 delectable cups.' },
        { value: '1000g', content: 'Perfect for offices and events. Yields about 90 delightful cups.' },
      ],
    },
    {
      legend: 'grind',
      title: "Want us to grind them?",
      options: [
        { value: 'Wholebean', content: 'Best choice if you cherish the full sensory experience' },
        { value: 'Filter', content: 'For drip or pour-over coffee methods such as V60 or Aeropress' },
        { value: 'Cafetiére', content: 'Coarse ground beans specially suited for french press coffee' },
      ],
    },
    {
      legend: 'delivery',
      title: "How often should we deliver?",
      options: [
        { value: 'Every week', content: 'Select quantity to view price. Includes free first-class shipping.' },
        { value: 'Every 2 weeks', content: 'Select quantity to view price. Includes free first-class shipping.' },
        { value: 'Every month', content: 'Select quantity to view price. Includes free first-class shipping.' },
      ],
    },

];

// ----------------------------------------------- collection content-------------------------------------------
interface CollectionItem {
  imgRoute: string;
  title: string;
  description: string;
}

export const collection: CollectionItem[] = [
  { imgRoute: 'assets/home/desktop/image-gran-espresso.png', title: 'Gran Espresso', description: 'Light and flavorful blend with cocoa and black pepper for an intense experience' },
  { imgRoute: 'assets/home/desktop/image-planalto.png', title: 'Planalto', description: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts' },
  { imgRoute: 'assets/home/desktop/image-piccollo.png', title: 'Piccollo', description: 'Mild and smooth blend featuring notes of toasted almond and dried cherry' },
  { imgRoute: 'assets/home/desktop/image-danche.png', title: 'Danche', description: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes' },
]

// ------------------------------------------------ why us content-----------------------------------------------

interface CardContent {
  image: JSX.Element;
  header: string;
  content: string;
}
import { TruckIcon, BeansIcon, GiftIcon } from "../components/atoms/coffeeIcon";

export const cardsContent: CardContent[] = [
    { image: <BeansIcon />, header: 'Best quality', content: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.' },
    { image: <GiftIcon />, header: 'Exclusive benefits', content: 'Special offers and swag when you subscribe, including 30% off your first shipment.' },
    { image: <TruckIcon />, header: 'Free shipping', content: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.' },
  ]


// ------------------------------------------------ how it works -----------------------------------------------

export const howItWorks = [
  { header: 'Pick your coffee', content: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.' },
  { header: 'Choose the frequency', content: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.' },
  { header: 'Receive and enjoy!', content: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.' },
];

// ------------------------------------------------ about -----------------------------------------------

interface AboutBanner {
  title: string;
  content: string;
  image: string;
  reverse: boolean;
}

export const aboutBanner: AboutBanner[] = [
  {
    title: 'Our commitment',
    content: 'We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.',
    image: "./assets/about/desktop/image-commitment.jpg" ,
    reverse: false,
  },
  {
    title: 'Uncompromising quality',
    content: 'Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.',
    image: "./assets/about/desktop/image-quality.jpg",
    reverse: true,
  },
];

interface Address {
  street: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  image: JSX.Element;
}

import { MexicoIcon, UsaIcon, CanadaIcon } from "../components/atoms/coffeeIcon";

export const addressData: Address[] = [
  {
    street: "Av. Siempre Viva",
    city: "Chihuahua",
    zip: "12345",
    country: "Mexico",
    phone: "+52 614 123 4567",
    image: <MexicoIcon />,
  },
  {
    street: "103 Easy Street",
    city: "Springfield",
    zip: "67890",
    phone: "+1 123 456 7890",
    country: "USA",
    image: <UsaIcon />,
  },
  {
    street: "456 Maple Drive",
    city: "Toronto",
    zip: "13579",
    phone: "555-9012",
    country: "Canada",
    image: <CanadaIcon />,
  },

  ]
;
// ------------------------------------------------ contact -----------------------------------------------
interface howItWorks{
  header: string;
  content: string;
}

export const howItWorksArray : howItWorks[] = [
  { header: 'Pick your coffee', content: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.' },
  { header: 'Choose the frequency', content: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.' },
  { header: 'Receive and enjoy!', content: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.' },
];