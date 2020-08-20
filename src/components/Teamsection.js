import React from "react";
import { Card } from "react-bootstrap";

const Teamsection = () => {
  const persons = [
    {
      name: "Gino Osahon",
      role: "Co-organizer",
      image: "ginoosahon.jpg",
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
      bio: "",
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
      bio: "",
    },
  ];
  return (
    <div className="team">
      <h1 className="team-heading">
        Our Team <span className="green">Members</span>
      </h1>
      <div className="team-members">
        {persons.map((p, i) => (
          <Card
            key={i}
            style={{ width: "18rem", margin: "10px auto" }}
            className="costum-card"
          >
            <Card.Img variant="small" src={p.image} alt={p.name} />
            <Card.Body>
              <Card.Title>
                <h3>{p.name}</h3>
              </Card.Title>
              <Card.Text>
                <strong>Role: </strong>
                {p.role}
              </Card.Text>
              {p.social.map((s, i) => (
                <div key={i}>
                  <strong>{s.name}: </strong>
                  <a href={s.link} target="_blank" rel="noopener noreferrer">
                    {s.name.toLowerCase()}
                  </a>
                  <br />
                </div>
              ))}
              <Card.Text>
                <strong>
                  <em>Skills: </em>
                </strong>
                {p.skills.map((s, i) => (
                  <span key={i}>{s}, </span>
                ))}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Teamsection;
