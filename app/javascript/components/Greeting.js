import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomGreeting } from '../redux/greetings';

function Greeting() {
    const greeting = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRandomGreeting());
    }, [dispatch]);

    return (
        <div>
            <h1>Greetings</h1>
            <ul>
                <li>{greeting}</li>
            </ul>
        </div>
    );
}

export default Greeting;