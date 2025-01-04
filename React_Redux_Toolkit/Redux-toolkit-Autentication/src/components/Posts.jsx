import React from 'react';
import { useGetAllPostsQuery } from '../features/posts/postsApi';

const Posts = () => {
    const { data, isLoading } = useGetAllPostsQuery();

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.data.data.map((post) => (
                    <div
                        key={post.id}
                        className="p-4 border rounded shadow hover:shadow-lg"
                    >
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p>{post.content}</p>
                        {post.author && (
                            <p className="text-sm text-gray-500 mt-2">
                                By: {post.author.name} ({post.author.email})
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;
