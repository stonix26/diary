import { GET_NOTES } from '../actionTypes';
import { db } from '../firebase';

export function getNotes() {
    return dispatch() => {
        db.on('value', snapshot => {
            dispatch({
                type: GET_NOTES,
                payload: snapshot.val()
            });
        });
    }
}