export interface Store {
  name: string;
  url: string | null;
  logo: string | null;
  banner: string;
  tags: string[];
  description: string;
  status: 'active' | 'construction';
}

export const stores: Record<string, Store> = {
  ahvic: {
    name: 'Ahvic',
    url: 'https://ahvic.com.br',
    logo: 'https://ahvic.com.br/cdn/shop/files/Arquivos_da_Marca_Horizontal_Principal_1.svg?height=60&v=1763089056',
    banner: '/shopify/ahvic-banner.svg',
    tags: ['Moda Esportiva', 'Fitness', 'Beachwear', 'Running'],
    description: 'Roupas esportivas e fitness para quem vive em movimento. Coleções de fitness, praia e running com estilo e tecnologia.',
    status: 'active',
  },
  ballyhoo: {
    name: 'Ballyhoo',
    url: null,
    logo: null,
    banner: '/shopify/construction-banner.svg',
    tags: ['Em Breve'],
    description: 'Projeto em desenvolvimento. Em breve novidades.',
    status: 'construction',
  },
  borem: {
    name: 'Borém Cafés',
    url: null,
    logo: null,
    banner: '/shopify/construction-banner.svg',
    tags: ['Em Breve', 'Cafés'],
    description: 'Projeto em desenvolvimento. Em breve novidades.',
    status: 'construction',
  },
  lorens: {
    name: 'Lorens Giron',
    url: 'https://lorensgiron.com/pt',
    logo: 'https://lorensgiron.com/cdn/shop/files/LOGO_HORIIZONTA_SEM_FUNDO_DOURADA.png?v=1724350180&width=400',
    banner: '/shopify/lorens-banner.svg',
    tags: ['Fine Jewelry', 'Ouro 18k', 'Diamantes', 'Custom Design'],
    description: 'Joias de luxo handmade com diamantes e pedras preciosas em ouro 18k. Each detail is made with love.',
    status: 'active',
  },
  mrshome: {
    name: 'Mrs Home',
    url: 'https://www.mrshome.com.br',
    logo: 'https://www.mrshome.com.br/cdn/shop/files/Logo_mrs_home_500_dpi_sem_fundo_2_85c1df08-e8aa-4e51-b166-1fd8e9543f8e.png',
    banner: '/shopify/mrshome-banner.svg',
    tags: ['Moda Íntima', 'Pijamas', 'Lingerie', 'Lifestyle'],
    description: 'Moda íntima e pijamas para toda a família. Somos um estilo de vida.',
    status: 'active',
  },
  soprata: {
    name: 'Soprata',
    url: 'https://www.soprata.com.br',
    logo: 'https://www.soprata.com.br/cdn/shop/files/logo-so-prata-joias-em-prata-2x_5b2e6b1c-d66e-4acd-aa4e-6c6d0e2f0c29.png',
    banner: '/shopify/soprata-banner.svg',
    tags: ['Joias de Prata', 'Alianças', 'Personalizadas'],
    description: 'A maior variedade de joias de prata do Brasil, com peças personalizadas e garantia vitalícia de manutenção.',
    status: 'active',
  },
  tegape: {
    name: 'Tegape',
    url: null,
    logo: null,
    banner: '/shopify/construction-banner.svg',
    tags: ['Em Breve'],
    description: 'Projeto em desenvolvimento. Em breve novidades.',
    status: 'construction',
  },
  trocatech: {
    name: 'TrocaTech',
    url: 'https://www.trocatech.com.br',
    logo: 'https://www.trocatech.com.br/cdn/shop/files/Assinatura_Com_Tagline_Vertical_Laranja_01_RGB_510x.png?v=1704912656',
    banner: '/shopify/trocatech-banner.svg',
    tags: ['Apple', 'MacBook', 'Seminovos', 'Sustentabilidade'],
    description: 'Plataforma de compra e venda de dispositivos Apple seminovos e usados, contribuindo com a economia circular.',
    status: 'active',
  },
  testyou: {
    name: 'Testyou',
    url: 'https://www.testyou.com.br',
    logo: 'https://www.testyou.com.br/cdn/shop/files/Logo.png?v=1756412060&width=300',
    banner: '/shopify/testyou-banner.svg',
    tags: ['Genética', 'Saúde', 'DNA', 'Medicina Preventiva'],
    description: 'Testes genéticos preventivos e preditivos para decisões mais inteligentes sobre saúde e bem-estar.',
    status: 'active',
  },
  joyaclean: {
    name: 'JoyaClean',
    url: 'https://joyacleanbeauty.com.br',
    logo: 'https://joyacleanbeauty.com.br/cdn/shop/files/joya_marrom.png?v=1775089542&width=400',
    banner: '/shopify/joyaclean-banner.svg',
    tags: ['Clean Beauty', 'Skincare', 'Natural', 'Maquiagem'],
    description: 'Maquiagem clean beauty de alta performance com ingredientes naturais aprovados por dermatologistas.',
    status: 'active',
  },
  simboliq: {
    name: 'Simboliq',
    url: null,
    logo: null,
    banner: '/shopify/construction-banner.svg',
    tags: ['Em Breve'],
    description: 'Projeto em desenvolvimento. Em breve novidades.',
    status: 'construction',
  },
};
