const ADD_NEW_ITEM = 'ADD-NEW-ITEM';
const DELETE_ITEM = 'DELETE-ITEM-ITEM';
const TOGGLE_DONE_ITEM = 'TOGGLE-DONE-ITEM';
const CLEAR_COMPLETED_ITEMS = 'CLEAR-COMPLETED-ITEMS';
const CHANGE_SHOW_WHAT = 'CHANGE-SHOW-WHAT';

let initialState = {
    matter: [
        // {id: 1, description: "Hi, how are you", done: false},
        // {id: 2, description: "It's my first post", done: true}
    ],
    showWhat: 'all'
};


const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_ITEM: {
            if (action.newItemText.trim() == '') return {...state};
            let newItem = {
                id: !!state.matter.length ? state.matter[state.matter.length - 1].id + 1 : 1,
                description: action.newItemText.trim(),
                done: false
            };
            return {
                ...state,
                matter: [...state.matter, newItem]
            };
        }
        case DELETE_ITEM: {
            return {
                ...state,
                matter: state.matter.filter(el => el.id != action.itemId)
            };
        }
        case TOGGLE_DONE_ITEM: {
            return {
                ...state,
                matter: state.matter.map(el => {
                    if (el.id == action.itemId) {
                        return {
                            ...el,
                            done: !el.done
                        };
                    } else {
                        return el;
                    }
                })
            };
        }
        case CLEAR_COMPLETED_ITEMS: {
            return {
                ...state,
                matter: state.matter.filter(el => !el.done)
            };
        }
        case CHANGE_SHOW_WHAT: {
            return {
                ...state,
                showWhat: action.showWhatValue
            };
        }
        default:
            return state;
    }

}

export const addNewItemCreator = newItemText => ({type: ADD_NEW_ITEM, newItemText});
export const deleteNewItemCreator = itemId => ({type: DELETE_ITEM, itemId});
export const toggleDoneCreator = itemId => ({type: TOGGLE_DONE_ITEM, itemId});
export const clearCompletedCreator = () => ({type: CLEAR_COMPLETED_ITEMS});
export const changeShowWhatCreator = showWhatValue => ({type: CHANGE_SHOW_WHAT, showWhatValue});

export default todosReducer;
