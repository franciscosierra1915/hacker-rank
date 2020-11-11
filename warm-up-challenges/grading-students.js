const grades = [73, 67, 38, 33]
function gradingStudents(grades) {
    let round = [];
    for(i = 0; i <grades.length; i++){
        if(grades[i] >= 38 && grades[i] % 5 >= 3){
            let remainder = grades[i] % 5;
            let difference;
            difference = 5 - remainder
            round = [...round, grades[i] + difference]
        } else {
            round = [...round, grades[i]]
        }
    }

    return round
}

gradingStudents(grades)