import { Outlet } from 'react-router-dom';

function Auth() {
  const user = {};

  if (user) {
    return <h1 style={{textAlign: 'center'}}>This page is only available to unauthorized users.</h1>
  }

  return (
    <Outlet />
  );
}

export default Auth;
