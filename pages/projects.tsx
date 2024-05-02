import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Projects from "components/projects/Projects";
import Page from "components/utility/Page";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: "Projects",
        desc: "I love coding using tools like React, NextJS, Tailwind, and many more! Here are some of my favorite projects.",
      }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
