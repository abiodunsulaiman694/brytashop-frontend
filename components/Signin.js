import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[
          {
            query: CURRENT_USER_QUERY
          }
        ]}
      >
        {(signin, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                const res = await signin();
                this.setState({
                  email: "",
                  password: ""
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Signin to Brytashop</h2>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email address"
                    value={email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Signin</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Signin;
