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
  imageRoute: string;
  header: string;
  content: string;
}

export const cardsContent: CardContent[] = [
    { imageRoute: 'imageRoute1.jpg', header: 'Header 1', content: 'Content 1' },
    { imageRoute: 'imageRoute2.jpg', header: 'Header 2', content: 'Content 2' },
    { imageRoute: 'imageRoute3.jpg', header: 'Header 3', content: 'Content 3' },
  ]
