import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';

function SignInSignUp() {
    const [isSignInClicked, setIsSignInClicked] = useState(false);
    const [isSignUpClicked, setIsSignUpClicked] = useState(false);
    const svgVariants = {
        hidden: { rotate: -360 },
        visible: { rotate: 0, transition: { duration: 1 } },
    };

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: { duration: 2, ease: 'easeInOut' },
        },
    };
    useEffect(() => {
        // Get the query parameters from the URL
        const searchParams = new URLSearchParams(window.location.search);

        if (searchParams.get('in')) {
            setIsSignInClicked(true);
            setIsSignUpClicked(false);
        }
        else {
            setIsSignUpClicked(true);
            setIsSignInClicked(false);
        }
    }, []);

    const handleSignInClick = (e) => {
        e.preventDefault();
        setIsSignInClicked(true);
        setIsSignUpClicked(false);
    };

    const handleSignUpClick = (e) => {
        e.preventDefault();
        setIsSignInClicked(false);
        setIsSignUpClicked(true);
    };

    return (
        <>
            <section>
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form className="w-full max-w-md">
                        <div className="flex justify-center mx-auto">
                            <motion.svg
                                variants={svgVariants}
                                initial="hidden"
                                animate="visible"
                                xmlns="http://www.w3.org/2000/svg"
                                height="2em"
                                viewBox="0 0 512 512"
                                style={{ fill: '#947624' }}
                            >
                                <motion.path
                                    variants={pathVariants}
                                    d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                                />
                            </motion.svg>
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <button
                                className={`w-1/3 pb-4 font-medium text-center ${isSignInClicked
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-secondary border-b dark:border-neutral dark:text-neutral'
                                    } capitalize`}
                                onClick={handleSignInClick}
                            >
                                Sign In
                            </button>
                            <button
                                className={`w-1/3 pb-4 font-medium text-center ${isSignUpClicked
                                    ? 'text-primary border-b-2 border-primary'
                                    : 'text-secondary border-b dark:border-neutral dark:text-neutral'
                                    } capitalize`}
                                onClick={handleSignUpClick}
                            >
                                Sign Up
                            </button>
                        </div>
                        <div className="relative flex items-center mt-4">
                            <span className="absolute z-10  p-2">
                                <PersonOutlineIcon />
                            </span>
                            <input
                                type="text"
                                className="input input-bordered join-item block w-full py-3 text-black bg-neutral-base-100 border rounded-lg px-11 focus:border-transparent focus:ring-primary focus:outline-none focus-ring focus-ring-opacity-40"
                                placeholder="Username"
                            />
                        </div>
                        {isSignInClicked ? null : (
                            <>
                                <div className="relative flex items-center mt-6">
                                    <span className="absolute z-10  p-2">
                                        <EmailOutlinedIcon />
                                    </span>
                                    <input type="email"
                                        className="input input-bordered join-item block w-full py-3 text-black bg-neutral-base-100 border rounded-lg px-11 focus:border-transparent focus:ring-primary focus:outline-none focus-ring focus-ring-opacity-40"
                                        placeholder="Email address" />
                                </div>
                            </>
                        )}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute z-10  p-2">
                                <LockOutlinedIcon />
                            </span>
                            <input type="password"
                                className="input input-bordered join-item block w-full py-3 text-black bg-neutral-base-100 border rounded-lg px-11 focus:border-transparent focus:ring-primary focus:outline-none focus-ring focus-ring-opacity-40"
                                placeholder="Password" />
                        </div>
                        {isSignInClicked ? null : (
                            <>
                                <div className="relative flex items-center mt-4" title="Your date of birth">
                                    <span className="absolute z-10 p-2" >
                                        <CalendarMonthOutlinedIcon />
                                    </span>
                                    <input
                                        type="Date"
                                        className="input input-bordered join-item block w-full py-3 text-black bg-neutral-base-100 border rounded-lg px-11 focus:border-transparent focus:ring-primary focus:outline-none focus-ring focus-ring-opacity-40"
                                        placeholder="Date of Birth"
                                    />
                                </div>
                                <div className="relative flex items-center mt-4">
                                    <span className="absolute z-10  p-2">
                                        <WcOutlinedIcon />
                                    </span>
                                    <select
                                        className="input input-bordered join-item block w-full py-3 text-black bg-neutral-base-100 border rounded-lg px-11 focus:border-transparent focus:ring-primary focus:outline-none focus-ring focus-ring-opacity-40"
                                        id="gender"
                                    >
                                        <option value="" disabled selected>Select Your Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="relative flex items-center mt-4">
                                    <span className="absolute z-10  p-2">
                                        <LanguageOutlinedIcon />
                                    </span>
                                    <select
                                        className="input input-bordered join-item block w-full py-3 text-black bg-neutral-base-100 border rounded-lg px-11 focus:border-transparent focus:ring-primary focus:outline-none focus-ring focus-ring-opacity-40"
                                    >
                                        <option value="">Select Your Country</option>
                                        <option value="country1">Country 1</option>
                                        <option value="country2">Country 2</option>
                                        <option value="country3">Country 3</option>
                                    </select>
                                </div>
                                <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-base-200 border-2 border-dashed border-black rounded-lg text-black">
                                    <PetsOutlinedIcon />
                                    <span className="mx-3 text-black">Add your Pets</span>
                                    <input
                                        id="dropzone-file"
                                        type="file"
                                        className="hidden text-black border border-black bg-base-200 hover:bg-base-100 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </label>
                            </>
                        )}
                        <div className="mt-6">
                            <button className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-accent focus:outline-none focus:ring focus:ring-opacity-50`}>
                                {isSignInClicked ? 'Sign In' : 'Sign Up'}
                            </button>
                            <a href="#" class="flex items-center justify-center mt-4 text-black transition-colors duration-300 transform rounded-lg hover:bg-gray-50 bg-base-200 ">
                                <div class="px-4 py-2">
                                    <svg class="w-6 h-6" viewBox="0 0 40 40">
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#000000" />
                                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                    </svg>
                                </div>
                                <span class="w-5/6 px-4 py-3 font-bold text-center">Continue with Google</span>
                            </a>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SignInSignUp;
