//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

// ボタンにイベントリスナー登録
let btn = document.querySelector('button#show');
btn.addEventListener('click', show);


function show() {
  // 住所表示（h2#addrの直後にpを追加）
  let h2Addr = document.querySelector('h2#addr');
  let p = document.createElement('p');
  p.textContent = campus.address;
  h2Addr.insertAdjacentElement('afterend', p);

  // 学科名リスト（h2#deptの直後にulを追加）
  let h2Dept = document.querySelector('h2#dept');
  let ul = document.createElement('ul');
  h2Dept.insertAdjacentElement('afterend', ul);

  //ulに追加
  for (let g of gakka) {
    let li = document.createElement('li');
    li.textContent = g.name;
    ul.insertAdjacentElement('beforeend', li);
  }
}
