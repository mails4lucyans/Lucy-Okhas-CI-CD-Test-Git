// Task 5Create a function that reverses an array

let a = [20, 18, 16, 14, 12, 10];
let b = reverseArray(a);
console.log(b);

function reverseArray(a)
{
    let b = [];
    
    for(let i = a.length - 1; i >= 0; i--)
    {
        b.push(a[i]);
    }
    
    return b;
}