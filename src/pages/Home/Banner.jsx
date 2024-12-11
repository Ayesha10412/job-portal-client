import React from "react";
import { motion } from "motion/react";
import { easeOut } from "motion";
import img1 from "../../assets/team/happy-overjoyed-business-team-celebrate-corporate-victory.jpg";
import img2 from "../../assets/team/businesspeople-having-informal-meeting.jpg";
const Banner = () => {
  return (
    <div className="hero min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={img1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-600 shadow-2xl"
          />
          <motion.img
            src={img2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 5, delay: 5, repeat: Infinity }}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-600 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ x: 50, color: ["red", "green"] }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#56fc03", "#03adfc", "#0318fc", "#ad03fc"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
