function calc() {
  let a = Number(document.querySelector('#left').value);
  let b = Number(document.querySelector('#right').value);
  let ans = document.querySelector('#answer');

  ans.textContent = a + b;
}

document.querySelector('#calc').addEventListener('click', calc);