const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

dispatch(addComment('nowy komentarz!'));

function removeComment(id) {
    return {
    	type: REMOVE_COMMENT,
        id: 3,
    }
}

dispatch(removeComment(3));

function editComment(text,id) {
    return {
        type: EDIT_COMMENT,
        text,
        id: 3,
    }
}

dispatch(editComment('edytuje komentarz',3));

function thumbUp(rank,id) {
    return {
        type: thumbUp,
        text,
        id: 3,
        rank:0,
    }
}

dispatch(editComment(+1,3));

function thumbDown(rank,id) {
    return {
        type: thumbUp,
        text,
        id: 3,
        rank:0,
    }
}

dispatch(editComment(-1,3));