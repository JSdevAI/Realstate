export interface Property {
  id: number;
  title: string;
  category: 'Moradias' | 'Apartamentos' | 'Terrenos' | 'Comercial';
  location: string;
  fullLocation: string;
  price: string;
  beds: string;
  baths: string;
  area: string;
  mainImage: string;
  images: string[];
  status: 'Disponível' | 'Reservado' | 'Vendido';
  statusColor: string;
  description: string;
  features: string[];
  panorama?: string; // New: Equirectangular 360 image
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Moradia T4 Minimalista',
    category: 'Moradias',
    location: 'Famalicão, Braga',
    fullLocation: 'Rua Principal, Vila Nova de Famalicão',
    price: '650.000€',
    beds: '4 Quartos',
    baths: '3 WCs',
    area: '320m²',
    mainImage: '/properties/villa.png',
    images: [
      '/properties/villa.png',
      '/properties/gallery/villa_kitchen.png',
      '/properties/gallery/villa_bedroom.png',
      '/properties/gallery/villa_living.png'
    ],
    panorama: '/properties/gallery/villa_panorama.png',
    status: 'Disponível',
    statusColor: 'bg-[#6FA49F]',
    description: 'Esta moradia T4 de arquitetura minimalista redefine o conceito de luxo contemporâneo. Localizada numa zona tranquila de Famalicão, oferece amplos espaços abertos, acabamentos de alta qualidade e uma integração perfeita entre o interior e o exterior. Ideal para famílias que procuram conforto, privacidade e design sofisticado.',
    features: ['Piscina Privada', 'Garagem para 3 carros', 'Jardim Interior', 'Domótica Avançada', 'Eficiência Energética A+']
  },
  {
    id: 2,
    title: 'Apartamento Luxo T3',
    category: 'Apartamentos',
    location: 'Centro, Famalicão',
    fullLocation: 'Avenida da Liberdade, Famalicão Centro',
    price: '325.000€',
    beds: '3 Quartos',
    baths: '2 WCs',
    area: '160m²',
    mainImage: '/properties/apartment.png',
    images: [
      '/properties/apartment.png',
      '/properties/gallery/apt_kitchen.png',
      '/properties/gallery/apt_living.png',
      '/properties/gallery/apt_balcony.png'
    ],
    panorama: '/properties/gallery/apt_panorama.png',
    status: 'Reservado',
    statusColor: 'bg-[#D9A25F]',
    description: 'Apartamento T3 de luxo situado no coração da cidade. Com vistas panorâmicas e acabamentos de excelência, este imóvel é a escolha perfeita para quem não abdica da conveniência de viver perto de tudo, com o máximo de conforto e segurança.',
    features: ['Varanda Panorâmica', 'Cozinha Equipada', 'Ar Condicionado', 'Lugar de Garagem', 'Segurança 24h']
  },
  {
    id: 3,
    title: 'Casa de Campo Renovada',
    category: 'Moradias',
    location: 'Gavião, Famalicão',
    fullLocation: 'Caminho Rural, Gavião, Famalicão',
    price: '420.000€',
    beds: '5 Quartos',
    baths: '4 WCs',
    area: '450m²',
    mainImage: '/properties/country_house.png',
    images: [
      '/properties/country_house.png',
      '/properties/gallery/country_kitchen.png',
      '/properties/gallery/country_living.png'
    ],
    panorama: '/properties/gallery/country_360.png', // Note: Panorama generation failed, but we'll leave field for later
    status: 'Vendido',
    statusColor: 'bg-[#0C2D48]/70',
    description: 'Um refúgio rústico com o toque da modernidade. Esta casa de campo foi integralmente renovada, preservando a traça original em pedra mas com interiores contemporâneos e funcionais. Um terreno amplo com árvores de fruto completa esta propriedade única.',
    features: ['Lareira com Recuperador', 'Poço de Água', 'Anexo para Convidados', 'Adega Privada', 'Vistas de Serra']
  },
  {
    id: 4,
    title: 'Penthouse Altitude',
    category: 'Apartamentos',
    location: 'Brufe, Famalicão',
    fullLocation: 'Edifício Horizon, Brufe, Famalicão',
    price: '890.000€',
    beds: '4 Quartos',
    baths: '4 WCs',
    area: '280m²',
    mainImage: '/properties/penthouse.png',
    images: ['/properties/penthouse.png'],
    status: 'Disponível',
    statusColor: 'bg-[#6FA49F]',
    description: 'A Penthouse Altitude oferece o expoente máximo da vida urbana. Com um terraço de 120m² e vistas 360º sobre a região, este apartamento combina pé-direito duplo, janelas do chão ao teto e um design interior assinado por arquitetos de renome.',
    features: ['Jacuzzi no Terraço', 'Elevador Privativo', 'Sala de Cinema', 'Suite Master 40m²', 'Cozinha de Chef']
  },
  {
    id: 5,
    title: 'Escritório Hub Prime',
    category: 'Comercial',
    location: 'Parque Industrial',
    fullLocation: 'Zona Industrial Sul, Famalicão',
    price: '245.000€',
    beds: 'N/A',
    baths: '2 WCs',
    area: '180m²',
    mainImage: '/properties/office.png',
    images: ['/properties/office.png'],
    status: 'Disponível',
    statusColor: 'bg-[#6FA49F]',
    description: 'Espaço comercial moderno otimizado para empresas que valorizam a colaboração e a inovação. Com muita luz natural e infraestrutura tecnológica de ponta, este escritório está pronto a habitar num dos pólos empresariais mais dinâmicos do país. O Hub Prime foi desenhado para as necessidades das empresas tecnológicas contemporâneas.',
    features: ['Certificação BREEAM', 'Fibra Ótica Dedicada', 'Estacionamento Elétrico', 'Sala de Conferências', 'Lounge Café']
  },
  {
    id: 6,
    title: 'Lote Quinta do Sol',
    category: 'Terrenos',
    location: 'Antas, Famalicão',
    fullLocation: 'Encosta de Antas, Vila Nova de Famalicão',
    price: '155.000€',
    beds: 'N/A',
    baths: 'N/A',
    area: '1200m²',
    mainImage: '/properties/land.png',
    images: ['/properties/land.png'],
    status: 'Disponível',
    statusColor: 'bg-[#6FA49F]',
    description: 'Este lote de terreno urbano numa das encostas mais exclusivas de Famalicão é a tela perfeita para construir a sua casa de sonho. Com autorização para construção de moradia isolada, oferece sol todo o dia e vistas desafogadas.',
    features: ['Infraestruturas Completas', 'Projeto Aprovado (Opcional)', 'Vista Panorâmica', 'Orientação Solar Sul', 'Zona de Prestígio']
  }
];
