---
title: 0205. Isomorphic Strings
---

# 0205. Isomorphic Strings

## Solution: Hash Mapping

### Code

=== "C++"

    ``` cpp
    class Solution {
     public:
      bool isIsomorphic(string s, string t) {
        vector<int> charToIndex_s(128);
        vector<int> charToIndex_t(128);

        for (int i = 0; i < s.length(); ++i) {
          if (charToIndex_s[s[i]] != charToIndex_t[t[i]]) {
            return false;
          }
          charToIndex_s[s[i]] = i + 1;
          charToIndex_t[t[i]] = i + 1;
        }

        return true;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public boolean isIsomorphic(String s, String t) {
        Map<Character, Integer> charToIndex_s = new HashMap<>();
        Map<Character, Integer> charToIndex_t = new HashMap<>();

        for (Integer i = 0; i < s.length(); ++i) {
          if (charToIndex_s.put(s.charAt(i), i) != charToIndex_t.put(t.charAt(i), i)) {
            return false;
          }
        }

        return true;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def isIsomorphic(self, s: str, t: str) -> bool:
            return [*map(s.index, s)] == [*map(t.index, t)]
    ```

=== "JavaScript"

    ``` javascript
    const isIsomorphic = function(s, t) {
      const charToIndex_s = {};
      const charToIndex_t = {};

      for (let i = 0; i < s.length; ++i) {
        if (charToIndex_s[s[i]] != charToIndex_t[t[i]]) {
          return false;
        }

        charToIndex_s[s[i]] = i + 1;
        charToIndex_t[t[i]] = i + 1;
      }

      return true;
    };
    ```

### Analysis

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(1)$