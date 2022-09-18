import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import UserShortCard from "../components/UserShortCard";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (users.length === 0) {
            fetch('https://dummyjson.com/users')
                .then(response => response.json())
                .then(data => setUsers(data.users))
        }
    }, [users]);

    return (
        <div className='home'>
            <Header title='Home page'/>
            <section className="py-4">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {users.length > 0 ? users.map(user => (
                            <UserShortCard key={user.id} user={user}/>
                        )) : <h1 className='text-center mt-5'>LOADING...</h1>}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;