//action types
const INIT_COMMENT = 'INIT_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'


//reduce
export default function (state,action){
    if(!state){
        state={
            comments:[]
        }
    }
    switch(action.type){
        case INIT_COMMENT:
            return {
                comments:state.comments
            }
        case ADD_COMMENT:
            return {
                comments:[...state.comments,action.comment]
            }
        case DELETE_COMMENT:
            return {
                comments:[...state.comments.slice(0,action.index),
                ...state.comments.slice(action.index+1)]
            }
    }
}

//action creator

const initComment=(comments)=>{
    return {
        type:INIT_COMMENT,
        comments
    }
}
const addComment=(comment)=>{
    return {
        type:ADD_COMMENT,
        comment
    }
}
const deleteComment=(comment)=>{
    return {
        type:DELETE_COMMENT,
        comment
    }
}