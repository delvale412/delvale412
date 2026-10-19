export type Plan = {
  name: string;
  tagline: string;
  deadline: string;
  features: string[];
  highlight?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Essencial",
    tagline: "Para o seu negócio aparecer na internet e começar a receber contatos.",
    deadline: "Pronto em 7 dias úteis",
    features: [
      "1 página completa, direta ao ponto",
      "Botão de WhatsApp com mensagem pronta",
      "Formulário que envia o pedido para o seu WhatsApp",
      "Funciona bem no celular e no computador",
      "Aparece nas buscas do Google",
      "Medição de visitas e de contatos recebidos",
    ],
  },
  {
    name: "Profissional",
    tagline: "Site e anúncios trabalhando juntos para o seu negócio ser visto.",
    deadline: "Pronto em 10 dias úteis",
    highlight: true,
    features: [
      "Tudo do Essencial, com até 5 páginas",
      "Seu negócio no Google, com mapa e Google Meu Negócio",
      "Primeira campanha de anúncios no Instagram montada",
      "Medição completa: você vê o que cada anúncio traz de contato",
      "Vídeo ensinando a usar o seu site",
    ],
  },
  {
    name: "Completo",
    tagline: "Para quem vende produtos ou serviços variados e quer uma vitrine de verdade.",
    deadline: "Pronto em 15 a 20 dias úteis",
    features: [
      "Tudo do Profissional, com até 10 páginas ou catálogo de produtos",
      "Catálogo com filtros ou painel simples para você mesmo atualizar",
      "Campanha de anúncios com mais criativos",
      "Medição completa de visitas e contatos",
      "Vídeo ensinando a usar o seu site",
    ],
  },
];

export const care = {
  title: "Cuidado mensal opcional",
  text: "Hospedagem, ajustes, suporte e um relatório simples todo mês, para o seu site continuar funcionando e atualizado.",
};

export const guarantees = [
  "Proposta sem compromisso, direto no WhatsApp",
  "Pagamento facilitado, com parcelamento no cartão",
  "Garantia de 30 dias para correções depois de entregue",
];
