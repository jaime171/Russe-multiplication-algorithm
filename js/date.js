//Load everything 
window.onload = function() {
	showDate();
}

//Calculate Date 
function reload() {
	var refresh = 1000;
	var time = setTimeout('showDate()', refresh);
}

// This is to make 12 hours format
function addZero(time) {
	if (time < 10) {
    time = "0" + time;
	}
	return time;
}

//Date format
function showDate() {
	var date = new Date(),
	    dd = date.getDate(), 
	    mm = date.getMonth()+1, // getMonth is 0 based, that's the why of the sum.
	    yyyy = date.getFullYear(),
	    hour = addZero(date.getHours()),
	    minutes = addZero(date.getMinutes()),
	    seconds = addZero(date.getSeconds());
	if(dd<10) {  
	    dd='0'+dd;  
	}  
	else if (mm<10) {
	  mm='0'+mm;
	}
	if(hour > 12) {
		hour -= 12;
	} else if (hour === 0) {
		hour = 12;
	}
	date = dd +' / '+ mm +' / '+ yyyy + "<br>" + hour + ' : ' + minutes + ' : ' + seconds;
	document.getElementById("date").innerHTML = date;
	var visibleHour = reload();
}


