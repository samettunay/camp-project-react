import React from 'react'
import { Dropdown, Menu, Label, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';
export default function CartSummary() {

  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.warning(`${product.productName} sepetten silindi`);
  }

  return (
    <Menu.Item style={{ display: 'flex', alignItems: 'center' }}>
      <Dropdown item text='Sepetiniz'>
        <Dropdown.Menu>
          {cartItems.map(item => (
            <Dropdown.Item key={item.product.id}>
              <Label style={{ marginRight: '8px' }}>{item.quantity}</Label>
              <span style={{ marginRight: '8px' }}>{item.product.productName}</span>
              <Button size='mini' onClick={() => handleRemoveFromCart(item.product)}>Sil</Button>
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/cart">Sepete git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}
