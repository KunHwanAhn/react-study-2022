import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function CrudRead() {
  const navigate = useNavigate();

  const [ loading, setLoading ] = useState(false);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    async function getUsers() {
      setLoading(true);

      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

        setUsers(data);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    getUsers();
  }, []);

  function goCreatePage() {
    navigate('create');
  };

  function goEditPage(id) {
    navigate(`${id}/update`);
  }

  function goDeletePage(id) {
    navigate(`${id}/delete`);
  }

  function renderUserTable(users) {
    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr key={`user-${user.id}`}>
                <td>{ user.id }</td>
                <td>{ user.name }</td>
                <td>{ user.username }</td>
                <td>{ user.email }</td>
                <td className='text-nowrap'>
                  <button
                    className='btn btn-sm btn-primary'
                    onClick={() => goEditPage(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-sm btn-danger ms-1'
                    onClick={() => goDeletePage(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  const contents = loading ? <p><em>Loading...</em></p> : renderUserTable(users);

    return (
      <div>
        <h1 className='d-flex align-items-center'>
          <span>CRUD</span>
          <button
            className='btn btn-primary ms-2'
            onClick={goCreatePage}
          >
            <span className='fa fa-plus' />
          </button>
        </h1>
        <h3>리액트를 사용한 CRUD 예제 프로젝트입니다.</h3>
        {contents}
      </div>
    );
};
