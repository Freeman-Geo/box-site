

OneStep

//* distance
let halfStep = + 0;
let oneStep = + 0;
let twoSteps = + 0;
//* noMove
let noMove = document.getElementById("noMove");
noMove = + 0; 
//* guard
let high = document.getElementById("high");
high = + 0;
let low = document.getElementById("low");
low = + 0;
//* moves
let front = document.getElementById("front");
front = +0;
let back = document.getElementById("back");
back = +0;
let left = document.getElementById("left");
left = +0;
let right = document.getElementById("right");
right = +0;
let dgFrontLeft = document.getElementById("dgFrontLeft");
dgFrontLeft = +0;
let dgBackLeft = document.getElementById("dgBackLeft");
dgBackLeft = +0;
let shuffleLeft = document.getElementById("shuffleLeft");
shuffleLeft = +0;
dgFrontRight = document.getElementById("dgFrontRight");
dgFrontRight = +0;
let dgBackRight = document.getElementById("dgBackRight");
dgBackRight = +0;
let shuffleRight = document.getElementById("shuffleRight");
shuffleRight = +0;

//* Dodges
let showlderRoll = document.getElementById("showlderRoll");
showlderRoll = +0;
let bendFrontLeft = document.getElementById("bendFrontLeft");
bendFrontLeft = +0;
let bendBackLeft = document.getElementById("bendBackLeft");
bendBackLeft = +0;
let rollingDownLeft = document.getElementById("rollingDownLeft");
rollingDownLeft = +0;
let bendFrontRight = document.getElementById("bendFrontRight");
bendFrontRight = +0;
let bendBackRight = document.getElementById("bendBackRight");
bendBackRight = +0;
let rollingDownRight = document.getElementById("rollingDownRight");
rollingDownRight = +0;
//* defence
let doubleGloveFront = document.getElementById("doubleGloveFront");
doubleGloveFront = +0;
let bendFront = document.getElementById("bendFront");
bendFront = +0;
//^ left
let parryLeft = document.getElementById("parryLeft");
parryLeft = +0;
let armFrontLeft = document.getElementById("armFrontLeft");
armFrontLeft = +0;
let armBackLeft = document.getElementById("armBackLeft");
armBackLeft = +0;
let bendArmLeft = document.getElementById("bendArmLeft");
bendArmLeft = +0;
//^ Right
let parryRight = document.getElementById("parryRight");
parryRight = +0;
let armFrontRight = document.getElementById("armFrontRight");
armFrontRight = +0;
let armBackRight = document.getElementById("armBackRight");
armBackRight = +0;
let bendArmRight = document.getElementById("bendArmRight");
bendArmRight = +0;
//* hit
let fastJabLeft = document.getElementById("fastJabLeft");
fastJabLeft = +0;
let jabUpLeft = document.getElementById("jabUpLeft");
jabUpLeft = +0;
let jabLowLeft = document.getElementById("jabLowLeft");
jabLowLeft = +0;
let crossLeft = document.getElementById("crossLeft");
crossLeft = +0;
let hookLeft = document.getElementById("crochetHighLeft");
crochetHighLeft = +0;
let crochetDownLeft = document.getElementById("crochetDownLeft");
crochetDownLeft = +0;
let upperCutLeft = document.getElementById("upperCutLeft");
upperCutLeft = +0;
let corkscrewLeft = document.getElementById("corkscrewLeft");
corkscrewLeft = +0;


let fastJabRight = document.getElementById("fastJabRight");
fastJabRight = +0;
let jabUpRight = document.getElementById("jabUpRight");
jabUpRight = +0;
let jabLowRight = document.getElementById("jabLowRight");
jabLowRight = +0;
let crossRight = document.getElementById("crossRight");
crossRight = +0;
let hookRight = document.getElementById("hookRight");
hookRight = +0;
let crochetHighRight = document.getElementById("crochetHighRight");
crochetHighRight = +0;
let crochetDownRight = document.getElementById("crochetDownRight");
crochetDownRight = +0;
let upperCutRight = document.getElementById("upperCutRight");
upperCutRight = +0;
let corkscrewRight = document.getElementById("corkscrewRight");
corkscrewRight = +0;


