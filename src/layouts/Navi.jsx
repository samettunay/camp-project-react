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
import SingedOut from './SingedOut'
import SingedIn from './SingedIn'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory()

  const handleSignOut = () => {
    setIsAuthenticated(false)
    history.push("/")
  }

  const handleSignIn = () => {
    setIsAuthenticated(true)
  }

  return (
    <Menu inverted fixed>
      <Container>
        <MenuItem
          name='Anasayfa' as={Link} to="/"
        />
        <MenuItem
          name='Ürünler' as={Link} to="/products"
        />

        <MenuMenu position='right'>
          <CartSummary />

          <MenuItem>
            {isAuthenticated ? <SingedIn signOut={handleSignOut} /> : <SingedOut signIn={handleSignIn} />}
          </MenuItem>
        </MenuMenu>
      </Container>

    </Menu>
  )
}
