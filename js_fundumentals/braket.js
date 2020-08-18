function brakets(str);{
    var arr =[];
    for(var j=0; j<str.length; j++){
        if (x[j]== "(" || ")" || "[" || "]" || "{" || "}"){
            arr.push(x[j]);
        }
    }
}

function isValid(arr){
    if(arr.length % 2 > 0){
        counter = 0;
        return(false);
        break;
    }
    counter = 0;
    for(var i=0; i<arr.length/2; i++){
        var a= arr.length-1-i;
        if(arr[i] = "(" && arr[a] = ")"){
            counter = 1;
        }
        else if(arr[i] = "[" && arr[a] = "]"){
            counter = 1;
        } 
        else if(arr[i] = "{" && arr[a] = "}"){
            counter = 1;
        }
        else{
            counter = 0;
            return(false);
            break;
        } 
        if(counter == 1){
            return(true)
        }
    }
}
