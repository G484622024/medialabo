
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
    let p = document.querySelector('div#result');
    let h0 = document.createElement('h2');
    h0.textContent = "NHKの番組表(検索結果は2件)";
    p.insertAdjacentElement('beforeend', h0);

    for (let n of data.list.g1) {

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
}



// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let s = document.querySelector('select#a1');
  let idx = s.selectedIndex;  // idx 番目の option が選択された
  
  let os = s.querySelectorAll('option.b');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

  let t = document.querySelector('select#a2');
  let idy = t.selectedIndex;  // idx 番目の option が選択された
  
  let ot = t.querySelectorAll('option.c');  // s の子要素 option をすべて検索
  let r = ot.item(idy);       // os の idx 番目の要素
  console.log(o.value);
  console.log(r.value);
}
let btn = document.querySelector('button#btn');
btn.addEventListener('click', sendRequest);


// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

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
let data = {
  "list": {
    "g1": [
      {
        "id": "2022030428673",
        "event_id": "28673",
        "start_time": "2022-03-04T04:35:00+09:00",
        "end_time": "2022-03-04T04:40:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
        "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
        "act": "",
        "genres": [
          "0409",
          "0700",
          "0504"
        ]
      },
      {
        "id": "2022030427069",
        "event_id": "27069",
        "start_time": "2022-03-04T23:05:00+09:00",
        "end_time": "2022-03-04T23:10:00+09:00",
        "area": {
          "id": "130",
          "name": "東京"
        },
        "service": {
          "id": "g1",
          "name": "ＮＨＫ総合１",
          "logo_s": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
            "width": "100",
            "height": "50"
          },
          "logo_m": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
            "width": "200",
            "height": "100"
          },
          "logo_l": {
            "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
            "width": "200",
            "height": "200"
          }
        },
        "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
        "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
        "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
        "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
        "genres": [
          "0700"
        ]
      }
    ]
  }
};

