//we can also create our own custom mapper function

const array = [2,3,4,5,56,99]//original array

function print(element, idx) {//takes two argument first is element and second is there index
    return `Element at index ${idx} is ${element}`;
}

function customMapper(arr, func) {
    let ans = [];//empty intitially to push all arr element at the end
    for (let i = 0; i < arr.length; i++){
        ans.push(func(arr[i], i));
    }
    return ans;
}

const result = customMapper(array, print);
console.log(result);


/*
Output
[
  'Element at index 0 is 2',
  'Element at index 1 is 3',
  'Element at index 2 is 4',
  'Element at index 3 is 5',
  'Element at index 4 is 56',
  'Element at index 5 is 99'
]
*/