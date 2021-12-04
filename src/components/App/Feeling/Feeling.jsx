import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Feeling(){
    const dispatch = useDispatch();
    const history = useHistory();

    const [newFeeling, setNewFeeling] = useState(0);

    const goToUnderstand = () => {
        console.log('Going to checkout');
        history.push('/understand')
    };

    const sumbitData = () => {
        dispatch({
            type: 'ADD_FEELING',
            payload: newFeeling
        });
        goToUnderstand();
    }

    const getFeelingData = (e) => {
        setNewFeeling(
            e.target.value
        )
    };

    return(
        <div>
            <h2>How are you feeling today?</h2>
            <h4>Feeling?</h4>
            <input 
            onChange={getFeelingData} 
            type="number" 
            placeholder="Rate"/>

            <button onClick={sumbitData}>Next</button>
        </div>
    );
};

export default Feeling;