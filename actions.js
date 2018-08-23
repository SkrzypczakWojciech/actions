export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

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
        id
    }
}

dispatch(removeComment(3));

function editComment(text,id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

dispatch(editComment('edytuje komentarz',3));

function thumbUp(id) {
    return {
        type:THUMB_UP_COMMENT,
        id
    }
}

dispatch(thumbUp(3));

function thumbDown(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

dispatch(thumbDown(3));