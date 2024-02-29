import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
// Importăm hook-ul:
import { useSelector } from "react-redux";
// Importăm un obiect cu valorile filtrelor:
import { selectVisibleTasks } from "../../redux/selectors";

export const TaskList = () => {
  // codul pentru componenta TaskList este mult mai simplu, deoarece am mutat toată logica în selector.
  const todo = useSelector(selectVisibleTasks);

  return (
    <ul className={css.list}>
      {todo.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

// UNDE SUNT PROPS?
// Componenta TaskList nu are props, așa cum ar fi cu React State. Componenta App nu mai trebuie să știe că TaskList este abonată la datele din store. Folosind Redux, orice componentă poate accesa direct valorile din starea Redux, dacă este necesar.
