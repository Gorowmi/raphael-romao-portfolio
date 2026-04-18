export interface Store {
  name: string;
  url: string | null;
  banner: string | null;
  bannerGradient: string;
  tags: string[];
  description: string;
  status: 'active' | 'construction';
}

export const stores: Record<string, Store> = {
  ahvic: {
    name: 'Ahvic',
    url: 'https://ahvic.com.br',
    banner: null,
    bannerGradient: 'linear-gradient(135deg, #00d4ff 0%, #0066cc 100%)',
    tags: ['Moda Esportiva', 'Fitness', 'Beachwear', 'Running'],
    description: 'Roupas esportivas e fitness para quem vive em movimento. Coleções de fitness, praia e running com estilo e tecnologia.',
    status: 'active',
  },
  ballyhoo: {
    name: 'Ballyhoo',
    url: null,
    banner: null,
    bannerGradient: 'linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%)',
    tags: ['Em Breve'],
    description: 'Projeto em desenvolvimento. Em breve novidades.',
    status: 'construction',
  },
  borem: {
    name: 'Borém Cafés',
    url: null,
    banner: null,
    bannerGradient: 'linear-gradient(135deg, #6b3a1f 0%, #3d1f0a 100%)',
    tags: ['Em Breve', 'Cafés'],
    description: 'Projeto em desenvolvimento. Em breve novidades.',
    status: 'construction',
  },
  lorens: {
    name: 'Lorens Giron',
    url: 'https://lorensgiron.com/pt',
    banner: null,
    bannerGradient: 'linear-gradient(135deg, #c9a84c 0%, #7b2d8b 100%)',
    tags: ['Fine Jewelry', 'Ouro 18k', 'Diamantes', 'Custom Design'],
    description: 'Joias de luxo handmade com diamantes e pedras preciosas em ouro 18k. Each detail is made with love.',
    status: 'active',
  },
  mrshome: {
    name: 'Mrs Home',
    url: 'https://www.mrshome.com.br',
    banner: null,
    bannerGradient: 'linear-gradient(135deg, #e91e8c 0%, #7b2d8b 100%)',
    tags: ['Moda Íntima', 'Pijamas', 'Lingerie', 'Lifestyle'],
    description: 'Moda íntima e pijamas para toda a família. Somos um estilo de vida.',
    status: 'active',
  },
  soprata: {
    name: 'Soprata',
    url: 'https://www.soprata.com.br',
    banner: 'https://www.soprata.com.br/cdn/shop/files/banner-principal-desk.jpg?v=1775745464&width=1200',
    bannerGradient: 'linear-gradient(135deg, #c0c0c0 0%, #4a4a6a 100%)',
    tags: ['Joias de Prata', 'Alianças', 'Personalizadas'],
    description: 'A maior variedade de joias de prata do Brasil, com peças personalizadas e garantia vitalícia de manutenção.',
    status: 'active',
  },
  tegape: {
    name: 'Tegape',
    url: null,
    banner: null,
    bannerGradient: 'linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%)',
    tags: ['Em Breve'],
    description: 'Projeto em desenvolvimento. Em breve novidades.',
    status: 'construction',
  },
  trocatech: {
    name: 'TrocaTech',
    url: 'https://www.trocatech.com.br',
    banner: 'https://www.trocatech.com.br/cdn/shop/files/Banner-Desktop-Compra_308505c4-4517-4e4a-a336-8a83fa5297e6.png?v=1701434154&width=1200',
    bannerGradient: 'linear-gradient(135deg, #555555 0%, #222222 100%)',
    tags: ['Apple', 'MacBook', 'Seminovos', 'Sustentabilidade'],
    description: 'Plataforma de compra e venda de dispositivos Apple seminovos e usados, contribuindo com a economia circular.',
    status: 'active',
  },
  testyou: {
    name: 'Testyou',
    url: 'https://www.testyou.com.br',
    banner: 'https://www.testyou.com.br/cdn/shop/files/Imagem_principal_banner___versao_Desktop_v2_89c3e39a-22f8-4b6d-9010-0eee1cd3f453.png?v=1772724383&width=1200',
    bannerGradient: 'linear-gradient(135deg, #00d4ff 0%, #0a3d62 100%)',
    tags: ['Genética', 'Saúde', 'DNA', 'Medicina Preventiva'],
    description: 'Testes genéticos preventivos e preditivos para decisões mais inteligentes sobre saúde e bem-estar.',
    status: 'active',
  },
  joyaclean: {
    name: 'JoyaClean',
    url: 'https://joyacleanbeauty.com.br',
    banner: null,
    bannerGradient: 'linear-gradient(135deg, #4caf50 0%, #00796b 100%)',
    tags: ['Clean Beauty', 'Skincare', 'Natural', 'Maquiagem'],
    description: 'Maquiagem clean beauty de alta performance com ingredientes naturais aprovados por dermatologistas.',
    status: 'active',
  },
  simboliq: {
    name: 'Simboliq',
    url: null,
    banner: null,
    bannerGradient: 'linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%)',
    tags: ['Em Breve'],
    description: 'Projeto em desenvolvimento. Em breve novidades.',
    status: 'construction',
  },
};
