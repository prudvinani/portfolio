import React from "react";
import Link from "next/link";
import Image from "next/image";
import osmania from "../../public/osmania.png";
import bhavans from "../../public/bhavans.png";
const Skills = () => {
  return (
    <div>
      <p className="text-xl text-center  font-bold font-mono">Skills</p>
      <div className="space-x-2 pt-2 space-y-2 text-center">
        <button className="bg-black text-white inline px-4 py-[6px] rounded-xl text-[10px] font-mono ">
          Javascript
        </button>
        <button className="bg-black text-white inline px-4 py-[6px] rounded-xl text-[10px]  font-mono ">
          React
        </button>
        <button className="bg-black text-white inline px-4 py-[6px] rounded-xl text-[10px]  font-mono ">
          Typescirpt
        </button>
        <button className="bg-black text-white inline px-4 py-[6px] rounded-xl text-[10px]  font-mono ">
          Node.js
        </button>
        <button className="bg-black text-white inline px-4 py-[6px] rounded-xl text-[10px]  font-mono  ">
          Mongodb
        </button>
        <button className="bg-black text-white inline px-4 py-[6px] rounded-xl text-[10px]  font-mono ">
          Postgres
        </button>
      </div>

      <p className="font-mono text-xl mt-5">Education</p>
      <div className="flex  justify-between mt-3">
        <div className="flex items-center">
          <Image
            src={osmania}
            alt="osmania"
            width={40}
            height={40}
            className="rounded-full    dark:bg-white dark:text-white"
          />

          <div className="ml-2 ">
            <p className="font-mono leading-4">Osmania University</p>
            <p className="font-mono text-gray-500 tracking-tighter text-sm">
              Master of Science (MSC)
            </p>
          </div>
        </div>

        <div className="font-mono text-[10px] md:text-sm">present</div>
      </div>

      <div className="flex  justify-between mt-5">
        <div className="flex items-center">
          <Image
            src={bhavans}
            alt="osmania"
            width={40}
            height={40}
            className="rounded-full    dark:bg-white dark:text-white"
          />

          <div className="ml-2 ">
            <p className="font-mono leading-4 text-sm">
              Bhavan&apos;s Vivekanada Clg
            </p>
            <p className="font-mono text-gray-500 tracking-tighter text-sm">
              Bachelor of Science (BSC)
            </p>
          </div>
        </div>

        <div className="font-mono text-[10px] md:text-sm">2021-2024</div>
      </div>

      {/* X dot com */}
      <p className="text-center pt-36 text-gray-400 font-medium cursor-pointer font-mono ">
        Say Hello on{" "}
        <span className="text-blue-400 hover:underline">
          <Link href="https://x.com/prudvinani_"> X dot com</Link>
        </span>
      </p>

      <p className="text-center pt-2 s text-gray-400 font-mono text-sm md:text-medium">
        @2025 Palvai Prudvi. All rights reserved
      </p>
      <p className="text-center pb-32 font-mono pt-2">
        Made with ❤️ by Palvai Prudvi
      </p>
    </div>
  );
};

export default Skills;
