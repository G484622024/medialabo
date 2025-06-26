function greeting() {
    // name="shimei" の input 要素を取得
    let i = document.querySelector('input[name="shimei"]');

    // ユーザが入力した氏名を取得して変数 shimei に代入
    let shimei = i.value;

    // 挨拶文を作成して変数 aisatsu に代入
    let aisatsu = 'こんにちは、' + shimei + 'さん';

    // id="message" の p 要素を取得して変数 p に代入
    let p = document.querySelector('#message');

    // p のテキストを挨拶文に変更
    p.textContent = aisatsu;
}
