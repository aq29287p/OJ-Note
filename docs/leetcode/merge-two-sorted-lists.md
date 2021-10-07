---
title: 0021. 合併兩個有序鏈表（Merge Two Sorted Lists）
---

# 0021. 合併兩個有序鏈表（Merge Two Sorted Lists）

## 解答：遞迴（recursion）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        if (!list1 || !list2) {
          return list1 ? list1 : list2;
        }

        if (list1->val > list2->val) {
          swap(list1, list2);
        }

        list1->next = mergeTwoLists(list1->next, list2);
        return list1;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        if (list1 == null || list2 == null)
          return list1 == null ? list2 : list1;

        if (list1.val > list2.val) {
          ListNode temp = list1;
          list1 = list2;
          list2 = temp;
        }

        list1.next = mergeTwoLists(list1.next, list2);
        return l1;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
            if not list1 or not list2:
                return list1 if list1 else list2

            if list1.val > list2.val:
                list1, list2 = list2, list1
            
            list1.next = self.mergeTwoLists(list1.next, list2)

            return list1
    ```

=== "JavaScript"

    ``` javascript
    const mergeTwoLists = function(list1, list2) {
      if (!list1 || !list2) {
        return list1 ? list1 : list2;
      }

      if (list1.val > list2.val) {
        [list1, list2] = [list2, list1];
      }

      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    };
    ```

### 分析

- **時間複雜度**：$\mathcal{O}(n + m)$
- **空間複雜度**：$\mathcal{O}(n + m)$

## 解答：迭代（iteration）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* dummy = new ListNode(NULL);
        ListNode* tail = dummy;

        // both linked-list are not empty, compare and append the smaller value
        while (list1 && list2) {
          if (list1->val < list2->val) {
            tail->next = list1;
            list1 = list1->next;
          } else {
            tail->next = list2;
            list2 = list2->next;
          }
          tail = tail->next;
        }

        // append rest link-list
        tail->next = list1 == nullptr ? list2 : list1;

        return dummy->next;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(-1);
        ListNode tail = dummy;

        // both linked-list are not empty, compare and append the smaller value
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }

        // append rest link-list
        tail.next = list1 == null ? list2 : list1;

        return dummy.next;
      }
    };
    ```

=== "Python"

    ``` python
    class Solution:
        def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
            dummy = ListNode(-1)
            tail = dummy

            # both linked-list are not empty, compare and append the smaller value
            while list1 and list2:
                if list1.val <= list2.val:
                    tail.next = list1
                    list1 = list1.next
                else:
                    tail.next = list2
                    list2 = list2.next
                tail = tail.next

            # append rest link-list
            tail.next = list1 if list1 else list2

            return dummy.next
    ```

=== "JavaScript"

    ``` javascript
    const mergeTwoLists = function(list1, list2) {
      const dummy = new ListNode(-1);
      let tail = dummy;

      // both linked-list are not empty, compare and append the smaller value
      while(list1 && list2) {
        if (list1.val <= list2.val) {
          tail.next = list1;
          list1 = list1.next;
        } else {
          tail.next = list2;
          list2 = list2.next;
        }
        tail = tail.next;
      }

      // append rest link-list
      tail.next = list1 ? list1 : list2;

      return dummy.next;
    };
    ```

### 分析

- **時間複雜度**：$\mathcal{O}(n + m)$
- **空間複雜度**：$\mathcal{O}(1)$