//Контекс стрелки

// Контекс внутри стрелки определяется местом ее объявления, а не вызова,
// и ссылается на контекст родительской фуекции.

// const showThis = () => {
//     console.log('this in showThis: ', this);
// };
//  showThis(); // this in showThis: window

//  const user = {name: 'Mango'};
//  user.showContext = showThis;

//  user.showContext(); // this in showThis: window

// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this:', this);
//         console.log('this.fullName:', this.fullName);
//         // const inner = function () {
//         const inner = () => {
//             console.log('this in inner: ', this); 
//         };
//         inner();
//     }
// };
// user.showName();

// Стрелки как методы объекта(Do not use), 
// они запоминают внешний контекст метода и это насвегда

// const user = {
//     fullName: 'Mango',
//     showName: () => {
//         console.log('this:', this);
//         console.log('this.fullName:', this.fullName);
//     },
// };
// user.showName();

// Стрелки не могут быть ф-ми конструкторами

// const User = name => {
//     this.name = name;
// };
// console.log(new User('Mango'));

//Еще раз стрелка как метод объекта (Do not!)

// const objA = {
//     x: 5,
//     showX() {
//         console.log('this в objA.showX:' , this);
//         console.log(this.x);
// //какаха
//         const objB = {
//             y: 10,
//             showThis: () => {
//                 console.log('this в objB.showThis:' , this);
//             },

//         };
//         objB.showThis();
//     },
// };
// objA.showX();