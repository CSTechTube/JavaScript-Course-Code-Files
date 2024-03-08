// String Data type (Dual nature)

let user = 'Darshan';
console.log(user, typeof(user) );

let user2 = new String('Rohit');
console.log(user2, typeof(user2));

// String Methods

let name = 'darshan_gujrati';
let url = 'https://www.text.com/darshan%20gujrati';
let messg = 'this is my first message through string';

console.log(name.length);

console.log(name.charAt(5)); // only ve charat

console.log(name.at(-2));  // both -ve and +ve 

console.log(name.indexOf('r')); 

console.log(name.substring('8')); 

console.log(url.replace('%20','-')); 

console.log(messg.split(' ') ); // op array

let temp = messg.split(' ');

console.log(temp.join('-') ); // input array

console.log(name,'\n',name.trim() ); 

console.log(name.toUpperCase() ); 

console.log(messg.includes('first33') ); 

console.log(messg.slice(-5) ); 


// string mdn documentation link :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring


// String Interpolation (template literal) back tick(``)

console.log('hi '+user+' here !! \nwelcome\'s you to cstechtube channel !!');

console.log(`Hi ${user} here !! 
Welcome's you to cstechtube channel !! `);

