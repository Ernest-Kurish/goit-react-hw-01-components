import { ProfileCard } from "./Profile/ProfileCard";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from 'data/user'
import data from 'data/data'
import friends from 'data/friends'
import transactions from 'data/transactions'

export const App = () => {
  return (
    <>
      <h3>1 - Social Link Profile</h3>
      <ProfileCard user={user} />
      <h3>2 - Statistics Section</h3>
      <Statistics title="Upload stats" data={data} />
      <h3>3 - Friends List</h3>
      <FriendList friends={friends} />
      <h3>4 - Transaction History</h3>
      <TransactionHistory transactions={transactions} />
    </>
  );
};

