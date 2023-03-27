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
