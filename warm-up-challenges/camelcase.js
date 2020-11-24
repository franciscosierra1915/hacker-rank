const s = "saveChangesInTheEditorLove";

function camelcase(s) {
   let arr =  s.split("")
   let counter = 1;
    for(let i=0; i<arr.length; i++){
        
        // if(arr[i] === arr[i].toUpperCase()){
        //     counter++
        // }
        if(arr[i] >= 'A' && arr[i] <= 'Z'){
            counter++
        }
    }
    // return (s.replace(/[^A-Z]/g, "").length + 1)
    return counter
}

console.log(camelcase(s))