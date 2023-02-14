# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

# (2) Because the first log is in the block scope and can read 2 as the value of x in global.

# (1) the second log is global and it can't read inside the block scope, so read 1 which is as the value of x in the global.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

# (10) Because when f1 function run, the log inside the function can read all variables outside the block scope so it prints 10 as the value of x.

# (undefined) Because f1 function doesn't have any return so it returns undefined and the log of function, it prints undefined.

# (y is not defined) Because y variable assigned inside the block scope and the log is global, so it can't read inside the block scope.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

# (9) Because the log is in global and the only assign is 9.

# ({ x: 10}) Because object passed by reference so when we change anything inside an object even in the block scope, we will change the original of it. so here the value of x increased by 1.
