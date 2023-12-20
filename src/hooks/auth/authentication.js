import { useState, useEffect } from 'react';


const useAuthentication = () => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, []);

    const loginUser = async (email, password) => {
        try {
            const response = await fetch('/data/users.json');
            const data = await response.json();

            const authenticatedUser = data.find(
                (user) => user.email === email && user.password === password
            );

            if (authenticatedUser) {
                setUser(authenticatedUser);
                localStorage.setItem('user', JSON.stringify(authenticatedUser));
            } else {
                setErrors('Invalid username or password');
            }
        } catch (error) {
            console.error('Error loading users:', error);
        }
    };
    const logoutUser = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return { user, loginUser, logoutUser, errors  };
};

export default useAuthentication;
