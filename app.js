function tipCalc(bills){
    let tip;
    if (bills < 50) {
        percentage = .2;
    }
    else if (50 <= bills <= 200) {
        percentage = .15;
    }
    else{
        percentage = .1;
    }
    return percentage * bills;
}

let bills = [140, 45, 270];
let tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
let finalCost = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
