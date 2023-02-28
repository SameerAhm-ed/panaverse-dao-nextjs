import vector from "public/Group 1.png";
import background from "public/background.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    // Hero Section
    <section id="hero">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
        {/* Left item */}
        <div className="flex flex-col mb-32 mt-32 space-y-4 md:w-1/2">
          <h4 className="text-teal-700 font-semibold text-md -mb-4">
            Presidential Initiative for Artificial Intelligence and Computing
            (PIAIC)
          </h4>
          <h1 className="max-w-lg text-4xl font-bold text-center md:text-6xl md:text-left">
            Certified Web 3.0 and Metaverse Developer
          </h1>
          <p className="max-w-lg text-center text-darkGrayishBlue md:text-left">
            A One and Quarter Years Panaverse DAO Earn as you Learn Program
            Getting Ready for the Next Generation of the Internet
          </p>
          <p className="max-w-lg text-center text-darkGrayishBlue md:text-left">
            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
            Cloud, Edge, Ambient Computing/IoT, Network Automation, and
            Bioinformatics Technologies
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-red-700 rounded-full baseline hover:bg-red-600 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2">
          <Image src={vector} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
