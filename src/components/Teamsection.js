import React from "react";
import SingleCard from "./SingleCard";

const Teamsection = () => {
  const persons = [
    {
      name: "Gino Osahon",
      role: "Co-organizer",
      image: "ginoosahon2.jpg",
      social: [
        { name: "Twitter", link: "https://twitter.com/Ginowinne" },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/osahon-gino-ediagbonya-06508078/",
        },
        { name: "Facebook", link: "https://web.facebook.com/gino.wine" },
      ],
      skills: [
        "Java",
        "J2EE",
        "Springboot",
        "Android",
        "Community building",
        "facilitator",
        "developer evangelist",
        "startup evangelist",
        "software engineering",
        "HTML",
        "CSS",
        "XML",
        "JavaScript",
      ],
      bio:
        "Gino Osahon considers himself first to be a developer and startup advocate, he is a trained software engineer (Java Technology) and has passion for youth community building. He loves providing mentorship and resources for young people interested in technology and encourages them to leverage it in solving social and civic challenges. He has over 5 years experience in community development, experience gained from being the community leader for GDG Port Harcourt, GDG Cloud Port Harcourt, and DefCon Port Harcourt. He is currently the Hub Manager for Ken Saro-Wiwa Innovation Hub from where he carries out his duties as a developer and startup advocate.",
    },
    {
      name: "Joseph Fiberesima",
      role: "Co-organizer",
      image: "josephfiberesima.jpg",
      social: [
        { name: "Twitter", link: " https://twitter.com/JosephFiberesi1" },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/joseph-fiberesima-607777193/",
        },
        {
          name: "Facebook",
          link: "https://web.facebook.com/profile.php?id=100032344492092",
        },
      ],
      skills: [
        "Javascript",
        "React",
        "Node/express",
        "PostgreSQL",
        "Google Cloud",
        "Html",
        "CSS",
        "SASS",
        "Bootstrap",
        "Community building",
        "Facilitator",
        "Tech Evangelist",
      ],
      bio:
        "Joseph Fiberesima is a software developer and has passion in building community, open source  and  mentorship, he has a great skill set of providing mentorship for young and teen to acquire technological skills. He has over 3 years of experience as a developer, community builder and business oriented.experience gained from being the community leader  and a mentor  for MLH port  Harcourt  and Ken Saro Wiwa Innovation Hub.He is currently the CEO of Springcode and the Software Consultant  for UrbanDev Studios. Over the years, he has  gained experience building software that solves real-life problems and loves Open source. ",
    },
    {
      name: "Ray Okaah",
      role: "Exec Director",
      image: "rayokaah.jpg",
      social: [
        { name: "Twitter", link: "https://twitter.com/rayscode" },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/ray-okaah-31ba449a/",
        },
        {
          name: "Email",
          link: "mailto:ray@autcnigeria.org",
        },
      ],
      skills: ["Product Manager", "Software Developer"],
      bio:
        "Ray Okaah is a lover of products and tech. He enjoys the creation and building process. When he is not managing a project, or writing code, he is probably enjoying another episode of family guy.",
    },
    {
      name: "Stephen Oladele",
      role: "Board Chairman",
      image: "stephenoladele.png",
      social: [
        { name: "Twitter", link: "https://twitter.com/nerdCyberArtist" },
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/in/stephenoladele/",
        },
      ],
      skills: [
        "Python",
        "machine Learning",
        "instructional design",
        "database management",
        "hadoop",
        "spark",
        "organizational management",
        "non-profit leadership",
        "program management",
        "community building",
        "facilitator",
        "software engineering",
        "SQL",
        "Google Cloud Platform",
        "Microsoft Azure ML Studio",
        "AWS SageMaker",
      ],
      bio:
        "Stephen F. Oladele is passionate about science and technology, using those to create commercial and social value, as well as to develop human capacity. He is also here, on earth, to learn and to teach, making an impact in everything he does and developing the available potential in everyone he meets. Youth, people development is at the core of his ambitions. Building the future of humanity with exponential technologies is what he envisions. Be willing to teach what you know; don't forget to stay teachable as well. ",
    },
  ];
  return (
    <div className="team">
      <h1 className="team-heading">
        Our Team <span className="green">Members</span>
      </h1>
      <div className="team-members">
        {persons.map((p, i) => (
          <SingleCard person={p} index={i} />
        ))}
      </div>
    </div>
  );
};

export default Teamsection;
