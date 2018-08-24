import {ADD_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {THUMB_UP} from './actions'
import {THUMB_DOWN} from './actions'

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state.comments]          
        case EDIT_COMMENT:
        	const edit = state.comments.map(comment => {
        		if(comment.id === action.id){
        			return {...state.comments},
        		}
        		return state.comments
        	}
        case REMOVE_COMMENT:
            return {
                comments: state.comments.filter(comment => comment.id !== action.id)
            };
        case THUMB_UP:
        	const up = state.comments.map(comment => {
        		if(comment.id === action.id){
        			return state.comments.votes = +1,
        		}
        		return state.comments
        	}
        case THUMB_DOWN:
        	const down = state.comments.map(comment => {
        		if(comment.id === action.id){
        			return state.comments.votes = -1,
        		}
        		return state.comments
}