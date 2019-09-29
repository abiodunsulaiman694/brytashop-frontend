import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { CURRENT_USER_QUERY } from "./User";

export const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoney extends React.Component {
  onTokenResponse = async (res, createOrder) => {
    NProgress.start();
    console.log("Ontoken called", res);
    //manually call the mutation once we have the stripe token
    const order = await createOrder({
      variables: {
        token: res.id
      }
    }).catch(err => {
      alert(err.message);
    });
    console.log({ order });
    Router.push({
      pathname: "/order",
      query: { id: order.data.createOrder.id }
    });
  };
  render() {
    const { children } = this.props;
    return (
      <User>
        {({ data: { me }, loading }) => {
          if (loading) return null;
          return (
            <Mutation
              mutation={CREATE_ORDER_MUTATION}
              refetchQueries={[
                {
                  query: CURRENT_USER_QUERY
                }
              ]}
            >
              {createOrder => (
                <StripeCheckout
                  amount={calcTotalPrice(me.cart)}
                  name="BrytaShop"
                  description={`Order of ${totalItems(me.cart)} items`}
                  image={
                    me.cart.length > 0 &&
                    me.cart[0].item &&
                    me.cart[0].item.image
                  }
                  stripeKey="pk_test_RfwBxGBltTB84Zg6BndB4Wvf00ub29j2IS"
                  currency="NGN"
                  email={me.email}
                  token={res => this.onTokenResponse(res, createOrder)}
                >
                  {children}
                </StripeCheckout>
              )}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default TakeMyMoney;
