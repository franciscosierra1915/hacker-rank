// const toys = [3, 7, 2, 9, 4]
const toys = [2, 3, 4, 7, 9]
const money = 15

function maximumToys(toys, money) {
    let addedPrices = 0;
    let counter = 0
    let sorted = toys.sort((a, b) => a -b);
    for(let i = 0; i < sorted.length; i++){
        // console.log(addedPrices)
       if(addedPrices < money && (addedPrices + sorted[i]) < money){
        //   sortedArray.push(sorted[i])

        addedPrices += sorted[i]
        counter++
       }
    
    }
    // return sortedArray.length;
    return counter
}

maximumToys(toys, money)