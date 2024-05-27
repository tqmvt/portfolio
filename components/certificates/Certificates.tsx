import Image from "next/image";

import { certificates } from "@/data/content/certificates";
import { placeholderImagePath } from "@/data/global";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {certificates.map((item, index) => {
        return (
          <div className="w-full" key={index}>
            <a href={item.link} target="_blank" className="w-full relative">
              <Image
                className="hover:opacity-75 h-96 object-cover"
                src={item.img}
                alt={item.label}
                width={564}
                height={564}
                style={{ width: "100%" }}
                placeholder="blur"
                blurDataURL={placeholderImagePath}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Designs;
