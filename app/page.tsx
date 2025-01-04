import Image from "next/image";
import Projects from "./Projects/Projects";
import Skills from "./Projects/Skills";
import me from "../public/me.jpeg";
import { RiTwitterXFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="md:mx-96 mx-10 mt-5">
      <div className="flex justify-between items-center pt-20">
        <div>
          <p className="font-montserrat font-bold text-[22px] md:text-5xl tracking-tight">
            Hi<span>,</span> Prudvi here
          </p>
          <p className="font-light mt-1 font-mono text-[12px] md:text-xl">
            21 year old<span>,</span> love to build cool stuff.
          </p>
        </div>

        <div>
          <Image
            src={me}
            alt="me"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <p className="text-xl font-bold mt-10 font-mono">About</p>
      <p className="text-gray-500 font-mono tracking-tight">
        I am a Master of Science student with a passion for programming. As a
        self-taught coder<span>,</span> I love exploring new technologies and
        building projects using code. In my free time<span>,</span> I enjoy
        playing carrom. If you&apos;re passionate about coding and web
        development<span>,</span> I would love to connect!
        <span style={{ display: "inline" }} className="hover:underline">
          <a href="https://x.com/prudvinani_">
            <RiTwitterXFill
              className="text-black inline ml-2 hover:underline"
              size={12}
              style={{ verticalAlign: "middle" }}
            />
          </a>
        </span>
      </p>

      <Projects />
      <Skills />
    </div>
  );
}
