---
title: 0025. Reverse Nodes in k-Group
---

# 0025. Reverse Nodes in k-Group

## Solution: Recursion

### Code

### Analysis

## Solution: Iteration

### Code

=== "C++"

    ``` cpp
    class Solution {
    public:
      ListNode* reverseKGroup(ListNode* head, int k) {
          if (!head || k == 1) {
            return head;
          }

          ListNode* dummy = new ListNode(-1);
          ListNode* prev = dummy;
          ListNode* curr = head;
          dummy->next = head;

          for (int i = 1; curr; ++i) {
            if (i % k == 0) {
                prev = reverse(prev, curr->next);
                curr = prev->next;
            } else {
                curr = curr->next;
            }
          }
          return dummy->next;
      }
      
      ListNode* reverse(ListNode* head, ListNode* tail) {
          ListNode* last = head->next;
          ListNode* curr = last->next;
        
          while (curr != tail) {
              last->next = curr->next;
              curr->next = head->next;
              head->next = curr;
              curr = last->next;
          }
        
          return last;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k == 1) {
          return head;
        }

        ListNode dummy = new ListNode(-1);
        ListNode prev = dummy;
        ListNode curr = head;
        dummy.next = head;

        for (int i = 1; curr != null; ++i) {
          if (i % k == 0) {
            prev = reverse(prev, curr.next);
            curr = prev.next;
          } else {
            curr = curr.next;
          }
        }

        return dummy.next;
      }

      private ListNode reverse(ListNode head, ListNode tail) {
        ListNode last = head.next;
        ListNode curr = last.next;
      
        while (curr != tail) {
          last.next = curr.next;
          curr.next = head.next;
          head.next = curr;
          curr = last.next;
        }
      
        return last;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
            if not head or k == 1:
                return head

            dummy = ListNode()
            prev = dummy
            curr = head
            dummy.next = head

            idx = 1
            while curr:
                if idx % k == 0:
                    prev = self.reverse(prev, curr.next)
                    curr = prev.next
                else:
                    curr = curr.next
                idx += 1

            return dummy.next

        def reverse(self, head: Optional[ListNode], tail: Optional[ListNode]):
            last = head.next
            curr = last.next

            while curr != tail:
                last.next = curr.next
                curr.next = head.next
                head.next = curr
                curr = last.next
            
            return last
    ```

=== "JavaScript"

    ``` javascript
    const reverseKGroup = (head, k) => {
      if (!head || k === 1) {
        return head;
      }

      dummy = new ListNode(-1);
      prev = dummy;
      curr = head;
      dummy.next = head;

      for (let i = 1; curr; ++i) {
        if (i % k === 0) {
          prev = reverse(prev, curr.next);
          curr = prev.next;
        } else {
          curr = curr.next;
        }
      }

      return dummy.next;
    };

    const reverse = (head, tail) => {
      last = head.next;
      curr = last.next;

      while (curr !== tail) {
        last.next = curr.next;
        curr.next = head.next;
        head.next = curr;
        curr = last.next;
      }

      return last;
    }
    ```

### Analysis

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$