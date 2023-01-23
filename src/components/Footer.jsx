import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import bt from "../assets/u.jpg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={bt} alt="Founder" />

        <h2>Ujwal Pudasaini</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/ujwal-pudasaini-916b1222a/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/pudasaini.ujwal/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Ujwal888" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
