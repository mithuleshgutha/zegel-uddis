import { Flavor } from './types';

export const FLAVORS: Flavor[] = [
  {
    id: 'chocolate',
    name: 'Chocolate',
    tagline: 'The Velvet Vanish',
    description: 'A rich, milk-based cocoa fantasy. It sits elegantly on the spoon, but the moment it touches your tongue, it melts into a memory of pure chocolate bliss.',
    colorHex: '#3E2723', // Dark Brown
    textColor: '#FFF8E1',
    accentColor: '#5D4037',
    imageUrl: 'https://picsum.photos/800/800?random=1', // Placeholder
    direction: 'left'
  },
  {
    id: 'butterscotch',
    name: 'Butterscotch',
    tagline: 'Golden Ghost',
    description: 'Salty-sweet milk perfection. This golden wobble disappears so fast, you’ll wonder if it was ever there. A caramel dream that melts instantly.',
    colorHex: '#FFCC80', // Orange/Gold
    textColor: '#E65100',
    accentColor: '#FFB74D',
    imageUrl: 'https://picsum.photos/800/800?random=4',
    direction: 'right'
  },
  {
    id: 'chocolate-banana',
    name: 'Chocolate-Banana',
    tagline: 'Slip Into Sweetness',
    description: 'Creamy milk meets ripe banana in a disappearing act of flavor. It wiggles, it jiggles, and then—poof! It melts away, leaving a tropical smile.',
    colorHex: '#FDD835', // Yellow
    textColor: '#3E2723',
    accentColor: '#FBC02D',
    imageUrl: 'https://picsum.photos/800/800?random=2',
    direction: 'left'
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    tagline: 'Berry Blink',
    description: 'A pink milk-based cloud. Sweet, tart, and lighter than air. It’s a strawberry kiss that dissolves into liquid happiness before you can blink.',
    colorHex: '#F8BBD0', // Pink
    textColor: '#880E4F',
    accentColor: '#F48FB1',
    imageUrl: 'https://picsum.photos/800/800?random=3',
    direction: 'right'
  },
  {
    id: 'coffee',
    name: 'Coffee', 
    tagline: 'Espresso Mist',
    description: 'The bold kick of Arabica in a silky milk base. It doesn’t stick around—it melts right in. The morning buzz with the texture of a daydream.',
    colorHex: '#4E342E', // Coffee Brown
    textColor: '#D7CCC8',
    accentColor: '#6D4C41',
    imageUrl: 'https://picsum.photos/800/800?random=5',
    direction: 'left'
  }
];

export const NAV_LINKS = [
  { name: 'Chocolate', href: '#chocolate' },
  { name: 'Butterscotch', href: '#butterscotch' },
  { name: 'Choco-Banana', href: '#chocolate-banana' },
  { name: 'Strawberry', href: '#strawberry' },
  { name: 'Coffee', href: '#coffee' },
];