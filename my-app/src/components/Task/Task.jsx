import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import PropTypes from "prop-types";
// Importăm hook-ul:
import { useDispatch } from "react-redux";
// Importăm generatorul de acțiuni:
import { deleteTask, toggleCompleted } from "../../redux/slices/TasksSlice";

export const Task = ({ task }) => {
  // Obținem o referință către funcția pentru trimiterea acțiunii:
  const dispatch = useDispatch();

  // Apelăm generatorul de acțiuni și-i transmitem id-ul sarcinii
  // Trimitem rezultatul - o acțiunea de ștergere a sarcinii:
  const handleDelete = () => dispatch(deleteTask(task.id));

  // Apelăm generatorul de acțiuni și-i transmitem id-ul sarcinii
  // Trimitem rezultatul - o acțiune de modificare a stării sarcinii:
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleToggle}
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button type="button" onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};
