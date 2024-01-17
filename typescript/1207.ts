// https://leetcode.com/problems/unique-number-of-occurrences/description/

function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map<number, number>();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const set = new Set<number>();
    for (const freq of map.values()) {
        if (set.has(freq)) {
            return false;
        }
        set.add(freq);
    }

    return true;
}