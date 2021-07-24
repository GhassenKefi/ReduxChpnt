import { Add_Task, Edit_Task, Delete_Task, Done_Task } from '../actions-types';


//action creators
export const add_Task = (payload) => {
    return {
        type: Add_Task,
        payload:payload
    }
}

export const edit_Task = (payload) => {
    return {
        type: Edit_Task,
        payload:{
            id:payload.id,
            Description : payload.description
        }
    }
}

export const delete_Task = (payload) => {
    return {
        type: Delete_Task,
        payload
    }
}

export const done = (payload) =>{
    return{
        type: Done_Task,
        payload:payload

    }
}
