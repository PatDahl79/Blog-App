import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useNavigate } from "react-router";


function Category() {
  const { id } = useParams();
  const history = useHistory();

  // Assuming these are passed from the parent component or context
  const uniqueAuthors = [];
  const blogPosts = [];
  const menPosts = [];
  const womenPosts = [];
  const kidsPosts = [];

  const handleAuthorClick = (authorName) => {
    // Implement your logic here
  };

  const navigateToBlogCard = (postId) => {
    history.push(`/blogs/blogcard/${postId}`);
  };

  const navigate = useNavigate();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center">Category: {id}</h1>

      {id === 'author' && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
          {uniqueAuthors.map(authorName => {
            const authorPosts = blogPosts.filter(post => post.name === authorName);
            const authorImage = authorPosts[0].image; // Assuming each author has the same image in all posts

            return (
              <div key={authorName} className="m-4 cursor-pointer" onClick={() => handleAuthorClick(authorName)} style={{ cursor: 'pointer' }} >
                <img src={authorImage} alt={authorName} className="w-full rounded-2xl object-cover h-[200px]" />
                <h3 className="text-blue-500 justify-center mb-3">{authorName}</h3>
                {selectedAuthor === authorName && authorPosts.map(post => (
                  <div key={post.id} className="m-4 cursor-pointer" onClick={() => navigateToBlogCard(post.id)}>
                    <p className='line-clamp-3 text-[14px] text-pink-400 mt-3'>Post ID: {post.id}</p>
                    <h3 className="text-blue-500 mb-3 line-clamp-3 text-[18px]">{post.title}</h3>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}

      {id === 'men' && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
          {menPosts.map(post => (
            <div key={post.id} className="m-4 cursor-pointer" onClick={() => navigateToBlogCard(post.id)}>
              <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover h-[200px]" />
              <h3 className="text-blue-500 mb-3">{post.title}</h3>
              <p>{post.description}</p>
              <div className='mt-4'>
                <h4 className='text-xs'>{post.name}</h4>
                <h4 className='text-xs'>{post.date}</h4>
              </div>
            </div>
          ))}
        </div>
      )}

      {id === 'women' && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
          {womenPosts.map(post => (
            <div key={post.id} className="m-4 cursor-pointer" onClick={() => navigateToBlogCard(post.id)}>
              <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover h-[200px]" />
              <h3 className="text-blue-500 mb-3">{post.title}</h3>
              <p>{post.description}</p>
              <div className='mt-4'>
                <h4 className='text-xs'>{post.name}</h4>
                <h4 className='text-xs'>{post.date}</h4>
              </div>
            </div>
          ))}
        </div>
      )}

      {id === 'kids' && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10">
          {kidsPosts.map(post => (
            <div key={post.id} className="m-4 cursor-pointer" onClick={() => navigateToBlogCard(post.id)}>
              <img src={post.image} alt={post.title} className="w-full rounded-2xl object-cover h-[200px]" />
              <h3 className="text-blue-500 mb-3">{post.title}</h3>
              <p>{post.description}</p>
              <div className='mt-4'>
                <h4 className='text-xs'>{post.name}</h4>
                <h4 className='text-xs'>{post.date}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
