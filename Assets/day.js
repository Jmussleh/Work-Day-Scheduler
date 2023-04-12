var TodayE1 = document.getElementById('Today');
TodayE1.textContent = dayjs().format('dddd, MMMM DD');

t9.textContent = dayjs().hour(9).format('hh A')
t10.textContent = dayjs().hour(10).format('hh A')
t11.textContent = dayjs().hour(11).format('hh A')
t12.textContent = dayjs().hour(12).format('hh A')
t1.textContent = dayjs().hour(13).format('hh A')
t2.textContent = dayjs().hour(14).format('hh A')
t3.textContent = dayjs().hour(15).format('hh A')
t4.textContent = dayjs().hour(16).format('hh A')
t5.textContent = dayjs().hour(17).format('hh A')

function colorTime() {
    if (dayjs().isSame(dayjs().hour(9))) {
        document.getElementById('Task9').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(9))) {
        document.getElementById('Task9').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task9').style.backgroundColor = "green";
    }

    if (dayjs().isSame(dayjs().hour(10))) {
        document.getElementById('Task10').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(10))) {
        document.getElementById('Task10').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task10').style.backgroundColor = "green";
    }

    if (dayjs().isSame(dayjs().hour(11))) {
        document.getElementById('Task11').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(10))) {
        document.getElementById('Task11').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task11').style.backgroundColor = "green";
    }
  
    if (dayjs().isSame(dayjs().hour(12))) {
        document.getElementById('Task12').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(12))) {
        document.getElementById('Task12').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task12').style.backgroundColor = "green";
    }
   
    if (dayjs().isSame(dayjs().hour(13))) {
        document.getElementById('Task1').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(13))) {
        document.getElementById('Task1').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task1').style.backgroundColor = "green";
    }
    
    if (dayjs().isSame(dayjs().hour(14))) {
        document.getElementById('Task2').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(14))) {
        document.getElementById('Task2').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task2').style.backgroundColor = "green";
    }
   
    if (dayjs().isSame(dayjs().hour(15))) {
        document.getElementById('Task3').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(15))) {
        document.getElementById('Task3').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task3').style.backgroundColor = "green";
    }
    
    if (dayjs().isSame(dayjs().hour(16))) {
        document.getElementById('Task4').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(16))) {
        document.getElementById('Task4').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task4').style.backgroundColor = "green";
    }
    
    if (dayjs().isSame(dayjs().hour(17))) {
        document.getElementById('Task5').style.backgroundColor = "red";
    } else if (dayjs().isAfter(dayjs().hour(17))) {
        document.getElementById('Task5').style.backgroundColor = "grey";
    } else {
        document.getElementById('Task5').style.backgroundColor = "green";
    }
}

setInterval(colorTime, 100)