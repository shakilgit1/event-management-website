<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: B: ReferenceError: greetign is not defined.</b></summary>
<p>

#### Answer: ?

<i>In the code snippet, you have a typo when declaring the variable greeting. You mistakenly wrote greetign instead of greeting. Because of this typo, the variable greetign is not defined, and you will receive a ReferenceError when trying to access it.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C: "12"</b></summary>
<p>

#### Answer: ?

<i>In JavaScript, when you use the + operator with one or both operands being strings, it performs string concatenation instead of numeric addition. In this case, you are adding the number 1 and the string "2", so JavaScript converts the 1 to a string and concatenates it with "2", resulting in the string "12".
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A: ['🍕', '🍫', '🥑', '🍔'].</b></summary>
<p>

#### Answer: ?

<i>In the code, you first initialize the info object with a property favoriteFood that points to the first element of the food array, which is "🍕". Then, you change the value of info.favoriteFood to "🍝". However, this change does not affect the food array itself. The food array remains unchanged, so when you log it, you get ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: B: Hi there, undefined.</b></summary>
<p>

#### Answer: ?

<i>In the sayHi function, you have a parameter name that is not given a default value. When you call sayHi() without passing any arguments, name inside the function becomes undefined. Therefore, the function returns "Hi there, undefined", and that's what will be logged to the console.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: C: 3.</b></summary>
<p>

#### Answer: ?

<i>This code initializes a `count` variable to `0` and iterates through an array `nums` containing `[0, 1, 2, 3]`. It checks each element for truthiness (non-zero), incrementing `count` for each truthy value. As there are three truthy elements (1, 2, and 3) in `nums`, the code logs `3` to the console, representing the count of truthy values in the array.</i>

</p>
</details>
