"use client";
import { Input } from "@/components/atoms/Input";
import Image from "next/image";
import { useState } from "react";

const Auth = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userName, setUserName] = useState<string>("");
    const [isSignup, setIsSignup] = useState<boolean>(false);

    const toggleMode = () => setIsSignup((prev) => !prev);

    return (
        <div
            className="relative h-full w-full bg-[url('/images/home.jpg')] bg-no-repeat bg-center bg-fixed bg-cover"
        >
            <div
                className="w-full h-full bg-black bg-opacity-70"
            >
                <nav
                    className="py-6 px-32"
                >
                    <Image src={'/images/logo.png'} alt="logo" width={150} height={14} />
                </nav>

                <div
                    className="flex justify-center"
                >

                    <div 
                        className="bg-black bg-opacity-75 p-16 self-center mt-2 rounded-lg w-2/5 shadow-lg "
                    >
                        <h3
                            className="mb-8 font-semibold text-5xl text-white"  
                        >
                             {isSignup ? "Sign Up" : "Sign In"}
                        </h3>

                        <div
                            className="flex flex-col gap-4"
                        >
                            {isSignup && (
                                <Input
                                    placeholder="Username"
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            )}

                            <Input 
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                            />

                            <Input 

                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                            />

                            <button
                                className="bg-red-500 py-3 w-full mt-10 text-white rounded-md hover:bg-red-700 transition duration-300"
                            >
                                {isSignup ? "Sign Up" : "Sign In"}
                            </button>

                            <p className="mt-12 text-neutral-400">
                            {isSignup ? "Already have an account?" : "New to Netflix?"} &nbsp;
                                <span
                                    className="text-white ml-1 cursor-pointer hover:underline"
                                    onClick={toggleMode}
                                >
                                    Sign up now
                                </span>
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Auth;