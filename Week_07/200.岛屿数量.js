
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == '1') {
                res++;
                helper(i, j, grid)
            }
        }
    }
    return res
};

function helper(i, j, grid) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length) {
        return
    }
    if (grid[i][j] == '1') {
        grid[i][j] = '0'
        helper(i - 1, j, grid)
        helper(i + 1, j, grid)
        helper(i, j - 1, grid)
        helper(i, j + 1, grid)
    }
}