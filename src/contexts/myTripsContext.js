import React, { useContext } from "react";

export const initialState = {
    trips: []    
};

export const ActionTypes = {                   
    SetTrips: 'SET_TRIPS',
    
};

export const reducer = (state = {}, action) => {
    switch (action.type) {
    case ActionTypes.SetTrips:
        console.log(action)
        return ({
            ...state,
            trips: [...state.trips, action.value]
        });
default:
    return state;
    
}
};

export const initialContext = {
    contextState: initialState,
    setContextState: () => {},
};

const Cont = React.createContext(initialContext);


export function ContextProvider({children, initial = initialState}) {
    const [state, dispatch] = React.useReducer(reducer, initial);


    const contextState = state;
    const setContextState = dispatch;

    return <Cont.Provider value={{contextState, setContextState }}>{children}</Cont.Provider>   
}

export const useContextState = () => useContext(Cont);