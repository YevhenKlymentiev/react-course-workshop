import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './Card/Card';
import { addCardAsync } from 'store/slices/cards';
import ASYNC_STATUS from 'constants/async-status';
import styles from './Cards.module.scss';

function Cards() {
  const dispatch = useDispatch();
  const { list, status } = useSelector(state => state.cards );
  const [newCardValue, setNewCardValue] = useState('');

  function handleAddTodo(ev) {
    ev.preventDefault();

    const card = { title: newCardValue, id: Math.random() };

    dispatch(addCardAsync({ card }));
    setNewCardValue('');
  }

  function handleAddTodoFieldChange(ev) {
    ev.preventDefault();

    setNewCardValue(ev.target.value);
  }

  function renderList() {
    return list.map(curr => <Card key={curr.id} {...curr} />);
  }

  return (
    <div className={styles.container}>
      <h1>My Cards</h1>
      <form onSubmit={handleAddTodo} className={styles.addTodoForm}>
        <input type="text"
               placeholder="AddTodo"
               value={newCardValue}
               onChange={handleAddTodoFieldChange}
               disabled={status === ASYNC_STATUS.loading}
        />
      </form>
      { renderList() }
    </div>
  );
}

export default Cards;
