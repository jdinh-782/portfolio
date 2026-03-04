"use client";
import "./page.scss";
import headerImage from "../../public/images/header.png";
import React from "react";
import About from "@/pages/about/about";
import Experience from "@/pages/experience/experience";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";


export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <img 
          src={headerImage.src}
          alt="header image"
          className="header-img"
        />
      </header>

      <main className="main">
        <div className="sections">
            <About />
            <Experience />
        </div>
      </main>

      {/* Footer component */}
      <footer className="footer">
        <a href="https://www.instagram.com/jdinh782/" target="_blank" rel="noopener">
          <span>© 2026 Johnson Dinh</span>
        </a>

        <a href="https://www.instagram.com/jdinh782/" target="_blank" rel="noopener">
          <Instagram />
        </a>

        <a href="https://www.linkedin.com/in/johnson-dinh/" target="_blank" rel="noopener">
          <LinkedIn />
        </a>

        <a href="https://github.com/jdinh-782" target="_blank" rel="noopener">
          <GitHub />
        </a>
      </footer>
    </div>
  );
}
