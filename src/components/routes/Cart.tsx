import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState<object>([]);
  return <div>{cart ? 'Cart' : { cart }}</div>;
};
export default Cart;
