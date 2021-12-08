import React from "react";
import CardItem from "./CardItem";
import "../styles/Cards.css";

function Cards() {
  return (
    <div>
      <div className="cards">
        <h1>Check out these EPIC Destination</h1>
        <div className="cards--container">
          <div className="cards--wrapper">
            <ul className="cards--items">
              <CardItem
                src="/images/img-1.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="/images/img-2.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle "
                label="Luxury"
                path="/services"
              />
            </ul>
            <ul className="cards--items">
              <CardItem
                src="/images/img-3.jpg"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
              <CardItem
                src="/images/img-4.jpg"
                text="Experience Footbal on Top of the Himilayan Mountains"
                label="Adventure"
                path="/products"
              />
              <CardItem
              src="/images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
