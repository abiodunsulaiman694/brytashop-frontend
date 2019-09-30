import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
    $price: Int!
  ) {
    createItem(
      data: {
        title: $title
        description: $description
        image: $image
        largeImage: $largeImage
        price: $price
      }
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: "",
    image: "",
    description: "",
    largeImage: "",
    price: 0
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };
  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "brytashop");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/bryta/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log({ file });
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };
  render() {
    const { title, image, description, largeImage, price } = this.state;
    return (
      <Mutation
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
        // refetchQuery={[ALL_ITEMS_QUERY]}
      >
        {(createItem, { loading, error, called, data }) => (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              //call the mutation
              const res = await createItem();
              //go to the single item page
              console.log(res);
              Router.push({
                pathname: "/item",
                query: { id: res.data.createItem.id }
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">Image</label>
              <input
                type="file"
                name="file"
                id="file"
                placeholder="Upload an image"
                required
                onChange={this.uploadFile}
              />
              {image && <img src={image} width="200" alt="Upload Preview" />}

              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                required
                value={title}
                onChange={this.handleChange}
              />

              <label htmlFor="price">Price(in Kobo)</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Price"
                required
                value={price}
                onChange={this.handleChange}
              />

              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                placeholder="Enter a description"
                required
                value={description}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
