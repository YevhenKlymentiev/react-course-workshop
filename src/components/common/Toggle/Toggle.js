import { useState } from 'react';

import styles from './Toggle.module.scss';

function Toggle({ onChange = () => {} }) {
  const [state, setState] = useState(false);

  function handleClick() {
    onChange(!state);
    setState(previousState => !previousState);
  }

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={handleClick}
        data-testid="toggle"
      >
        { state ? "Turn off" : "Turn on" }
      </button>
    </div>
  );
}

export default Toggle;
