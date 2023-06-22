// import React from 'react';
import Socials from "./Socials";

const Footer = () => {
    return (
      <footer>
        <h2>Contact</h2>
        <p>this is the footer</p>
        <form action="submit">
          <input type="text" />
          <input type="email" />
          <input type="text" />
          <button>send message</button>
        </form>
        <Socials />
        <a href="https://www.figma.com/file/Zfgqvt7I9TmD4SJbkqHyvh/single-page-developer-portfolio?type=design&node-id=0%3A1&t=BPbzjKSG5mK5dIHr-1" target="_blank" rel="noreferrer" >Figma File for This Site</a>
      </footer>
    );
  };
  
  export default Footer;
  