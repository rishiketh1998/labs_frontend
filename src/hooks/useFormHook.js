import {useState} from 'react'

/**
 * @author Rishi
 * @description: hook to control form input values
 * @param initialState
 * @returns {[unknown, handleChange, handleReset]}
 */
const useFormHook = initialState => {
    const [state,setState] = useState(initialState)
    /**
     * @author Rishi
     * @description: keeps track of previous input values and updates input value for the input user is changing
     * @param e
     */
    const handleChange =  (e) => {
        setState({...state,[e.target.name]: e.target.value})
    }
    /**
     * @author Rishi
     * @description: resets all the input values in the form to it's initial state (empty string)
     */
    const handleReset = () => {
        setState(initialState)
    }
    return  [state,handleChange,handleReset]
}

export default useFormHook;