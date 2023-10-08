import React from 'react'
import friendListItemStyles from './friendListItem.module.css'
import { getImagePath } from 'utils'

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props
  return (
    <li className={friendListItemStyles.item}>
      <span
        className={friendListItemStyles.status}
        style={{ background: isOnline ? 'green' : 'red' }}
      />
      <img
        className={friendListItemStyles.avatar}
        src={getImagePath(avatar)}
        alt="User avatar"
      />
      <p className={friendListItemStyles.name}>{name}</p>
    </li>
  )
}

export default FriendListItem
