// --створити масив з:
//     - з 5 числових значень
let numbers = [2, 4, 7, 88,  33];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
// - з 5 стічкових значень
let strings = ["a", "b","c","d","e"];
console.log(strings);
console.log(strings[0]);
console.log(strings[1]);
console.log(strings[2]);
console.log(strings[3]);
console.log(strings[4]);

// - з 5 значень стрічкового, числового та булевого типу
let mix = ["f",33,true,"G",4];
console.log(mix);
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix[3]);
console.log(mix[4]);
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr_a = [];
arr_a[0] = 3;
arr_a[1] = "f";
arr_a[2] = 44;
arr_a[3] = 55;
arr_a[4] = "eee";
console.log(arr_a);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i=0;i<10;i++){
    document.write("<div>");
    document.write("was is das?");
    document.write("</div>");
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і
// індексом всередині
for(let i=0;i<10;i++){
    document.write("<div>");
    document.write(i+" was is das?");
    document.write("</div>");
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let j=0;
while(j<20){
    document.write("<h1>");
    document.write("was is los?");
    document.write("</h1>");
    j++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
let k=0;
while(k<20){
    document.write("<h1>");
    document.write(k, " was is los?");
    document.write("</h1>");
    k++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr_b = [1, 2, 4, 6, 7, 77, 44, 77, 78, 99];
for(let l=0;l<arr_b.length;l++){
    console.log(arr_b[l]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr_c = ["f","g","t","u","k","5","s","w","3","x"];
for(const e of arr_c){
    console.log(e);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr_d = [ 5,7,3,77,22,67,33,55,87,"ddd"];
let b=0;
while(b<arr_d.length){
    console.log(arr_d[b]);
    b++;
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let arr_e = ["ff",true,4,false,"rr",77,3,true,"eee",6];
for(let e=0;e<arr_e.length;e++){
    if((typeof arr_e[e]) == "boolean"){
        console.log(arr_e[e]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
let arr_f = [3,true,5,false,"rr",false,"r",true,7,false];
for (let f=0;f<arr_f.length;f++){
    if((typeof arr_f[f]) == "number"){
        console.log(arr_f[f]);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
//
let arr_h = [3,true,5,false,"rr",false,"r",true,7,false];
for (let h=0;h<arr_h.length;h++){
    if((typeof arr_h[h]) == "string"){
        console.log(arr_h[h]);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr_g = [];
arr_g[0] = 3;
arr_g[1] = "g";
arr_g[2] = true;
arr_g[3] = 66;
arr_g[4] = "zzz";
arr_g[5] = 55;
arr_g[6] = false;
arr_g[7] = "66";
arr_g[8] = "4";
arr_g[9] = 6;
for(let g=0;g<arr_g.length;g++){
    console.log(arr_g[g]);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
for(let k=0;k<10;k++){
    console.log(k);
    document.write(k);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log
// та document.write
for(let item=0;item<100;item++){
    console.log(item);
    document.write(item+"<br>");
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log
// та document.write
for(let user=0;user<100;user+=2){
    console.log(user);
    document.write(user+"<br>");
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for(let u=0;u<100;u++) {
    if (u % 2 == 0) {
    console.log(u);
    document.write(u + "<br>");
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let y=0;y<100;y++) {
    if (y % 2 == 1) {
        console.log(y);
        document.write(y + "<br>");
    }
}