import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function CrudUpdate() {
  const navigate = useNavigate();
  const params = useParams();

  const [ username, setUsername ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);

        const { username, name, email } = data;

        setUsername(username);
        setName(name);
        setEmail(email);
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [params.id]);

  function updateUsername(e) {
    setUsername(e.target.value);
  }

  function updateName(e) {
    setName(e.target.value);
  }

  function updateEmail(e) {
    setEmail(e.target.value);
  }

  async function updateUser(e) {
    e.preventDefault();

    const userData = { username, name, email };

    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${params.id}`,
        userData,
      );

      navigate('/crud');
    } catch (error) {
      console.error(error);
    }
  }

  return (<>
    <h3>Update</h3>
    <form
      className="row g-3"
      onSubmit={updateUser}
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
          Update
        </button>
        <Link
          to="/crud"
          className="ms-2 btn btn-secondary"
        >
          Cancel
        </Link>
      </div>
    </form>
  </>);
};
