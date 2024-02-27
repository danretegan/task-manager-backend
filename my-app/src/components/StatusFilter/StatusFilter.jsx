import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
// Importăm hook-ul:
import { useSelector, useDispatch } from "react-redux";
// Importăm obiectul cu valorile filtrelor:
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
// Importăm generatorul de acțiuni:
import { setStatusFilter } from "../../redux/slices/FiltersSlice";

export const StatusFilter = () => {
  // Obținem o referință către o funcție pentru trimiterea acțiunii:
  const dispatch = useDispatch();

  // Obținem valoarea filtrului din starea Redux:
  const filter = useSelector(getStatusFilter);

  // Apelăm generatorul de acțiuni și-i transmitem valoarea filtrului
  // Trimitem rezultatul - o acțiune de modificare a filtrului:
  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
