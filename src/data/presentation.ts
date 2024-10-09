type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "da@gmail.com",
  title: "Hi, I’m Da 👋",
  description:
    "Hello, I'm a *IT student in Cambodia*.",
  socials: [
  
    {
      label: "Github",
      link: "https://github.com/doeunda",
    },
  ],
};

export default presentation;
