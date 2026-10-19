export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  { number: "01", title: "Conversa", description: "Você me conta sobre o seu negócio no WhatsApp e o que quer alcançar." },
  { number: "02", title: "Proposta", description: "Eu indico o pacote certo para o seu negócio, com prazo combinado." },
  { number: "03", title: "Criação", description: "Monto o seu site com o seu estilo e te mostro como está ficando." },
  { number: "04", title: "Ajustes", description: "Você pede as mudanças e eu deixo do jeito que você quer." },
  { number: "05", title: "No ar", description: "Publico o site e te ensino a usar. Se quiser, continuo cuidando dele." },
];
