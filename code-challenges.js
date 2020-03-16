// ASSESSMENT 3: Coding Practical Questions


/*   Austin Majeski   */


///***********************************************************///
//             Function used to format logging                 //
///***********************************************************///

/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const LINE              =   "_____________________________________________________"
const SPACE             =   "    "
const ESC               =   String.fromCharCode(033)
const BLUE_BACKGROUND   =   ""//ESC+"[48;5;217m"
const WHITE_BACKGROUND  =   ESC+"[48;5;15m"
const WHITE_TEXT        =   ""//ESC+"[38;5;15m"
const FORMAT_RESET      =   ESC+"[0m"

function log() { 
    console.log(`${BLUE_BACKGROUND} ${WHITE_BACKGROUND}${LINE}${FORMAT_RESET}${BLUE_BACKGROUND}\n\n${SPACE}${arguments[0]}\n ${LINE}\n\n`)
    let Args = Array.from( arguments ).splice(1)
    Args.forEach( out => {
        if ( Array.isArray( out ) ){
            let outputArrayText = SPACE + "[ "
            out.forEach( (v,i) => {
                if ( i < out.length-1 )  { outputArrayText += `${v}, ` }
                else  { outputArrayText += v }  
            } )
            console.log( outputArrayText += " ]" )
        }
        else{ console.log( SPACE + out ) }
    } )
    console.log(`\n ${LINE}\n ${LINE}\n\n\n`)
}
console.log("\n" + BLUE_BACKGROUND + WHITE_TEXT + "\n\n\n\n")
/// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






///***********************************************************///
//                    Assignment Start                         //
///***********************************************************///




//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------1)   Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output:   [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /     1  2  3  4  5  6  7   8   9   10
         
//       [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//        1  2  3  4  5  6  7   8   9   10

const fibonacci = (nth) => {

    let out = []
    
    /*
    //  Goes UP the Fibonacci sequence instead of down it.
    //
    //     [!]  Using Recursion  [!]
    //
    //  If the number ' nth ' is greater than one, subtract 1 from ' nth ' and call the funtion again.
    //  Once the number ' nth ' is equal to ' 1 ' return an array with that value (' [1] ').
    //  Now the array ' out ', of the function call before it, will watch that returned value/array.
    //  After that, the values at the two indexes before the current one will be added together,
    //  (from the 'out' array) and concatenated onto the array.
    //
    //  If it is the second value in the Fibonacci Sequence that is being calculated, 
    //  the value at 2 indexes below/behind it will be outide the array and thus, 'Not a Number',
    //  requiring a value of ' 0 ' to be added to the first number (' 1 '), resulting in the second
    //  value also becomming equal to ' 1 '.
    */

    if ( nth > 1) {
        out = fibonacci(--nth)
        let [ a, b ] = [ out[out.length - 1], out[out.length - 2] ]
        if( isNaN(b) )  { b = 0 }
        return out.concat( a + b )
    }
    return out.concat(nth)
}



/// - - - - - - - - - - - - - - - -

log(    "First 10 Digits from the Fibonacci Sequence",    
        fibonacci(10)    
    )

/// - - - - - - - - - - - - - - - -





//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------2)   Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]      // Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]     // Expected output: [-823, 7, 23]



const sortOddNumbers = numArrIn => {
    return (
                numArrIn.filter( 
                    v => typeof v === "number" 
                ).filter( 
                    v => Math.abs(v%2) === 1 
                ).sort( (a,b) => a-b )
           )
}



/// - - - - - - - - - - - - - - - -

log(    "Sorting the Odd Numbers",    
        
        sortOddNumbers(fullArr1),    
        "",
        sortOddNumbers(fullArr2)    
    )

/// - - - - - - - - - - - - - - - -





//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------3)   Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var middleLetters1 = "hello"         // Expected output: “l”
var middleLetters2 = "rhinoceros"    // Expected output: “oc”



const getMiddleLetters = strIn => {
    return (
                strIn.length%2 === 0
                ?
                strIn.slice( (strIn.length / 2 - 1), (strIn.length / 2 + 1) )
                :    
                strIn.charAt( strIn.length / 2 - 0.5 )   
           )
}



/// - - - - - - - - - - - - - - - -

log(    "Middle Letter(s) of Words",   
    
        `\"${middleLetters1}\"        >    \' ${getMiddleLetters( middleLetters1 )} \'`,    
        "",
        `\"${middleLetters2}\"   >    \' ${getMiddleLetters( middleLetters2 )} \'`
    )

/// - - - - - - - - - - - - - - - -





//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------4)   Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var Radius = {
    A:  43,
    B:  67,
    C:  456
}



class Sphere {
    constructor( r ){
        this.radius = r
    }

    get area() {  return ( 4 * Math.PI * this.radius**2 )  }
}



/// - - - - - - - - - - - - - - - -

log(    "Spheres and their Areas",

        `Radius of:   ${Radius.A}`,   
        `Area of:     ${new Sphere(Radius.A).area}`,
        "",
        `Radius of:   ${Radius.B}`,   
        `Area of:     ${new Sphere(Radius.B).area}`,
        "",
        `Radius of:   ${Radius.C}`,   
        `Area of:     ${new Sphere(Radius.C).area}`
    )

/// - - - - - - - - - - - - - - - -





//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

// --------------------5)   Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /  / /

var numbersToAdd1 = [2, 4, 45, 9]     // Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]    // Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []                // Expected output: []



const accumulateSum = numArrIn => {
    let store = 0
    return numArrIn.map( v => {
        return ( store += v )
    } )
}



/// - - - - - - - - - - - - - - - -

log(    "Arrays of Accumulating Sums",

        accumulateSum(numbersToAdd1),
        "",
        accumulateSum(numbersToAdd2),
        "",
        accumulateSum(numbersToAdd3)

    )

/// - - - - - - - - - - - - - - - -




console.log(FORMAT_RESET+"\n\n")

/// EOF