// https://leetcode.com/problems/longest-palindromic-substring/

func longestPalindrome(s string) string {
    n := len(s)
    if n < 2 {
        return s
    }

    start, maxLength := 0, 1
    dp := make([][]bool, n)
    for i := range dp {
        dp[i] = make([]bool, n)
        dp[i][i] = true
    }

    for begin := n - 1; begin >= 0; begin-- {
        for end := begin + 1; end < n; end++ {
            if s[begin] == s[end] {
                if end-begin == 1 || dp[begin+1][end-1] {
                    dp[begin][end] = true
                    if end-begin+1 > maxLength {
                        start = begin
                        maxLength = end - begin + 1
                    }
                }
            }
        }
    }

    return s[start : start+maxLength]
}