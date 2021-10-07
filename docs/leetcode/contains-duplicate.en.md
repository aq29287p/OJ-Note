---
title: 0217. Contains Duplicate
---

# 0217. Contains Duplicate

## Solution: Presorting

### Code

=== "C++"

    ``` cpp
    class Solution {
     public:
      bool containsDuplicate(vector<int>& nums) {
        // presorting
        sort(nums.begin(), nums.end());

        // check if there are duplicates by comparing adjacent elements
        for (int i = 0; i < nums.size() - 1; i++) {
          if (nums[i] == nums[i + 1]) {
            return true;
          }
        }

        return false;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public boolean containsDuplicate(int[] nums) {
        // presorting
        Arrays.sort(nums);

        // check if there are duplicates by comparing adjacent elements
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }

        return false;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def containsDuplicate(self, nums: List[int]) -> bool:
            # presorting
            nums.sort()

            # check if there are duplicates by comparing adjacent elements
            for i in range(len(nums) - 1):
                if nums[i] == nums[i + 1]:
                    return True

            return False
    ```

=== "JavaScript"

    ``` javascript
    const containsDuplicate = function(nums) {
      // presorting
      nums.sort((a, b) => a - b);

      // check if there are duplicates by comparing adjacent elements
      for (let i = 0; i < nums.length - 1; ++i) {
        if (nums[i] === nums[i + 1]) {
          return true;
        }
      }

      return false;
    };
    ```

### Analysis

- 時間複雜度：$\mathcal{O}(n \log{} n)$
- 空間複雜度：$\mathcal{O}(\log{} n)$

## Solution: Hash Mapping

### Code

=== "C++"

    ``` cpp
    class Solution {
     public:
      bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> seen;

        for (const int num : nums) {
          if (!seen.insert(num).second) {
            return true;
          }
        }

        return false;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();

        for (final int num : nums) {
          if (!seen.add(num)) {
            return true;
          }
        }

        return false;
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
        def containsDuplicate(self, nums: List[int]) -> bool:
            return len(nums) != len(set(nums))
    ```

=== "JavaScript"

    ``` javascript
    const containsDuplicate = function(nums) {
      const seen = new Set();

      for (const num of nums) {
        if (seen.has(num)) {
          return true;
        }
        seen.add(num);
      }

      return false;
    };
    ```

### Analysis

- 時間複雜度：$\mathcal{O}(n)$
- 空間複雜度：$\mathcal{O}(n)$