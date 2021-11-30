// - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let contentID=document.getElementById('content');
console.log(contentID.innerText);

// -- отримує текст з блоку з id "rules"
let rules =document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText='kikoman';

// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText='sikoman';

// -- змініть кожному елементу колір фону на червоний
 let children=document.body.children;
for (const child of children){
    child.style.background="red";
}
// -- змініть кожному елементу колір тексту на синій
for (const child of children){
    child.style.color="blue";
    }
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules= document.getElementsByClassName('fc_rules');
for (const fcRules of fc_rules){
    fcRules.style.color='red';
}
