export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Handicrafts' | 'Regional Couture' | 'Sacred Artifacts' | 'Ayurvedic Wellness';
  origin: string;
}

export interface StateData {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export interface Festival {
  id: string;
  name: string;
  description: string;
  image: string;
  date: string;
}
