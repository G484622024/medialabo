
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    let count = 1;

    for (let n of data.list.g1) {
        console.log(count + "件目の検索結果");
        console.log("開始時刻: " + n.start_time);
        console.log("終了時刻: " + n.end_time);
        console.log("チャンネル: " + n.service.name);
        console.log("タイトル: " + n.title);
        console.log("サブタイトル: " + n.subtitle);
        console.log("番組説明: " + n.content);

        if (n.act) {
            console.log("出演者: " + n.act);
        } else {
            console.log("出演者: 記載なし");
        }

        count++;
    }
}
// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
    let count = 1;
    let p = document.createElement('div');
    p.setAttribute('id','result');
    document.body.insertAdjacentElement('beforeend',p);

  if(data.list !== null){
    console.log(data.list);
    
    if(data.list.e1 !== undefined || null){
      f = data.list.e1
    }else{
      f= data.list.g1
    }
    let h0 = document.createElement('h2');
    h0.textContent = "NHKの番組表(検索結果は" + f.length + "件)";
    p.insertAdjacentElement('beforeend', h0);
    for (let n of f) {
    
        let h1 = document.createElement('h2');
        h1.textContent = "検索結果" + count + "件目";
        p.insertAdjacentElement('beforeend', h1);

        let ul = document.createElement('ul');

        let li2 = document.createElement('li');
        li2.textContent = "開始時刻: " + n.start_time;
        ul.insertAdjacentElement('beforeend', li2);

        let li3 = document.createElement('li');
        li3.textContent = "終了時刻: " + n.end_time;
        ul.insertAdjacentElement('beforeend', li3);

        let li4 = document.createElement('li');
        li4.textContent = "チャンネル: " + n.service.name;
        ul.insertAdjacentElement('beforeend', li4);

        let li5 = document.createElement('li');
        li5.textContent = "タイトル: " + n.title;
        ul.insertAdjacentElement('beforeend', li5);

        let li6 = document.createElement('li');
        li6.textContent = "サブタイトル: " + n.subtitle;
        ul.insertAdjacentElement('beforeend', li6);

        let li7 = document.createElement('li');
        li7.textContent = "番組説明: " + n.content;
        ul.insertAdjacentElement('beforeend', li7);

        if (n.act) {
            let li8 = document.createElement('li');
            li8.textContent = "出演者: " + n.act;
            ul.insertAdjacentElement('beforeend', li8);
        } else {
            let li9 = document.createElement('li');
            li9.textContent = "出演者: 記載なし";
            ul.insertAdjacentElement('beforeend', li9);
        }
        p.insertAdjacentElement('beforeend', ul);
        count++;
    }
  }else{
    let h0 = document.createElement('h2');
    h0.textContent = "NHKの番組表(検索結果は0件)";
    p.insertAdjacentElement('beforeend', h0);
  }
}



// 課題6-1 のイベントハンドラ登録処理は以下に記述

  

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let s = document.querySelector('select#a1');
  let idx = s.selectedIndex;
  console.log(idx);
    
  
  let os = s.querySelectorAll('option.b');  
  let o = os.item(idx);       
  console.log(o);

  let t = document.querySelector('select#a2');
  let idy = t.selectedIndex; 
  
  let ot = t.querySelectorAll('option.c');  
  let r = ot.item(idy);       
  console.log(r.value);


  let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/' + (o.value) + '-' + (r.value) + '-j.json';
  console.log(url);

  axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);

}
let btn = document.querySelector('button#btn');
btn.addEventListener('click', sendRequest);


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

   // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);

        // data をコンソールに出力
    console.log(data);

    // data.x を出力
    console.log(data.x);
  }
  let old = document.querySelector('div#result');
    if (old) {
      old.remove(); 
    }
    printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はテレビ番組表のデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
