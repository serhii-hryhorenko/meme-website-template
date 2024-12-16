/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import "./App.scss";
import mainImage from "./assets/main.png";
import logo from "./assets/logo.png";
import config from "./assets/config.json";

import TelegramIcon from "/public/telegram.svg?react";
import XIcon from "/public/x.svg?react";
import HeroPicture from "./components/HeroPicture";
import TokenContract from "./components/TokenContract";
import AboutBlock from "./components/AboutBlock";

const App: React.FC = () => {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />

      <main>
        <section id="main-image-block">
          <HeroPicture imageHref={mainImage} />

          <div className="token-info">
            <TokenContract address={config.address} />
          </div>
        </section>

        <div id="about-column">
          <AboutBlock text={config.about} />

          <div id="social-links">
            <button className="follow">Follow Us</button>

            <a
              className="icon"
              href={config.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon width="50" height="50" />
            </a>

            <a
              className="icon"
              href={config.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon width="50" height="50" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
