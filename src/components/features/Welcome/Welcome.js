import styles from './Welcome.module.scss';

function Welcome({ name }) {
  return (
    <h1 className={styles.container}>
      { name
        ? `Hello, ${name}!`
        : 'Hey, stranger'
      }
    </h1>
  );
}

export default Welcome;
