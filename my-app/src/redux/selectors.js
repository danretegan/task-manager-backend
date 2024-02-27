export const getTasks = (state) => state.tasks.items;

export const getIsLoading = (state) => state.tasks.isLoading;

export const getError = (state) => state.tasks.error;

export const getStatusFilter = (state) => state.filters.status;

/**Funcții selector
Același selector poate fi utilizat în mai multe locuri din aplicație, ceea ce duce la duplicarea codului, cum ar fi în componentele TaskList, StatusFilter și TaskCounter. Pentru a evita acest lucru și pentru a structura codul și mai bine, toate funcțiile selectorului sunt declarate într-un fișier separat. De exemplu, în src/redux/selectors.js, după care sunt importate în componente. */
