# array-permutation-recursive

Get array permutations in lexicographical order with a recursive function.

## Install

```bash
npm install array-permutation-recursive
```

## Use

```js
# es6
import { getPermutations } from 'array-permutation-recursive';
```

```js
const { getPermutations } = require('array-permutation-recursive');
```
## Example

```js
const { getPermutations } = require('array-permutation-recursive');

const example = [ "Insulin", "Test", "Diagnosis" ]
  
const permutations = getPermutations(example)

console.log(permutations)

 /** Expected output:

  Array(6) [ (3) […], (3) […], (3) […], (3) […], (3) […], (3) […] ]
  0: Array(3) [ "Insulin", "Test", "Diagnosis" ]
  ​1: Array(3) [ "Insulin", "Diagnosis", "Test" ]
  ​2: Array(3) [ "Test", "Insulin", "Diagnosis" ]
  ​3: Array(3) [ "Test", "Diagnosis", "Insulin" ]
  ​4: Array(3) [ "Diagnosis", "Insulin", "Test" ]
  ​5: Array(3) [ "Diagnosis", "Test", "Insulin" ]
  
*/
```

## Similar packages

+ **Permu**, Get all possible permutations of a given length, and a given array of attributes. [link](https://www.npmjs.com/package/permu?activeTab=readme)