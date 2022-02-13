import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CrudCreate() {
  const navigate = useNavigate();

  const [ username, setUsername ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  function updateUsername(e) {
    setUsername(e.target.value);
  }

  function updateName(e) {
    setName(e.target.value);
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  async function createUser(e) {
    e.preventDefault();

    const userData = { username, name, email };

    try {
      await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        userData,
      );

      navigate('/crud');
    } catch (error) {
      console.error(error);
    }
  }

  return (<>
    <h3>Create</h3>
    <form
      className="row g-3"
      onSubmit={createUser}
    >
      <div className='col-md-6'>
        <label
          htmlFor='username'
          className='form-label'
        >
          Username
        </label>
        <input
          id='username'
          type='text'
          className='form-control'
          value={username}
          onChange={updateUsername}
        />
      </div>

      <div className='col-md-6'>
        <label
          htmlFor='name'
          className='form-label'
        >
          Name
        </label>
        <input
          id='username'
          type='text'
          className='form-control'
          value={name}
          onChange={updateName}
        />
      </div>

      <div className='col-md-6'>
        <label
          htmlFor='email'
          className='form-label'
        >
          Email
        </label>
        <input
          id='email'
          type='email'
          className='form-control'
          value={email}
          onChange={updateEmail}
        />
      </div>

      <div className='col-12'>
        <button
          type='submit'
          className="btn btn-primary"
        >
          Submit
        </button>
        <Link
          to="/crud"
          className="ms-2 btn btn-secondary"
        >
          List
        </Link>
      </div>
    </form>
  </>);
};
