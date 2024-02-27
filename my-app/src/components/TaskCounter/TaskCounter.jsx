import { getTasks } from "../../redux/selectors";
import css from "./TaskCounter.module.css";
// Importăm hook-ul:
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  // Obținem o matrice de sarcini din starea Redux:
  const tasks = useSelector(getTasks);

  // Obținem date derivate pe baza stării Redux:
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }

      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
