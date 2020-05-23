import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';

// todo: здесь нужно сделать импорт Footer из '../footer/Footer'

// todo: здесь нужно сделать импорт usersList из '../../constants'
import {usersList} from '../../constants';

// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'
import {UserCard} from '../user-card/UserCard';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      {/*  todo: здесь нужно использовать Footer по аналогии с Header */}

      {/*  todo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}
        {usersList.map((value) => {
            return(
                <UserCard key={value.id} user={value}/>
            )
        })}

      <Footer />
    </div>
  );
}

export default App;
