/**
 * Created by Ahmed on 6/5/2016.
 */
/*
    var textVal = document.getElementById("input"),
        mySelection= document.getElementById("select"),
        addVal =document.getElementById("add"),
        table = document.getElementById("table"),
        result,
        ContactOne =[],
        ContactTwo=[];

    function saveData(){
        if(mySelection.value == 10){

            ContactOne.push(textVal.value);


            result = ( "<tr><td>" + textVal.value + "</td><td>" + mySelection.value + ContactOne.length +"</td></tr>");


            $("#contactOne").after(result);

        }else{
            ContactTwo.push(textVal.value);
            result = ("<tr><td>" + textVal.value + "</td><td>" + mySelection.value + ContactTwo.length +"</td></tr>");
            $("#contactTwo").after(result);
        }
    }
*/
function generator(Start ,End){
    document.write("<select>");

    var x= document.getElementById("start").value,
        y = document.getElementById("end").value,
        years;

        Start = x;
        End = y;
    for(var years = Start ; years <= End; years++){
            document.write("<option>"+ years +"</option>")
        }

        document.write("</select>");
    }