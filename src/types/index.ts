export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type NavItem = {
  label: string;
  href: string;
};
