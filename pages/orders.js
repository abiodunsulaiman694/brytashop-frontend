import OrderList from "../components/OrderList";
import PleaseSignIn from "../components/PleaseSignIn";

const Orders = props => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);

export default Orders;
