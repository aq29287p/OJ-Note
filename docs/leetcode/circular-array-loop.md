---
title: 0457. 環形數組是否存在循環（Circular Array Loop）
---

# 0457. 環形數組是否存在循環（Circular Array Loop）

## 解答：快慢指針（Fast-slow Pointers）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      bool circularArrayLoop(vector<int>& nums) {
        const int n = nums.size();
        if (n < 2) {
          return false;
        }

        auto advance = [&](int i) {
          const int val = (i + nums[i]) % n;

          return i + nums[i] >= 0 ? val : n + val;
        };

        for (int i = 0; i < n; ++i) {
          if (nums[i] == 0) {
            continue;
          }

          int slow = i;
          int fast = advance(slow);
          while (nums[i] * nums[fast] > 0 && nums[i] * nums[advance(fast)] > 0) {
            if (slow == fast) {
              if (slow == advance(slow))
                break;
              return true;
            }
            
            slow = advance(slow);
            fast = advance(advance(fast));
          }

          slow = i;
          const int sign = nums[i];
          while (sign * nums[slow] > 0) {
            const int next = advance(slow);
            nums[slow] = 0;
            slow = next;
          }
        }

        return false;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public boolean circularArrayLoop(int[] nums) {
        if (nums.length < 2) {
          return false;
        }

        for (int i = 0; i < nums.length; ++i) {
          if (nums[i] == 0) {
            continue;
          }

          int slow = i;
          int fast = advance(nums, slow);
          while (nums[i] * nums[fast] > 0 && nums[i] * nums[advance(nums, fast)] > 0) {
            if (slow == fast) {
              if (slow == advance(nums, slow)) {
                break;
              }
              return true;
            }

            slow = advance(nums, slow);
            fast = advance(nums, advance(nums, fast));
          }

          slow = i;
          final int sign = nums[i];
          while (sign * nums[slow] > 0) {
            final int next = advance(nums, slow);
            nums[slow] = 0;
            slow = next;
          }
        }

        return false;
      }

      private int advance(int[] nums, int i) {
        final int n = nums.length;
        final int val = (i + nums[i]) % n;

        return i + nums[i] >= 0 ? val : n + val;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def circularArrayLoop(self, nums: List[int]) -> bool:
            def advance(i: int) -> int:
                return (i + nums[i]) % len(nums)

            if len(nums) < 2:
                return False

            for i, num in enumerate(nums):
                if num == 0:
                    continue

                slow = i
                fast = advance(slow)
                while num * nums[fast] > 0 and num * nums[advance(fast)] > 0:
                    if slow == fast:
                        if slow == advance(slow):
                            break
                        return True
                    slow = advance(slow)
                    fast = advance(advance(fast))

                slow = i
                sign = num
                while sign * nums[slow] > 0:
                    next = advance(slow)
                    nums[slow] = 0
                    slow = next

            return False
    ```

=== "JavaScript"

    ``` javascript
    const circularArrayLoop = (nums) => {
      if (nums.length < 2) {
        return false;
      }

      for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
          continue;
        }

        let slow = i;
        let fast = advance(nums, slow);
        while (nums[i] * nums[fast] > 0 && nums[i] * nums[advance(nums, fast)] > 0) {
          if (slow === fast) {
            if (slow === advance(nums, slow)) {
              break;
            }
            return true;
          }
          slow = advance(nums, slow);
          fast = advance(nums, advance(nums, fast));
        }

        slow = i;
        const sign = nums[i];
        while (sign * nums[slow] > 0) {
          const next = advance(nums, slow);
          nums[slow] = 0;
          slow = next;
        }
      }

      return false;
    };

    const advance = (nums, i) => {
      const n = nums.length;
      const val = (i + nums[i]) % n;

      return i + nums[i] >= 0 ? val : n + val;
    }
    ```

### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$