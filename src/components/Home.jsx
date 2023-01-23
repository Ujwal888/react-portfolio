import { motion, animate } from "framer-motion";
import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import vg from "../assets/a.jpg";

const Home = () => {
  const clientCount = useRef();
  const projectCount = useRef();
  const animationclientCount = () => {
    animate(0, 5, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animation = {
    h1: {
      initial: {
        x: "-100",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi I'am <br /> Ujwal pudasaini
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "  A Designer ", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:official.ujwalpudasaini@gmail.com">Hire Me </a>
            <a href="#work">
              Projects
              <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              <motion.span whileInView={animationclientCount} ref={clientCount}>
                {" "}
              </motion.span>
            </p>
            <span>Clinet</span>
          </article>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animationProjectsCount}
                  ref={projectCount}
                >
                  {" "}
                </motion.span>
              </p>
              <span>Project Made</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>officials.ujwalpudasaini@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={vg} alt="ujwal"></img>
      </section>
    </div>
  );
};

export default Home;
