export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  colorHex: string;
  textColor: string;
  accentColor: string;
  imageUrl: string;
  direction: 'left' | 'right';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  flavorOfInterest: string;
  message: string;
}