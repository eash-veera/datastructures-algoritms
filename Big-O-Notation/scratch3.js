// More Big O notation example

function shoutWordPairsV1(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(arr[i] + "" + arr[j]);
        }
    }
}

shoutWordPairs(['loola','cannonine','mughelan']);

//Big O notation for above code block is :

// loop is nested within a nother loop

// O(n^2)



function shoutWordPairsV2(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            console.log(arr1[i] + "" + arr2[j]);
        }
    }
}

shoutWordPairs(['loola','cannonine','mughelan'],['muchocha','melkronodic']);

//Big O notation for above code block is :

// O(n * m)

