import { addTask } from "../../redux/slices/TasksSlice";
import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";
// Importăm hook-ul:
import { useDispatch } from "react-redux";
// Importăm un generator de acțiuni:

export const TaskForm = () => {
  // Obținem o referință către o funcție pentru trimiterea acțiunii:
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // Apelăm generatorul de acțiuni și-i transmitem textul sarcinii pentru câmpul payload
    // Trimitem rezultatul - o acțiune de creare a sarcinii.
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
