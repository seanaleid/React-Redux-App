import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBreweries } from "../actions";

import BeerCard from "./BeerCard";

const BeerList = props => {
    console.log(props);
    useEffect(() => {
        props.fetchBreweries();
    }, []);
    
    if (props.isFetching) {
        return <h2>Loading breweries...</h2>;
    }

    
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.breweries.map(brewery => (
                <BeerCard key={brewery._id} brewery={brewery}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (
    mapStateToProps,
    { fetchBreweries }
)(BeerList);

