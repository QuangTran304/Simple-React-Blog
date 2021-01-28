import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('quang');

  return (  
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title: </label>
        <input 
          type="text"
          required
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
        />

        <label>Blog body: </label>
        <textarea 
          required
          value={ body }
          onChange={ (e) => setBody(e.target.value) }
        ></textarea>

        <label>Blog author:</label>
        <select value={ author } onChange={ (e) => setAuthor(e.target.value) }>
          <option value="quang">Quang</option>
          <option value="maria">Maria</option>
          <option value="josh">Josh</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;