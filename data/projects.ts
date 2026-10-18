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
    category: "Site institucional completo",
    featured: true,
    problem:
      "Apresentar a metodologia de um consultor de alta performance física e transformar visitas em contatos interessados.",
    build: [
      "Site completo com várias páginas conectadas (Home, Minha História, O Método, Resultados, Planos, Consultoria), fácil de navegar",
      "Visual de alto impacto, com identidade escura e dourada",
      "Calculadora de IMC interativa, que já mostra o resultado na hora",
      "A calculadora gera automaticamente uma mensagem pronta pra enviar no WhatsApp",
      "Botão de WhatsApp sempre visível e chamadas para contato em todas as páginas",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts", "Integração com WhatsApp"],
    liveUrl: "https://ironbase-two.vercel.app/",
    githubUrl: null,
    image: {
      desktop: "/projects/ironbase-desktop.webp",
      mobile: "/projects/ironbase-mobile.webp",
    },
    demonstrates:
      "Capacidade de montar um site completo do zero, criar interações sob medida e manter o foco em gerar contatos reais.",
  },
  {
    slug: "swiss-gourmert",
    title: "Swiss Gourmert",
    category: "Site de restaurante com sistema próprio",
    featured: false,
    problem:
      "Apresentar o cardápio, a história e a localização de um restaurante, com um site rápido e fácil de manter atualizado.",
    build: [
      "Site com várias páginas (Início, Cardápio, História, Mídia & Eventos, Localização), geradas por um sistema próprio nos bastidores",
      "Menu responsivo, adaptado pro celular",
      "Seções visuais contando a história e os diferenciais do restaurante",
      "No ar, hospedado na Vercel",
    ],
    tech: ["Python", "FastAPI", "Jinja2", "HTML", "CSS", "JavaScript", "Vercel (serverless)"],
    liveUrl: "https://swiss-gourmert.vercel.app/",
    githubUrl: "https://github.com/delvale412/Swiss-Gourmert",
    image: {
      desktop: "/projects/swiss-gourmert-desktop.webp",
      mobile: "/projects/swiss-gourmert-mobile.webp",
    },
    demonstrates:
      "Capacidade de construir um site com sistema próprio por trás (não só páginas prontas), o que facilita atualizações e crescimento no futuro.",
  },
  {
    slug: "landingpage",
    title: "Landing Page",
    category: "Landing page institucional",
    featured: false,
    problem:
      "Criar uma landing page completa pra um escritório de advocacia (conteúdo fictício, projeto de portfólio), cobrindo apresentação, prova social e conversão de quem visita.",
    build: [
      "Menu fixo que se adapta ao celular, virando um painel lateral",
      "Primeira tela de impacto, com ilustração própria e selos de confiança",
      "Números animados e abas organizando as áreas de atuação",
      "Depoimentos em carrossel automático e perguntas frequentes",
      "Mapa incorporado e formulário que leva direto pro WhatsApp",
      "Animações suaves conforme a pessoa rola a página",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "SVG"],
    liveUrl: "https://landingpage-mu-pink-35.vercel.app/",
    githubUrl: "https://github.com/delvale412/landingpage",
    image: {
      desktop: "/projects/landingpage-desktop.webp",
      mobile: "/projects/landingpage-mobile.webp",
    },
    demonstrates:
      "Capacidade de criar interfaces ricas em interação sem depender de ferramentas prontas, com atenção aos detalhes de uso e uma ilustração própria.",
  },
  {
    slug: "falha-critica-3d",
    title: "Falha Crítica 3D",
    category: "Loja virtual de estúdio de impressão 3D",
    featured: false,
    problem:
      "Dar a um estúdio de miniaturas e estatuetas em resina uma vitrine online completa, que mostra o catálogo e transforma cada visita em um pedido ou orçamento pelo WhatsApp.",
    build: [
      "Site com várias páginas (Home, Catálogo Pronta Entrega, página de produto, Projetos Personalizados), com visual temático de RPG e cultura geek",
      "Catálogo com filtros por universo, escala e acabamento, para o cliente achar a peça certa rápido",
      "Página de produto com detalhes da peça e botão de pedido direto no WhatsApp",
      "Formulário de orçamento para peças sob medida, que monta a mensagem pronta para o WhatsApp do estúdio",
      "Preferências e pedidos salvos no próprio navegador, sem precisar de cadastro",
      "No ar, hospedado na Vercel",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Google Fonts", "Integração com WhatsApp", "Vercel"],
    liveUrl: "https://falha-critica3d.vercel.app/",
    githubUrl: "https://github.com/delvale412/falha_critica3d",
    image: {
      desktop: "/projects/falha-critica-3d-desktop.webp",
      mobile: "/projects/falha-critica-3d-mobile.webp",
    },
    demonstrates:
      "Capacidade de montar uma vitrine comercial completa para um negócio real, com identidade visual própria, filtros interativos e um caminho curto entre o interesse e o pedido.",
  },
];
