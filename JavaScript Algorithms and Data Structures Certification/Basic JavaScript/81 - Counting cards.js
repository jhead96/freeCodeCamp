// An example of a more complex function

let count = 0;

function cc(card) {

    // Increment if 2,3,4,5,6
    if (card <= 6) {
    count++;
    }

    // Decrement if 10, J, Q, K, A
    if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count--;
    }

    if (count > 0) {
        return count + " Bet" 
    }
    return count + " Hold"

    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');