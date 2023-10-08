import React from 'react'
import friendListStyles from './friendList.module.css'
import FriendListItem from '../friendListItem/FriendListItem'

const FriendList = ({ friends }) => {
  return (
    <ul className={friendListStyles['friend-list']}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.name}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  )
}

export default FriendList
