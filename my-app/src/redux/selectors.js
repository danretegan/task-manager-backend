import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleTasks = createSelector(
  // O matrice de selectori:
  [selectTasks, selectStatusFilter],
  // Funcția convertor:
  (todo, statusulFiltrului) => {
    console.log("Calc todo count Now memoized!");

    // Efectuăm calculele necesare și returnăm rezultatul:
    switch (statusulFiltrului) {
      case statusFilters.active:
        return todo.filter((task) => !task.completed);

      case statusFilters.completed:
        return todo.filter((task) => task.completed);

      default:
        return todo;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log("Calculating task count. Now memoized!");

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
});

/**Funcții selector
Același selector poate fi utilizat în mai multe locuri din aplicație, ceea ce duce la duplicarea codului, cum ar fi în componentele TaskList, StatusFilter și TaskCounter. Pentru a evita acest lucru și pentru a structura codul și mai bine, toate funcțiile selectorului sunt declarate într-un fișier separat. De exemplu, în src/redux/selectors.js, după care sunt importate în componente. */
