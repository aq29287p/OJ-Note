---
title: 0141. Linked List Cycle
---

# 0141. Linked List Cycle

## Solution: Fast-slow Pointers

### Code

=== "C++"

    ``` cpp
    class Solution {
    public:
      bool hasCycle(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast && fast->next) {
          slow = slow->next;
          fast = fast->next->next;
          if (slow == fast)
            return true;
        }

        return false;
      }
    };
    ```

=== "Java"

    ``` java
    public class Solution {
      public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
          if (slow == fast) {
            return true;
          }
        }

        return false;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def hasCycle(self, head: Optional[ListNode]) -> bool:
          　# empty linked-list or linked-list with only one node
            if not head or not head.next:
                return False

            # initialize slow and fast pointers 
            slow = head
            fast = head

            # move fast pointer two nodes at a time
            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next

                # if fast pointer ever meets the slow pointer, there is a cycle
                if slow == fast:
                    return True

            return False
    ```

=== "JavaScript"

    ``` javascript
    const hasCycle = function(head) {
      // empty linked-list or linked-list with only one node
      if (!head || !head.next) {
        return false;
      }

      // initialize slow and fast pointers
      let slow = head;
      let fast = head;

      // move fast pointer two nodes at a time
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // if fast pointer ever meets the slow pointer, there is a cycle
        if (slow === fast) {
          return true;
        }
      }

      return false;
    };
    ```

### Analysis

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$