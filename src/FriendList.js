import FriendListItem from './FriendListItem.js'

export default function FriendList({friends}) {
  console.log(friends)
  const li = friends.map(friend => (<FriendListItem
    status={friend.isOnline}
    avatar={friend.avatar}
    name={friend.name}
    key={friend.id}
  />))

  return (
    <ul className="friend-list">
        {li}
    </ul>
  )
}

