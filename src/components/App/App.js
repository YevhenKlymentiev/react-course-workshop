import { Routes, Route, useNavigate } from 'react-router-dom';

import Header from 'components/layouts/Header/Header';
import Auth from 'components/layouts/Auth/Auth';
import Private from 'components/layouts/Private/Private';
import Welcome from 'components/features/Welcome/Welcome';
import Profile from 'components/features/Profile/Profile';
import Cards from 'components/features/Cards/Cards';
import NotFound from 'components/features/NotFound/NotFound';
import Toggle from 'components/common/Toggle/Toggle';
import Timer from 'components/common/Timer/Timer';
import styles from './App.module.scss';

function App() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route element={<Auth />}>
          <Route path="/login" element={<>Login</>} />
          <Route path="/signup" element={<>Signup</>} />
          <Route path="/forgot-password" element={<>Forgot Password</>} />
          <Route path="/restore-password" element={<>Restore Password</>} />
        </Route>
        <Route element={<Private />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/timer" element={<Timer onSelect={(result) => {alert(result); navigate('/')}} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
