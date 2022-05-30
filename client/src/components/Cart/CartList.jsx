import React, { useContext } from 'react';
import { Store } from '../../utils/Store';
import CartListItem from './CartListItem';

const CartList = () => {
  
  const { state } = useContext(Store);
  const { cart } = state;
  const cartItems = cart.cartItems

  return (
    <div>
          {cartItems.map(item => {
            return (
              <CartListItem
                key={item._id}
                title={item.title}
                mainImage={item.mainImage}
                author={item.author}
                hours={item.hours}
                lessons={item.lessons}
                price={item.price}
                likes={item.likes}
                id={item._id}
                // users={item.users}
                // tags={ }
                category={item.category}
                slug={item.slug}
              />
            )
          })
      }
    </div>
  )
}

export default CartList