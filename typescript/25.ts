// https://leetcode.com/problems/reverse-nodes-in-k-group/description/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const reverseKGroup = (head: ListNode | null, k: number): ListNode | null => {
    let dummy = new ListNode(0);
    dummy.next = head;
    let stack: ListNode[] = [];
    let prev = dummy;

    while (head) {
        stack.push(head);
        head = head.next;

        if (stack.length === k) {
            while (stack.length > 0) {
                prev.next = stack.pop()!;
                prev = prev.next;
            }
            prev.next = head;
        }
    }

    return dummy.next;
};