/*Problem: Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. 
You can either climb 1 step or 2 steps at a time.

Ex: 
n=1, climbingStaircase(1) = 1 | (1)
n=2, climbingStaircase(2) = 2 | (1, 1) and (2)
n=3, climbingStaircase(3) = 3 | (1, 1, 1), (1, 2) and (2, 1)
n=4, climbingStaircase(4) = 5 | (1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (2, 1, 1) and (2, 2)*/

function climbingStaircase(n){
    const numberOfWay = [1, 2];
    for(let i=2; i<=n; i++) {
        numberOfWay[i] = numberOfWay[i-1] + numberOfWay[i-2];
    }
    return numberOfWay[n-1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
