// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var H,Q,D,N,P;
    var f = currency;
    var sum= {};

    if (currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange",};}
    else if (currency <= 0){
        return {};
}
    H = Math.floor(f / 50);
                f= f % 50
    Q = Math.floor(f/ 25);
                f= f% 25
    D = Math.floor(f/ 10);
                f= f% 10
    N = Math.floor(f/ 5);
                f= f% 5
    P = Math.floor(f/ 1);
        f= f% 1
        
    if (H !=0) {
	sum.H = H;
}
    if (Q !=0) {
	sum.Q = Q;
}
    if (D !=0) {
	sum.D = D;
}
    if (N !=0) {
	sum.N = N;
}
    if (P !=0) {
	sum.P = P;
}     
    return sum;
}
