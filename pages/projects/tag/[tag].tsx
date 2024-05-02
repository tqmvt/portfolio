import Heading from "components/projects/Heading";
import Projects from "components/projects/Projects";
import Page from "components/utility/Page";
import { GetStaticPaths, GetStaticProps } from "next";
// import More from "components/projects/More";
import Link from "next/link";

import { allKebabTags, allTags } from "@/data/content/projects";
import projects from "@/data/content/projects";

import { kebabArray, kebabCase } from "@/utils/utils";

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = [];
  projects.forEach((project) =>
    project.tags.forEach((tag) => {
      allTags.push(tag);
    }),
  );
  const uniqueAllTags = [...new Set(allTags)];
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${kebabCase(path)}` },
  }));
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: { tag: string };
}) => {
  const tag = params.tag;
  const filteredProjects = projects.filter((project) =>
    [...kebabArray(project.tags)].includes(tag),
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        filteredProjects,
        tag: tag,
      }),
    ),
  };
};

function PostPage({ filteredProjects, tag }) {
  const capsTag = allTags[allKebabTags.indexOf(tag)];
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase for all of my ${capsTag} projects.`,
      }}
    >
      <Heading tag={capsTag} />
      <Projects overwriteProjects={filteredProjects} />

      <Link href="/projects">
        <div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
          View All
        </div>
      </Link>
      {/* <More /> */}
    </Page>
  );
}

export default PostPage;
