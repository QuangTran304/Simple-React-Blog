import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My First Blog', body: 'This is my very very first blog made with React...', author: 'Quang', id: 1 },
    { title: 'Getting Started With React', body: 'This is my very very first blog made with React...', author: 'Josh', id: 2 },
    { title: 'How to Web Dev', body: 'This is my very very first blog made with React...', author: 'Maria', id: 3 }
  ]);
  
  const handleDelete = (id) => {
    const tempBlogs = blogs.filter( (blog) => blog.id !== id );
    setBlogs(tempBlogs);
  }

  return (  
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
      <br /> <br />
      <BlogList blogs={blogs.filter( (blog) => blog.author === 'Quang' )} title='Quang blogs'/>
    </div>
  );
}
 
export default Home;