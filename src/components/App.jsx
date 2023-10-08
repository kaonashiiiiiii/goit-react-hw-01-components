import appStyles from './app.module.css'
import { user, data, friends, transactions } from '../app_data'
import {
  FriendList,
  Profile,
  Statistics,
  TransactionHistory,
} from '.'

function App() {
  return (
    <div className={appStyles.container}>
      <Profile
        username={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App
