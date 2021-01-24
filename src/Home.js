import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect( () => {
    setTimeout( () => {   // Used only for this project to mimic the time load in the real world
      fetch('http://localhost:8000/blogs/')
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data from server');
        }
        return res.json();
      })
      .then( (data) => {  // If error happened but later we could fetch data again, set Error back to 'null'
        setBlogs(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {     // If the error happened, we don't want to show the word "Loading..."
        setIsLoading(false);
        setError(err.message);
      });
    }, 1000);   // Wait for an additional of 1 second
  }, []);

  return (  
    <div className="home">
      { error  &&  <div>{ error }</div> }
      { isLoading  &&  <div>Loading...</div> }
      { blogs  &&  <BlogList blogs={ blogs } title='All Blogs' /> }
    </div>
  );
}
 
export default Home;