let nullify;
if (nullify){
    grHit = 0,
    grDefense = 0
} 
let total;
if (total){
    grHit = 0(null),
    grDefense = 0(null)
} 

// //^ Pruebas.


let hp = document.getElementById("meter-hp");
let strong = document.getElementById("meter-strong");
let energy = document.getElementById("meter-energy");

if ( hp > 0 && hp <= 25){
    hp.style.backgroundColor = "red";
}

if ( hp >= 26 && hp <= 75){
    hp.style.backgroundColor = "yellow"
}

if ( hp >= 76 && hp <= 99){
    hp = hp.style.backgroundColor = "green"
}

if ( hp = 100){
    hp = hp.style.backgroundColor = "lime"
    hp = hp.style.borderColor = "darkgreen"
}

if ( strong >= 0 && strong <= 25){
    strong = strong.style.backgroundColor = "red";
}

if ( strong >= 26 && strong <= 75){
    strong = strong.style.backgroundColor = "yellow"
}

if ( strong >= 76 && strong <= 99){
    strong = strong.style.backgroundColor = "green"
}

if ( strong = 100){
    strong = strong.style.backgroundColor = "green"
    strong = strong.style.borderColor = "lime"
}

if ( defence >= 0 && defence <= 25){
    defence = defence.style.backgroundColor = "red";
}

if ( defence >= 26 && defence <= 75){
    defence = defence.style.backgroundColor = "yellow"
}

if ( defence >= 76 && defence <= 99){
    defence = defence.style.backgroundColor = "green"
}

if ( defence = 100){
    defence = defence.style.backgroundColor = "green"
    defence = defence.style.borderColor = "lime"
}


//* grAtack Variables

let grHit = (fastJabLeft, jabUpLeft, jabLowLeft, crossLeft, hookLeft, crochetHighLeft, crochetDownLeft, upperCutLeft, corkscrewLeft, fastJabRight, jabUpRight, jabLowRight, crossRight, hookRight, crochetHighRight, crochetDownRight, upperCutRight, corkscrewRight)

let grHitLeft = (fastJabLeft, jabUpLeft, jabLowLeft, crossLeft, hookLeft, crochetHighLeft, crochetDownLeft, upperCutLeft, corkscrewLeft)

let grHitRight = (fastJabRight, jabUpRight, jabLowRight, crossRight, hookRight, crochetHighRight, crochetDownRight, upperCutRight, corkscrewRight)

let grHitHigh = (fastJabLeft, jabUpLeft, crossLeft, crochetHighLeft, corkscrewLeft, fastJabRight, jabUpRight, crossRight, crochetHighRight, corkscrewRight)

let grHitLow = (jabLowLeft, hookLeft, crochetDownLeft, upperCutLeft, jabLowRight, hookRight, crochetDownRight, upperCutRight)

let grHitStrong = (crossLeft, hookLeft, crochetHighLeft, crochetDownLeft, upperCutLeft, corkscrewLeft, crossRight, hookRight, crochetHighRight, crochetDownRight, upperCutRight, corkscrewRight)

let grHitFast = (fastJabLeft, jabUpLeft, jabLowLeft, fastJabLeft, jabUpLeft, jabLowLeft)

let grHitVeryStrong = (crossLeft, crochetDownLeft, upperCutLeft, corkscrewLeft, crossRight, crochetDownRight, upperCutRight, corkscrewRight)

let grHitVeryFast = (fastJabLeft, jabUpLeft, jabLowLeft, crossLeft, fastJabRight, jabUpRight, jabLowRight, crossRight)

let grHitVeryVeryStrong = (corkscrewLeft, corkscrewRight)

let grHitVeryVeryFast = (fastJabLeft, fastJabRight)


let grHitHalfStepStrong = (hookLeft, upperCutLeft, hookRight, upperCutRight)

let grHitOneStepStrong = (crossLeft, crochetHighLeft, crochetDownLeft, upperCutLeft, crossRight, crochetHighRight, crochetDownRight, upperCutRight)

let grHitTwoStepStrong = (corkscrewLeft, corkscrewRight)

let grHitHalfStepFast = (fastJabLeft, fastJabRight)

let grHitOneStepFast = (fastJabLeft, jabUpLeft, jabLowLeft)

