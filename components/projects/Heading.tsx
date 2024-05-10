import Image from "next/image";

interface HeadingProps {
  tag?: string;
}
function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${
        tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"
      } w-full text-center relative`}
    >
      {tag ? (
        <>
          <h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative">
            Projects built with <b>{tag}</b>
            <Image
              className="sqD -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
              src="/static/doodles/hero/code.svg"
              width={32}
              height={32}
              alt="code"
            />
          </h1>
        </>
      ) : (
        <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
          Projects
          <Image
            className="sqD -top-8 -right-8 absolute"
            src="/static/doodles/hero/code.svg"
            width={40}
            height={40}
            alt="code"
          />
        </h1>
      )}
      {!tag && (
        <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
          I&apos;ve built cool apps and websites using anything from Web2 to
          Web3 (and even AI). Here are some of my favorite projects over the
          course of my journey.
        </p>
      )}
    </div>
  );
}

export default Heading;
