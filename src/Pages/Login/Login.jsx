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
    let [userProfile, setUserProfile] = useState()
    const Navigate = useNavigate()
    
// let userProfile
    const query = useQuery()
    let [referralTotal , setReferralTotal]= useState(0)

    const ref = query.get("ref")
    localStorage.setItem("ref", ref)
    // 1550
    // 2050

    console.log("stateUser", stateUser, Auth, userProfile)

    const task_one_id = "1719779462433149213"
    const task_two_id = "1719779462433149213"
    const task_three_id = "1719779462433149213"
    const task_four_id = "1719779462433149213"
    const userId = localStorage.getItem("userId")


    // const url = "https://twitter.com/beast31278/status/1723834736676651325"



    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(usersignin(ref));
    }
    const handleLogOut = () => {
        dispatch(userlogout());
    }

    


    const handleTaskTweet = () => {
        console.log("handleTaskTweet", userId, url?.split("/")[5])
        dispatch(verifyTaskTweet(userId, url?.split("/")[5]));
    }
    const handleTaskOne = () => {
        console.log("handleLikeVerify", userId, task_one_id)
        dispatch(verifyTaskOne(userId, task_one_id));
    }

    const handleTaskTwo = () => {
        console.log("handleLikeVerify", userId, task_one_id)
        dispatch(verifyTaskTwo(userId, task_two_id));
    }


    const handleTaskThree = () => {
        console.log("handleRetweetVerify", userId, task_one_id)
        dispatch(verifyTaskThree(userId, task_three_id));
    }
    const handleTaskFour = () => {
        console.log("handleQuoteVerify", userId, task_one_id)
        // dispatch(verifyTaskFour(userId, task_four_id));
    }
    const handleReferrer = () => {
        console.log("handleQuoteVerify", userId, referrer)
        dispatch(verifyReferrer(userId, referrer));
    }
    const handleCopy = () => {
        // if(navigator.clipboard.write.length > = 1){
        //     setCopied("true")
        // }
        navigator.clipboard.writeText(`https://localhost:3000?ref=${userProfile?.userName}`)
    }

    const handlePost = () => {
        const text = `hey`

        window.open(
            `https://twitter.com/intent/tweet?&text=${text}%0a%0a&hashtags=coin`,
            "_blank",
            "noopener"
        )
    }
    const handleRefererChange = (e) => {

        setReferrer(e.target.value)

    }
    const handleUrlChange = (e) => {

        setUrl(e.target.value)

    }

    useEffect(() => {

        if (Auth) {
            Navigate("/farming")
        }

    }, [Auth, stateUser])
    

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







