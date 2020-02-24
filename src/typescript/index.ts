interface Human {
  name: string;

  sayHi: Function;
}

let x: Human = {
  name: `Mo'men`,
  sayHi: () => {
    console.log(`Hello from TS ${x.name}`)
  }
}

x.sayHi();