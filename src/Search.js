import React, {useState } from 'react';

const Search = ({ onFilterRepo }) => {

  const [text, setText] = useState('');
  

  const onChange = e => {
    setText(e.target.value);
  }
  
  // Search User
  const searchUsers = async text => {
    
    const res = await fetch(
      `https://api.github.com/search/users?q=${text}/repos`
    );

    // dispatch({
    //   type: SEARCH_USERS,
    //   payload: res.data.items
    // });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchUsers(text)
    setText('');
    
  }

  const handleChange = (e) => {
    setText(e.target.value);
    onFilterRepo(e.target.value);
  };
    
    return (
      <div>
        <form onSubmit={onSubmit}>
          <div className="form">
            <input 
                type="text" 
                name="text" 
                placeholder="Search Users..." 
                value={text} onChange={handleChange}/>
            <input type="submit" value="Search" className="btn btn-dark btn-block"/>
          </div>
        </form>
        
      </div>
    )
  
}


export default Search
