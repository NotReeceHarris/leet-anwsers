# https://leetcode.com/problems/longest-palindromic-substring/

impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let chars: Vec<char> = s.chars().collect();
        let len = chars.len();
        let mut dp = vec![vec![false; len]; len];
        let mut left = 0;
        let mut right = 0;

        for j in 0..len {
            for i in 0..=j {
                dp[i][j] = chars[i] == chars[j] && (j - i < 2 || dp[i + 1][j - 1]);
                if dp[i][j] && j + 1 - i > right - left {
                    left = i;
                    right = j + 1;
                }
            }
        }

        chars[left..right].iter().collect()
    }
}