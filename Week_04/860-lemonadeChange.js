/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    if (bills[0] >= 10 || bills[1] >= 20 || bills[2] >= 20) return false
    const bag = {
        5: 0,
        10: 0,
        20: 0
    }
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            bag[5]++
        } else if (bills[i] === 10) {
            if (bag[5] > 0) {
                bag[10]++
                bag[5]--
            } else {
                return false
            }
        } else if (bills[i] === 20) {
            if (bag[10] > 0 && bag[5] > 0) {
                bag[10]--
                bag[5]--
                bag[20]++
            } else if (bag[10] == 0 && bag[5] >= 3) {
                bag[5] -= 3
                bag[20]++
            } else {
                return false
            }
        }
    }
    return true
};

// 优化版
var lemonadeChange = function(bills) {
    let five = 0; let ten = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++
        } else if (bills[i] === 10) {
            if (five === 0) return false
            five--; ten++;
        } else if (bills[i] === 20) {
            if (ten > 0 && five > 0) {
                ten--;five--;
            } else if (ten == 0 && five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
};