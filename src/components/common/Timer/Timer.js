import { useEffect } from "react";

import styles from './Timer.module.scss';

function Timer({ onSelect = () => {}}) {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onSelect(null);
    }, 5000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [onSelect]);

  function renderButtons() {
    return [1, 2, 3, 4].map(choice => (
      <button
        key={choice}
        type="button"
        data-testid={choice}
        onClick={() => onSelect(choice)}
      >
        {choice}
      </button>
    ));
  }

  return (
    <div className={styles.container}>
      { renderButtons() }
    </div>
  );
}

export default Timer;
