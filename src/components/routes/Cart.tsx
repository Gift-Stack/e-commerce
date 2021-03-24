import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState<object>([]);

  useEffect(() => {
    some();
  }, [cart]);
  const some = () => {
    console.log(cart);
    console.log(setCart({ name: 'gift' }));
  };
  return <div>Cart</div>;
};
export default Cart;
