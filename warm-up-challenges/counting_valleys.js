function countingValleys(steps, path) {
    // Write your code here
    // Setting up a minimun, a maximum and a counter
    const min = 2;
    const max = 1000000;
    let valleys = 0;
    let isInValley = false;
    //Converting path to an array
    // example "UDDDUDUU" = ["U", "D", "D", "D", "U", "D", "U", "U"];
    path = path.split("")
    if (path.length >= min && path.length <= max) {
        path = path.map(step => ((step === "U") ? 1 : -1))
    }

    let trail = 0;
    for(let i = 0; i < path.length; i++) {
        trail += path[i];
        if (trail < 0 && !isInValley) {
            isInValley = true;
        }
        if (trail === 0 && isInValley) {
            valleys += 1;
            isInValley = false;
        }
    }
    return valleys
}

countingValleys(8, "UDDDUDUU")