import React, { createContext, useState, useEffect } from 'react';
import Loading from "../pages/load/Loading"; // Assuming Loading component is defined

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(true); // Loading state
    const [user, setUser] = useState({ email: '' });
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUserData(); // Example function to fetch user data
                setUser(userData); // Set user data
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched or error occurs
            }
        };

        fetchUserData();
    }, []);


    const getUserData = async () => {

        try {
            const response = await fetch('/api/content-creators/email');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }


            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new TypeError("Received non-JSON response");
            }

            const userData = await response.json();
            return userData;
        } catch (error) {
            console.error('Error in getUserData:', error);
            throw error;
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


