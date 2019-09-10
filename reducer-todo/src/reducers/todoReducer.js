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
            return [...state,
                {
                item:action.payload,
                completed:false,
                id: Date.now()
                }
            ];
        case 'TOGGLE_TODO':
                let toggled = state.map(item => {
                    if (item.id === action.payload) {
                      return {
                        ...item,
                        completed: !item.completed
                      };
                    } else {
                      return item;
                    }
                  });
                  return toggled;
        default:
            return state;
    }
};