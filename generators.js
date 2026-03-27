function* generator() {
  yield 1;
  yield 2;
  yield 3;
  for (let index = 1; index < 4; index++) {
    yield index;
  }
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}

const gen = generator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }