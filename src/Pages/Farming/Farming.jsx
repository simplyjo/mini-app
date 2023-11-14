import React, { useEffect, useState } from 'react';
import { bg, farming } from '../../Assets';
import { useDispatch } from 'react-redux';
import { userlogout, usersignin, verifyTaskFour, verifyTaskOne, verifyTaskThree, verifyTaskTwo, verifyReferrer, verifyTaskTweet } from '../../actions/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Farming = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [step, setStep] = useState(1);
    const [referrer, setReferrer] = useState();
    const [url, setUrl] = useState();
    const stateUser = useSelector(state => state?.users?.user)
    const {Auth} = useSelector(state => state?.auth)
   const [userProfile, setUserProfile] = useState()
    const profile =  localStorage.getItem('user')
    const Navigate = useNavigate()
    
// let userProfile
    const query = useQuery()
    let [referralTotal , setReferralTotal]= useState(0)

    const ref = query.get("ref")
    localStorage.setItem("ref", ref)
   

    console.log("stateUser", stateUser, Auth, userProfile)

    const task_one_id = "1719779462433149213"
    const task_two_id = "1719779462433149213"
    const task_three_id = "1719779462433149213"
    const task_four_id = "1719779462433149213"
    const userId = localStorage.getItem("userId")


    // const url = "https://twitter.com/beast31278/status/1723834736676651325"

    console.log("link", url?.split("/")[5],url?.split("/")[5].split("?")[0] )


    const dispatch = useDispatch()

    const handleLogin = () => {
        dispatch(usersignin(ref));
    }
    const handleLogOut = () => {
        dispatch(userlogout());
    }

  



    const handleTaskTweet = () => {
        console.log("handleTaskTweet", userId, url?.split("/")[5])
       
        dispatch(verifyTaskTweet(userId, url?.split("/")[5].split("?")[0]));
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
        const text = `Finally, The $MEMEZ of all meme sensation for %23Solana Airdrop Season is here.%0a%0a@solmeme_ is a Socio-Fi experiment built to reward meme lovers.%0a%0aStart creating your $MEMEZ moment with %23Solmeme now 👇 %0a%0ahttps%3A%2F%2Fsolmeme.com%2Ffarming`
        const test = "Gm"

        window.open(
            `https://twitter.com/intent/tweet?&text=${test}`,
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
    console.log("referrer", referrer)

    console.log("name", userProfile?.name?.split('❤️')[1])

    useEffect(() => {
        if(userProfile?.referrals?.length > 10){
          let total = ( userProfile?.referrals?.length - 10) * 2050 + 10 * 1550
          setReferralTotal(total)
        } else {
            let total =  userProfile?.referrals?.length * 1550
          setReferralTotal(total)

        }

    }, [userProfile])
    useEffect(() => {

        if (Auth || localStorage.getItem('user') ) {
            console.log("onload", localStorage.getItem('user') !== "undefined")
            setStep(2);
            setUserProfile(stateUser)
        } else {

           Navigate("/login")

        }

    }, [Auth, stateUser])

    useEffect(() => {
        if(localStorage.getItem('user'))
        console.log("local", profile)
        setUserProfile(JSON.parse(localStorage.getItem('user')))
        
    }, [])

    console.log("newUser", userProfile)

    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-10 bg-no-repeat bg-cover bg-center"

            style={{
                backgroundImage: `url(${bg})`,
            }}>
            <div className="mb-10 sm:text-center md:mb-12">


                <div className="container mx-auto p-4">
                    <div className="space-y-4">

                        {/* Step 1 */}
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
                                            <p class="font-medium text-gray-300">Harvest $MEMEZ</p>
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

                        {/* Step 2 */}

                        <div className={step === 2 ? '' : 'hidden'}>
                            <div>
                                <div class="p-8 bg-zinc-950/80 shadow-xl shadow-amber-500/100 rounded">

                                    <div class="mb-4">
                                        <p className='text-white font-jost text-left'>$MEMEZ Point</p>
                                        <h3 className="mb-6 py-6 text-3xl text-left font-bold font-grandstander text-white leading-none tracking-tight md:text-5xl md:mx-auto">
                                            {userProfile?.total_points + referralTotal} $MEMEZ <span>Point</span>
                                        </h3>

                                        <div className='lg:flex gap-4'>
                                            <p className="w-full lg:w-4/12 py-3 my-7 px-4 font-jost text-left text-white  border border-white bg-gradient-to-b from-amber-500/30 to-orange-700/30  active:shadow-none rounded-full shadow ">
                                                Referrals : {userProfile?.referrals?.length || 0}
                                            </p>
                                           

                                            {/* <p className="w-full lg:w-4/12 py-3 my-7 px-4 font-jost text-left text-white  border border-white bg-gradient-to-b from-amber-500/30 to-orange-700/30  active:shadow-none rounded-full shadow ">
                                                Sub - Referrals : 135
                                            </p> */}
                                        </div>
                                        <p className='text-white text-left text-xs'>
                                                 &lt; 10 referrals = 1550 points per  referral <br/>
                                                &gt; 10 referrals = 2050 points per referral
                                            </p>
                                    </div>
                                  
                                    <div className=''>
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
                                                <p class="font-medium font-jost text-gray-300">Complete Quests</p>
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
                                                <p class="font-medium font-jost text-gray-300">Collect Solmeme Points</p>
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
                                                <p class="font-medium font-jost text-gray-300">Harvest $MEMEZ</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-2 sm:mx-auto lg:max-w-full ">
                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5  lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                1100 $MEMEZ <span>Point</span>
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Post A Tweet
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-gray-700 font-jost">
                                                Post an interesting stuffs about Memez 
                                            </p>
                                            <div class="w-72">
                                                <div class="relative h-10 w-full min-w-[200px]">
                                                    <input
                                                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                        placeholder=" "
                                                        onChange={handleUrlChange}
                                                    />
                                                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                        Submit Link
                                                    </label>
                                                </div>
                                            </div>
                                            {userProfile?.tweet ?


                                                <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline disabled:opacity-25"
                                                    disabled={userProfile?.tweet}
                                                >
                                                    {userProfile?.tweet && <>Done</>}

                                                </button> :
                                                <>
                                                    <div className='flex'>

                                                        <button onClick={handlePost} class="block py-3 my-7 px-4 font-jost text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded">
                                                            Post Tweet
                                                        </button>
                                                        &nbsp;
                                                        &nbsp;
                                                        &nbsp;
                                                        <button
                                                            className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                                            onClick={handleTaskTweet}

                                                        >Collect Reward</button>
                                                    </div>
                                                </>


                                            }

                                        </div>
                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                5500 $MEMEZ <span>Point</span>
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Add "❤️ solmeme" to your X name to show your love
                                            </a>
                                            <p className="max-w-xs mx-auto mb-2 text-gray-700 font-jost">
                                                How much do you love solmeme? Add "❤️ solmeme" to your X name to show your love
                                            </p>
                                            {userProfile?.task_one ?


                                                <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline disabled:opacity-25"
                                                    disabled={userProfile?.task_one}
                                                >
                                                    {userProfile?.task_one && <>Done</>}

                                                </button> : <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                                    onClick={handleTaskOne}
                                                >Collect Reward</button>

                                            }

                                        </div>
                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                1100 $MEMEZ <span>Point</span>
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Follow our twitter account and like this post
                                            </a>
                                            <p className="max-w-xs mx-auto mb-3 mt-5  text-gray-700 font-jost">


                                                <a target='_blank' className='underline-offset-1  break-words px-4 py-2 rounded-lg bg-red-900 text-orange-400 text-md ' href="https://twitter.com/beast31278">

                                                    follow



                                                </a>  &nbsp;
                                                <a target='_blank' className='underline-offset-1 px-4  py-2 rounded-lg bg-red-900 break-words text-orange-400 text-md ' href="https://twitter.com/beast31278/status/1719779462433149213">
                                                    like

                                                </a>
                                            </p>
                                            {userProfile?.task_two ?


                                                <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline disabled:opacity-25"
                                                    disabled={userProfile?.task_two}
                                                >
                                                    {userProfile?.task_two && <>Done</>}

                                                </button> : <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                                    onClick={handleTaskTwo}

                                                >Collect Reward</button>

                                            }

                                        </div>
                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                550 $MEMEZ <span>Point</span>
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Retweet this post
                                            </a>
                                            <p className="max-w-xs mx-auto mb-8 mt-4 text-gray-700 font-jost">



                                                <a target='_blank' className='underline-offset-1 break-words px-4  py-2 rounded-lg bg-red-900 text-orange-400 text-md ' href="https://twitter.com/beast31278/status/1719779462433149213">
                                                    retweet

                                                </a>
                                            </p>
                                            {userProfile?.task_three ?


                                                <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline disabled:opacity-25"
                                                    disabled={userProfile?.task_three}
                                                >
                                                    {userProfile?.task_three && <>Done</>}

                                                </button> : <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline"
                                                    onClick={handleTaskThree}

                                                >Collect Reward</button>

                                            }

                                        </div>
                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                550 $MEMEZ <span>Point</span>
                                            </p>
                                            <p

                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"

                                            >
                                                Refer & Earn
                                            </p>
                                            <p className="max-w-xs mx-auto mb-4 text-gray-700 font-jost">



                                                <p className='underline-offset-1 break-words  py-2 rounded-lg text-orange-400 text-md ' href="https://twitter.com/beast31278/status/1719779462433149213">
                                                    Your ReferralCode : <a>{userProfile?.userName}</a>

                                                </p>
                                                {/* <a target="_blank" className='underline-offset-1 break-words px-4  py-2 rounded-lg bg-red-900 text-orange-400 text-md ' href="https://twitter.com/beast31278/status/1719779462433149213">
                                                    Click To Copy Your Refferal Link

                                                </a> */}
                                            </p>
                                            {userProfile?.referrer !== "null" ? <>
                                                <p className='underline-offset-1 break-words  py-2 rounded-lg text-orange-400 text-md ' href="https://twitter.com/beast31278/status/1719779462433149213">
                                                    Your Referrer : <a>{userProfile?.referrer}</a>

                                                </p>
                                            </> :
                                                <div class="w-72">
                                                    <div class="relative h-10 w-full min-w-[200px]">
                                                        <input
                                                            class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                            onChange={handleRefererChange}

                                                        />
                                                        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                            Add Referrer(case-sensitive)
                                                        </label>
                                                    </div>
                                                </div>}
                                            {(userProfile?.referrer && userProfile?.referrer !== "null")?


                                                <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline disabled:opacity-25"
                                                    disabled={userProfile?.referrer !== "null"}
                                                >
                                                    {userProfile?.referrer !== "null" && <>Done</>}

                                                </button> : <>
                                                    <button
                                                        className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline disabled:opacity-25"
                                                        onClick={handleReferrer}
                                                        disabled={!referrer}

                                                    >Submit</button>
                                                </>


                                            }


                                            <p className="max-w-xs mx-auto mb-4 text-gray-700 font-jost">



                                                <p className='underline-offset-1 break-words  py-2 rounded-lg text-orange-400 text-md '>

                                                    <a className='text-sm break-words'>
                                                        NB: submit twitter username of your referrer without ('@')

                                                    </a>
                                                </p>

                                            </p>

                                        </div>

                                        <div className="bg-white text-left px-10 py-10 border rounded lg:px-5 lg:py-50 xl:py-10 opacity-25">
                                            <p className="mb-2  font-semibold font-jost tracking-wide text-amber-500 uppercase">
                                                300 $MEMEZ <span>Point</span>
                                            </p>
                                            <a
                                                href="/"
                                                className="inline-block max-w-xs mx-auto mb-3 text-2xl font-grandstander leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                aria-label="Read article"
                                            >
                                                Quote this post
                                            </a>
                                            <p className="max-w-xs mx-auto mb-8 mt-6 text-gray-700 font-jost">



                                                <a target="_blank" className='underline-offset-1 break-words px-4  py-2 rounded-lg bg-red-900 text-orange-400 text-md ' href="https://twitter.com/beast31278/status/1719779462433149213">
                                                    Quote

                                                </a>
                                            </p>
                                            {userProfile?.task_four ?


                                                <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline disabled:opacity-25"
                                                    disabled={userProfile?.task_four}
                                                >
                                                    {userProfile?.task_four && <>Done</>}

                                                </button> : <button
                                                    className="block py-3 my-7 px-4 font-jost text-center  text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline disabled:opacity-25"
                                                    onClick={handleTaskFour}
                                                    disabled

                                                >Collect Reward</button>

                                            }

                                        </div>
                                     


                                    </div>

                                    <p className='text-white'>
                                        More Task Coming Soon...
                                    </p>
                                </div>
                                <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
                                <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
                                <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Farming;







