const first = () => {
  second();
  console.log("first");
};
const second = () => {
  third();
  console.log("second");
};
const third = () => {
  console.log("third");
};

first();
