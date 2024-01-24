// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters

function maxLength(arr: string[]): number {
    let maxLen = 0;

    function dfs(i: number, cur: string) {
        if (i === arr.length) {
            maxLen = Math.max(maxLen, cur.length);
            return;
        }
        for (let j = i; j < arr.length; j++) {
            if (isUnique(cur + arr[j])) {
                dfs(j + 1, cur + arr[j]);
            }
        }
    }

    function isUnique(s: string): boolean {
        const set = new Set(s);
        return set.size === s.length;
    }

    dfs(0, '');

    return maxLen;
}