import { mount } from "enzyme";
import wait from "waait";
import { MockedProvider } from "react-apollo/test-utils";
import PleaseSignIn from "../components/PleaseSignIn";
import { fakeUser } from "../lib/testUtils";
import { CURRENT_USER_QUERY } from "../components/User";

const notSignedInMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY
    },
    result: {
      data: {
        me: null
      }
    }
  }
];

const signedInMocks = [
  {
    request: {
      query: CURRENT_USER_QUERY
    },
    result: {
      data: {
        me: fakeUser()
      }
    }
  }
];

describe("<PleaseSignIn />", () => {
  it("renders the signin dialog to enforce login", async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <PleaseSignIn />
      </MockedProvider>
    );
    await wait();
    wrapper.update();
    expect(wrapper.text()).toContain("Please, sign in before continuing");
    expect(wrapper.find("Signin").exists()).toBeTruthy();
  });
  it("renders the child component when the user is signed in", async () => {
    const Hey = () => <p>Hey!</p>;
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <PleaseSignIn>
          <Hey />
        </PleaseSignIn>
      </MockedProvider>
    );
    await wait();
    wrapper.update();

    expect(wrapper.find("Hey").exists()).toBeTruthy();
    expect(wrapper.contains(<Hey />)).toBeTruthy();
  });
});
