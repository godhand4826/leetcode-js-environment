# LeetCode JavaScript Environment Setup
This repository contains the setup for a JavaScript environment for solving LeetCode problems.

## LeetCode JavaScript Environment Details
| Language | Version | Notes |
| - | - | - |
| JavaScript | node.js 20.10.0 | Your code is run with `--harmony` flag, enabling [new ES6 features](https://node.green/).<br><br>[lodash.js](https://lodash.com/) library is included by default.<br><br>For Priority Queue / Queue data structures, you may use 5.4.0 version of [datastructures-js/priority-queue](https://github.com/datastructures-js/priority-queue/blob/v5/README.md) and 4.2.3 version of [datastructures-js/queue](https://github.com/datastructures-js/queue/tree/v4.2.3).

> Reference: [What are the environments for the programming languages?](https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages)

## Prerequisites
- node.js@20.10.0
- npm (comes with Node.js)

## Installation
To set up the environment, follow these steps:
1. Clone the Repository 
```
git clone https://github.com/godhand4826/leetcode-js-environment.git
cd leetcode-js-environment
```
2. Install Dependencies
Use the following command to install the required libraries:
```
npm ci
```
## Usage
To run your code, use the following command:
```
npm run main
```
This command runs the `main.js` file with the specified environment setup. 
