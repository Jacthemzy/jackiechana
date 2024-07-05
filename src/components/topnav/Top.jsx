import React, { useContext } from 'react';
import { IoIosArrowDown, IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegEnvelope } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';



const Top = () => {
    const user = useContext(UserContext);

    const getInitials = (name) => {
        if (!name) return '';
        const initials = name.match(/\b\w/g) || [];
        return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    };

    const initials = getInitials(user ? user.name : '');

    return (
        <div className='h-[10vh] w-[85%] flex justify-between items-center'>
            <div>
                {/* <input type="text" placeholder="Search" className='flex justify-center items-center h-[3em] w-[25vw] border-gray-200 outline-none px-[10px] rounded-3xl' /> */}
            </div>
            <div className='flex justify-center items-center gap-4 w-[25vw]'>
                <div className='flex items-center justify-center'>
                    <IoMdNotificationsOutline className='text-[2em] text-green-700' />
                    <span className='bg-green-500 text-white text-center w-6 h-6 rounded-full absolute transform translate-x-4 mb-8'>2</span>
                </div>
                <div className='flex items-center justify-center'>
                    <FaRegEnvelope className='text-[2em] text-green-700' />
                    <span className='bg-green-500 text-white text-center w-6 h-6 rounded-full absolute transform translate-x-4 mb-8'>1</span>
                </div>
                <div className='h-[3em] w-[3em] border border-white rounded-full'>
                    {user && user.profileImage ? (
                        <img src={user.profileImage} className='h-20 w-20 rounded-full border-white' alt="Profile" />
                    ) : (
                        <span className='text-white rounded-full'>{initials}</span>
                    )}
                </div>
                <h3 className='text-[1em] flex items-center text-white'>{user ? user.name : 'Guest'}</h3>
                {/* <div><IoIosArrowDown className='text-white text-xl' /></div> */}
            </div>
        </div>
    );
};

export default Top;
