import React from 'react';
import {useHistory} from 'react-router-dom';

function Success(){
    const history = useHistory();

    const goBackHome = () => {
        console.log('Niner, Niner, Enroute back to mother planet');
        history.push('/');
    }

    return(
        <div>
            <h2>Feedback!</h2>
            <h4>Rate App: </h4>

            <h3>Thank You!</h3>
            <button onClick={goBackHome}>Leave New Feedback</button>
        </div>
    );
};

export default Success