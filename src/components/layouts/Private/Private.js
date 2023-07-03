import { useLayoutEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Private() {
  const user = {};
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (!user) navigate('auth', { state: { from: pathname }});
  }, []);

  return (
    <Outlet />
  );
}

export default Private;
