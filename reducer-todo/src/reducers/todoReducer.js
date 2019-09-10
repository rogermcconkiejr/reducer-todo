export const initialState = [{
    item: 'Take out trash',
    completed: false,
    id: 6547658
},
{
    item: 'Clean room',
    completed: false,
    id: 985293
},
{
    item: 'Do homework',
    completed: false,
    id: 2345363
}]

export const todoReducer = (state, action) => {
    //actions: ADD_TODO, TOGGLE_TODO
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
            };
        default:
            return state;
    }
};