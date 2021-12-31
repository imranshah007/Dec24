var sum=0;
var num =prompt("enter a number");
for(var i=1;i<num;i++){
    if(num%i==0)
    sum=sum+1;
    }
if(sum%2==0){
  alert("is a perfectsquare");  
}

else{
    alert("is not a perfectsquare");
}