import './App.css';
import { useEffect, useState } from 'react'




function App() {
  const initialvalue = { username: '', Email: '', Password: '' }
  const [formvalues, setformvalues] = useState(initialvalue)
  const [formerrors, setformerror] = useState('')


  useEffect(() => {
    console.log(formerrors);
    if (Object.keys(formerrors).length === 0 && isSubmit) {
      console.log(formvalues)
    }
  }, [formerrors]);


  const handlechange = (e) => {
    const { name, value } = e.target;
    setformvalues({ ...formvalues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setformerror(validate(formvalues))
  }
  const validate = values => {
    const errors = {};
    if (!values.usernmae) {
      errors.username = 'username  is required'

    }
    if (!values.Email) {
      errors.Email = 'Email is required'
    }
  }
  if (!values.Password) {
    errors.Password = 'Password is required';
  } else if (values.Password < 4) {
    errors.password = 'not valid'
  } else if (values.Password > 10) {
    errors.password = 'not specified'
  }
return errors;

 }; 
 return (
<div className='container'>

  <form onSubmit={handleSubmit} >

    <h1>Login Form</h1>

    <div className='empty'></div>
    <div className='waste'>
      <label>username</label>
      <input type='text' placeholder='username' value={formvalues.username} onChange={handlechange} ></input>

      <p>{formerrors.username}</p>
    </div>
    <div className='waste1'>
      <label>Email</label>
      <input type='Email' placeholder='Email' value={formvalues.Email} onChange={handlechange} ></input>

      <p>{formerrors.email}</p>
    </div>
    <div className='waste2'>
      <label>Password</label>
      <input type='number' placeholder='Password' value={formvalues.Password} onChange={handlechange}></input>
      <p>{formerrors.password}</p>
    </div>

    <button className='waste3'>submit</button>

  </form >
</div >
);


export default App;
