
let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);

function changeDom() {
//ヨットの追加
let l = document.createElement('li');
l.textContent = 'ヨット';

//ブルームーンの画像を貼り付ける。
let i = document.querySelector('img#bluemoon'); 
i.setAttribute('src', 'bluemoon.jpg');

//拓大のリンクの追加
let a = document.createElement('a');
a.textContent = '拓殖大学HP'; 
a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
let p = document.querySelector('p#takudai');
p.insertAdjacentElement('afterend', a); 

//餅を削除
l = document.querySelector('li#mochi'); 
l.remove(); 

///「ul#kassen'」の削除
u = document.querySelector('ul#kassen'); 
u.remove(); 

 //光の三原色追加
u = document.createElement('ul'); 
p = document.querySelector('p#primary'); 
p.insertAdjacentElement('afterend', u); 

l = document.createElement('li'); 
u.insertAdjacentElement('beforeend', l); 
l.textContent = '赤'; 

l = document.createElement('li'); 
u.insertAdjacentElement('beforeend', l) 
l.textContent = '緑'; 

l = document.createElement('li'); 
u.insertAdjacentElement('beforeend', l); 
l.textContent = '青'; 
}