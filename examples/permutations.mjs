
import { getPermutations } from '../index.js'

const example = [ "Insulin", "Test", "Diagnosis" ]
  
const permutations = getPermutations(example)
console.log(permutations)

 /** Result

  Array(6) [ (3) […], (3) […], (3) […], (3) […], (3) […], (3) […] ]
  0: Array(3) [ "Insulin", "Test", "Diagnosis" ]
  ​1: Array(3) [ "Insulin", "Diagnosis", "Test" ]
  ​2: Array(3) [ "Test", "Insulin", "Diagnosis" ]
  ​3: Array(3) [ "Test", "Diagnosis", "Insulin" ]
  ​4: Array(3) [ "Diagnosis", "Insulin", "Test" ]
  ​5: Array(3) [ "Diagnosis", "Test", "Insulin" ]
  
  */