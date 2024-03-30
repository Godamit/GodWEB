// fetch(URL:"CD:\jquery\data.js",req)

var submit = document.getElementsByClassName("btn")[0];
    submit.addEventListener("click",get);
    document.addEventListener("keyup",function(e){
       if( e.key =="Enter"){
        get();
       };
    });


localStorage.setItem("Amit","1234");
// var a = localStorage.getItem("Amit");
// console.log(a);
setTimeout(function(){
localStorage.clear();
},60*1000);    
if(localStorage.getItem("name")){
    console.log("correct");
}else{
    console.log("nope");
}

function get(){


        var a = btoa($('#i1').val());
        console.log(a);
        var p = btoa($('#i2').val());
        console.log(p);
        localStorage.setItem("name",a);
        localStorage.setItem("pass",p);
        
        if(a == "QU1JVA==" && p == "MTIzNA=="){
            window.location = 'index.html';
        }else{
            $('#t1').text("Invalid Username or password");
        }
    };