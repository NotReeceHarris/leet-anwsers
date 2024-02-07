// https://leetcode.com/problems/sort-characters-by-frequency

function frequencySort(s: string): string {
    const frequencyMap: { [key: string]: number } = {};
    for (let char of s) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }

    const sortedChars = Object.keys(frequencyMap).sort((a, b) => {
        if (frequencyMap[a] === frequencyMap[b]) {
            return a.localeCompare(b);
        }
        return frequencyMap[b] - frequencyMap[a];
    });

    let result = '';
    for (let char of sortedChars) {
        result += char.repeat(frequencyMap[char]);
    }

    return result;
}