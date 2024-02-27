export const statusFilters = Object.freeze({
  all: "all",
  active: "active",
  completed: "completed",
});

// Folosim metoda Object.freeze() pentru a «îngheța» obiectul cu valorile filtrelor și pentru a preveni modificarea accidentală prin referință, în locurile unde se importă.
