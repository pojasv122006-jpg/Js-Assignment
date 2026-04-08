# Js-Assignment
Assignment 4 - Fundamentals of Web Design (CSE 106)
Name: Ojasv Pandey
Email: pojasv122006@gmail.com
Contact: +91 6307944840

---

Q1 - Digit Gatekeeper:
I loop from L to R, first skip numbers not divisible by K. Then I extract each digit one by one using % and check if any digit is 0. Then I add all digits and check if the sum is prime using a inner loop. Count how many numbers satisfy all conditions.
Time complexity: roughly O(n * d * sqrt(s)) where n is range, d is number of digits, s is digit sum. Basically O(n) for practical purposes.

Q2 - Roll-Seed Lock:
I just loop 3 times and apply the formula depending on odd or even. After that check if result is between 100-999 (3 digit). Then extract middle digit using % 10 twice and compare with seed.
Time complexity: O(1), fixed 3 iterations.

Q3 - Mirror Corridor:
Loop x from 0 to 100000. For each x, check if N+x is divisible by K, then convert to string and reverse it manually using a loop, compare both strings. First match is the answer.
Time complexity: O(100000 * length of number) = basically O(n).

Q4 - Fare Calculator:
Just apply each formula one by one in order. The rounding part I did using modulus - find remainder when divided by 5, then decide whether to round up or down based on if remainder is less than 2.5.
Time complexity: O(1).

Q5 - Skipping Numbers:
I keep incrementing m and adding to sum only if m is not divisible by (seed+2). Stop when sum >= N.
Time complexity: O(m) where m is the answer, depends on N and seed.

Q6 - Contest Score Judge:
Calculate score with formula. If negative make 0. Then check total questions, subtract 10 if more than 50. Finally check if pass or fail.
Time complexity: O(1).

---
All programs use prompt() for input and alert() for output as required.
No arrays or objects used anywhere.
