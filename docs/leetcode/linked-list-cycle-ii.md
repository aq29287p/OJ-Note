---
title: 0142. 環形鏈表 II（Linked List Cycle II）
---

# 0142. 環形鏈表 II（Linked List Cycle II）

## 解答：快慢指針（Fast-slow Pointers）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      ListNode* detectCycle(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast && fast->next) {
          slow = slow->next;
          fast = fast->next->next;
          
          if (slow == fast) {
            slow = head;
            
            while (slow != fast) {
              slow = slow->next;
              fast = fast->next;
            }
            
            return slow;
          }
        }

        return nullptr;
      }
    };
    ```

=== "Java"

    ``` java
    public class Solution {
      public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
          
          if (slow == fast) {
            slow = head;
            
            while (slow != fast) {
              slow = slow.next;
              fast = fast.next;
            }
            
            return slow;
          }
        }

        return null;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
            slow = head
            fast = head

            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next
                
                if slow == fast:
                    slow = head
                    
                    while slow != fast:
                        slow = slow.next
                        fast = fast.next
                        
                    return slow

            return None
    ```

=== "JavaScript"

    ``` javascript
    const detectCycle = (head) => {
      let slow = head;
      let fast = head;
      
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
          slow = head;
          
          while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
          }
          
          return slow;
        }
      }
      
      return null;
    };
    ```

### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$