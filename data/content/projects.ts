import { kebabCase } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Portfolio",
    desc: "🔷 My sweet sweeet portfolio built with React, NextJS, and TailwindCSS.",
    img: "/static/projects/portfolio.png",
    link: "https://taylor.vercel.app/",
    github: "https://github.com/tqmvt/portfolio",
    tags: ["React", "NextJS", "TailwindCSS", "Vercel"],
  },
  {
    id: 2,
    title: "ClubRare",
    desc: "Trade real-world collectibles and earn huge rewards on the community-owned phygital marketplace",
    img: "/static/projects/clubrarexyz.png",
    link: "https://www.clubrare.xyz/",
    tags: ["NextJS", "TailwindCSS", "Express", "Node"],
  },
  {
    id: 3,
    title: "Priceline",
    desc: "Save big on your next hotel",
    img: "/static/projects/priceline.png",
    link: "https://www.priceline.com/",
    tags: ["NextJS", "TailwindCSS", "Express", "Node"],
  },
];

export const allTags = [];

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag));
});

export const allKebabTags = allTags.map((tag) => kebabCase(tag));

export default projects;
