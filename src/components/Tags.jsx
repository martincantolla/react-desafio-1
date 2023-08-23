import React from "react";
import Badge from "react-bootstrap/Badge";

const Tags = ({ color, texto }) => {
  return (
    <Badge className="MyTag" bg={color}>
      {texto}
    </Badge>
  );
};

export default Tags;
