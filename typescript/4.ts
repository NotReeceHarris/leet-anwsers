/*
https://leetcode.com/problems/median-of-two-sorted-arrays/description/
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const x = nums1.length;
    const y = nums2.length;
    
    let start = 0;
    let end = x;
    
    while (start <= end) {
        const partitionX = (start + end) >> 1;
        const partitionY = ((x + y + 1) >> 1) - partitionX;
        
        const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        
        const minX = partitionX == x ? Number.POSITIVE_INFINITY : nums1[partitionX];
        const minY = partitionY == y ? Number.POSITIVE_INFINITY : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            if ((x + y) % 2 == 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX < minY) {
            start = partitionX + 1;
        } else {
            end = partitionX - 1;
        }
    }
    
    throw new Error("Input arrays are not sorted");
}