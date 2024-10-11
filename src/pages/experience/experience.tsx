import "./experience.scss";


export default function Experience() {
    const experiences: Array<any> = [
        {
            organization: "UPS Capital",
            href: "https://upscapital.com/",
            team: "Parcel Pro",
            position: "Software Applications Developer",
            timeline: "June 2023 - Present",
            description: "Leading a team of full-stack developers to design a real-time tracking system that provides accurate, live updates for over 10,000 domestic and international shipments. Engineering software solutions that integrate SQL Server databases to extract shipment data from tracking numbers, presenting it through a responsive user interface built with modern Angular frameworks. Enhancing application performance by minimizing asynchronous issues and optimizing component rendering through modular programming. Collaborating with the Parcel Pro development team, I help launch early application versions, increasing user satisfaction by 30%.",
            technologies: null
        },
        {
            organization: "JPMorgan Chase",
            href: "https://www.jpmorganchase.com/",
            team: "Consumer and Investment Banking",
            position: "Software Engineer Program Intern",
            timeline: "June 2022 - August 2022",
            description: "Prototyped a web software development kit that retrieves internal and external application metrics, monitors user behavior, and displays product usage for over 100 clients and business partners. Built dashboard visualizations and stories using Tableau to showcase timelines of client productivity and application utilization. Leveraged React and Material UI frameworks to create a visual prototype to display these dashboards within a web application. Operated an experimental version of the kit, enabling clients to generate analytical insights for over 1,000 services, boosting productivity by up to 85%.",
            technologies: null
        },
        {
            organization: "JPMorgan Chase",
            href: "https://www.jpmorganchase.com/",
            team: "Code for Good",
            position: "Applications Developer",
            timeline: "February 2022 - June 2022",
            description: "Designed a web application prototype to support non-profit organizations in streamlining their operations and enhancing community engagement. Collaborated with stakeholders to identify their needs and develop user-friendly features that facilitate fundraising, volunteer management, and event coordination. By implementing modern technologies and best practices, I ensure the application is scalable, secure, and accessible, empowering non-profits to focus on their missions and make a greater impact in their communities.",
            technologies: null
        },
        {
            organization: "University of California, Irvine",
            href: "https://uci.edu/",
            team: "Disability Services Center",
            position: "Course Notes Programmer",
            timeline: "January 2022 - April 2022",
            description: "Advised mini-lectures and office hours for professors by providing course materials and notes for over 500 students. Covered a range of topics across programming and math courses, including data structures, machine learning, and advanced algebra. Organized and stored more than 50 hand-written and typed course notes in online server solutions, ensuring ease of access for all students.",
            technologies: null
        }
    ];

    function onClickExperience(i: number) {
        const experience = experiences[i];
        window.open(experience.href, "_blank");
    }


    return (
        <div className="experience">
            <h1 className="title">Experience</h1>

            <div className="items">
                {experiences.map((experience, ind) => (
                    <div className="item" key={ind} onClick={() => onClickExperience(ind)}>
                        <span className="organization">{experience.organization}</span>
                        <span className="team">{experience.team}</span>
                        <span className="position">{experience.position}</span>
                        <span className="description">{experience.description}</span>

                        { ind < experiences.length - 1 && <div className="divider"></div> }
                    </div>
                ))}
            </div>
        </div>
    );
}
