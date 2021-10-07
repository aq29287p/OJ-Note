---
title: 0143. 重排鏈表（Reorder List）
---

# 0143. 重排鏈表（Reorder List）

## 解答：快慢指針（Fast-slow Pointers）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      void reorderList(ListNode* head) {
        if (!head || !head->next)
          return;

        ListNode* mid = findMid(head);
        ListNode* reversed = reverse(mid);
        merge(head, reversed);
      }

    private:
      ListNode* findMid(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast && fast->next) {
          prev = slow;
          slow = slow->next;
          fast = fast->next->next;
        }
        prev->next = nullptr;

        return slow;
      }

      ListNode* reverse(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;

        while (curr) {
          ListNode* next = curr->next;
          curr->next = prev;
          prev = curr;
          curr = next;
        }

        return prev;
      }

      void merge(ListNode* l1, ListNode* l2) {
        while (l2) {
          ListNode* next = l1->next;
          l1->next = l2;
          l1 = l2;
          l2 = next;
        }
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public void reorderList(ListNode head) {
        if (head == null || head.next == null)
          return;

        ListNode mid = findMid(head);
        ListNode reversed = reverse(mid);
        merge(head, reversed);
      }

      private ListNode findMid(ListNode head) {
        ListNode prev = null;
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
          prev = slow;
          slow = slow.next;
          fast = fast.next.next;
        }
        prev.next = null;

        return slow;
      }

      private ListNode reverse(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
          ListNode next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
        }

        return prev;
      }

      private void merge(ListNode l1, ListNode l2) {
        while (l2 != null) {
          ListNode next = l1.next;
          l1.next = l2;
          l1 = l2;
          l2 = next;
        }
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def reorderList(self, head: Optional[ListNode]) -> None:
            def findMid(head: ListNode):
                prev = None
                slow = head
                fast = head

                while fast and fast.next:
                    prev = slow
                    slow = slow.next
                    fast = fast.next.next

                prev.next = None

                return slow

            def reverse(head: ListNode) -> ListNode:
                prev = None
                curr = head

                while curr:
                    next = curr.next
                    curr.next = prev
                    prev = curr
                    curr = next

                return prev

            def merge(l1: ListNode, l2: ListNode) -> None:
                while l2:
                    next = l1.next
                    l1.next = l2
                    l1 = l2
                    l2 = next

            if not head or not head.next:
                return

            mid = findMid(head)
            reversed = reverse(mid)
            merge(head, reversed)
    ```

=== "JavaScript"

    ``` javascript
    const reorderList = (head) => {
      if (!head || !head.next) {
        return;
      }

      const mid = findMid(head);
      const reversed = reverse(mid);
      merge(head, reversed);
    };

    const findMid = (head) => {
      let prev = null;
      let slow = head;
      let fast = slow;

      while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
      }
      prev.next = null;
      return slow;
    }

    const reverse = (head) => {
      let prev = null;
      let curr = head;

      while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }

      return prev;
    }

    const merge = (list1, list2) => {
      while (list2) {
        const next = list1.next;
        list1.next = list2;
        list1 = list2;
        list2 = next;
      }
    }
    ```

### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$