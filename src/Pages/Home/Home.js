import React, {useState, useEffect} from 'react';
import UserList from '../UserList/UserList';
import './Home.css';

const Home = ({children}) => {
    const [users, setUsers] = useState([]);


    useEffect(() =>{
        fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
        .then(res => res.json())
        .then( data => setUsers(data))
    }, []);

    return (
        <div>
            
           <div className='sidebar-area'>
                <div className="sidebar">
                    <div className="top_section">
                        <h1  className="userlist-text">USERS LIST</h1>
                    </div>
                    {
                        users.map( user => <UserList
                            user = {user}
                        ></UserList>)
                    }

                    <div>
                        <UserList></UserList>
                    </div>
                </div>
                <main>{children}</main>
           </div>
        
        </div>
    );
};

export default Home;