// https://leetcode.com/problems/regular-expression-matching/description/

const isMatch = (s: string, p: string): boolean => {
    let dp: boolean[][] = Array(s.length + 1).fill(false).map(() => Array(p.length + 1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j <= p.length; j++) {
        if (p[j - 1] === '*' && dp[0][j - 2]) {
            dp[0][j] = true;
        }
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[s.length][p.length];
}