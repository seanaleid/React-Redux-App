import React from "react";

const BeerCard = props => {
    console.log(props)
    return (
        <h2>{props.brewery.name}</h2>
    )
};

export default BeerCard;
