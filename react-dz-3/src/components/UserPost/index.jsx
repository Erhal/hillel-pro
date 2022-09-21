import React from 'react';

const UserPost = ({post}) => {
    return (
        <div className="col mb-5" style={{minHeight: '400px'}}>
            <div className="card h-100">
                <div className="card-body p-3 bg-light">
                    <div className="text-center">
                        <h6 className="post__title fw-bolder">{post.title}</h6>
                        <hr/>
                        <div className="post__body text-start">{post.body}</div>
                        <div className="post__tags mt-3">
                            {post.tags?.map(tag => (
                                <span className="badge bg-secondary me-1 mb-3" key={tag}>#{tag}</span>
                            ))}
                        </div>
                        <div className="post__likes badge text-danger position-absolute end-0 bottom-0 mx-1 mb-2" style={{cursor: 'default'}}>
                            <span className="">♡ {post.reactions}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPost;