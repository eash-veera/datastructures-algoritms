const sumUpToV1 = n => {

    let total = 0;

    for(let i = 0; i <= n; i++){
        total += i;
    }

    return total;
};

const sumUpToV2 = n => {
    return (n * (n + 1)) /2;
};

// hard time measssurement

let t1, t2;

t1 = Date.now();
sumUpToV1(2500000000);
t2 = Date.now();
console.log(`Inefficient code ran in : ${(t2 - t1) / 1000} seconds`);

t1 = Date.now();
sumUpToV2(2500000000);
t2 = Date.now();
console.log(`Efficient code ran in : ${(t2 - t1) / 1000} seconds`);