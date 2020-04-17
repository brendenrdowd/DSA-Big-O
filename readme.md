## Drills
1. Dog Friend
  1. The O notation for this would be constant, as we're only doing one operation. 

  2. The O notation for this would be O(n), because we're repeating the same operation for as many people are in the room, so the amount of operations is dependent on the amount of people. 

2.  Even or Odd?
```
function isEven(value) {
  // is called one time, regardless of the input
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
```
  The O notation/complexity is constant, it doesn't matter what the input is, we're running one operation, is it divisible by 2 with an outcome of 0. 

3. Are you here?
```
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```
  This is log(n^2), we're running a nested for loop...

4. Doubler
```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```
  O(n)...

5. Naive Search
```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```
  O(n)...

6. Creating pairs
```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```
  0(n^2)...

7. Compute the sequence
```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```
  O(n)...

8. Effcient Search
```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```
  O(log n)...

9. Random Element
```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```
  O(1), preforming one operation, the size of the input doesn't matter. 

10. What am I?
```
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```
  O(n)...

----
## Recursive Big O 

## Iterative Big O

