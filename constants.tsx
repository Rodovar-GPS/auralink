
import { PricingPlan, PortfolioItem } from './types';

export const PHONE_NUMBER = "71 98231-9773";
export const WHATSAPP_LINK = "https://wa.me/5571982319773?text=Olá! Gostaria de uma cotação para o AuraLink Studio.";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'essencial',
    name: 'PLANO ESSENCIAL',
    price: '350',
    description: 'Ideal para quem está começando e precisa de presença digital básica com toque de IA.',
    color: 'blue',
    deliveryTime: '72h úteis',
    image: 'https://picsum.photos/seed/aura-bot-blue/400/400',
    features: [
      '4 artes/mês (Stories ou Feed)',
      '1 roteiro com prompt IA (até 8s)',
      '2 imagens ultra-realistas com prompt',
      'Suporte via WhatsApp',
      'Entrega em até 72h úteis'
    ]
  },
  {
    id: 'pro',
    name: 'PLANO PRO',
    price: '690',
    description: 'Focado em crescimento e autoridade com consultoria dedicada.',
    color: 'gold',
    deliveryTime: '48h úteis',
    highlight: 'MAIS POPULAR',
    image: 'https://picsum.photos/seed/aura-bot-gold/400/400',
    features: [
      '8 artes/mês (Stories, Feed ou Carrossel)',
      '2 roteiros com prompt IA (até 8s)',
      'Consultoria mensal de 30 min',
      'Suporte prioritário via WhatsApp',
      'Entrega em até 48h úteis'
    ]
  },
  {
    id: 'premium',
    name: 'PLANO PREMIUM',
    price: '1.200',
    description: 'A solução completa de IA Estratégica para marcas que dominam o mercado.',
    color: 'red',
    deliveryTime: '48h úteis',
    image: 'https://picsum.photos/seed/aura-bot-red/400/400',
    features: [
      '12 artes/mês (Feed, Stories, Carrossel)',
      '4 roteiros com prompt IA (até 8s)',
      '1 plotagem visual (carro/fachada/camisa)',
      'Consultoria estratégica quinzenal',
      'Entrega em até 48h úteis'
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'Comercial Tech', category: 'Vídeo Produção', imageUrl: 'https://picsum.photos/seed/v1/600/400' },
  { id: 2, title: 'Campanha Moda IA', category: 'Marketing Digital', imageUrl: 'https://picsum.photos/seed/v2/600/400' },
  { id: 3, title: 'Lançamento Imobiliário', category: 'Produção 3D', imageUrl: 'https://picsum.photos/seed/v3/600/400' },
  { id: 4, title: 'Anúncio Gastronomia', category: 'Social Media', imageUrl: 'https://picsum.photos/seed/v4/600/400' },
  { id: 5, title: 'Identidade Visual', category: 'Branding', imageUrl: 'https://picsum.photos/seed/v5/600/400' },
  { id: 6, title: 'Institucional Aura', category: 'Vídeo IA', imageUrl: 'https://picsum.photos/seed/v6/600/400' },
];
