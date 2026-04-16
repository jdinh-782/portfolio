import "./experience.scss";
import TechnologiesIcons from "../components/technologies-icons/technologiesIcons";


export default function Experience() {
    interface ExperienceInterface {
        organization: string;
        href: string;
        team: string;
        position: string;
        timeline: string;
        description: string;
        technologies: Array<string>
    };

    const experiences: Array<ExperienceInterface> = [
        {
            organization: "Polystack Digital",
            href: "https://www.polystackdigital.com/",
            team: "",
            position: "Software Engineer",
            timeline: "Janaury 2026 - Present",
            description: "Focused on elevating the valuation of high-growth SaaS products by 20% through the architecture of scalable software foundations and a modular SaaS blueprint. I developed high-efficiency digital workflows and custom automation tools that empowered global entrepreneurs with 30% greater operational freedom and accelerated the time-to-market for new ventures by 40%. Additionally, I drove a 15% increase in user retention through the rapid deployment of sleek, high-performance user interfaces and ensured long-term product stability by optimizing infrastructure to maintain a 99.9% service availability standard.",
            technologies: ["Next.js", "React", "TypeScript", "HTML5", "CSS3", "ESLint", "Supabase", "DigitalOcean", "Visual Studio Code", "WebStorm", "Postman", "Docker", "Cloudflare", "GitHub", "Confluence", "Jira"]
        },
        {
            organization: "UPS Capital",
            href: "https://upscapital.com/",
            team: "Parcel Pro",
            position: "Applications Developer",
            timeline: "June 2023 - Present",
            description: "Optimized product market fit and transformed customer satisfaction by 40% by bridging the gap between engineering and support to implement critical user feedback. I spearheaded the full-stack development of flagship products like UPS Wallet and DeliveryDefense while engineering a high-scale visualization system that managed real-time data for over 100,000 domestic and international shipments. To improve operational ROI, I established coding standards that reduced technical debt by 40% and significantly accelerated feature delivery by halving new developer onboarding time.",
            technologies: ["Angular", "HTML5", "CSS3", "TypeScript", "ESLint", "C#", ".NET", "Visual Studio Code", "Visual Studio", "Postman", "Microsoft SQL Server", "Microsoft Azure", "Azure DevOps", "Docker", "Kubernetes", "Confluence", "Jira"]
        },
        {
            organization: "JPMorgan Chase",
            href: "https://www.jpmorganchase.com/",
            team: "Consumer and Investment Banking",
            position: "Software Engineer Program Intern",
            timeline: "June 2022 - August 2022",
            description: "Enhanced internal asset valuation and business decision-making by constructing UI prototypes and Tableau dashboards to visualize application usage for over 1,000 distinct services. I upscaled operational productivity to 85% by refining SDK tools and validated product-led growth strategies by prototyping a web SDK specifically designed to track user behavior for more than 100 high-value clients. My role also involved translating technical complexity into actionable strategy for executive partners and strengthening organizational security through data governance standards that reduced data misuse by 30%.",
            technologies: ["React", "Material UI", "HTML5", "CSS3", "TypeScript", "ESLint", "Node.js", "Express.js", "Python", "Visual Studio Code", "Swagger", "Tableau", "Apache Hadoop", "Elastic", "Kibana", "Bitbucket", "Jira"]
        },
        {
            organization: "JPMorgan Chase",
            href: "https://www.jpmorganchase.com/",
            team: "Code for Good",
            position: "Applications Developer",
            timeline: "February 2022 - June 2022",
            description: "Designed a web application prototype to support non-profit organizations in streamlining their operations and enhancing community engagement. Collaborated with stakeholders to identify their needs and develop user-friendly features that facilitate fundraising, volunteer management, and event coordination. By implementing modern technologies and best practices, I ensure the application is scalable, secure, and accessible, empowering non-profits to focus on their missions and make a greater impact in their communities.",
            technologies: ["React", "HTML5", "CSS3", "TypeScript", "JavaScript", "Node.js", "Express.js", "Python", "Postgres", "GitHub", "Microsoft PowerPoint"]
        },
        {
            organization: "University of California, Irvine",
            href: "https://uci.edu/",
            team: "Disability Services Center",
            position: "Student Course Programmer",
            timeline: "January 2022 - April 2022",
            description: "Increased student career alignment by 25% by architecting personalized academic roadmaps for over 200 individuals. I boosted average course performance by 15% for a population of 500+ students by curating a centralized library of high-impact technical resources and Facilitating weekly tutoring sessions that resulted in a 20% lift in exam scores. Additionally, I modernized the educational offering by overhauling core curriculum modules and accelerated the transition from theory to professional practice by mentoring students in object-oriented design and complex memory logic.",
            technologies: ["Notion", "Microsoft Word", "Microsoft OneNote", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft SharePoint", "Microsoft OneDrive"]
        }
    ];

    function onClickExperience(i: number) {
        const experience = experiences[i];
        window.open(experience.href, "_blank");
    }


    return (
        <div className="experience">
            <div className="items">
                {experiences.map((experience, ind: number) => (
                    <div className={`item ${ind}`} key={ind} onClick={() => onClickExperience(ind)}>
                        <span className="organization">{experience.organization}</span>
                        <span className="team">{experience.team}</span>
                        <span className="position">{experience.position}</span>
                        <span className="description">{experience.description}</span>

                        <div className="technologies">
                            {experience.technologies.map((technology: string, i: number) => (
                                <div className={`technology ${i}`} key={i}>
                                    <TechnologiesIcons technologyName={technology}  />
                                </div>
                            ))}
                        </div>

                        { (ind < experiences.length - 1) && <div className="divider"></div> }
                    </div>
                ))}
            </div>
        </div>
    );
}
