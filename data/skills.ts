export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Linguagens",
    items: ["Python", "JavaScript", "C#", "C++", "PL/SQL", "SQL"],
  },
  {
    category: "Web",
    items: ["HTML", "CSS", "Frontend", "Backend", "Django"],
  },
  {
    category: "Banco de Dados",
    items: ["Oracle", "Oracle APEX", "SQL", "Modelagem de Dados"],
  },
  {
    category: "APIs",
    items: ["Desenvolvimento de APIs", "Integração de APIs"],
  },
  {
    category: "Infraestrutura",
    items: ["Docker", "Kubernetes"],
  },
  {
    category: "Desenvolvimento",
    items: ["Git", "Full Stack", "Arquitetura de Software"],
  },
];
