import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function MenuChoices({ snacks }) {
  //useParams looks for id URL parameter on /snacks route
  const { id } = useParams();

  //matches if the param id is the same as the snack id(name of snack). 
  const food = snacks.find(snack => snack.id === id);
  if (!food) return <Redirect to="/" />;

  //returns detailed information about the snack
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {food.name}
          </CardTitle>
          <CardText className="font-italic">{food.description}</CardText>
          <p>
            <b>Recipe:</b> {food.recipe}
          </p>
          <p>
            <b>Serve:</b> {food.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuChoices;