let grHitHalfStep = (grHitHalfStepStrong, grHitHalfStepFast)

let grHitOneStep = (grHitOneStepStrong, grHitOneStepFast) 

let grHitTwoStep = (grHitTwoStepStrong) 



//* grDefence Variables

let grDefenceFront = (doubleGloveFront, bendFront)

let grDefenceLeft = (parryLeft, armFrontLeft, armBackLeft, bendArmLeft)

let grDefenceRight = (parryRight, armFrontRight, armBackRight, bendArmRight)

let grDefenceHigh = (doubleGloveFront, parryLeft, armFrontLeft, armBackLeft, doubleGloveFront, armFrontLeft, armBackLeft)

let grDefenceLow = (bendFront, bendArmLeft, bendArmRight)

let grDefense = (grDefenceFront, grDefenceLeft, grDefenceRight, grDefenceHigh, grDefenceLow)



//* grDodge Variables

let grDodgeHigh = (showlderRoll, bendBackLeft, bendBackRight)

let grDodgeLow = (bendFrontLeft, bendFrontRight, rollingDownLeft, rollingDownRight)

let grDodgeFront = (showlderRoll)

let grDodgeLeft = (bendFrontLeft, bendBackLeft, rollingDownLeft)

let grDodgeRight = (bendFrontRight, bendBackRight, rollingDownRight)

let grDodgeFrontLeft = (bendFrontLeft, rollingDownLeft)

let grDodgeFrontRight = (bendFrontRight, rollingDownRight)



//* grMoves Variables

let grMovesLeft = (left, dgFrontLeft, dgBackLeft, shuffleLeft)

let grMovesRight = (right, dgFrontRight, dgBackRight, shuffleRight)

let dgFront = (dgFrontLeft, dgFrontRight, shuffleLeft, shuffleRight)

let dgBack = (dgBackLeft, dgBackRight)



//* Algoritmos

//^ Algoritmos distance (Dependen de los movimientos)

//? Algoritmos person

let atkPerson = {

if (halfStep){
    grHitVeryStrong = grHitVeryStrong + 5,
    grHitHalfStepStrong = grHitHalfStepStrong +10,
    grHitHalfStepFast = grHitHalfStepFast +5
},

if (oneStep){
    grHitVeryStrong = grHitVeryStrong + 10,
    grHitOneStepStrong = grHitOneStepStrong +8,
    grHitOneStepFast = grHitOneStepFast +5
},

if (TwoSteps){
    grHitVeryStrong = grHitVeryStrong + 10,
    grHitTwoStepStrong = grHitTwoStepStrong +8,
    grHitTwoStepFast = grHitTwoStepFast +5
},

if (noMove){
    grHitStrong = grHitStrong +5,
    grHitFast = grHitFast +3,
    grHitVeryVeryFast = grHitVeryVeryFast +2,
    grHitHigh = grHitHigh + 4,
    grHitLow = grHitLow +4,
    grHitStrong = grHitStrong +5,
    grHitFast = grHitFast +3
},

//^ Algoritmos Guard High

if (high = true){
    grHitHigh = grHitHigh +6,
    grHitLow = grHitLow +3,
    grHitStrong = grHitStrong +6,
    grHitFast = grHitFast +3
},

//^ Algoritmos Guard high + halfStep

if (high = true && halfStep == true){
    grHitLow = grHitLow -1,
    grHitHigh = grHitHigh +3,
    grHitStrong = grHitStrong +6,
    grHitFast = grHitFast +3,
    grHitHalfStepStrong = grHitHalfStepStrong +1,
    grHitHalfStepFast = grHitHalfStepFast +3
    grHitOneStepStrong = grHitOneStepStrong +1,
    grHitOneStepFast = grHitOneStepFast +1,
    grHitTwoStepStrong = grHitTwoStepStrong -1,
    grHitTwoStepFast = grHitTwoStepFast -1
},

//^ Algoritmos Guard high + OneStep

if (high = true && oneStep == true){
    grHitHigh = grHitHigh +6,
    grHitLow = grHitLow +3,
    grHitFast = grHitFast +1,
    grHitOneStep = grOneStep +6,
    grHitTwoStep = grTwoStep +0,
    grHitHalfStep = grHalfStep +3,
    grHitVeryStrong = grHitVeryStrong +1
},

//^ Algoritmos Guard high + TwoStep

if (high = true && twoSteps == true){
    grHitVeryVeryStrong = grHitVeryVeryStrong +5
},

//* ---------------------------

//^ Algoritmos Guard Low

if (Low){
    grHitHigh = grHitHigh +1,
    grHitLow  = grHitLow +4,
    grHitStrong = grHitStrong +6,
    grHitFast = grHitFast +3
},

//^ Algoritmos Guard high + halfStep

if (low = true && HalfStep == true){
    grHitHigh = grHitHigh +3,
    grHitLow = grHitLow +6,
    grHitStrong = grHitStrong +4,
    grHitFast = grHitFast +2,
    grHitVeryStrong = grHitVeryStrong +1
    grHitOneStep = grOneStep +4,
    grHitTwoStep = grTwoStep -1,
    grHitHalfStep = grHalfStep +6
},

//^ Algoritmos Guard high + OneStep

if (low = true && oneStep == true){
    grHitHigh = grHitHigh +1,
    grHitLow = grHitLow +3,
    grHitStrong = grHitStrong +2,
    grHitFast = grHitFast +1
    grHitVeryStrong = grHitVeryStrong +1
    grHitOneStep = grOneStep +6,
    grHitHalfStep = grHalfStep +2
},

//^ Algoritmos Guard high + TwoStep

if (low = true && TwoSteps == true){
    grHitVeryVeryStrong = grHitVeryVeryStrong +5
},

}

