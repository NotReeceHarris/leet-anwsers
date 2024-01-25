// https://leetcode.com/problems/longest-common-subsequence/

function longestCommonSubsequence(firstText: string, secondText: string): number {
    const firstTextLength = firstText.length;
    const secondTextLength = secondText.length;
    const longestSubsequenceMatrix: number[][] = Array(firstTextLength + 1).fill(0).map(() => Array(secondTextLength + 1).fill(0));

    for (let i = 1; i <= firstTextLength; i++) {
        for (let j = 1; j <= secondTextLength; j++) {
            if (firstText[i - 1] === secondText[j - 1]) {
                longestSubsequenceMatrix[i][j] = longestSubsequenceMatrix[i - 1][j - 1] + 1;
            } else {
                longestSubsequenceMatrix[i][j] = Math.max(longestSubsequenceMatrix[i - 1][j], longestSubsequenceMatrix[i][j - 1]);
            }
        }
    }

    return longestSubsequenceMatrix[firstTextLength][secondTextLength];
}