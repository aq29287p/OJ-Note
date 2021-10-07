---
title: 0202. 快樂數（Happy Number）
tags:
  - 快慢指針
---

# 0202. 快樂數（Happy Number）

## 解答：快慢指針（Fast-slow Pointers）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      bool isHappy(int num) {
        int slow = sumSquare(num);
        int fast = sumSquare(sumSquare(num));

        while (slow != fast) {
          slow = sumSquare(slow);
          fast = sumSquare(sumSquare(fast));
        }

        return slow == 1;
      }

    private:
      int sumSquare(int num) {
        int sum = 0;

        while (num) {
          sum += pow(num % 10, 2);
          num /= 10;
        }

        return sum;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public boolean isHappy(int num) {
        int slow = sumSquare(num);
        int fast = sumSquare(sumSquare(num));

        while (slow != fast) {
          slow = sumSquare(slow);
          fast = sumSquare(sumSquare(fast));
        }

        return slow == 1;
      }

      private int sumSquare(int n) {
        int sum = 0;

        while (n > 0) {
          sum += Math.pow(n % 10, 2);
          n /= 10;
        }

        return sum;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def isHappy(self, num: int) -> bool:
            def calculate_square_sum(num):
                res = 0

                while num:
                    digit = num % 10
                    res = res + digit * digit
                    num = num // 10

                return res

            slow = calculate_square_sum(num)
            fast = calculate_square_sum(calculate_square_sum(num))

            while slow != fast:
                slow = calculate_square_sum(slow)
                fast = calculate_square_sum(calculate_square_sum(fast))

            return slow == 1
    ```

=== "JavaScript"

    ``` javascript
    const isHappy = (num) => {
      let slow = sumSquare(num);
      let fast = sumSquare(sumSquare(num));

      while (slow !== fast) {
        slow = sumSquare(slow);
        fast = sumSquare(sumSquare(fast));
      }

      return slow === 1;
    };

    const sumSquare = (num) => {
      let sum = 0;

      while (num) {
        sum = sum + Math.pow(num % 10, 2);
        num = Math.floor(num / 10);
      }

      return sum;
    };
    ```

### 分析

- 時間複雜度：$\mathcal{O}(\log{n})$
- 空間複雜度：$\mathcal{O}(1)$