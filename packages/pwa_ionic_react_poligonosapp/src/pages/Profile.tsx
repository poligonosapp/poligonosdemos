import React, { Component, useState } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

import { useAuth0 } from '@auth0/auth0-react';



class Profile extends Component {

  constructor(props) {
    
    super(props);

    this.state = { user: props.auth0 };
}

  render() {

    // const {user} = useAuth0();

    let [user, setUser] = useState(
        this.state.user
    );

    // `this.props.auth0` has all the same properties as the `useAuth0` hook
    const { user } = this.props.auth0;
    return <div>Hello {user.name}</div>;
  }
}

export default withAuth0(Profile);