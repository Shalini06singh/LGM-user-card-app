import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const UserCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

const UserGrid = ({ users }) => {
  return (
    <Grid>
      {users.map((user) => (
        <UserCard key={user.id}>
          <img src={user.avatar} alt={user.first_name} />
          <h3>{user.first_name} {user.last_name}</h3>
          <p>Email: {user.email}</p>
        </UserCard>
      ))}
    </Grid>
  );
};

export default UserGrid;
