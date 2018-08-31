import { hasItem } from '../function/checkFuncs';

function deleteDublicate(arr) {
  const newArr = [];
  arr.reduce((acc, item) => {
    if (acc.find((i) => i === item)) {
      return acc;
    };
    acc.push(item);
    return acc;
  }, newArr);
  return newArr;
}

function getCorrectList(list) {
  return deleteDublicate(list.filter(hasItem));
}

export { deleteDublicate, getCorrectList };
