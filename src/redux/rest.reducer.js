const initialState =[];

const saveTheRestaurant = (state = initialState, action) => {
        switch(action.type) {
            case 'SAVE_RESTAURANT': 
                console.log(action.payload)
                return{
                    ...state,
                    initialState: action.payload
                }

            default: return state;    
        }
}

export default saveTheRestaurant;