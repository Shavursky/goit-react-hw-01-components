import Profile from './Profile.js';
import user from '../user.json';
import Statistics from '../Statistics.js';
import data from '../data.json';
import FriendList from '../FriendList.js';
import friends from '../friends.json';
import TransactionHistory from '../TransactionHistory.js';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList
        friends={friends} />;
      <TransactionHistory
        items={transactions} />;
    </div>
  );
};
