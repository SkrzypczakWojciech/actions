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
        	return state.comments.map(comment => {
        		if(comment.id === action.id){
        			return {
                        id: comment.id,
                        text: action.text,
                        votes: comment.votes
                    }};
        		})
        		return comment;
        case REMOVE_COMMENT:
            return {
                comments: state.comments.filter(comment => comment.id !== action.id)
            };
        case THUMB_UP:
        	const up = state.comments.map(comment => {
        		if(comment.id === action.id){
        			return {
        				id: comment.id,
        				text: comment.text,
        				votes: comment.votes +1	
        			}};
        		return comment;
        	})
        case THUMB_DOWN:
        	const down = state.comments.map(comment => {
        		if(comment.id === action.id){
        			return {
        				id: comment.id,
        				text: comment.text,
        				votes: comment.votes -1
        			}};
        		return comment;
        	})