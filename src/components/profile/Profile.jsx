import React from 'react'
import profileStyles from './profile.module.css'
import { getImagePath } from 'utils'
const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props
  console.log(avatar)
  return (
    <div className={profileStyles.profile}>
      <div className={profileStyles.description}>
        <img src={getImagePath(avatar)} alt="User avatar" className={profileStyles.avatar} />
        <p className={profileStyles.name}>{username}</p>
        <p className={profileStyles.tag}>@{tag}</p>
        <p className={profileStyles.location}>{location}</p>
      </div>

      <ul className={profileStyles.stats}>
        <li>
          <span className={profileStyles.label}>Followers</span>
          <span className={profileStyles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={profileStyles.label}>Views</span>
          <span className={profileStyles.quantity}>{stats.following}</span>
        </li>
        <li>
          <span className={profileStyles.label}>Likes</span>
          <span className={profileStyles.quantity}>{stats.posts}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile
