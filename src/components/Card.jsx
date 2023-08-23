import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const MyCard = ({ img, name, desc, color, texto }) => {
  return (
    <Card style={{ width: "18rem" }} className="MyCard">
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
      <div className="MyTagContainer">
        <Tags color={color} texto={texto} />
      </div>
    </Card>
  );
};

export default MyCard;
