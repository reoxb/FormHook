import React from 'react';
import useFormValidation from './useForm';
import './App.css';

function App() {
  const intialState = {
    name: '',
    email: '',
    password: ''
  }
  
  const {handleChange, handleSubmit, values} = useFormValidation(intialState)

  return (
    <div className="App-header">
     <h2> Hook Form </h2>
     <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange} 
        type='text'
        name='name'
        value={values.name}
        placeholder='name'
      />
      <input
        onChange={handleChange} 
        type='email'
        name='email'
        value={values.email}
        placeholder='email'
      />
      <input
        onChange={handleChange} 
        type='password'
        name='password'
        value={values.password}
        placeholder='password'
      />
      <button type='submit'> Submit </button>
     </form>
    </div>
  );
}

export default App;
