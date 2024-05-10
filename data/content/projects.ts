import bookretreats from "public/static/projects/bookretreats.png";
// https://nextjs.org/docs/app/building-your-application/optimizing/images#local-images
import ebisus from "public/static/projects/ebisus.png";
import sharewell from "public/static/projects/sharewell.png";
import sturdy from "public/static/projects/sturdy.png";
import { Project } from "types";

import { kebabCase } from "@/utils/utils";

const projects: Project[] = [
  {
    id: 1,
    title: "Ebisu's Bay Marketplace",
    desc: "Combines NFT and DEX trading with GameFi, enabling users to battle for market dominance.",
    img: ebisus,
    imgPath: "/static/projects/ebisus.png",
    link: "https://app.ebisusbay.com/",
    github: "",
    tags: ["React", "NextJS", "TypeScript", "Ethers.js", "TailwindCSS", "AWS"],
  },
  {
    id: 2,
    title: "BookRetreats",
    desc: "Discover the best-handpicked retreats and pieces of training on the planet.",
    img: bookretreats,
    imgPath: "/static/projects/bookretreats.png",
    link: "https://bookretreats.com/",
    tags: ["TypeScript", "NextJS", "TailwindCSS", "Express", "Node"],
  },
  {
    id: 3,
    title: "Sturdy Finance",
    desc: "Sturdy enables DeFi's best-yield farmers to farm with up to 10x leverage!",
    img: sturdy,
    imgPath: "/static/projects/sturdy.png",
    link: "https://sturdy.finance/",
    tags: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Express",
      "Node",
      "Ethers.js",
      "Solidity",
    ],
  },
  {
    id: 4,
    title: "ShareWell",
    desc: "Join the largest online community for peer-led mental health.",
    img: sharewell,
    imgPath: "/static/projects/sharewell.png",
    link: "https://sharewellnow.com/",
    tags: ["NextJS", "React Query", "TailwindCSS", "Express", "Node", "Figma"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
