//Task 10
const side1 =14
const side2 =12
const side3 =10

if(side1===side2 && side2===side3 && side3===side1){
    console.log('Equlateraltriangle')
}else if (side1===side2 || side2===side3 || side3===side1){
    console.log('Isosocelestriange')
}else{
    console.log('Scalene triangle')
}