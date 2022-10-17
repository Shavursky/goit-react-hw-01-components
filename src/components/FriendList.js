import FriendListItem from './FriendListItem.js';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ isOnline, avatar, name, id }) => (
        <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name}
          key={id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
}
