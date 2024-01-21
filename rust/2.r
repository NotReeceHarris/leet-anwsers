# https://leetcode.com/problems/add-two-numbers/

#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
  pub val: i32,
  pub next: Option<Box<ListNode>>
}

impl ListNode {
  #[inline]
  fn new(val: i32) -> Self {
    ListNode {
      next: None,
      val
    }
  }
}

impl Solution {
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut dummy_head = Some(Box::new(ListNode::new(0)));
        let (mut p, mut q, mut carry) = (l1, l2, 0);
        let mut current = dummy_head.as_mut();

        while p.is_some() || q.is_some() {
            let sum = carry 
                    + p.as_ref().map_or(0, |node| node.val)
                    + q.as_ref().map_or(0, |node| node.val);
            carry = sum / 10;
            current.as_mut().unwrap().next = Some(Box::new(ListNode::new(sum % 10)));
            current = current.unwrap().next.as_mut();
            p = p.and_then(|node| node.next);
            q = q.and_then(|node| node.next);
        }

        if carry > 0 {
            current.as_mut().unwrap().next = Some(Box::new(ListNode::new(carry)));
        }

        dummy_head.unwrap().next
    }
}