import React from 'react'
import { Card } from 'react-bootstrap'

const Teamsection = () => {
  const names = [1, 2, 3, 4, 5, 6]
  return (
    <div className="team">
      <h1 className="team-heading">
        Our Team <span className="green">Members</span>
      </h1>
      <div className="team-members">
        {names.map((n) => (
          <Card style={{ width: '18rem', margin: '10px auto' }}>
            <Card.Img variant="small" src="https://picsum.photos/200" />
            <Card.Body>
              <Card.Title>Name {n}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Teamsection
