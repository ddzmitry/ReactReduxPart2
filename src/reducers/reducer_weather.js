
import {FETCH_WEATHER } from '../actions/index'
export default function(state=[],action) {

    switch( action.type){
        case FETCH_WEATHER:
        // payload from action
        // WE HAVE TO RETURN NEW STATE 
        // same as state.concat([action.payload.data])
        return [action.payload.data ,...state ]
    }
    // console.log('Action Recieved Action', action);

    return state;

}