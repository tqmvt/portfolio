import { StaticImageData } from "next/image";

export type Project = {
  id: number;
  title: string;
  desc: string;
  img: StaticImageData;
  imgPath: string;
  link?: string;
  github?: string;
  tags: string[];
};
