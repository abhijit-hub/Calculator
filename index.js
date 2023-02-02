


var checkArr = [];
var splitNum;



for (var i = 0; i < 16; i++) {
    checkArr.push(document.querySelectorAll("button")[i].textContent);

}

$(document).on("keypress", function (event) {
    var html = event.key;
     checkArr.splice(14,1);



    if (checkArr.includes(html)) {
        document.getElementById("inputid").value += html;
    }
    else if(html=='w'){
        document.getElementById("inputid").value=(splitNum[0]*splitNum[1]);

    }
    else {
        alert("Wrong key");
    }


})
 

$("button").on("click", function () {
    var html = this.innerHTML;
    if(html != "=" && html !="Clear"){
        document.getElementById("inputid").value += html;

    }
    else if(html=="Clear"){
        document.getElementById("inputid").value ="";
        
    }
})


var displayNum;
// parseInt(displayNum);

var ans;
$("button").on("click", function () {
    var html = this.innerHTML;
    if (html == "=") {
        

    


        displayNum=document.getElementById("inputid").value;
        ans=eval(displayNum);

        // splitNum=displayNum.split("*");
       

           document.getElementById("inputid").value=ans;
        }
    

})







