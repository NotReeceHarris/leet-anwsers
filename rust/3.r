# https://leetcode.com/problems/longest-substring-without-repeating-characters/

use std::collections::HashMap;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut start = 0;
        let mut end = 0;
        let mut max_len = 0;
        let mut map: HashMap<char, usize> = HashMap::new();

        for (i, c) in s.chars().enumerate() {
            if map.contains_key(&c) {
                start = std::cmp::max(*map.get(&c).unwrap() + 1, start);
            }
            max_len = std::cmp::max(max_len, i - start + 1);
            map.insert(c, i);
            end += 1;
        }

        max_len as i32
    }
}