const a = [ 4, 2, 3, 1 ];

function countSwaps(a) {

    let swapped = true;
    let counter = 0;
    do {
        swapped = false;
        for(let i = 0; i < a.length; i++){
            if(a[i] > a[i + 1]){
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                swapped = true;
                counter++;
            }
        }
    } while (swapped);
    console.log(`Array is sorted in ${counter} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length - 1]}`);
}

countSwaps(a)