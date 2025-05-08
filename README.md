
# What is the keyof Keyword in TypeScript?

The keyof keyword in TypeScript is like a helper that lists all the keys (property names) of an object type. It keeps our code safe by making sure we only use real keys.

#### How keyof Works

If we have an object type, keyof gives us its property names as a list of options. For example:
```javascript 
interface Student {
  name: string;
  grade: number;
  class: string;
}

type StudentKeys = keyof Student; // "name" | "grade" | "class"
```
Here, StudentKeys is a type that only allows "name", "grade", or "class".

Real Example

Let’s say we want to get a value from an object, but we want to make sure the key is valid. keyof helps!
```javascript 
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const student: Student = { name: "Sam", grade: 85, class: "Math" };
const name = getValue(student, "name"); // Works, gives "Sam"
const grade = getValue(student, "grade"); // Works, gives 85
// const wrong = getValue(student, "age"); // Error: "age" isn’t a key!
```
#### In this code:

T is the object, and K is one of its keys.

TypeScript checks that key is a real property, so we can’t use wrong keys.

The result (T[K]) has the right type (like string for name or number for grade).

#### Why Use keyof?





No Mistakes: It stops us from using keys that don’t exist.



Flexible Code: We can write functions that work with any object’s keys.



Reusable: Great for tools or apps where we need to pick properties safely.






# What is the use of enums in TypeScript? Provide an example of a numeric and string enum

Enums in TypeScript are a way to give names to a set of values, like a list of options. They make our code easier to read and avoid mistakes. We can use numbers or strings in enums.

#### What Are Enums?

An enum is like a menu of choices. Instead of writing numbers or strings directly, we use meaningful names. For example:
```javascript 
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
```
Here, Day.Monday is 0, Day.Tuesday is 1, and so on.

We can also use strings:
```javascript 
enum Color {
  Red = "RED",
  Blue = "BLUE",
  Green = "GREEN"
}
```
#### Numeric Enum Example

Let’s use the Day enum to check if a day is a school day:
```javascript 
function isSchoolDay(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "No school!";
  }
  return "School day";
}

console.log(isSchoolDay(Day.Monday)); // "School day"
console.log(isSchoolDay(Day.Saturday)); // "No school!"
```
Using Day.Monday is clearer than using 0, and TypeScript makes sure we only use valid days.

#### String Enum Example

Now, let’s use the Color enum:
```javascript 
function getColorMessage(color: Color): string {
  return `The color is ${color}!`;
}

console.log(getColorMessage(Color.Red)); // "The color is RED!"
console.log(getColorMessage(Color.Blue)); // "The color is BLUE!"
```
Here, Color.Red is "RED", which is easy to understand.

#### Why Use Enums?

Clear Code: Names like Day.Monday are easier to read than 0.

Fewer Errors: TypeScript only allows valid enum values.

Organized: Great for lists like days, colors, or statuses.

