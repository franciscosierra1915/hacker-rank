// let password = "A**U&UDJ(LWL*OBCFD!%+BCKJ(%)FD)%!Q^GW!)Q$^&Z#-H-%)D+XD&#RU-)FK#FW)T(B*U$!-S&D@%*$)BBMTEJ%^KR!$$FACHR";
let password = "4700"
let n = password.length;

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789".split("");
    let lower_case = "abcdefghijklmnopqrstuvwxyz".split("");
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let special_characters = "!@#$%^&*()-+".split("");
    let digit = 0
    let arr = password.split("");
    let hasNumbers = arr.filter(e => numbers.includes(e));
    if(hasNumbers.length === 0){
        digit += 1
    }
    let hasLower_case = arr.filter(e => lower_case.includes(e));
    if(hasLower_case.length === 0){
        digit += 1
    }
    let hasUpper_case = arr.filter(e => upper_case.includes(e));
    if(hasUpper_case.length === 0){
        digit += 1
    }
    let hasSpecial_characters = arr.filter(e => special_characters.includes(e));
    if(hasSpecial_characters.length === 0){
        digit += 1
    }


    if(n + digit < 6){
        let char = 6 - (digit + n)
        return digit + char
    } else {
        return digit
    }

}

console.log(minimumNumber(n, password))
