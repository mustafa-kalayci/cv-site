import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "./photo.jpg";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-gray-800 bg-white">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-[#744f9c] text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to my webpage
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <motion.div
          className="text-sm md:text-base leading-relaxed text-gray-800 md:pr-10 order-2 md:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            I received my B.S. degree in Mathematics from Dokuz Eylül University, İzmir, in 2011, and my M.S. degree from the İzmir Institute of Technology in 2014. I completed my Ph.D. in Mathematics at Sabancı University, İstanbul, in January 2019, under the supervision of Prof. Alev Topuzoğlu.
          </p>
          <br />
          <p>
            Following my Ph.D., I held postdoctoral positions at Sabancı University, working with Prof. Cem Güneri on coding theory and with Dr. Nurdagül Anbar Meidl on cryptographically significant functions and their use in combinatorics. I am currently a postdoctoral researcher at the University of Klagenfurt, Austria, under the supervision of Dr. Wilfried Meidl. My research has also involved visits to Prof. Alexander Pott (Otto-von-Guericke University, Germany) and Prof. Enes Pasalic (University of Primorska, Slovenia).
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={ProfilePic}
            alt="Profile"
            className="rounded-full shadow-lg w-3/4 md:w-2/3 object-cover h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}