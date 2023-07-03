import styles from './Card.module.scss';

function Card(props) {
  const { title } = props;

  function handleUpdate(ev) {
    ev.preventDefault();
  }

  function handleDelete(ev) {
    ev.preventDefault();
  }

  return (
    <div className={styles.card}>
      <div>{ title }</div>
      <hr/>
      <button type="button" onClick={handleUpdate}>Edit</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Card;
