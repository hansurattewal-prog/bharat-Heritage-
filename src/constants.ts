import { Product, Festival } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Banarasi Silk Saree',
    description: 'Hand-woven silk with intricate gold thread work from the ghats of Varanasi.',
    price: '₹24,500',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    category: 'Regional Couture',
    origin: 'Uttar Pradesh'
  },
  {
    id: '2',
    name: 'Antique Kerala Brass Lamp',
    description: 'Traditional Nilavilakku, casting a warm and sacred glow in any space.',
    price: '₹4,200',
    image: 'https://images.unsplash.com/photo-1621643235311-37d45268c71d?auto=format&fit=crop&q=80&w=800',
    category: 'Sacred Artifacts',
    origin: 'Kerala'
  },
  {
    id: '3',
    name: 'Mirror-Work Punjabi Juttis',
    description: 'Luxurious handcrafted leather footwear with authentic Phulkari embroidery.',
    price: '₹1,850',
    image: 'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&q=80&w=800',
    category: 'Handicrafts',
    origin: 'Punjab'
  },
  {
    id: '4',
    name: 'Jaipur Blue Pottery Vase',
    description: 'Unique cobalt-blue ceramics with exquisite hand-painted floral motifs.',
    price: '₹3,500',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=800',
    category: 'Handicrafts',
    origin: 'Rajasthan'
  },
  {
    id: '5',
    name: 'Ayurvedic Saffron Face Oil',
    description: 'Ancient Kumkumadi Tailam, infused with 21 rare herbs for a royal radiance.',
    price: '₹2,100',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800',
    category: 'Ayurvedic Wellness',
    origin: 'Across India'
  },
  {
    id: '6',
    name: 'Marble Inlay Mughal Box',
    description: 'Exquisite Pietra Dura work on white marble, inspired by Taj Mahal artisans.',
    price: '₹8,900',
    image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=800',
    category: 'Handicrafts',
    origin: 'Agra'
  }
];

export const FESTIVALS: Festival[] = [
  {
    id: 'diwali',
    name: 'The Festival of Lights',
    description: 'Celebrate the victory of light over darkness with our curated Diwali essentials.',
    image: 'https://images.unsplash.com/photo-1544923246-77307dddd546?auto=format&fit=crop&q=80&w=1600',
    date: 'Oct-Nov'
  },
  {
    id: 'holi',
    name: 'The Festival of Colors',
    description: 'Drench in the hues of spring with organic gulal and festive treats.',
    image: 'https://images.unsplash.com/photo-1517520287167-4bda64282b54?auto=format&fit=crop&q=80&w=1600',
    date: 'March'
  },
  {
    id: 'eid',
    name: 'Spirit of Eid',
    description: 'Spreading joy, peace, and togetherness with traditional couture and sweets.',
    image: 'https://images.unsplash.com/photo-1564769640960-914361f1c7d2?auto=format&fit=crop&q=80&w=1600',
    date: 'Lunar Calendar'
  }
];
