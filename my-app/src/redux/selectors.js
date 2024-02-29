import { statusFilters } from "./constants";

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleTasks = (state) => {
  // Folsim alte selectoare:
  const todo = selectTasks(state);
  const statusulFiltrului = selectStatusFilter(state);

  console.log("Calc todo count");

  switch (statusulFiltrului) {
    case statusFilters.active:
      return todo.filter((task) => !task.completed);

    case statusFilters.completed:
      return todo.filter((task) => task.completed);

    default:
      return todo;
  }
};

export const selectTaskCount = (state) => {
  const tasks = selectTasks(state);

  console.log("Calculating task count");

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    {
      active: 0,
      completed: 0,
    }
  );
};

/**Funcții selector
Același selector poate fi utilizat în mai multe locuri din aplicație, ceea ce duce la duplicarea codului, cum ar fi în componentele TaskList, StatusFilter și TaskCounter. Pentru a evita acest lucru și pentru a structura codul și mai bine, toate funcțiile selectorului sunt declarate într-un fișier separat. De exemplu, în src/redux/selectors.js, după care sunt importate în componente. */
