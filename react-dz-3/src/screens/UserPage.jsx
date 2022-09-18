import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Header from "../components/Header";
import UserFullCard from "../components/UserFullCard";
import UserPost from "../components/UserPost";

const UserPage = () => {
    const [user, setUser] = useState([]);
    const [posts, setPosts] = useState([]);
    const [headerTitle, setHeaderTitle] = useState('LOADING...');
    const params = useParams();
    const navigate = useNavigate();

    if (isNaN(params.id)) navigate('/error');

    useEffect(() => {
        if (user.length === 0) {
            fetch(`https://dummyjson.com/users/${params.id}`)
                .then(response => response.json())
                .then(data => {
                    setUser(data);
                    setHeaderTitle(`${data.firstName} ${data.lastName}`);
                })
        }
    }, [user]);

    useEffect(() => {
        if (posts.length === 0) {
            fetch(`https://dummyjson.com/posts/user/${params.id}`)
                .then(response => response.json())
                .then(data => setPosts(data.posts))
        }
    }, [posts]);

    return (
        <div className='userPage'>
            <Header title={headerTitle}/>
            <Link to={'/'} className='btn btn-outline-dark mx-4 mt-4'>Back</Link>
            {!!user.id ? <div className='container px-4 px-lg-5 mt-4'><UserFullCard user={user}/></div> : ''}
            {!!posts.length ?
                <div className="container px-4 px-lg-5 mt-5">
                    <hr/>
                    <h3 className='text-center mb-4'>Posts:</h3>
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {posts.length > 0 ? posts?.map(post => (
                            <UserPost key={post.id} post={post}/>
                        )) : <h1 className='text-center mt-5'>LOADING...</h1>}
                    </div>
                </div> : ''}
        </div>
    );
};

export default UserPage;