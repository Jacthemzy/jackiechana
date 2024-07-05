import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import img from '../../assets/agg.jpg';
import { IoIosLogOut } from 'react-icons/io';
import { FaUpload } from 'react-icons/fa6'
import { CiSettings } from 'react-icons/ci';
import { MdOutlineDashboard } from 'react-icons/md'
import { BiMoneyWithdraw } from 'react-icons/bi'


const Side = () => {
    // Logout function
    const handleLogout = () => {
        if (typeof onLogout === "function") {
            onLogout();
        }

    };

    return (
        <div className='w-[20vw] bg-blue-900 flex flex-col h-[100vh] overflow-hidden'>


            <div className='w-[20vw] items-center flex flex-col my-8'>

                <div className='flex flex-col items-center my-[2em]'><img className='w-[5em] h' src={img} alt="logo" /></div>

                <NavLink to="/dashboard" className='h-[3em] pl-4 text-[1.2em] gap-3 flex items-center text-white ml-2 decoration-none w-[80%] active:bg-green-500 active:rounded-md'><MdOutlineDashboard />Dashboard</NavLink>
                <NavLink to="/dashboard/upload" className='h-[3em] pl-4 text-[1.2em] gap-3 flex items-center text-white ml-2 decoration-none w-[80%] active:bg-green-500 active:rounded-md'><FaUpload /> Uploads</NavLink>
                <NavLink to="/dashboard/withdrawal/form" className='h-[3em] pl-4 text-[1.2em] gap-3 flex items-center text-white ml-2 decoration-none w-[80%] active:bg-green-500 active:rounded-md'><BiMoneyWithdraw />Withdrawal</NavLink>
                <NavLink to="/dashboard/settings" className='h-[3em] pl-4 text-[1.2em] gap-3 flex items-center text-white ml-2 decoration-none w-[80%] active:bg-green-500 active:rounded-md'><CiSettings /> Settings</NavLink>
                <NavLink className='text-gray-500 h-[3em] pl-4 text-[1.2em] gap-3 flex items-center ml-2 decoration-none w-[80%] active:bg-green-500 active:rounded-md' onClick={handleLogout} to="../../pages/logout/Logout"> <IoIosLogOut /> Logout </NavLink>
                <div className='w-[20vw] items-center flex flex-col my-8'>
                    <div className='w-[20vw] flex flex-col justify-center items-center'>
                        <h5 className='text-white text-center'>TUTORIAL GUIDE</h5>
                        <NavLink to='/ebook' className='w-[8vw] h-[20vh] '>
                            <img src={img} alt="tutorial1" />
                        </NavLink>
                    </div>
                    <button className='w-[10vw] bg-green-800 h-12 rounded-2xl text-white text-xl  border-none'>customer care</button>
                </div>
            </div>
        </div>
    );
};

export default Side;
