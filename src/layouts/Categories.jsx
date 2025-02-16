import React from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <MenuItem as={Link} to="/"
          name='Laptop'
        />
        <MenuItem as={Link} to="/products"
          name='Telefon'
        />
        <MenuItem as={Link} to="/products"
          name='Tablet'
        />
        <MenuItem as={Link} to="/products"
          name='Elektronik'
        />
      </Menu>
    </div>
  )
}
