// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function pseudoPalindromicPaths (root: TreeNode | null): number {
    let counter = 0;
    let pathCounts = new Array(10).fill(0);

    function dfs(node: TreeNode | null) {
        if (!node) return;
        pathCounts[node.val]++;
        if (!node.left && !node.right) {
            let odd = 0;
            for (let i = 0; i < 10; i++) {
                if (pathCounts[i] % 2 !== 0) odd++;
            }
            if (odd <= 1) counter++;
        } else {
            dfs(node.left);
            dfs(node.right);
        }
        pathCounts[node.val]--;
    }

    dfs(root);
    return counter;
}