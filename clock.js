var time=new Date();
var hr=time.getHours();
var min=time.getMinutes();
var sec=time.getSeconds();


var hrAngle=(30*((hr-12)+(min/60)));
var minAngle= min*6;
var secAngle=sec*6;


var hrHand=document.getElementById("hr");
var minHand=document.getElementById("min");
var secHand=document.getElementById("sec");


function timeset(){
    hrHand.style.transform  = "translate(-50%,-50%) rotate(" + this.hrAngle  + "deg)";
    minHand.style.transform = "translate(-50%,-50%) rotate(" + this.minAngle + "deg)";
    secHand.style.transform = "translate(-50%,-50%) rotate(" + this.secAngle + "deg)";
}



timeset();

setInterval(function timefunc(){
                this.secAngle += 6;
                if(this.secAngle%360 == 0.00){
                    this.minAngle +=6;
                    this.hrAngle +=0.5;
                    if(this.minAngle >= 360){
                        this.minAngle=0;
                    }
                    if(this.hrAngle >= 360){
                        this.hrAngle=0;
                    }      
                }
                timeset();
            }
,1000);

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country="+"Bangladesh");
xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "d24b50a932mshf9638861cc24a71p1bfa56jsn87cbfe0f8dd8");

xhr.send(data);


var inputId=document.getElementById("input");
inputId.addEventListener("click",function(e){
    var value= e.target.parentNode.previousElementSibling.firstChild.value;
    var synValue=value.toLowerCase().charAt(0).toUpperCase()+value.toLowerCase().slice(1)
    console.log(synValue); 

    if(synValue !="" && synValue != "Usa" && synValue !="Uk")
    {

        
        xhr.open("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country="+synValue);
        xhr.setRequestHeader("x-rapidapi-host", "covid-19-coronavirus-statistics.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "d24b50a932mshf9638861cc24a71p1bfa56jsn87cbfe0f8dd8");
        
        xhr.send(data);
    }
  
});
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        var resultArray=JSON.parse(this.responseText).data.covid19Stats[0];
        console.log(resultArray);
        var targetTitle=document.getElementById("card-header");
        targetTitle.innerHTML= resultArray.country.toUpperCase() + "<p>in 24 hour</p>";
        var targetClass=document.getElementsByClassName("okkhor2");
        targetClass[0].innerHTML="-";
        targetClass[1].innerHTML="-";
        targetClass[2].innerHTML="-";
        targetClass[3].innerHTML=resultArray.confirmed;
        targetClass[4].innerHTML=resultArray.deaths;
        targetClass[5].innerHTML=resultArray.recovered;
    }
});

