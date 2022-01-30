function hello(){
                      
    var str="arvind0";
    var str2 = document.getElementById("commentId").value;
    var str3 = document.getElementById("usermail").value;
    var count=0;
    while(count<5){
        document.getElementById("magic").innerHTML=`<div><hr><p> ${str2} </p> <br> <p> ${str3} <p><hr></div>`;
        count++;
    }
    
    //alert(str);
 
 
}