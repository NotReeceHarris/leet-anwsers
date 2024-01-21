// https://leetcode.com/problems/minimum-falling-path-sum


function minFallingPathSum(matrix: number[][]): number {
    let dp = JSON.parse(JSON.stringify(matrix));
    let n = matrix.length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] += Math.min(
                dp[i - 1][j],
                dp[i - 1][Math.max(0, j - 1)],
                dp[i - 1][Math.min(n - 1, j + 1)]
            );
        }
    }

    return Math.min(...dp[n - 1]);
}