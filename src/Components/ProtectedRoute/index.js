import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    // const user = useSelector((state) => state.user);
    const {Auth} = useSelector(state => state?.auth)
    let location = useLocation();

    console.log("Auth", Auth)

    if(!Auth) {
        return <Navigate to="/login" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;