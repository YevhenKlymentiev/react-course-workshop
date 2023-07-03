import { useEffect, useState } from 'react';

import styles from './Profile.module.scss';

function Profile(props) {
  const [user, setUser] = useState(null);

  async function fetchUserData(id = '') {
    const response = await fetch(`/user${id}.mock.json`);
    setUser(await response.json());
  }

  useEffect(() => {
    fetchUserData(props.id);
  }, [props.id]);

  return (
    <div className={styles.container}>
      { user
        ? <details>
            <summary>{user.name}</summary>
            <strong>{user.age}</strong> years old
            <br />
            lives in {user.address}
          </details>
        : <div className={styles.loader}>"Loading..."</div>
      }
    </div>
  );
}

export default Profile;
