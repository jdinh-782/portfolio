import "./about.scss";
import { Description, Email } from "@mui/icons-material";


export default function About() {
  return (
    <div className="about">
        <section className="content about">
            <h1 className="title">Johnson Dinh</h1>
            <h4 className="position">Software Engineer</h4>

            <div className="items">
            <a className="item resume" href="https://drive.google.com/file/d/12UvRj4iigFZICrTjp3BiCThSYGdAg7B6/view?usp=sharing" target="_blank" rel="noopener">
                <Description className="icon" />
                <span>Resume</span>
            </a>
            
            <a className="item email" href="mailto:jdinhbus@gmail.com">
                <Email className="icon" />
                <span>Email</span>
            </a>
            </div>

            <span className="description first">
            <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8szQeYgks7ET0P4tb6qdbYt-Mns5zFsdu-Q&s" rel="noopener">Programming</a> ultimately began and saved my life such that now I am blessed to be working as a full-time software engineer. 
            I have an extreme passion for building and selling software because of my willingness to help those communities in need.
            Most of my peers describe me as a highly motivated individual who spends his time absorbing knowledge about technology and data.
            Under no circumstances will I allow myself to fail in any goal or objective that I vow to accomplish.
            </span>

            <span className="description second">
            Currently, I am in the phase of building a startup that will improve upon the outdated use of sports data by introducing advanced analytics, machine learning models, and innovative visualizations. 
            The goal is to provide teams, analysts, and fans with real-time insights that go beyond traditional metrics, unlocking deeper layers of performance understanding, regression analysis, and decision-making tools for various sports domains.
            </span>

            <span className="description third">
            Of all the other things in my life, I enjoy spending personal quality time with family and friends, trying all types of food cuisines, and exploring the fashion space, mainly streetwear. 
            I am also a graduate student studying computer science at <a target="_blank" href="https://www.gatech.edu/" rel="noopener">Georgia Tech</a>.
            My primary focus is on knowledge-based cognitive systems and interactive AI agents.
            </span>
        </section>

        <section className="content credits">
            <span className="description credits">
            Created with <a href="https://nextjs.org/" target="_blank">Next.js</a> framework and <a href="https://sass-lang.com/" target="_blank">Sass</a> stylesheets. <br/>
            Developed in <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>. <br/>
            Deployed with <a href="https://vercel.com/" target="_blank">Vercel</a>. <br/>
            © 2024 Johnson Dinh
            </span>
        </section>
    </div>
  );
}
