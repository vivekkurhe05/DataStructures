/**
 * Call stack is an important subject to understand if you want to wrap your head around recursion.
 */



function funcThree(){
    console.log('Three')
}

function funcTwo(){
    funcThree()
    console.log('Two')
}

function funcOne(){
    funcTwo()
    console.log('One')
}

funcOne()