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
            return [{
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state.comments]
        case REMOVE_COMMENT:
            return {
                comments: state.comments.filter(comment => comment.id !== action.id)
            };
		case THUMB_UP:
            return [{
                {
                    id: action.id,
                    votes: +1
                }
                , ...state]
        case THUMB_DOWN:
            return  [{
                comments: [
                {
                    id: action.id,
                    votes: -1
                }
                , ...state]
    }
}