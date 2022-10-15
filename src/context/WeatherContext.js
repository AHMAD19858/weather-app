import React, { createContext, useReducer } from 'react';
import { Reducer as Reducer, InitialState } from './Reducer'

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, InitialState)

    return (
        <WeatherContext.Provider value={{
            state, dispatch
        }}>
            {children}
        </WeatherContext.Provider>
    )
}

export { WeatherContextProvider, WeatherContext };