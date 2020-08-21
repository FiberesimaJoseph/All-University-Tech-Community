import React, { useState } from "react";
import { Card } from "react-bootstrap";

const SingleCard = ({ person }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <Card
      style={{ width: "18rem", margin: "10px auto" }}
      className="costum-card"
    >
      <Card.Img variant="small" src={person.image} alt={person.name} />
      <Card.Body>
        <Card.Title>
          <h3>{person.name}</h3>
        </Card.Title>
        <Card.Text>
          <strong>Role: </strong>
          {person.role}
        </Card.Text>
        {person.social.map((s, i) => (
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
          {person.skills.map((s, i) => (
            <span key={i}>{s}, </span>
          ))}
        </Card.Text>
        {person.bio ? (
          <button
            className="read-more-button"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            Read more
          </button>
        ) : null}
        {readMore ? (
          <Card.Text className="bio-text">
            <strong>Bio: </strong>
            {person.bio}
          </Card.Text>
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
