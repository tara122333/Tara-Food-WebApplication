import React,{useState} from "react";
import {FaRegUser} from 'react-icons/fa';
import {GrLocation} from 'react-icons/gr';
import {BiSearch} from 'react-icons/bi';
import {RiArrowDownSFill} from 'react-icons/ri';
import { useSelector, useDispatch } from "react-redux";
import gravatar from "gravatar";


// Component
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

// redux actions
import { signOut } from "../../Redux/Reducer/Auth/Auth.action";

const NavbarLg = ({SignIn,SignUp}) =>{

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();

    const reduxState = useSelector((global) => global.user.user);

    const signOutHandler = () => dispatch(signOut());

    return (
        <>
            <div className="flex justify-between gap-4 items-center w-full">
                <div className="w-40 py-2 cursor-pointer">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo"  className="w-full h-full"/>
                </div>
                <div className="flex items-center border shadow-md rounded-md px-3 py-1 w-2/4 gap-3 border-gray-200">
                    <div className="flex items-center gap-3 border-r-2 border-r-gray-400">
                        <GrLocation className="text-red-500 text-xl"/>
                        <div className="">
                            <input type="search" name="location_search" id="location_search" placeholder="Jaipur" className="outline-none text-gray-700" />
                        </div>
                        <RiArrowDownSFill className="text-2xl text-gray-700"/>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                        <BiSearch className="text-2xl text-gray-500 "/>
                        <div className="w-full">
                            <input type="search" name="food_search" id="food_search" placeholder="Search for restaurants and your dish" className="outline-none w-full py-2"/>
                        </div>
                    </div>
                </div>
                {
                    reduxState?.user?.fullname ? (
                        <>
                            <div className="relative w-20">
                                <div
                                    onClick={() => setIsDropDownOpen((prev) => !prev)}
                                    className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full"
                                >
                                    <img
                                    src={gravatar.url(reduxState?.user?.email)}
                                    alt={reduxState?.user?.email}
                                    className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                {isDropDownOpen && (
                                    <div className="absolute shadow-lg py-3  -right-4 w-20 bg-white z-30 flex flex-col gap-2">
                                    <button onClick={signOutHandler}>Sign Out</button>
                                    </div>
                                )}
                            </div>
                        </>
                    ):
                    (
                        <>
                            <div className="flex justify-center items-center gap-5">
                                <button className="text-gray-600 hover:text-black text-xl" onClick={SignIn}>Log in</button>
                                <button className="text-gray-600 hover:text-black text-xl" onClick={SignUp}>Sign up</button>
                            </div>
                        </>
                    )
                }
                
            </div>
        </>
    );
}


const NavbarSm = ({SignIn,SignUp}) =>{
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dispatch = useDispatch();

    const reduxState = useSelector((global) => global.user.user);

    const signOutHandler = () => dispatch(signOut());

    

    return (
        <>
            <div className="flex justify-between items-center gap-3 px-2">
                <div className="h-10 w-28 p-2">
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo"  className="w-full h-full"/>
                </div>
                <div className="flex justify-center items-center gap-3 relative">
                    <div className="bg-red-500 rounded-full px-3 py-2">
                        <button className="text-white">Use App</button>
                    </div>{
                        reduxState?.user?.fullname ?(
                            <>
                                <div
                                onClick={() => setIsDropDownOpen((prev) => !prev)}
                                className="border p-1 border-gray-300 text-zomato-400 w-12 h-12 rounded-full"
                                >
                                <img
                                    src={gravatar.url(reduxState?.user?.email)}
                                    alt={reduxState?.user?.email}
                                    className="w-full h-full rounded-full object-cover"
                                />
                                </div>
                                {isDropDownOpen && (
                                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                                    <button onClick={signOutHandler} >Sign Out</button>
                                </div>
                                )}
                            </>
                        ) : (
                            <>
                                <div className="border rounded-full p-3" onClick={()=>setIsDropDownOpen((prev)=> !prev)}>
                                <FaRegUser className="text-red-500 font-bold"/>
                                    </div>
                                    {
                                        isDropDownOpen && (
                                            <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                                                <button onClick={SignIn}>Sign In</button>
                                                <button onClick={SignUp}>Sign Up</button>
                                            </div>
                                        )
                                    }
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}

const Navbar = () =>{

    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const openSignInmodal = () => setOpenSignin(true);
    const openSignUpmodal = () => setOpenSignup(true);
    return(
        <>
            <SignIn isOpen={openSignin} setIsOpen={setOpenSignin}/>
            <SignUp isOpen={openSignup} setIsOpen={setOpenSignup}/>
            <div className="lg:hidden shadow-md py-1 bg-white">
                <NavbarSm SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
            </div>
            <div className="hidden lg:flex py-2 container mx-auto w-full px-24">
                <NavbarLg SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
            </div>
        </>
    );
}

export default Navbar;