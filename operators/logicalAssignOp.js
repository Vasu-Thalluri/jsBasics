let a = 0;
a &&= 10;
console.log(a);

a = undefined;
a &&= 10;
console.log(a);

a = null;
a &&= 10;
console.log(a);

a = 1;
a &&= 10;
console.log(a);

a = 0;
a ||= 10;
console.log(a);

a = undefined;
a ||= 10;
console.log(a);

a = null;
a ||= 10;
console.log(a);

a = 1;
a ||= 10;
console.log(a);