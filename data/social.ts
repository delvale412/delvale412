export const social = {
  name: "Matheus do Vale Lameira",
  brand: "Vale Desenvolvimentos",
  shortName: "Matheus do Vale",
  role: "Desenvolvedor de sites e sistemas",
  yearsExperience: 8,
  location: "Brasília, DF",
  email: "mvlameira@gmail.com",
  instagram: "https://www.instagram.com/valedesenvolvimento/",
  instagramHandle: "@valedesenvolvimento",
  github: "https://github.com/delvale412",
  githubHandle: "@delvale412",
  linkedin: "https://www.linkedin.com/in/matheus-do-vale-lameira/",
  resumeUrl: "/cv/Matheus-do-Vale-Lameira-CV.pdf",
  whatsappDisplay: "(61) 99929-8384",
  whatsappBase: "https://wa.me/5561999298384",
  whatsapp:
    "https://wa.me/5561999298384?text=" +
    encodeURIComponent("Olá, Matheus! Vi seu site e gostaria de saber mais sobre seus serviços."),
};

/** WhatsApp link that opens the chat with a message already typed. */
export function whatsappLink(message: string) {
  return `${social.whatsappBase}?text=${encodeURIComponent(message)}`;
}
