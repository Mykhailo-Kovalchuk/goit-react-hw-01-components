import {Profile} from './Profile component/Profile' // Імпорт компоненту Profile
import user from './Profile component/user.json'; // імпорт даних юзера з файлу джейсон (підозрюю що замість файлу по нормальному будуть приходити дані з сервера)

import {Statistics} from './Statistics component/Statistics'
import statisticData from './Statistics component/data.json'

import {FriendList} from './FriendList conponent/FriendList'
import friends from './FriendList conponent/friends.json'

import { TransactionHistory } from './Transactions component/Transactions.jsx';
import transactions from './Transactions component/transactions.json'


export const App = () => {

  return (
    // Не збуваємо про занальний div або порожній тег <>
////////////////// 1. //На майбутнє, тут буде HEADER який буде створюватись теж як реакт компонент

/////////////// 2. // Тут типу main, теж як компонент але він буде інтерактивний (тобто буде змінюватись)

    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <p> React homework template</p>

         <Profile 
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
         />

          <Statistics 
          title="Upload stats"
          stats={statisticData} 
          />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>


      
      ///////////// 3. На майбутнє, тут буде FOOTER який буде створюватись теж як реакт компонент

  );
};
