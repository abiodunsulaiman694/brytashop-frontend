import React from "react";
import PaystackButton from "react-paystack";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import styled from "styled-components";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { CURRENT_USER_QUERY } from "./User";

const Pay = styled.div`
  .payButton {
    background: #3d7bc9;
    color: white;
    font-weight: 500;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    font-size: 2rem;
    padding: 0.8rem 1.5rem;
    transform: skew(-2deg);
    display: inline-block;
    transition: all 0.5s;
    &[disabled] {
      opacity: 0.5;
    }
  }
`;

export const CREATE_ORDER_PAYSTACK_MUTATION = gql`
  mutation CREATE_ORDER_PAYSTACK_MUTATION(
    $reference: String!
    $trans: String!
    $transaction: String!
    $trxref: String!
  ) {
    createOrderPaystack(
      reference: $reference
      trans: $trans
      transaction: $transaction
      trxref: $trxref
    ) {
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

class TakeMyMoneyPaystack extends React.Component {
  onTokenResponse = async (res, createOrderPaystack) => {
    if (res.status !== "success") {
      return;
    }
    NProgress.start();
    console.log("Ontoken paystack called", res);
    //manually call the mutation once we have the paystack token
    const order = await createOrderPaystack({
      variables: {
        reference: res.reference,
        trans: res.trans,
        transaction: res.transaction,
        trxref: res.trxref
      }
    }).catch(err => {
      alert(err.message);
    });
    console.log("order from paystack frontend", order);
    Router.push({
      pathname: "/order",
      query: { id: order.data.createOrderPaystack.id }
    });
  };
  close = () => {
    console.log("Payment closed");
  };
  render() {
    return (
      <User>
        {({ data: { me }, loading }) => {
          if (loading) return null;
          return (
            <Mutation
              mutation={CREATE_ORDER_PAYSTACK_MUTATION}
              refetchQueries={[
                {
                  query: CURRENT_USER_QUERY
                }
              ]}
            >
              {createOrderPaystack => (
                <Pay>
                  <PaystackButton
                    text="Pay with Paystack"
                    currency="NGN"
                    className="payButton"
                    callback={res =>
                      this.onTokenResponse(res, createOrderPaystack)
                    }
                    close={this.close}
                    disabled={false}
                    embed={false}
                    email={me.email}
                    amount={calcTotalPrice(me.cart)}
                    paystackkey="pk_test_cd998cf8585ed603d6ba32e8f9e76e8cb0430c18"
                    tag="button"
                  />
                </Pay>
              )}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default TakeMyMoneyPaystack;
