var count = 0;
document.getElementById("dcrelmBtn").onclick = function(){
    count-=1;
    document.getElementById("value").innerHTML = count;
};
document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("value").innerHTML = count;
};
document.getElementById("increBtn").onclick = function(){
    count+=1;
    document.getElementById("value").innerHTML = count;
};