import React, {useState} from 'react';


export default function Form(props) {
  /* const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') */

  const [input , setInput] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = React.useState({});

  const handleInputChange = function(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  function validate(input) {
    let errors = {};
    if (!input.username) {
      errors.username = 'Username is required';
    } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid';
    } else if (!/(?=.*[0-9])/.test(input.password)) {
      errors.password = 'Password is invalid';
    } else if (!input.password){
      errors.password = 'Password is required';
    }
    
    return errors;
  };

  return (
      <form>
        <div>
          <label>Username:</label>
          <input type="text" name='username' value={input.username} onChange={handleInputChange}/>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name='password' value={input.password} onChange={handleInputChange}/>
        </div>
          <input type="submit" />
      </form>
  )
}
