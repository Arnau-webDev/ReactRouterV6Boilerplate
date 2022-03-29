import React from 'react';
import { useParams } from 'react-router-dom';


const TacoDetails = () => {

    const { tacoName } = useParams();

    return (
        <h1>Taco details of {tacoName} </h1>
    )
}

export default TacoDetails