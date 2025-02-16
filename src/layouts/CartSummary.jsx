import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function CartSummary() {
  return (
    <Menu.Item style={{ display: 'flex', alignItems: 'center' }}>
      <Dropdown item text='Sepetiniz'>
        <Dropdown.Menu>
          <Dropdown.Item>Monster Laptop</Dropdown.Item>
          <Dropdown.Item>Samsung Telefon</Dropdown.Item>
          <Dropdown.Item>El sabunu</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item as={Link} to="/cart">Sepete git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}
