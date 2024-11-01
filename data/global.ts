type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const profile = {
  name: "Taylor Lee",
  title: "Senior Software Engineer",
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Certificates",
    path: "/certificates",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Certificates",
          link: "/certificates",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/tqmvt",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        // {
        //   name: "LinkedIn",
        //   link: "",
        //   icon: "/static/icons/linkedin-f.svg",
        //   leavesWebsite: true,
        // },
        {
          name: "Twitter",
          link: "https://twitter.com/_tqmvt",
          icon: "/static/icons/twitter.svg",
          leavesWebsite: true,
        },
        {
          name: "Stackoverflow",
          link: "https://stackoverflow.com/users/13993901",
          icon: "/static/icons/stack-overflow.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:taylorleefix@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "0x0C45bad04b24c208F93C5373CA5667e0376D985B",
    paypal: "",
    message: "I appreciate your support very much! 💙",
  },
};

export const footerUrls = {
  buymeacoffee: "https://etherscan.io/address/",
  paypal: "https://paypal.me/",
};

export const placeholderImagePath = "/static/placeholders/placeholder.webp";
