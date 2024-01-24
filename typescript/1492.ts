// https://leetcode.com/problems/the-kth-factor-of-n/

function kthFactor(n: number, k: number): number {
    let factors: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    return factors.length < k ? -1 : factors[k - 1];
};