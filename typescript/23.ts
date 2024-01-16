// https://leetcode.com/problems/merge-k-sorted-lists/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
    if (lists.length === 0) {
        return null;
    }

    let head = new ListNode();
    let ptr = head;

    while (lists.length > 0) {
        let minNode;
        let minI = 0;
        for (let i = 0; i < lists.length; i++) {
            const node = lists[i];
            if (!minNode || (node && node.val < minNode.val)) {
                minNode = node;
                minI = i;
            }
        }

        if (!minNode) {
            break;
        }

        // add to list
        ptr.next = minNode;
        ptr = minNode;

        // walk from list that it was taken from
        if (minNode.next) {
            lists[minI] = minNode.next;
        } else {
            lists.splice(minI, 1);
        }
    }

    return head.next;
};