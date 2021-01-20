import { useState } from 'react';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My First Blog', body: 'This is my very very first blog made with React...', author: 'Quang', id: 1 },
    { title: 'Getting Started With React', body: 'This is my very very first blog made with React...', author: 'Josh', id: 2 },
    { title: 'How to Web Dev', body: 'This is my very very first blog made with React...', author: 'Maria', id: 3 }
  ]);
  
  return (  
    <div className="home">
      {blogs.map( (blog) => (
        <div className="blog-preview" key={ blog.id }>
          <h2>{ blog.title }</h2>
          <p>Author: { blog.author }</p>
        </div>
      ) )}
    </div>
  );
}
 
export default Home;