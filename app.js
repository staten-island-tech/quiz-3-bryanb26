/* function tipCalc(bills){
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
let finalCosts = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

function isGreater(num){
    return(num > 100);
}

let copy = finalCosts.filter(isGreater);

console.log(copy); */

const Rob = {
    fullName: 'Robert Grande',
    mass: 78,
    height: 1.69,
    bmi: function(){
        return this.mass / (this.height * this.height);
    }
};

const Dejon = {
    fullName: 'Dejon Kurti',
    mass: 110,
    height: 1.95,
    bmi: function(){
        return this.mass / (this.height * this.height);
    }
};

if(Rob.bmi()>Dejon.bmi()){
    console.log(`${Rob.fullName} has a BMI of ${Rob.bmi()} which is greater than Dejon's!`);
}else if(Dejon.bmi()>Rob.bmi()){
    console.log(`${Dejon.fullName} has a BMI of ${Dejon.bmi()} which is greater than Rob's!`);
}else{
    console.log('Sadly, these young men have the same BMI...')
};