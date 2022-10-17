import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
console.log(isOnline);
  return (
    <li className='item'>
      <span className={isOnline ? 'online' : 'offline'}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}
