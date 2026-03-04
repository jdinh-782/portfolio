import "./about.scss";
import { Description, Email } from "@mui/icons-material";


export default function About() {
  return (
    <div className="about">
        <h1 className="title">Johnson Dinh</h1>
        <h4 className="description">I turn ideas to reality through digital solutions.</h4>

        <div className="items">
            <a className="item resume" href="https://drive.google.com/file/d/1ETFy0mgbcFPT-EmCe4XoTZNHwraznsNs/view?usp=sharing" target="_blank" rel="noopener">
                <Description className="icon" />
                <span>Resume</span>
            </a>
            
            <a className="item email" href="mailto:jdinhbus@gmail.com">
                <Email className="icon" />
                <span>Email</span>
            </a>
        </div>
    </div>
  );
}
