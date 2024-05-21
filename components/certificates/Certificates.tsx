import { certificates } from "@/data/content/certificates";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
      {certificates.map((item, index) => {
        return (
          <div className="w-full" key={index}>
            <a href={item.link} target="_blank" className="w-full">
              <img
                className="w-full h-96 hover:opacity-75 transition-opacity object-cover"
                src={item.img}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Designs;
