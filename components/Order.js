import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { format } from "date-fns";
import Head from "next/head";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";
import OrderStyles from "./styles/OrderStyles";

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      paymentPlatform
      createdAt
      user {
        id
        name
      }
      items {
        id
        title
        description
        image
        quantity
        price
      }
    }
  }
`;

class Order extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };
  render() {
    const { id } = this.props;
    return (
      <Query query={SINGLE_ORDER_QUERY} variables={{ id }}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          const {
            order: { id, charge, createdAt, total, items, paymentPlatform }
          } = data;
          return (
            <OrderStyles>
              <Head>
                <title>BrytaShop - Order {id}</title>
              </Head>
              <p>
                <span>Order ID:</span>
                <span>{id}</span>
              </p>
              <p>
                <span>Charge:</span>
                <span>{charge}</span>
              </p>
              <p>
                <span>Payment Platform:</span>
                <span>{paymentPlatform}</span>
              </p>
              <p>
                <span>Date:</span>
                <span>{format(createdAt, "MMMM d, YYYY h:mm:ss a ")}</span>
              </p>
              <p>
                <span>Total:</span>
                <span>{formatMoney(total)}</span>
              </p>
              <p>
                <span>Item Count:</span>
                <span>{items.length}</span>
              </p>
              <div className="items">
                {items.map(item => (
                  <div className="order-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="item-details">
                      <h2>{item.title}</h2>
                      <p>Qty: {item.quantity}</p>
                      <p>Each: {formatMoney(item.price)}</p>
                      <p>Subtotal: {formatMoney(item.price * item.quantity)}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </OrderStyles>
          );
        }}
      </Query>
    );
  }
}

export default Order;
