import React from 'react'
import CartSummary from './CartSummary'
import {
  DropdownMenu,
  DropdownItem,
  MenuMenu,
  MenuItem,
  Button,
  Dropdown,
  Menu,
  Container,
} from 'semantic-ui-react'

export default function Navi() {
  return (
    <Menu inverted fixed>
      <Container>
        <MenuItem
          name='home'
        />
        <MenuItem
          name='messages'
        />

        <MenuMenu position='right'>
          <CartSummary />

          <MenuItem>
            <Button primary>Sign Up</Button>
          </MenuItem>
        </MenuMenu>
      </Container>

    </Menu>
  )
}
