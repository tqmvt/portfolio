import Image from "next/image";
import Link from "next/link";

import { footer, footerUrls } from "@/data/global";

import { Online } from "./Online";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4 flex">
                      {item.leavesWebsite ? (
                        <Link href={item.link} target="_blank">
                          <div className="flex justify-start items-center gap-1">
                            {item.icon && (
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt={item.name}
                              />
                            )}
                            {item.name}
                          </div>
                        </Link>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee !== "" && (
              <div>
                <a
                  href={`${footerUrls.buymeacoffee}${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <img
                    src="/static/misc/buy-me-a-coffee.svg"
                    className="h-12 md:mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
                </a>
              </div>
            )}
            {footer.support.paypal !== "" && (
              <div>
                <a
                  href={`${footerUrls.paypal}${footer.support.paypal}`}
                  target="_blank"
                >
                  <img
                    src="/static/misc/paypal.svg"
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
                </a>
              </div>
            )}
            <p className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-8 pointer-events-none">
        <a
          className="w-auto inline-flex items-center sm:w-auto pointer-events-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href="https://github.com/tqmvt/portfolio"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
      <Online active />
    </footer>
  );
}

export default Footer;
