const int = 123123123
function formatNum(int){
    // let myarray = int.toString().split("");
    // let newarray = []
    // for(let i = myarray.length-1; i >= 0; i--){
    //     if(newarray % 3 === 0){
    //         newarray = [",",...newarray];
    //         newarray = [myarray[i],...newarray]
    //     } else {
    //         newarray = [myarray[i],...newarray]
    //     }
    // }
    // console.log(newarray.join(""))
    console.log(int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')) 
}

formatNum(int)