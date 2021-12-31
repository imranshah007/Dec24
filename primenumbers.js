var n = prompt("Enter number: ");

for(var i=2; i<=n;i++){

        var Prime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                Prime = false;
            }
        }
        if(Prime === true){
            alert(i);
        }
    }
//for(var i = 1; i <= 10; i = i + 1) {
    //console.log(i);
  //}