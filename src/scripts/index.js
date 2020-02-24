import './styles';
import { getRandomNumbers } from './random';

const randomArray = getRandomNumbers(3);

// test babel
class Human {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hello from ${this.name}`);
  }
}

const x = new Human(`Mo'men`);
x.sayHi();
console.log(randomArray);
