export default function UserListTable({ users }) {
  return (
    <table className='table table-bordered'>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Username</td>
          <td>Email</td>
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
