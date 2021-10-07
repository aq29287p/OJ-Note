---
title: 快慢指針（fast-slow pointers）
---

# 快慢指針（Fast-slow Pointers）

## 概念說明

**快慢指針（Fast-slow Pointers）** 又稱為 Floyd 判圈演算法（Floyd Cycle Detection Algorithm）或龜兔賽跑算法（Tortoise and Hare Algorithm），使用兩個指針以不同的速度在陣列、序列或鏈結串列中移動，兩個指針在一個循環鏈結串列中必然會相遇。

## 特徵規律

1. 鏈結串列、環形鏈結串列（cyclic linked-list）、環形陣列（cyclic array）
2. 判斷線性結構特徵：獲取鏈結串列長度、判斷是否有環、判斷是否交錯

## 命名規範

- `slow`, `fast`
- `walker`, `runner`

## 題目整理

- `0141` Linked List Cycle
- `0142` Linked List Cycle II
- `0143` Recorder List
- `0202` Happy Number
- `0234` Palindrome Linked List
- `0457` Circular Array Loop
- `0876` Middle of the Linked List

## 參考資料

- [Cycle detection | WikiPedia](https://en.wikipedia.org/wiki/Cycle_detection)