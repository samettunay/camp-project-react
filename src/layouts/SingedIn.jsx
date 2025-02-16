import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SingedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
                <Dropdown pointing="top left" text="Samet">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Çıkış yap" icon="sign out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
