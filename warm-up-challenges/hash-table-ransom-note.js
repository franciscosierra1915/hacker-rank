const magazine = [ 'ive', 'got', 'a', 'lovely', 'some', 'coconuts',  'bunch' ];
const note = [ 'ive', 'got', 'some', 'coconuts' ];


function checkMagazine(magazine, note) {

    // let match = 'No'

    // for(let i = 0; i < note.length; i++){
    //     // if(!magazine.includes(note[i])){
    //     //     console.log('No');
    //     //     return 'No'
    //     // }

    //     for(let j = 0; j < magazine.length; j++){
    //         if(note[i] === magazine[j]){
    //             magazine[j] = null;
    //             match = 'Yes'
    //             console.log(`There was a match for ${note[i]}`);
    //             break
    //         } else {
    //             match = 'No'
    //         }
    //     }
    //     if(match === 'No'){
    //         return `There was no match for ${note[i]}`
    //     }
    // }
    // console.log(match);
    // return match
    for(let i = 0; i < note.length; i++){
        let finder = magazine.indexOf(note[i])
        console.log(finder)
        if(finder != -1){
            magazine[finder] = ""
        }else{
           console.log("No")
           break
        }
        if(i === note.length - 1){
            console.log("Yes")
        }
    }
    
}

checkMagazine(magazine, note)