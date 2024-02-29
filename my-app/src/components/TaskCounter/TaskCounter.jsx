import { selectTaskCount } from "../../redux/selectors";
import css from "./TaskCounter.module.css";
// Importăm hook-ul:
import { useSelector } from "react-redux";

export const TaskCounter = () => {
  // Acum codul pentru componenta TaskCounter este mult mai simplu, deoarece am mutat toata logica in selector. Componenta trebuie doar să apeleze selectorul și să folosească valoarea rezultată:
  const count = useSelector(selectTaskCount);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
