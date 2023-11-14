import React, { useEffect, useState } from 'react';
import { bg, farming } from '../../Assets';
import { useDispatch } from 'react-redux';
import { userlogout, usersignin, verifyTaskFour, verifyTaskOne, verifyTaskThree, verifyTaskTwo, verifyReferrer, verifyTaskTweet } from '../../actions/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Login = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [step, setStep] = useState(1);
    const [referrer, setReferrer] = useState();
    const [url, setUrl] = useState();
    const stateUser = useSelector(state => state?.users?.user)
    const {Auth} = useSelector(state => state?.auth)
    const Navigate = useNavigate()
 
    const query = useQuery()

    const ref = query.get("ref")
    localStorage.setItem("ref", ref)


    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(usersignin(ref));
    }
  
  
    useEffect(() => {

        if (!Auth || localStorage.getItem('user')) {
            Navigate("/farming")
        } 

    }, [Auth, stateUser])

    useEffect(() => {
        if(localStorage.getItem('user')){
            Navigate("/farming")

        }
        
    }, [])
    

    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"

            style={{
                backgroundImage: `url(${bg})`,
            }}>
            <div className="mb-10 sm:text-center md:mb-12">


                <div className="container mx-auto p-4">
                    <div className="space-y-4">

                     <div className={step === 1 ? '' : 'hidden'}>

                            <div>
                                <div class="p-8 bg-zinc-950/80 shadow-xl shadow-amber-500/100 rounded">

                                    <img
                                        src={farming}
                                        width={500}
                                        height={50}
                                        alt="memez"
                                    />

                                    <div class="mb-4 text-center">
                                        <h2 className="mb-6 py-6 text-3xl font-bold font-grandstander text-white leading-none tracking-tight md:text-6xl md:mx-auto">
                                            $MEMEZ FARMING
                                        </h2>

                                    </div>
                                    <ul class="mb-8 space-y-2">
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-amber-500"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Complete Quests</p>
                                        </li>
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-amber-500"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Collect Solmeme Points</p>
                                        </li>
                                        <li class="flex items-center">
                                            <div class="mr-3">
                                                <svg
                                                    class="w-4 h-4 text-amber-500"
                                                    viewBox="0 0 24 24"
                                                    strokeLinecap="round"
                                                    strokeWidth="2"
                                                >
                                                    <polyline
                                                        fill="none"
                                                        stroke="currentColor"
                                                        points="6,12 10,16 18,8"
                                                    />
                                                    <circle
                                                        cx="12"
                                                        cy="12"
                                                        fill="none"
                                                        r="11"
                                                        stroke="currentColor"
                                                    />
                                                </svg>
                                            </div>
                                            <p class="font-medium text-gray-300">Harvest $MEMES</p>
                                        </li>
                                    </ul>
                                    <button
                                        className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                        // disabled={user}
                                        onClick={handleLogin}
                                    >
                                        {isConnected ? 'Connected' : 'Connect With X'}
                                    </button>
                                    <p className='text-white font-jost'>{isConnected ? '' : 'Receive your first SOLMEME POINTS upon connecting'}</p>
                                </div>
                                <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                                <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                                <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                            </div>
                        </div>

                        // {/* Step 2 */}


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;







