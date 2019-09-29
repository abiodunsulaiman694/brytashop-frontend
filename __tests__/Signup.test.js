import { mount } from "enzyme";
import wait from "waait";
import toJSON from "enzyme-to-json";
import { MockedProvider } from "react-apollo/test-utils";
import { ApolloConsumer } from "react-apollo";
import Signup, { SIGNUP_MUTATION } from "../components/Signup";
import { CURRENT_USER_QUERY } from "../components/User";
import { fakeUser } from "../lib/testUtils";

function type(wrapper, name, value) {
  wrapper.find(`input[name="${name}"]`).simulate("change", {
    target: { name, value }
  });
}

const me = fakeUser();
const { email, __typename, id, name, permissions, orders, cart } = me;

const mocks = [
  //signup mock mutation
  {
    request: {
      query: SIGNUP_MUTATION,
      variables: {
        email,
        name,
        password: "hello"
      }
    },
    result: {
      data: {
        __typename,
        id,
        email,
        name
      }
    }
  },
  //current user query mocks
  {
    request: {
      query: CURRENT_USER_QUERY
    },
    result: {
      data: { me }
    }
  }
];

describe("<Signup />", () => {
  it("renders and matches snapshot", async () => {
    const wrapper = mount(
      <MockedProvider>
        <Signup />
      </MockedProvider>
    );
    expect(toJSON(wrapper.find("form"))).toMatchSnapshot();
  });
  it("calls the mutation properly", async () => {
    let apolloClient;
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {client => {
            apolloClient = client;
            return <Signup />;
          }}
        </ApolloConsumer>
        <Signup />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    type(wrapper, "name", name);
    type(wrapper, "email", email);
    type(wrapper, "password", "hello");

    wrapper.update();
    wrapper.find("form").simulate("submit");
    await wait();
    //query the user out of the apollo client
    const user = await apolloClient.query({ query: CURRENT_USER_QUERY });
    expect(user.data.me).toMatchObject(me);
  });
});