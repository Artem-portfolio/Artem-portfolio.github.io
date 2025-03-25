const dishes = [
  { name: "Назва", price: "Ціна" },
  { name: "Хачапурі", price: "350 грн" },
  { name: "Хінкалі", price: "550 грн" },
  { name: "Чашушулі", price: "870 грн" },
  { name: "Сациві", price: "640 грн" },
  { name: "Чахохбілі", price: "910 грн" },
];

const table = document.querySelector('.dishes__table');

for (dish of dishes) {

  const row = document.createElement('tr');
  row.classList.add('table__row');

  const nameCell = document.createElement('td');
  nameCell.classList.add('table__title');
  nameCell.textContent = dish.name;

  const priceCell = document.createElement('td');
  priceCell.classList.add('table__price');
  priceCell.textContent = dish.price;

  row.append(nameCell);
  row.append(priceCell);

  table.append(row);
}