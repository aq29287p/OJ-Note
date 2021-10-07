---
title: 0876. 鏈表的中間結點（Middle of the Linked List）
---

# 0876. 鏈表的中間結點（Middle of the Linked List）

## 解答：快慢指針（Fast-slow Pointers）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      ListNode* middleNode(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast && fast->next) {
          slow = slow->next;
          fast = fast->next->next;
        }

        return slow;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public ListNode middleNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
        }

        return slow;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
            slow = head
            fast = head

            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next

            return slow
    ```

=== "JavaScript"

    ``` javascript
    const middleNode = (head) => {
      let slow = head;
      let fast = head;
      
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      
      return slow;
    };
    ```

### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$