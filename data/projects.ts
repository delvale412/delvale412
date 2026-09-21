export type Project = {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  problem: string;
  build: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string | null;
  image: {
    desktop: string;
    mobile: string;
  };
  demonstrates: string;
};

export const projects: Project[] = [
  {
    slug: "ironbase",
    title: "IronBase",
    category: "Site institucional multi-página",
    featured: true,
    problem:
      "Apresentar a metodologia de um consultor de alta performance física e converter visitas em contato qualificado.",
    build: [
      "Site multi-página (Home, Minha História, O Método, Resultados, Planos, Consultoria) com header fixo e navegação por rotas",
      "Hero em tela cheia com identidade visual dark & gold",
      "Calculadora de IMC interativa, com classificação automática do resultado",
      "Geração automática de mensagem pré-formatada para contato via WhatsApp a partir dos dados calculados",
      "Botão flutuante de WhatsApp e CTAs de conversão em todas as páginas",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts", "Integração com WhatsApp"],
    liveUrl: "https://ironbase-two.vercel.app/",
    githubUrl: null,
    image: {
      desktop: "/projects/ironbase-desktop.webp",
      mobile: "/projects/ironbase-mobile.webp",
    },
    demonstrates:
      "Estruturação de um site multi-página do zero, lógica de interatividade em JavaScript puro e foco em conversão.",
  },
  {
    slug: "swiss-gourmert",
    title: "Swiss Gourmert",
    category: "Aplicação web com backend Python",
    featured: false,
    problem:
      "Apresentar a proposta, o cardápio e a localização de um restaurante, com uma aplicação servida por um backend real em vez de páginas estáticas.",
    build: [
      "Backend em FastAPI servindo páginas via templates Jinja2 (Início, Cardápio, História, Mídia & Eventos, Localização)",
      "Navegação responsiva com menu hamburguer para mobile",
      "Seções split-image para contar a história e os diferenciais do restaurante",
      "Deploy como função serverless na Vercel",
    ],
    tech: ["Python", "FastAPI", "Jinja2", "HTML", "CSS", "JavaScript", "Vercel (serverless)"],
    liveUrl: "https://swiss-gourmert.vercel.app/",
    githubUrl: "https://github.com/delvale412/Swiss-Gourmert",
    image: {
      desktop: "/projects/swiss-gourmert-desktop.webp",
      mobile: "/projects/swiss-gourmert-mobile.webp",
    },
    demonstrates:
      "Construção de uma aplicação com backend Python real, estruturação de rotas e templates, e deploy serverless.",
  },
  {
    slug: "landingpage",
    title: "Landing Page",
    category: "Landing page institucional",
    featured: false,
    problem:
      "Construir, como peça de portfólio, uma landing page completa para um escritório de advocacia (conteúdo fictício), cobrindo apresentação, prova social e conversão.",
    build: [
      "Header fixo com menu responsivo (painel lateral no mobile)",
      "Hero com ilustração SVG própria e badges de confiança",
      "Contador animado de estatísticas e abas interativas de áreas de atuação",
      "Carrossel de depoimentos com autoplay e FAQ em acordeão",
      "Mapa do Google Maps incorporado e formulário que redireciona para o WhatsApp",
      "Animações de entrada ao rolar a página (scroll reveal)",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "SVG"],
    liveUrl: "https://landingpage-mu-pink-35.vercel.app/",
    githubUrl: "https://github.com/delvale412/landingpage",
    image: {
      desktop: "/projects/landingpage-desktop.webp",
      mobile: "/projects/landingpage-mobile.webp",
    },
    demonstrates:
      "Construção de interfaces ricas em interatividade sem frameworks, com atenção a UX, microinterações e ilustração própria.",
  },
];
