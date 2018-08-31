// import data from '../config';

// console.log(data);
// const items = data.getItems();
//
// function hasItem(item) {
//   const foundItem = items.find((i) => i === item);
//   if (!foundItem) {
//     // exceptions
//     // console.log(`item ${item} is not found`);
//     return false;
//   }
//   return true;
// }

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

// function getCorrectList(list) {
//   // return deleteDublicate(list.filter(hasItem));
//   return deleteDublicate(list);
// }

export default deleteDublicate;
