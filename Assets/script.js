var Task9E1Text = localStorage.getItem('H9');
var Task10E1Text = localStorage.getItem('H10');
var Task11E1Text = localStorage.getItem('H11');
var Task12E1Text = localStorage.getItem('H12');
var Task1E1Text = localStorage.getItem('H1');
var Task2E1Text = localStorage.getItem('H2');
var Task3E1Text = localStorage.getItem('H3');
var Task4E1Text = localStorage.getItem('H4');
var Task5E1Text = localStorage.getItem('H5');

var Hour9 = document.getElementById('t9')
var Hour10 = document.getElementById('t10')
var Hour11 = document.getElementById('t11')
var Hour12 = document.getElementById('t12')
var Hour1 = document.getElementById('t1')
var Hour2 = document.getElementById('t2')
var Hour3 = document.getElementById('t3')
var Hour4 = document.getElementById('t4')
var Hour5 = document.getElementById('t5')

var save1 = document.getElementById('save1');
var save2 = document.getElementById('save2');
var save3 = document.getElementById('save3');
var save4 = document.getElementById('save4');
var save5 = document.getElementById('save5');
var save6 = document.getElementById('save6');
var save7 = document.getElementById('save7');
var save8 = document.getElementById('save8');
var save9 = document.getElementById('save9');

var ConfirmEl = document.getElementById('Confirm');

save1.addEventListener('click', function () {
  var Task9E1 = document.getElementById('Task9');
  var Task9E1Text = Task9E1.value;
  localStorage.setItem('H9', Task9E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

save2.addEventListener('click', function () {
  var Task10E1 = document.getElementById('Task10');
  var Task10E1Text = Task10E1.value;
  localStorage.setItem('H10', Task10E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

save3.addEventListener('click', function () {
  var Task11E1 = document.getElementById('Task11');
  var Task11E1Text = Task11E1.value;
  localStorage.setItem('H11', Task11E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

save4.addEventListener('click', function () {
  var Task12E1 = document.getElementById('Task12');
  var Task12E1Text = Task12E1.value;
  localStorage.setItem('H12', Task12E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

save5.addEventListener('click', function () {
  var Task1E1 = document.getElementById('Task1');
  var Task1E1Text = Task1E1.value;
  localStorage.setItem('H1', Task1E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

save6.addEventListener('click', function () {
  var Task2E1 = document.getElementById('Task2');
  var Task2E1Text = Task2E1.value;
  localStorage.setItem('H2', Task2E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

save7.addEventListener('click', function () {
  var Task3E1 = document.getElementById('Task3');
  var Task3E1Text = Task3E1.value;
  localStorage.setItem('H3', Task3E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

save8.addEventListener('click', function () {
  var Task4E1 = document.getElementById('Task4');
  var Task4E1Text = Task4E1.value;
  localStorage.setItem('H4', Task4E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

save9.addEventListener('click', function () {
  var Task5E1 = document.getElementById('Task5');
  var Task5E1Text = Task5E1.value;
  localStorage.setItem('H5', Task5E1Text);
  ConfirmEl.textContent =' The task was saved ';
});

var Task9E1 = document.getElementById('Task9').value = Task9E1Text;
var Task10E1 = document.getElementById('Task10').value = Task10E1Text;
var Task11E1 = document.getElementById('Task11').value = Task11E1Text;
var Task12E1 = document.getElementById('Task12').value = Task12E1Text;
var Task1E1 = document.getElementById('Task1').value = Task1E1Text;
var Task2E1 = document.getElementById('Task2').value = Task2E1Text;
var Task3E1 = document.getElementById('Task3').value = Task3E1Text;
var Task4E1 = document.getElementById('Task4').value = Task4E1Text;
var Task5E1 = document.getElementById('Task5').value = Task5E1Text;