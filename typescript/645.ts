// https://leetcode.com/problems/set-mismatch

function findErrorNums(nums: number[]): number[] {
    let map: { [key: number]: number } = {};
    for (let num of nums) {
        if (map[num] === undefined) {
            map[num] = 1;
        } else {
            map[num]++;
        }
    }

    let dup = -1, missing = -1;
    for (let i = 1; i <= nums.length; i++) {
        if (map[i] === 2) {
            dup = i;
        } else if (map[i] === undefined) {
            missing = i;
        }
    }

    return [dup, missing];
}