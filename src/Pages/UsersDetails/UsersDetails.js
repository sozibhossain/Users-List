import React, {useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import UserImg from '../Images/userImg.png';
import './UsersDetails.css';

const UsersDetails = () => {
    const [details, setDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState({});

    const {id} = useParams();

    useEffect(() =>{
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
        .then(res => res.json())
        .then(data => setDetails(data))
    }, [])

    useEffect(() =>{
        if(details.length>0){
            const matchedData = details.find( detail => detail.id==id)
            setSpecificDetails(matchedData);
        }
        
    }, [details])

    return (
        <div className='details'>
            <div className='userDetails-text'>
                <h1>USER DETAILS</h1>
            </div>
            <div className='userDetails-area'>
                <div>
                    <img src={UserImg} alt=''/>
                    <h2>{specificDetails?.profile?.username}</h2>
                    <span>{specificDetails?.Bio}</span>
                </div>
                <div>
                    <h4>Full Name</h4>
                    <span>{specificDetails?.profile?.firstName} {specificDetails?.profile?.lastName}</span>
                </div>
                <div>
                    <h4>Job Title</h4>
                    <span>{specificDetails?.jobTitle}</span>
                </div>
                <div>
                    <h4>Email</h4>
                    <span>{specificDetails?.profile?.email}</span>
                </div>
            </div>
        </div>
    );
};

export default UsersDetails;