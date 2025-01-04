import React from "react";
import Image from "next/image";
import secondbrain from "../../public/secondbrain.jpeg";
import realchat from "../../public/reallchat.jpeg"
import realvoting from "../../public/realtimevoting.jpeg"
import vscode from "../../public/vs.png"
import heygen from "../../public/heyproject.png"
import { GiWorld } from "react-icons/gi";
import Link from "next/link"






const Projects = () => {
  return (
    <div>
      <div className="text-center mt-5 font-mono">
        <p className="bg-black text-white inline px-4 py-[6px] rounded-xl text-sm ">
          My Projects
        </p>
        <p className=" text-xl md:text-5xl font-bold tracking-tighter font-montserrat mt-3">
          Check out my latest work
        </p>
        <p className="text-gray-500  text-[10px] md:text-xl pt-2  ">
          I&apos;ve built some stuff<span>,</span>here are some that I like.
        </p>
      </div>

      {/* all the project s */}
      <div className="grid grid-rows-1   md:grid-cols-2 gap-2 mt-6 ">
        <div className="cursor-pointer ">
          <Link href="https://secondbrain-blue.vercel.app"><Image src={secondbrain} alt="al" width={300} /></Link>
          <p className="font-mono mt-1 font-semibold">Secondbrain</p>
          <p className="text-sm text-gray-400  pt-1 font-medium leading-4 font-mono  ">
            Share your entire collection of notes<span>,</span> documents<span>,</span>tweets<span>,</span> and videos
            with others.
          </p>

          <div className="flex items-center space-x-2 mt-3">
          <button className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
  React.js
</button>
            <button className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Typescript
            </button>

            <button className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Shadcn UI
            </button>
            <button className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Tailwind css
            </button>
          </div>
          <button className="text-[9px] md:text-[11px] mt-2 bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
            Express
          </button>

          <button  className=" ml-2 text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
            Mongodb
          </button>
          <br />

        

        <Link href="https://secondbrain-blue.vercel.app">
        <div className="flex items-center mt-2">


            <p>
              <GiWorld size={12} />
            </p>
            <p className="text-[12px] ml-1">Website</p>
            
          </div></Link>



        </div>

        <div className="cursor-pointer ">
          <Link href="https://webchatprudvi.vercel.app"><Image src={realchat} alt="al" width={300} /></Link>
          <p className="mt-2 font-semibold font-mono">Real Time Chat</p>
          <p className="text-sm text-gray-400 font-mono">
            A real time chat app that has temporary rooms. Scalable.
          </p>

          <div className="flex items-center space-x-2 mt-3">
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              React.js
            </button>
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Shadcn UI
            </button>
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Tailwind css
            </button>
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Express
            </button>
          </div>
          <button  className=" mt-2 mr-2 text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
            Typescript
          </button>

          <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
            Socket.oi
          </button>
          <br />

          <Link href="https://webchatprudvi.vercel.app">
        <div className="flex items-center mt-2">


            <p>
              <GiWorld size={12} />
            </p>
            <p className="text-[12px] ml-1">Website</p>
            
          </div></Link>
        </div>
      </div>

      <div className="grid grid-rows-1  md:grid-cols-2 gap-1 mt-6 ">
        <div className="cursor-pointer ">
        <Link href="https://votingwebsitesss.vercel.app"><Image src={realvoting} alt="al" width={300} /></Link>
        <p className="mt-2 font-mono font-semibold">Real Time Polling</p>
          <p className="text-sm text-gray-400 font-mono">
            I built this interactive voting
          </p>

          <div className="flex items-center space-x-2 mt-3">
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              React.js
            </button>
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Shadcn UI
            </button>
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Tailwind css
            </button>
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Express
            </button>
          </div>
          <button  className="text-[9px] mr-2 mt-2 md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
            Typescript
          </button>

          <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
            Websocket
          </button>

          <Link href="https://votingwebsitesss.vercel.app
          // ">
        <div className="flex items-center mt-2">


            <p>
              <GiWorld size={12} />
            </p>
            <p className="text-[12px] ml-1">Website</p>
            
          </div></Link>
        </div>

        <div className="cursor-pointer ">
        <Link href="https://vscode-clone-olive.vercel.app"><Image src={vscode} alt="al" width={300} /></Link>
        <p className="mt-2 font-mono font-semibold">VisualStudio (UI)</p>
          <p className="text-sm text-gray-400  font-mono">
            It Just Simple Landing of VisualStudio (UI){" "}
          </p>

          <div className="flex items-center space-x-2 mt-3">
            <button className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              React.js
            </button>
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Tailwind css
            </button>
          </div>

          <Link href="https://vscode-clone-olive.vercel.app">
        <div className="flex items-center mt-2">


            <p>
              <GiWorld size={12} />
            </p>
            <p className="text-[12px] ml-1">Website</p>
            
          </div></Link>
        </div>
      </div>

      <div className="grid grid-rows-1   md:grid-cols-2 gap-1 mt-6 ">
        <div className="cursor-pointer ">
        <Link href="https://heygen-navy.vercel.app"><Image src={heygen} alt="al" width={300} /></Link>
          <p className="mt-2 font-mono font-semibold">Heygen (UI)</p>
          <p className="text-sm text-gray-400 font-mono">
            It Just Simple Landing of Heygen (UI){" "}
          </p>

          <div className="flex items-center space-x-2 mt-3">
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              React.js
            </button>
            <button  className="text-[9px] md:text-[11px] bg-gray-200 dark:bg-neutral-900 dark:text-white font-montserrat font-semibold py-[3px] px-2 rounded-lg">
              Tailwind css
            </button>
          </div>

          <Link href="https://heygen-navy.vercel.app">
        <div className="flex items-center mt-2">


            <p>
              <GiWorld size={12} />
            </p>
            <p className="text-[12px] ml-1">Website</p>
            
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