console.log(atkPerson)






let defPerson = {

    if (halfStep = true){
        grDefenceFront = grDefenceFront -6,
        grDefenceLeft = grDefenceLeft -5,
        grDefenceRight = grDefenceRight -5,
        grDefenceHigh = grDefenceHigh -3,
        grDefenceLow = grDefenceLow -6
    },
    
    if (oneStep = true){
        grDefenceFront = grDefenceFront -6,
        grDefenceLeft = grDefenceLeft -3,
        grDefenceRight = grDefenceLeft -3,
        grDefenceHigh = grDefenceHigh -3 
    },
    
    if (TwoSteps = true){
        grDefenceFront = grDefenceFront -5,
        grDefenceLeft = grDefenceLeft -3,
        grDefenceRight = grDefenceRight -3,
        grDefenceHigh = grDefenceHigh -3,
        grDefenceLow = grDefenceLow -4
    },
    
    if (noMove = true){
        grDefense = grDefense -4
    },
    
    //^ Algoritmos Guard High
    
    if (high = true){
        grDefenceHigh = grDefenceHigh -4,
        grDefense = grDefense -3
    },
    
    //^ Algoritmos Guard high + halfStep
    
    if (high = true && halfStep == true){
        grDefense = grdefense -5,
        grDefenceLow = grDefenceLow -6
    },
    
    //^ Algoritmos Guard high + OneStep
    
    if (high = true && oneStep == true){
        grDefense = grdefense -6
    },
    
    //^ Algoritmos Guard high + TwoStep
    
    if (high = true && twoSteps == true){
        grDefense = grdefense -3
    },
    
    //* ---------------------------
    
    //^ Algoritmos Guard Low
    
    if (Low){
        grDefenceLow = grDefenceLow -6,
        grDefenceHigh = grDefenceHigh -3,
        grDefenceFront = grDefenceFront -3
    },
    
    //^ Algoritmos Guard high + halfStep
    
    if (low = true && halfStep == true){
        grDefenceFront = grDefenceFront -4,
        grDefenceLow = grDefenceLow -6,
        grDefenceHigh = grDefenceHigh -2
        
    },
    
    //^ Algoritmos Guard high + OneStep
    
    if (low = true && oneStep == true){
        grDefenceFront = grDefenceFront -4,
        grDefenceHigh = grDefenceHigh -5,
        grDefenceLow = grDefenceLow -6
    },
    
    //^ Algoritmos Guard high + TwoStep
    
    if (low = true && TwoSteps == true){
        grDefense = grDefense -6
        
    },

    //* trios con grDodgeHigh
    
    if (grDodgeHigh = true && high == true){
        
    },

    if (grDodgeHigh = true && low == true){
        
    },

    if (grDodgeHigh = true && high == true && halfStep){
        
    },

    if (grDodgeHigh = true && low == true && halfStep){
        
    },

    if (grDodgeHigh = true && high == true && oneStep){
        
    },

    if (grDodgeHigh = true && low == true && oneStep){
        
    },

    if (grDodgeHigh = true && high == true && TwoSteps){
        
    },

    if (grDodgeHigh = true && low == true && TwoSteps){
        
    },

    //* trios con grDodgeLow
    
    if (grDodgeLow = true && high == true){
        
    },

    if (grDodgeLow = true && low == true){
        
    },

    if (grDodgeLow = true && high == true && halfStep){
        
    },

    if (grDodgeLow = true && low == true && halfStep){
        
    },

    if (grDodgeLow = true && high == true && oneStep){
        
    },

    if (grDodgeLow = true && low == true && oneStep){
        
    },

    if (grDodgeLow = true && high == true && TwoSteps){
        
    },

    if (grDodgeLow = true && low == true && TwoSteps){
        
    },

    //* trios con grDodgeFront
    
    if (grDodgeFront = true && high == true){
        
    },

    if (grDodgeFront = true && low == true){
        
    },

    if (grDodgeFront = true && high == true && halfStep){
        
    },

    if (grDodgeFront = true && low == true && halfStep){
        
    },

    if (grDodgeFront = true && high == true && oneStep){
        
    },

    if (grDodgeFront = true && low == true && oneStep){
        
    },

    if (grDodgeFront = true && high == true && TwoSteps){
        
    },

    if (grDodgeFront = true && low == true && TwoSteps){
        
    },

    //* trios con grDodgeLeft
    
    if (grDodgeLeft = true && high == true){
        
    },

    if (grDodgeLeft = true && low == true){
        
    },

    if (grDodgeLeft = true && high == true && halfStep){
        
    },

    if (grDodgeLeft = true && low == true && halfStep){
        
    },

    if (grDodgeLeft = true && high == true && oneStep){
        
    },

    if (grDodgeLeft = true && low == true && oneStep){
        
    },

    if (grDodgeLeft = true && high == true && TwoSteps){
        
    },

    if (grDodgeLeft = true && low == true && TwoSteps){
        
    },

    //* trios con grDodgeRight
    
    if (grDodgeRight = true && high == true){
        
    },

    if (grDodgeRight = true && low == true){
        
    },

    if (grDodgeRight = true && high == true && halfStep){
        
    },

    if (grDodgeRight = true && low == true && halfStep){
        
    },

    if (grDodgeRight = true && high == true && oneStep){
        
    },

    if (grDodgeRight = true && low == true && oneStep){
        
    },

    if (grDodgeRight = true && high == true && TwoSteps){
        
    },

    if (grDodgeRight = true && low == true && TwoSteps){
        
    },

     //* trios con grDodgeFrontLeft
    
     if (grDodgeFrontLeft = true && high == true){
        
     },
 
     if (grDodgeFrontLeft = true && low == true){
         
     },
 
     if (grDodgeFrontLeft = true && high == true && halfStep){
         
     },
 
     if (grDodgeFrontLeft = true && low == true && halfStep){
         
     },
 
     if (grDodgeFrontLeft = true && high == true && oneStep){
         
     },
 
     if (grDodgeFrontLeft = true && low == true && oneStep){
         
     },
 
     if (grDodgeFrontLeft = true && high == true && TwoSteps){
         
     },
 
     if (grDodgeFrontLeft = true && low == true && TwoSteps){
         
     },

     //* trios con grDodgeFrontRight
    
     if (grDodgeFrontRight = true && high == true){
        
     },
 
     if (grDodgeFrontRight = true && low == true){
         
     },
 
     if (grDodgeFrontRight = true && high == true && halfStep){
         
     },
 
     if (grDodgeFrontRight = true && low == true && halfStep){
         
     },
 
     if (grDodgeFrontRight = true && high == true && oneStep){
         
     },
 
     if (grDodgeFrontRight = true && low == true && oneStep){
         
     },
 
     if (grDodgeFrontRight = true && high == true && TwoSteps){
         
     },
 
     if (grDodgeFrontRight = true && low == true && TwoSteps){
         
     },

    }
    
    