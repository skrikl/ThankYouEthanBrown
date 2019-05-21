'use strict'

let funds = 50; //Starting position

while (funds > 1 && funds < 100) {
    //Put bets

    //Throw bones

    //Calculate resulting funds
}
// Returns a random number in [n, m] inclusive
function rand(m, n) {
    return m + Math.floor((n - m +1)*Math.random());
}
// Returns a random string representing one of the six sides of a game dice
 function randFace() {
     return ['crown', 'anchor', 'heart', 'spade', 'club', 'diamond']
         [rand(0, 5)];
 }