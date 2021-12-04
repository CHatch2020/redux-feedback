import React from 'react';
import {useSelector} from 'react-redux';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Review(){
    const history = useHistory();
    const dispatch = useDispatch();
    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentReducer);

    const goToSuccessPage = () => {
        console.log('Go to success');
        history.push('/success');
    }

    const sendReview = () => {
        console.log('sending post');
        axios ({
            method: 'POST',
            url: '/api/feedback',
            data: {
                "feeling": `${feeling.feeling}`,
                "understanding": `${understanding.understanding}`,
                "support": `${support.support}`,
                "comments": `${comments.comments}`
            }
        }).then((res) => {
            console.log('review details', res);
            dispatch({
                type: 'REMOVE_FROM_REDUX',
            })
        }).catch((err) => {
            console.log('Error in POST', err);
        })
        goToSuccessPage();
    }

    return(
        <div>
            <h2>Review your Feedback</h2>
            <p>Feelings: {feeling.feeling}</p>
            <p>Understanding: {understanding.understanding}</p>
            <p>Support: {support.support}</p>
            <p>Comments: {comments.comments}</p>

            <button onClick={sendReview}>Submit</button>
        </div>
    );
};

export default Review