# Two Sum

## Problem

## Solution

=== "C++"

    ``` cpp
    class Solution {
    public:
      vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> numToIndex;

        for (int i = 0; i < nums.size(); ++i) {
          if (numToIndex.count(target - nums[i]))
            return {numToIndex[target - nums[i]], i};
          numToIndex[nums[i]] = i;
        }

        throw;
      }
    };
    ```

=== "Java"

    ``` java
    class Solution {
      public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numToIndex = new HashMap<>();

        for (int i = 0; i < nums.length; ++i) {
          if (numToIndex.containsKey(target - nums[i]))
            return new int[] {numToIndex.get(target - nums[i]), i};
          numToIndex.put(nums[i], i);
        }

        throw new IllegalArgumentException();
      }
    }
    ```

=== "Python"

    ``` python
    class Solution:
      def twoSum(self, nums: List[int], target: int) -> List[int]:
        numToIndex = {}

        for i, num in enumerate(nums):
          if target - num in numToIndex:
            return numToIndex[target - num], i
          numToIndex[num] = i
    ```
