export const getTasks = (state) => state.tasks;

export const getStatusFilter = (state) => state.filters.status;

/**Funcții selector
Același selector poate fi utilizat în mai multe locuri din aplicație, ceea ce duce la duplicarea codului, cum ar fi în componentele TaskList, StatusFilter și TaskCounter. Pentru a evita acest lucru și pentru a structura codul și mai bine, toate funcțiile selectorului sunt declarate într-un fișier separat. De exemplu, în src/redux/selectors.jsx, după care sunt importate în componente. */
