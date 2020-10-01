var distance;
function myfunctionSefa() {

    var hour = document.getElementById("HourText").value;
    var minute = document.getElementById("MinuteText").value;
    var second = document.getElementById("SecondText").value;
    if ((hour<11 && hour>=0) && (minute<=59 && minute>=0) && (second<=59 && second>=0)){
        distance=0;
        distance= (hour*60*60*1000) + (minute*60*1000) +(second*1000);

        document.getElementById("demo").style.visibility = "visible";

        var x = setInterval(function() {
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            document.getElementById("demo").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
            distance -=1000;
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

    }
    else{
        alert("please enter a valid value")
    }

}
function Inc(el){
    if (el===1){
        var adet =$("#HourText").val();
        if(adet < 10){
            adet++;
            $("#HourText").val(adet);
        }
    }
    if (el===3){
        var adet =$("#MinuteText").val();
        if(adet < 59){
            adet++;
            $("#MinuteText").val(adet);
        }
    }
    if (el===5){
        var adet =$("#SecondText").val();
        if(adet < 59){
            adet++;
            $("#SecondText").val(adet);
        }
    }
}
function Dec(elm){
    if (elm===2){
        var adet =$("#HourText").val();
        if(adet > 0){
            adet--;
            $("#HourText").val(adet);
        }
    }
    if (elm===4){
        var adet =$("#MinuteText").val();
        if(adet > 0){
            adet--;
            $("#MinuteText").val(adet);
        }
    }
    if (elm===6){
        var adet =$("#SecondText").val();
        if(adet > 0){
            adet--;
            $("#SecondText").val(adet);
        }
    }
}


/*$("#HourText").keypress(function(e){
    varregex = new RegExp("^[0-9]");
    var str   = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if(regex.test(str)){
        return true;
    }
    e.preventDefault();
    return false;
});*/


