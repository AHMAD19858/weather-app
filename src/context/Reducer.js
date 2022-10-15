
export const InitialState = [

]
export const Reducer = (state, { type, payload }) => {
    switch (type) {
        case "addCity":
            return [...state, {
                //this is the initial value of the context 
                cityName: payload.cityName,
                history: [

                ]

            }]
        default:
            return state
    }

}