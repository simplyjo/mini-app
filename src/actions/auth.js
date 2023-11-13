import { SIGN_UP, SIGN_IN, START_LOADING, END_LOADING, NOTIFY, UPDATE_USER_STATE, LOG_OUT } from "../constants"
import * as api from "../api"


export const usersignin = (ref) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.userSignIn(ref)
        console.log(data)


        // data.success && dispatch({ type: SIGN_IN, data: data })
        dispatch({ type: END_LOADING })
    //  dispatch({ type: UPDATE_USER_STATE, data: data })
        if(data.ref) {
            localStorage.setItem("ref", data.ref)
        }
        // console.log("data", data.path)
        data.success && window.open(`${data.path}`)




    } catch (error) {

    }

}
export const userlogout = (user, navigate) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
    
        dispatch({ type: LOG_OUT })
        dispatch({ type: END_LOADING })

   


    } catch (error) {

    }

}

export const usersigninAccess = (oauth_verifier, oauth_token, ref) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        console.log("tokens", oauth_verifier, oauth_token, ref)
        const { data } = await api.userSignInAccess(oauth_verifier, oauth_token, ref)
        
        console.log("datauser", data)


   
     data.success && dispatch({ type: SIGN_IN, data: data }) &&  dispatch({ type: UPDATE_USER_STATE, data: data })
        dispatch({ type: END_LOADING })
     





    } catch (error) {

    }

}

export const verifyTaskTweet = (userId, tweetId) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        console.log("userId", userId)
        const { data } = await api.verifyTaskTweet(userId, tweetId)
        console.log("datauser", data)

        data.success && dispatch({ type: UPDATE_USER_STATE, data: data })
        window.location.reload()
        console.log(userId)

    } catch (error) {

    }

}
export const verifyTaskOne = (userId) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        console.log("userId", userId)
        const { data } = await api.verifyTaskOne(userId)
        console.log("datauser", data)

        data.success && dispatch({ type: UPDATE_USER_STATE, data: data })
        window.location.reload()
        console.log(userId)

    } catch (error) {

    }

}
export const verifyTaskTwo = (userId, tweetId) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        console.log("userId, tweetId", userId, tweetId)
        const { data } = await api.verifyTaskTwo(userId, tweetId)
        console.log("datauser", data)

        data.success && dispatch({ type: UPDATE_USER_STATE, data: data })
        window.location.reload()

        console.log(userId, tweetId)

    } catch (error) {

    }

}
export const verifyTaskThree = (userId, tweetId) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        console.log("userId, tweetId", userId, tweetId)
        const { data } = await api.verifyTaskThree(userId, tweetId)
        console.log("datauser", data)

        data.success && dispatch({ type: UPDATE_USER_STATE, data: data })
        window.location.reload()

        console.log(userId, tweetId)

    } catch (error) {

    }

}
export const verifyTaskFour = (userId, tweetId) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        console.log("userId, tweetId", userId, tweetId)
        const { data } = await api.verifyTaskFour(userId, tweetId)
        console.log("datauser", data)

        data.success && dispatch({ type: UPDATE_USER_STATE, data: data })
        window.location.reload()

        console.log(userId, tweetId)

    } catch (error) {

    }

}
export const verifyReferrer = (userId, referrer) => async (dispatch) => {

    try {
        dispatch({ type: START_LOADING })
        console.log("userId, referrer", userId, referrer)
        const { data } = await api.verifyReferrer(userId, referrer)
        console.log("datauser", data)

        data.success && dispatch({ type: UPDATE_USER_STATE, data: data })
        window.location.reload()

        console.log(userId, referrer)

    } catch (error) {

    }

}


