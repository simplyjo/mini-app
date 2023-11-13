import React, { useEffect } from "react";
import { usersigninAccess } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Callback = () => {
  const dispatch = useDispatch();

  const query = useQuery();
  const oauth_token = query.get("oauth_token");
  const oauth_verifier = query.get("oauth_verifier");
  const Navigate = useNavigate()
  const { auth } = useSelector((state) => state?.auth);
  const state = useSelector((state) => state);
  const ref = localStorage.getItem('ref')

  console.log("auth", auth)
  console.log("state", state)

    useEffect(() => {
    
        

        dispatch(usersigninAccess(oauth_verifier,oauth_token, ref));
     
        Navigate("/farming")

    }, [oauth_verifier, oauth_token, ref])

  return (
 
      <div className="">
        <h1>Callback Page</h1>
 
      </div>
    
  );
};

export default Callback;