// Generic type

type MyType<T> = {
  value: T;
  getValue: () => T;
};

// Ushbu turdan foydalanuvchi funksiya
function useMyType<T>(arg: MyType<T>): T {
  return arg.getValue();
}

// Misol uchun, MyType turidan foydalanish
const stringInstance: MyType<string> = {
  value: "Hello",
  getValue: () => "Hello",
};

const numberInstance: MyType<number> = {
  value: 42,
  getValue: () => 42,
};

console.log(useMyType(stringInstance)); // 'Hello'
console.log(useMyType(numberInstance)); // 42




// -----------------------------------------------------




// Function type
type MyFunctionType<T, U> = (arg1: T, arg2: U) => [T, U];

// Ushbu turdan foydalanuvchi funksiya
const myFunction: MyFunctionType<number, string> = (num, str) => {
  return [num, str];
};

// MyFunctionType turidan foydalanish
const result = myFunction(5, "TypeScript");
console.log(result); // [5, 'TypeScript']
