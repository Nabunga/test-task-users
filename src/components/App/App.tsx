import { FC } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import UserList from '../UserList/UserList';
import { Routes, Route } from 'react-router-dom'
import './App.scss';
import UserDetails from '../UserDetails/UserDetails';

const App: FC = () => {
  return (
    <div className="app">
      <div className="app-container">
        <section>
          <Sidebar />
        </section>
        <main className='main'>
          <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='user-details' element={<UserDetails />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
