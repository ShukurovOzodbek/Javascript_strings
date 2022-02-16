//1
let a = "111@222@333"
a = a.replaceAll("@", "!")
console.log(a)

// 2 "Hello world"
let str = "HELLOWORLD"
let b = str.slice(0,5) + " " + str.slice(5)
b = b.slice(0,1).toUpperCase() + b.slice(1).toLowerCase()
console.log(b);

// 3
let hello = "Hello, it is HTML" 
hello = hello.replace(', it is HTML', ' it is not JS')
console.log(hello);

// 4
let alex = "alex"
alex = alex.slice(0,1).toUpperCase() + alex.slice(1).toLowerCase()
console.log(alex);

// 5
let c = "Lex Luter has a big suit"
c = c.slice(11, 12).toUpperCase() + c.slice(0, 4)
console.log(c)

// 6
let text = 'Lorem ipsum dolor! sit amet consectetur adipisicing elit. Dolor, eum mod Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eum modi. Commodi, inventore consectetur. Iusto qui cum omnis tenetur, beatae reiciendis tempore inventore soluta dolorem quae quo? Eius, dolore a.     Lorem ipsum dolor sit amet consectetur WEPRO adipisicing elit. Dolor, eum modi. Commodi, inventore consectetur. Iusto qui cum omnis tenetur, beatae reiciendis tempore inventore soluta dolorem quae quo? Eius, dolore a.    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eum modi. Commodi, inventore consectetur. Iusto qui cum omnis tenetur, beatae reiciendis tempore inventore soluta dolorem quae quo? Eius, dolore a.'
let text2 = text.slice(328, 333)
text2 = 'WEPRO.ACADEMY'
let text3 = text.slice(0, 328)
let text4 = text.slice(333)
text = text3.concat(text2, text4)
console.log(text);
