---
title: 0013. Roman to Integer
---

# 0013. Roman to Integer

## Solutions

### Code

=== "C++"

    ``` cpp
    class Solution {
    public:
      int romanToInt(string s) {
        vector<int> roman(128);

        roman['I'] = 1;
        roman['V'] = 5;
        roman['X'] = 10;
        roman['L'] = 50;
        roman['C'] = 100;
        roman['D'] = 500;
        roman['M'] = 1000;

        int ans = 0;
        for (int i = 0; i + 1 < s.length(); ++i) {
          if (roman[s[i]] < roman[s[i + 1]]) {
            ans -= roman[s[i]];
          } else {
            ans += roman[s[i]];
          }
        }

        return ans + roman[s.back()];
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public int romanToInt(String s) {
        int ans = 0;
        int[] roman = new int[128];

        roman['I'] = 1;
        roman['V'] = 5;
        roman['X'] = 10;
        roman['L'] = 50;
        roman['C'] = 100;
        roman['D'] = 500;
        roman['M'] = 1000;

        for (int i = 0; i + 1 < s.length(); ++i) {
          if (roman[s.charAt(i)] < roman[s.charAt(i + 1)]) {
            ans -= roman[s.charAt(i)];
          } else {
            ans += roman[s.charAt(i)];
          }
        }

        return ans + roman[s.charAt(s.length() - 1)];
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def romanToInt(self, s: str) -> int:
            roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

            ans = 0
            for a, b in zip(s, s[1:]):
                if roman[a] < roman[b]:
                  ans -= roman[a]
                else:
                  ans += roman[a]

            return ans + roman[s[-1]]
    ```

=== "JavaScript"

    ``` javascript
    const romanToInt = (s) => {
      const roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
      
      let ans = 0
      for (let i = 0; i < s.length; ++i) {
        if (roman[s[i]] < roman[s[i + 1]]) {
          ans -= roman[s[i]]; 
        } else {
          ans += roman[s[i]]; 
        }
      }
      
      return ans;
    };
    ```

### Analysis

- Time Complexity: $\mathcal{O}(n)$
- Space Complexity: $\mathcal{O}(1)$