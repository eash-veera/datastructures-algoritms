# Big O Notation / Time Complexity

## Why is it important ?

* To understand how to make the code more efficient
* To pinpoint the Big O or Time Complexity issues, and implementing them better.

## What does "Better" implementation mean ?

* "Better" means *faster time* to finish and to use *less memmory* (RAM), although there is much stronger emphasis on the former.

* Readability of the code does *not* factor at all. Performance is KING !


# How to measure code performance ?

## Why not hard time measurements ?

* Computers differ widely in their processors, so you will often get different times for each computer, hard to standardize !

* Manually testing the time of your code with each new implementation is not practical. (When inputs are small efficient and non efficient code performance cant be differenticated !)

* What if there was a way to quickly measure the performance of your code by just *looking* at it, rather than *Manualy timing it ?*

# Counting Operations for Big O Notation

* Measuring the performance of our code by counting the *operations* it has, rather than manullay timing it.

* The number of operations in your code is easy to standardize and remains consistant regardless of computer, compared to manually timing our code !

### Example counting operations 

*sum of all number - For loops implementation*

conts sumUpTo = n => {
    let total = 0;

    for (let i = 1; i <= n; i++){
        total += i;
    }

    return total;
}

*operations taken*
Takes 1 * N operations

----------------------------------------------------

*sum of all number - big o implementation*

const sumUpTo = n => {
    return (n * (n+1)) /2;
}

*operations taken*
Takes 3 operations, no matter how large it is.










