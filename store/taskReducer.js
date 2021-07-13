import {ADD_TASK, DELETE_TASK, DID_TASK, UNDID_TASK} from './taskTypes';

const initialState = {
    tasks: [
        {"task": "HTML I", "done": false, "id": "1"},
        {"task": "CSS", "done": false, "id": "2"},
        {"task": "Responsive design", "done": false, "id": "3"},
        {"task": "JavaScript", "done": false, "id": "4"},

    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TASK:

            let salir = false;

            /**
             * No permitimos ingresar una tarea en blanco.
             */
            if (!action.payload) {
                alert("No text")
                return {
                    ...state
                }
            }

            /**
             * No permitimos agregar una tarea cuyo nombre ya existe.
             */
            state.tasks.filter(item => {
                    if (item.task == action.payload) {
                        salir = true;
                        alert("Ya existe una tarea con ese nombre")
                    }
                }
            )

            if (salir)
                return {
                    ...state
                }

            return {
                ...state,
                tasks: [...state.tasks, {
                    task: action.payload,
                    done: false,
                    id: Math.random().toString()
                }]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => item.id != action.payload)
            }
        case DID_TASK:
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if (item.id !== action.payload) {

                        return item
                    }


                    return {
                        ...item,
                        done: true
                    }
                })
            }
        case UNDID_TASK:
            return {
                ...state,
                tasks: state.tasks.map((item) => {
                    if (item.id !== action.payload) {

                        return item
                    }


                    return {
                        ...item,
                        done: false
                    }
                })
            }

        default:
            return state;
    }
}

export default taskReducer
