//Setting all of my variables
//Time variables
var TodayE1 = document.getElementsById('Today');
TodayE1.textContent = dayjs().format('dddd, MMMM DD');

var Task9E1 = localStorage.getItem('H9');
var Task10E1 = localStorage.getItem('H10');
var Task11E1 = localStorage.getItem('H11');
var Task12E1 = localStorage.getItem('H12');
var Task1E1 = localStorage.getItem('H1');
var Task2E1 = localStorage.getItem('H2');
var Task3E1 = localStorage.getItem('H3');
var Task4E1 = localStorage.getItem('H4');
var Task5E1 = localStorage.getItem('H5');

var Hour9 = document.getElementById('t9')
var Hour10 = document.getElementById('t10')
var Hour11 = document.getElementById('t11')
var Hour12 = document.getElementById('t12')
var Hour1 = document.getElementById('t1')
var Hour2 = document.getElementById('t2')
var Hour3 = document.getElementById('t3')
var Hour4 = document.getElementById('t4')
var Hour5 = document.getElementById('t5')

Hour9.textContent = dayjs().hour(9).format('hh A')
Hour10.textContent = dayjs().hour(10).format('hh A')
Hour11.textContent = dayjs().hour(11).format('hh A')
Hour12.textContent = dayjs().hour(12).format('hh A')
Hourl.textContent = dayjs().hour(13).format('hh A')
Hour2.textContent = dayjs().hour(14).format('hh A')
Hour3.textContent = dayjs().hour(15).format('hh A')
Hour4.textContent = dayjs().hour(16).format('hh A')
Hour5.textContent = dayjs().hour(17).format('hh A')

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
  var Task9E1 = Task9El.value;
  localStorage.setItem('H9', Task9E1);
  ConfirmEl.textContent =' The task was saved ';
});
// Save input and store it 2
save2.addEventListener('click', function () {
  var Task10E1 = document.getElementById('Task10');
  var Task10E1 = Task10E1.value;
  localStorage.setItem('H10', Task10E1);
  ConfirmEl.textContent =' The task was saved ';
});
// Save input and store it 3
save3.addEventListener('click', function () {
  var Task11E1 = document.getElementById('Task11');
  var Task11E1 = Task11El.value;
  localStorage.setItem('H11', Task11E1);
  ConfirmEl.textContent =' The task was saved ';
});
// Save input and store it 4
save4.addEventListener('click', function () {
  var Task12E1 = document.getElementById('Task12');
  var Task12E1 = Task12El.value;
  localStorage.setItem('H12', Task12E1);
  ConfirmEl.textContent =' The task was saved ';
});
// Save input and store it 5
save5.addEventListener('click', function () {
  var Task1E1 = document.getElementById('Task1');
  var Task1E1 = Task1El.value;
  localStorage.setItem('H1', Task1E1);
  ConfirmEl.textContent =' The task was saved ';
});
// Save input and store it 6
save6.addEventListener('click', function () {
  var Task2E1 = document.getElementById('Task2');
  var Task2E1 = Task2El.value;
  localStorage.setItem('H2', Task2E1);
  ConfirmEl.textContent =' The task was saved ';
});
// Save input and store it 7
save7.addEventListener('click', function () {
  var Task3E1 = document.getElementById('Task3');
  var Task3E1 = Task3El.value;
  localStorage.setItem('H3', fTask3E1);
  ConfirmEl.textContent =' The task was saved ';
});
// Save input and store it 8
save8.addEventListener('click', function () {
  var Task4E1 = document.getElementById('Task4');
  var Task4E1 = Task4El.value;
  localStorage.setItem('H4', Task4E1);
  ConfirmEl.textContent =' The task was saved ';
});
// Save input and store it 9
save9.addEventListener('click', function () {
  var Task5E1 = document.getElementById('Task5');
  var Task5E1 = Task5El.value;
  localStorage.setItem('H5', Task5E1);
  ConfirmEl.textContent =' The task was saved ';
});

// Text persists after refresh
var Task9E1 = document.getElementById('Task9').value = Task9E1;
var Task10E1 = document.getElementById('Task10').value = Task10E1;
var Task11E1 = document.getElementById('Task11').value = Task11E1;
var Task12E1 = document.getElementById('Task12').value = Task12E1;
var Task1E1 = document.getElementById('Task1').value = Task1E1;
var Task2E1 = document.getElementById('Task2').value = Task2E1;
var Task3E1 = document.getElementById('Task3').value = Task3E1;
var Task4E1 = document.getElementById('Task4').value = Task4E1;
var Task5E1 = document.getElementById('Task5').value = Task5E1;