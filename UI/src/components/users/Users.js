import React, {Component} from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'Arihant416',
        avatar_url: 'https://avatar0.githubusercontent.com/u/1/?v=4',
        html_url: 'https://github.com/Arihant416',
      },
      {
        id: '1',
        login: 'Arihant416',
        avatar_url: 'https://avatar0.githubusercontent.com/u/1/?v=4',
        html_url: 'https://github.com/Arihant416',
      },
      {
        id: '1',
        login: 'Arihant416',
        avatar_url: 'https://avatar0.githubusercontent.com/u/1/?v=4',
        html_url: 'https://github.com/Arihant416',
      },
    ],
  };
  render () {
    return (
      <div style={userStyle}>
        {this.state.users.map (user => <UserItem key={user.id} user={user} />)}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
