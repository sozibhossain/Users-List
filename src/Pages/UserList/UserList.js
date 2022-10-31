import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserImg from '../Images/userImg.png';
import './UserList.css';

const UserList = ({user}) => {

    const navigate = useNavigate();

    const handleDetails = (id) => {
        const uri = `/usersDetails/${user.id}`
        navigate(uri);
    }

    return (
        <div>
            <button className='user-btn' onClick={() => handleDetails(user.id)}>
                <div className='user-area'>
                    <img src={UserImg} alt='' className='user-img'/>
                    <h2>{user?.profile?.firstName}</h2>
                </div>
            </button>
            
        </div>
    );
};

export default UserList;