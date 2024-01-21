// https://leetcode.com/problems/sum-of-subarray-minimums

function sumSubarrayMins(arr: number[]): number {
    const mod = 10**9 + 7;
    const n = arr.length;
    const stack: number[] = [];
    const prev: number[] = new Array(n);
    const next: number[] = new Array(n).fill(n);

    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            next[stack.pop() as number] = i;
        }
        prev[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = (sum + arr[i] * (i - prev[i]) * (next[i] - i)) % mod;
    }

    return sum;
}