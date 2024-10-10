import "./page.scss";
import headerImage from "../../public/images/header.png";
import { Description, Email, GitHub, Instagram, LinkedIn, Public } from "@mui/icons-material";
import { Button } from "@mui/material";


export default function Home() {
  const locations = [
    { city: "Ho Chi Minh City", province: "VN", country: '', region: "SEA" },
    { city: "Los Angeles", province: "CA", country: 'US', region: "NA" },
    { city: "San Diego", province: "CA", country: 'US', region: "NA" },
    { city: "Irvine", province: "CA", country: 'US', region: "NA" },
    { city: "Jersey City", province: "NJ", country: 'US', region: "NA" },
    { city: "New York City", province: "NY", country: 'US', region: "NA" },
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

        <div className="locations">
          {locations.map((location, ind) => (
            <div className={`location ${location.city.replace(/ /g, "_")}`} key={ind}>
              <Public />
              <span>{`${location.city}, ${location.province}${location.country ? `, ${location.country}` : ''}`}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="main">
        <section className="about-section">
          <h1 className="title">Johnson Dinh</h1>
          <h4 className="position">Software Engineer</h4>

          <div className="items">
            <a className="item resume" href="https://drive.google.com/file/d/12UvRj4iigFZICrTjp3BiCThSYGdAg7B6/view?usp=sharing" target="_blank">
              <Description className="icon" />
              <span>Resume</span>
            </a>
            
            <a className="item email" href="mailto:jdinhbus@gmail.com">
              <Email className="icon" />
              <span>Email</span>
            </a>
          </div>

          

          <span className="description first">
            After graduating high school in 2019, I made a decision to change the trajectory of my path in life.&nbsp;
            <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8szQeYgks7ET0P4tb6qdbYt-Mns5zFsdu-Q&s">Programming</a> ultimately began and saved my career to now that I am blessed to be working as a full-time software engineeer. 
            I also have an extreme passion for building and selling software so that I may be able to help those communities in need.
            Most of my peers describe me as a highly motivated individual who spends his time absorbing knowledge about technology and data.
            Under no circumstances will I allow myself to fail in any goal or objective that I vow to accomplish.
          </span>

          <span className="description second">
            Currently, I am in the phase of building a startup that will improve upon the outdated use of sports data by introducing advanced analytics, machine learning models, and innovative visualizations. 
            The goal is to provide teams, analysts, and fans with real-time insights that go beyond traditional metrics, unlocking deeper layers of performance understanding, predictive analysis, and decision-making tools for various sports domains.
          </span>

          <span className="description third">
            Of all the other things in my life, I enjoy spending personal quality time with family and friends, trying all types of food cuisines, and exploring the fashion space, mainly streetwear. 
            I am also a graduate student studying computer science at <a target="_blank" href="https://www.gatech.edu/">Georgia Tech</a>.
            My primary focus is on knowledge-based cognitive systems and interactive intelligent agents.
          </span>
        </section>
      </main>

      <footer className="footer">
        <a href="https://www.instagram.com/jdinhhhh/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>

        <a href="https://www.linkedin.com/in/johnson-dinh/" target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>

        <a href="https://github.com/jdinh-782" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </a>
      </footer>
    </div>
  );
}
