export type PropertyStatus = 'Disponível' | 'Reservado' | 'Vendido';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  status: PropertyStatus;
  imageUrl: string;
  beds: number;
  baths: number;
  area: number;
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Moradia T4 Minimalista',
    location: 'Famalicão, Braga',
    price: '650.000€',
    status: 'Disponível',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCug8VOrKRAhPUhloGqHBmoW4t55XPC_fcBWh88rvW-vYtGi0FusP0tGOfVqKEfBWTgoPcy7zOKTHzlyCXHqADdxtnbacWKkor157isYIcT2ky93z9YIEihb-6Mf30vQG22VKyMiehhbF2gq2aNubhb2i4WttGW-bnLEJqkX_-h6ZPo9SAiu3Y0f-I-SrcAEE0SGgYJ0612rTuErmEIQBArwFyYR2kl71AtSbywQo95BxdNiPSvYiXYh42oFY1Zy8q4bSGxRpvlKwnn',
    beds: 4,
    baths: 3,
    area: 320,
    featured: true,
  },
  {
    id: '2',
    title: 'Apartamento Luxo T3',
    location: 'Centro, Famalicão',
    price: '325.000€',
    status: 'Reservado',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsmrGCOu4jkmrCUifjQf5g0TNzgm0K0frgPZcmkouVIvDdb5E-BcN4_crWyX6r9LGsVQc1iTNB-0QqN4wliBb4b2YnZCtSIshrVur-5LQtzknnJn_GIM2u-r088J4GM155u4-v6Ow6QZuulM8av_9tetebG4vv_QcLMkmda-jJ9st_4iVd0BNYx51AiGbqm9jooHGmzP1RvFc2tw7pZmnALM-xD8QPj_TAwAoD7Nz7Bdl8sTAd0RZ5G9OaRuDlUUIgzpEhMgOHdEF_',
    beds: 3,
    baths: 2,
    area: 160,
    featured: true,
  },
  {
    id: '3',
    title: 'Casa de Campo Renovada',
    location: 'Gavião, Famalicão',
    price: '420.000€',
    status: 'Vendido',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC10reTxqjYCvIqgwtHiAsr94nIBkFZiThJWWcjiysUoYhksaPNmo-bBHXDNQv3bHs8VQJnLZjg5DPKNmOdCCAgVDIy4VllVri6RaovatzJfQGq4Ra3BJ_ofn0lUo0vlaTzs0k5hyuy5RMsi7wPpZ6jjrdc7rAgKdxpr_9y5wf_MIKfHKMxDW1ovYlmJzJey8WYUmnaxjHhTEn-XntAzBQpvtDuhjPFQmtSmv9ImXhGpcTNsRFWFWd3PRgAs0Kfk_mk0WMgG12qDXCL',
    beds: 5,
    baths: 4,
    area: 450,
    featured: true,
  },
  {
    id: '4',
    title: 'Moradia T4 moderna',
    location: 'Braga, Bom Jesus',
    price: '1.250.000€',
    status: 'Disponível',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMNVaD3H-2cc2JjCgDbnK2ZNQ90EEyG2fRntjrqa6xUYexoOPsHMEYU1792ZVj8jVIIX6dxWNNLi2MVuH_87Zime86Xx-Uczrvr_KhWKLJszZixeD3dU_xbfeGbcOIaC670dWGm9CIOGzsTaxbYSM469F2MdUQOKDNameyTMC-ualRbUnE6D9_Gftlbp54fpgrXsP--Yh-0uPRQiwixxoqe_e04raF4q7cSi7EZqrkdHTU4XZfuXtgFTFU8qrmQlM9gK_FUVJukcr1',
    beds: 4,
    baths: 4,
    area: 400,
  },
  {
    id: '5',
    title: 'Apartamento T3 Prime',
    location: 'Vila Nova de Famalicão, Centro',
    price: '480.000€',
    status: 'Reservado',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALMRdXG7iPxyoMpMH0Z9aVszSchhLCm9ic5eJaynSNRuangyMvNj_kINa5Ul_fBeBeDMhXas07ler1lhGy7hQR7uanzAq-ZucxpkNpM1dCbLVmmQVRsSmBRdrxaOn6HYEKo__rPCW5G88xrps1PqIKr2pWETXZcU8f-s1Kb3Yaicd00YBDHEDVfyHb1fiTz9no-iU7baHNaFJGEP6Y0n_dFjp3YKQPgVe0rCHlYuwJOUeXWKyve51ZJvvSfSX9yotXsb2m4_Hd6ibH',
    beds: 3,
    baths: 3,
    area: 180,
  },
  {
    id: '6',
    title: 'Solar Histórico T6',
    location: 'Guimarães, Oliveira do Castelo',
    price: 'Sob Consulta',
    status: 'Vendido',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGtVQnA-rTXZvmDU9J_ibvVX81w-jq1w9yzT6g_6P3WeKPC3cK_wskRHFXelKWGluFC2SAVPpH9tsh1crkxE0VHXhIOz9vIE7bEmTNinyjGHkdLXyzW4OsxlOaS9dokWiOnXFgtRB_PNJF9krz5UDHmtrZPRKRC1yf2ge3BR1oj56B7_UO3o3FnfDeMea9HUpDa9HExYALNfgQZLAcgxmGdgKYkiaCIVwl8gqMfThFHMrJSr1kOuTQDd2J6HaAs84ZkXVC7zdXA6q1',
    beds: 6,
    baths: 5,
    area: 800,
  }
];
