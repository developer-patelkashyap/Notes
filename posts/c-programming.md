---
title: C Programming
category: Computer Science
tags: [Programming, C Programming]
---

## Introduction

* C is a high-level programming language (HLL)
* **Compilation Process:** C Source Code $\rightarrow$ Compiler $\rightarrow$ Machine Code
  * **Compiler:** Translates C source code into machine-understandable form
* **Levels of Programming Languages**
    | Level          | Representation                | Example             | Main Characteristic                |
    | -------------- | ----------------------------- | ------------------- | ---------------------------------- |
    | Machine Level  | Binary instructions           | `010111...`         | Directly understandable by machine |
    | Assembly Level | Mnemonic instructions         | `ADD`, `MOV`, `MUL` | Machine dependent                  |
    | High Level     | Structured programming syntax | C, C++, Java        | Easier for programmers             |
  * High level languages are machine independent.
* **Characteristics of C**
    | Characteristic                 | Technical Meaning                                                  |
    | ------------------------------ | ------------------------------------------------------------------ |
    | High-level language            | Provides abstractions above machine instructions                   |
    | Procedure-oriented             | Programs can be organized as procedures/functions                  |
    | Structured programming         | Supports structured control constructs and program organization    |
    | Modular                        | Programs can be divided into functions/modules                     |
    | Statically typed               | Variable types are determined from declarations                    |
    | Statically scoped              | Identifier visibility follows the lexical structure of the program |
    | Case sensitive                 | `value`, `Value`, and `VALUE` are different identifiers            |
    | Pointer support                | Programs can explicitly work with memory addresses                 |
    | Dynamic memory support         | Memory can be allocated during program execution                   |
    | Recursion                      | A function can invoke itself                                       |
    | Portable                       | C programs can be moved between systems with suitable compilation  |
* **Data and Address**

    `int x = 10;`
    | Concept | Meaning                                  |
    | ------- | ---------------------------------------- |
    | `10`    | Data/value                               |
    | `x`     | Name associated with the data            |
    | Address | Memory location where the data is stored |
    
    ![](/images/c-programming/address.png)

    Ref: https://www.log2base2.com/C/pointer/address-of-a-variable.html

## Basics of C

* **Tokens:** A token is presented as a meaningful sequence of characters and is the basic lexical unit recognized in a C program.

    `int temp = 23;`

    | Token  | Category   |
    | ------ | ---------- |
    | `int`  | Keyword    |
    | `temp` | Identifier |
    | `=`    | Operator   |
    | `23`   | Constant   |
    | `;`    | Punctuator |
* **Keyword:** A keyword is a reserved word that has a predefined meaning in C.

    | Category                     | Keywords                                  |
    | ---------------------------- | ----------------------------------------- |
    | Basic/data-related           | `int`, `float`, `char`, `double`, `void`  |
    | Type modifiers               | `short`, `long`, `signed`, `unsigned`     |
    | Storage-related              | `auto`, `static`, `register`, `extern`    |
    | Qualifiers                   | `const`, `volatile`                       |
    | User-defined type constructs | `struct`, `union`, `enum`, `typedef`      |
    | Selection                    | `if`, `else`, `switch`, `case`, `default` |
    | Iteration                    | `while`, `do`, `for`                      |
    | Jump/control                 | `break`, `continue`, `return`, `goto`     |
    | Special                      | `sizeof`                                  |
    * Total 32 keywords
    * All keywords are written in lowercase

* **Indentifier:** An identifier is a user-defined name used for program entities such as variables and functions.

  * Construction rules:
    | Rule                                                | Valid Example | Invalid Example |
    | --------------------------------------------------- | ------------- | --------------- |
    | Letters are allowed                                 | `temp`        | -               |
    | Digits are allowed after the first character        | `temp123`     | `123temp`       |
    | Underscore is allowed                               | `_temp`       | -               |
    | Cannot start with a digit                           | `x123`        | `123x`          |
    | Keywords cannot be identifiers                      | `Float`       | `float`         |
    | Spaces are not allowed                              | `x_123`       | `x 123`         |
    | Special characters such as `@`, `$` are not allowed | `x123`        | `x@123`         |
  * Every identifier is a token, but every token is not an identifier.
  * **Token Boundaries:** Whitespace can separate tokens.
    * `void main`: two tokens `void` and `main`
    * `voidmain`: single token `voidmain`

* **Constants and Literals:** A constant/literal is a value written directly in the source program.

    | Constant Type      | Example            |
    | ------------------ | ------------------ |
    | Character constant | `'A'`              |
    | Integer constant   | `2379`             |
    | Real constant      | `20.34`            |
    | String constant    | `"gate exam 2026"` |
  * **Character Constants:** A character constant represents a single character enclosed within single quotes.
    * Valid examples: `'A'`, `'+'`, `'3'`, `'\n'`
    * Invalid examples: `'ABCD'`, `'123'`
  * **Integers Constants:** 
    | Number System | Digits              | Example  | `printf` Representation Shown |
    | ------------- | ------------------- | -------- | ----------------------------- |
    | Decimal       | `0–9`               | `2379`   | `%d`                          |
    | Octal         | `0–7`               | `0562`   | `%o`                          |
    | Hexadecimal   | `0–9`, `a–f`, `A–F` | `0x250f` | `%x`                          |
    * Decimal Integer: Uses decimal digits 0-9
    * Octal Integer: begins with 0.
      * Digits include: 0-7 
      * Valid: `0562`
      * Invalid: `058`
    * Hexadecimal Integer: Uses prefix `0x` or `0X`
      * Digits include: 0-9, a-f, A-F
      * `0x250f` or `0X25AF`, both are valid
  * **Real Constants**
    | Literal  | Representation Presented |
    | -------- | ------------------------ |
    | `20.34`  | `double`                 |
    | `20.34f` | `float`                  |
    * The `f` suffix explicitly indicates the float form.
  * **String Constants:** A string constant is a sequence of characters enclosed within double quotation marks.
    ```
    ""
    "+"
    "++"
    "C Programming"
    ```
    * may contain: spaces, digits, operator symbols, special characters
