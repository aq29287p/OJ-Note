---
title: 0160. 相交鏈表（Intersection of Two Linked Lists）
---

# 0160. 相交鏈表（Intersection of Two Linked Lists）

## 解答：雙指針（Two Pointers）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
        ListNode* a = headA;
        ListNode* b = headB;

        while (a != b) {
          a = a ? a->next : headB;
          b = b ? b->next : headA;
        }

        return a;
      }
    };
    ```

=== "Java"

    ``` java
    public class Solution {
      public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a = headA;
        ListNode b = headB;

        while (a != b) {
          a = a == null ? headB : a.next;
          b = b == null ? headA : b.next;
        }

        return a;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
            # both linked-list are empty
            if not headA or not headB:
                return None

            a = headA
            b = headB

            while a != b:
                a = a.next if a else headB
                b = b.next if b else headA

            return a
    ```

=== "JavaScript"

    ``` javascript
    const getIntersectionNode = function(headA, headB) {
      // both linked-list are empty
      if (!headA || !headB) {
        return null;
      }

      let a = headA;
      let b = headB;

      while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
      }

      return a;
    };
    ```

### 分析

- 時間複雜度：$\mathcal{O}(a + b)$
- 空間複雜度：$\mathcal{O}(1)$