"use client";
import "./page.scss";
import headerImage from "../../public/images/header.png";
import React from "react";
import About from "@/pages/about/about";
import Experience from "@/pages/experience/experience";
import { GitHub, Instagram, LinkedIn, Public } from "@mui/icons-material";


export default function Home() {
  interface LocationsInterface {
    city: string;
    province: string;
    country: string;
    region: string;
  };

  const locations: Array<LocationsInterface> = [
    { city: "Ho Chi Minh City", province: "VN", country: '', region: "SEA" },
    { city: "Los Angeles", province: "CA", country: 'US', region: "NA" },
    { city: "San Diego", province: "CA", country: 'US', region: "NA" },
    { city: "Irvine", province: "CA", country: 'US', region: "NA" },
    { city: "Jersey City", province: "NJ", country: 'US', region: "NA" },
    { city: "New York City", province: "NY", country: 'US', region: "NA" },
    { city: "Torrance", province: "CA", country: 'US', region: "NA" },
    { city: "Seattle", province: "WA", country: 'US', region: "NA" }
  ];


  return (
    <div className="page">
      <header className="header">
        <img 
          src={headerImage.src}
          alt="header image"
          className="header-img"
        />

        {/* <div className="locations">
          {locations.map((location, ind) => (
            <div className={`location ${location.city.replace(/ /g, "_")}`} key={ind}>
              <Public />
              <span>{`${location.city}, ${location.province}${location.country ? `, ${location.country}` : ''}`}</span>
            </div>
          ))}
        </div> */}
      </header>

      <main className="main">
        <About />
        <Experience />
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
