import React, { createContext, useReducer, useState } from 'react';
/* import { useState } from 'react/cjs/react.development'; */
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