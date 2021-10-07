---
title: 0242. 有效的字母異位詞（Valid Anagram）
---

# 0242. 有效的字母異位詞（Valid Anagram）

## 解答：雜湊映射（Hash Mapping）

### 實作

=== "C++"

    ``` cpp
    class Solution {
     public:
      bool isAnagram(string s, string t) {
        // anagram must have the same length
        if (s.length() != t.length()) {
          return false;
        }

        // compare the number of each character in s and t
        vector<int> count(128);

        for (const char c : s) {
          ++count[c];
        }

        for (const char c : t) {
          if (--count[c] < 0)
            return false;
        }

        return true;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public boolean isAnagram(String s, String t) {
        // anagram must have the same length
        if (s.length() != t.length()) {
          return false;
        }

        // compare the number of each character in s and t
        int[] count = new int[128];

        for (final char c : s.toCharArray()) {
          ++count[c];
        }

        for (final char c : t.toCharArray()) {
          if (--count[c] < 0) {
            return false;
          }
        }

        return true;
      }
    }
    ```

=== "Python"

    ``` python
    from collections import Counter


    class Solution:
        def isAnagram(self, s: str, t: str) -> bool:
            # anagram must have the same length
            if len(s) != len(t):
                return False

            # compare the number of each character in s and t
            return Counter(s) == Counter(t)
    ```

=== "JavaScript"

    ``` javascript
    const isAnagram = function(s, t) {
      // anagram must have the same length 
      if (s.length !== t.length) {
        return false;
      }

      // compare the number of each character in s and t
      const count = {};

      for (let i = 0; i < s.length; ++i) {
        count[s[i]] = (count[s[i]] || 0) + 1;
      }

      for (let i = 0; i < t.length; ++i) {
        if (count[t[i]]) {
          count[t[i]] -= 1;
        } else {
          return false;
        }
      }

      return true;
    };
    ```

### 分析

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$