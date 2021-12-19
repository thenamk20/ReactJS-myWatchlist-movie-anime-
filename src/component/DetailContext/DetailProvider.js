import React from 'react'
import { useReducer } from 'react'
import DetailContext from './DetailContext' 
import DetailReducer, {initialState} from './DetailReducer'

function DetailProvider({children}) {

    const [state, dispatch] = useReducer(DetailReducer, initialState)

    return (
        <DetailContext.Provider value = {[state, dispatch]}>
            {children}
        </DetailContext.Provider>
    )
}

export default DetailProvider
