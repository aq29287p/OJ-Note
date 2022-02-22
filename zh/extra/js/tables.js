document$.subscribe(() => {
  let tables = document.querySelectorAll('article table');
  tables.forEach((table) => {
    new Tablesort(table);
  });
});
