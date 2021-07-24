import { Add_Task, Edit_Task, Delete_Task, Done_Task} from '../actions-types';

const initialState = {
    task: []
}


export const rootReducers = (state = initialState, { type, payload }) => {
    const newTask = {
        id: Date.now(),
        Description: payload,
        isDone: false
    }
    switch (type) {
        case Add_Task:
            return {
                ...state,
                task: [...state.task, newTask]
            }
        case Edit_Task:
            return {
                ...state,
                task: state.task.map((e) => e.id === payload.id ? { ...e, Description:payload.Description }
                        : e
                )
            }
        case Delete_Task:
            return {
                ...state, task: state.task.filter(i => i.id !== payload)

            }
        case Done_Task:
            return {
                ...state, task: state.task.map((e) => e.id === payload ? { ...e, isDone: !e.isDone }
                    : e
                )
            }
        default:
            return state;
    }
}