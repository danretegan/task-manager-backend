import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
// Importăm hook-ul:
import { useSelector } from "react-redux";
// Importăm un obiect cu valorile filtrelor:
import { statusFilters } from "../../redux/constants";
import { getStatusFilter, getTasks } from "../../redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);

    case statusFilters.completed:
      return tasks.filter((task) => task.completed);

    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Obținem o matrice cu sarcini din starea Redux:
  const tasks = useSelector(getTasks);
  // Obținem valoarea filtrului din starea Redux:
  const statusFilter = useSelector(getStatusFilter);
  // Calculăm matricea de sarcini care trebuie afișată în interfață:
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};

// UNDE SUNT PROPS?
// Componenta TaskList nu are props, așa cum ar fi cu React State. Componenta App nu mai trebuie să știe că TaskList este abonată la datele din store. Folosind Redux, orice componentă poate accesa direct valorile din starea Redux, dacă este necesar.
