import ItemComponent from "../components/Item";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

const fakeItem = {
  id: "ABX123",
  title: "A cool item",
  price: 5000,
  description: "This item is sooo cool"
};

describe("Snapshot of <Item />", () => {
  const wrapper = shallow(<ItemComponent item={fakeItem} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

describe("<Item />", () => {
  it("renders and displays properly", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const priceTag = wrapper.find("PriceTag");
    expect(priceTag.children().text()).toBe("NGN 50");
    expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
    const img = wrapper.find("img");
    expect(img.props().src).toBe(fakeItem.image);
    expect(img.props().alt).toBe(fakeItem.title);
  });
  it("renders out the buttons properly", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const buttonList = wrapper.find(".buttonList");
    expect(buttonList.children()).toHaveLength(3);
    expect(buttonList.find("Link").exists()).toBe(true);
  });
});
