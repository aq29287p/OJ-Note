---
title: 0206. Reverse Linked List
---

# 0206. Reverse Linked List

## 解答：遞迴（Recursion）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      ListNode* reverseList(ListNode* head) {
        if (!head || !head->next)
          return head;

        ListNode* newHead = reverseList(head->next);
        head->next->next = head;
        head->next = nullptr;

        return newHead;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null)
          return head;

        ListNode newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;

        return newHead;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
            if not head or not head.next:
                return head

            newHead = self.reverseList(head.next)
            head.next.next = head
            head.next = None
            
            return newHead
    ```

=== "JavaScript"

    ``` javascript
    const reverseList = (head) => {
      if (!head || !head.next) {
        return head;
      }

      const newHead = reverseList(head.next);
      head.next.next = head;
      head.next = null;

      return newHead;
    };
    ```

### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(n)$

## 解答：迭代（Iterative）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;

        while (head) {
          ListNode* next = head->next;
          head->next = prev;
          prev = head;
          head = next;
        }

        return prev;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public ListNode reverseList(ListNode head) {
        ListNode prev = null;

        while (head != null) {
          ListNode next = head.next;
          head.next = prev;
          prev = head;
          head = next;
        }

        return prev;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
            prev = None
            curr = head

            while curr:
                next = curr.next
                curr.next = prev
                prev = curr
                curr = next

            return prev
    ```

=== "JavaScript"

    ``` javascript
    const reverseList = (head) => {
      let prev = null;

      while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
      }

      return prev;
    };
    ```

### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$