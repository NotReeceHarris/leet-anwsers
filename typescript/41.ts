// https://leetcode.com/problems/first-missing-positive/

function firstMissingPositive(nums: number[]): number {
    let n = nums.length;
    let j = 0;

    // Move all non-positive numbers to the left
    for(let i = 0; i < n; i++) {
        if(nums[i] <= 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }

    // Mark indices corresponding to numbers as negative
    for(let i = j; i < n; i++) {
        let num = Math.abs(nums[i]);
        if(num - 1 < n) {
            nums[num - 1 + j] = -Math.abs(nums[num - 1 + j]);
        }
    }

    // Find the first index which is not marked as negative
    for(let i = j; i < n; i++) {
        if(nums[i] > 0) {
            return i - j + 1;
        }
    }

    // If all indices are marked, return the next number
    return n - j + 1;
}