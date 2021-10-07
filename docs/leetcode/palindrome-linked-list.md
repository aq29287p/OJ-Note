---
title: 0234. 回文鏈表（Palindrome Linked List）
---

# 0234. 回文鏈表（Palindrome Linked List）

## 解答：快慢指針（Fast-slow Pointers）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      bool isPalindrome(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast && fast->next) {
          slow = slow->next;
          fast = fast->next->next;
        }

        if (fast) {
          slow = slow->next;
        }
        slow = reverseList(slow);

        while (slow) {
          if (slow->val != head->val) {
            return false;
          }

          slow = slow->next;
          head = head->next;
        }

        return true;
      }

    private:
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
      public boolean isPalindrome(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
          slow = slow.next;
          fast = fast.next.next;
        }

        if (fast != null) {
          slow = slow.next;
        }
        slow = reverseList(slow);

        while (slow != null) {
          if (slow.val != head.val) {
            return false;
          }

          slow = slow.next;
          head = head.next;
        }

        return true;
      }

      private ListNode reverseList(ListNode head) {
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
        def isPalindrome(self, head: ListNode) -> bool:
            def reverseList(head: ListNode) -> ListNode:
                prev = None
                curr = head

                while curr:
                    next = curr.next
                    curr.next = prev
                    prev = curr
                    curr = next

                return prev

            slow = head
            fast = head

            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next

            if fast:
                slow = slow.next
            slow = reverseList(slow)

            while slow:
                if slow.val != head.val:
                    return False
                  
                slow = slow.next
                head = head.next

            return True
    ```

=== "JavaScript"

    ``` javascript
    const isPalindrome = (head) => {
      let slow = head;
      let fast = head;

      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }

      if (fast) {
        slow = slow.next;
      }
      slow = reverseList(slow);

      while (slow) {
        if (slow.val !== head.val) {
          return false;
        }

        slow = slow.next;
        head = head.next;
      }

      return true;
    };

    const reverseList = (head) => {
      let prev = null;

      while (head != null) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
      }

      return prev;
    }
    ```

### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$