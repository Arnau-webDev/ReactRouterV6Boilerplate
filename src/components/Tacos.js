import React from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';

const Tacos = () => {

    const { tacoName } = useParams();

    return (
        <>
            {!tacoName ? (<h1>Tacos</h1>) :

                (<>
                    <h1>Mi Taco: {tacoName}</h1>
                    <Link to={`details`}>Ir a los detalles de {tacoName}</Link>
                    <Outlet />
                </>)}
        </>
    )
}

export default Tacos