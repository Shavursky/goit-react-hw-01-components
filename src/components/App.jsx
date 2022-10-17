import Profile from './Profile.js';
import user from '../data/user.json';
import Statistics from './Statistics.js';
import data from '../data/data.json';
import FriendList from './FriendList.js';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory.js';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
