const myArr = [
  {
    id: 1,
    value: false,
  },
  {
    id: 2,
    value: false,
  },
  {
    id: 3,
    value: false,
  },
  {
    id: 4,
    value: false,
  },
  {
    id: 5,
    value: false,
  },
];

function changeValue(id, value) {
  return myArr.map((item) => {
    if (item.id === id) return { id, value };
    return item;
  });
}

console.log(changeValue(2, true));
