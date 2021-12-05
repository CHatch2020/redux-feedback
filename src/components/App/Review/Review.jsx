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
        <div className="text-center text-4xl ">
            <h2 className="my-8 text-gray-500">Review your Feedback</h2>
            ~{"\n"}
            <p className="my-8 text-red-300">Feelings: {feeling.feeling}</p>
            <p className="my-8 text-green-300">Understanding: {understanding.understanding}</p>
            <p className="my-8 text-purple-300">Support: {support.support}</p>
            <p className="my-8 text-blue-300">Comments: {comments.comments}</p>

            <button className="text-4xl shadow mx-8 px-4 py-1 border-2 border-black rounded bg-purple-300" onClick={sendReview}>Submit</button>
        </div>
    );
};

export default Review