import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
      image
    }
  }
`;

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $image: String
    $largeImage: String
    $price: Int
  ) {
    updateItem(
      id: $id,
      data: {
        title: $title
        description: $description
        image: $image
        largeImage: $largeImage
        price: $price
      }
    ) {
      id
      title
      description
      price
      image
    }
  }
`;

class UpdateItem extends Component {
  state = {};
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
  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    const { id } = this.props;
    const response = await updateItemMutation({
      variables: {
        id,
        data: {
          ...this.state
        }
      }
    });
  };
  render() {
    const { title, image, description, largeImage, price } = this.state;
    const { id } = this.props;
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id }}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading Item...</p>;
          if (error) return <Error error={error} />;
          if (!data.item) return <p>No item found for ID: {id}</p>;
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
              {(updateItem, { loading, error, called }) => (
                <Form onSubmit={e => this.updateItem(e, updateItem)}>
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="file">Image</label>
                    <input
                      type="file"
                      name="file"
                      id="file"
                      placeholder="Upload an image"
                      onChange={this.uploadFile}
                    />
                    {image && (
                      <img src={image} width="200" alt="Upload Preview" />
                    )}

                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Title"
                      required
                      defaultValue={data.item.title}
                      onChange={this.handleChange}
                    />

                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      placeholder="Price"
                      required
                      defaultValue={data.item.price}
                      onChange={this.handleChange}
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      id="description"
                      placeholder="Enter a description"
                      required
                      defaultValue={data.item.description}
                      onChange={this.handleChange}
                    />
                    <button type="submit">
                      Sav{loading ? "ing" : "e"} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
export { UPDATE_ITEM_MUTATION };
