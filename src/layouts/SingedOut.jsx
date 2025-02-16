import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SingedOut(props) {
  return (
    <div>
      <Button primary onClick={props.signIn}>Giriş yap</Button>
      <Button primary>Kayıt ol</Button>
    </div>
  )
}
