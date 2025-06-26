let kotae = Math.floor(Math.random() * 10) + 1; // 1～10の答えをランダムに設定
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;

let btn = document.querySelector('button#btn');
btn.addEventListener('click', hantei);


function hantei() {
  kaisu++;

  let input = document.querySelector('#yoso');
  let yoso = Number(input.value);
  let result = document.querySelector('#result');
  let frag = 0;

  if (kaisu>= 4 || frag===1) {
    result.textContent = '答えは ' + kotae + 'でした. すでにゲームは終わっています';
  }else if(yoso === kotae){
    result.textContent = '正解です。おめでとう！'; 
    frag = 1;
  }else if (kaisu >= 3) {
    result.textContent = '残念、答えは ' + kotae + ' でした。ゲーム終了です。';
  } else if (yoso < kotae) {
    result.textContent = 'まちがい。答えはもっと大きいですよ。';
  } else {
    result.textContent = 'まちがい。答えはもっと小さいですよ。';
 }
   // 回答回数を表示
  document.querySelector('#kaisu').textContent = kaisu;
  // 予想値を表示
  document.querySelector('#answer').textContent = yoso;
}


 


