---
title: "Unit 1: Fundamentals Q&A Notes"
description: "Core questions and answers covering Semester 2 foundational concepts."
subject: "Computer Architecture"
date: "2026-09-13"
tags: ["Unit-1", "Architecture", "Exams"]
---

# Unit 1 Questions & Answers

## Q1: Explain the von Neumann Architecture and its key components.

**Answer:**
The von Neumann architecture is a theoretical design architecture for an electronic digital computer with components consisting of:
1. **Processing Unit:** Contains an Arithmetic Logic Unit (ALU) and processor registers.
2. **Control Unit:** Contains an instruction register and program counter.
3. **Memory Unit:** Stores data and instructions.
4. **Input/Output Mechanism:** Interfaces with external devices.

> **Key Takeaway:** Both instructions and data share the same bus system and memory space.

---

## Q2: What is the difference between RISC and CISC architectures?

| Feature | RISC (Reduced Instruction Set) | CISC (Complex Instruction Set) |
| :--- | :--- | :--- |
| **Instruction Size** | Fixed length | Variable length |
| **Clock Cycles** | 1 cycle per instruction | Multi-cycle per instruction |
| **Pipelining** | Easy to implement | Complex to implement |
| **Execution Speed** | Fast execution | Slower per instruction execution |

---

## Q3: Define Pipelining and explain Pipeline Hazards.

Pipelining is a technique where multiple instructions are overlapped in execution. 

### Common Types of Hazards:
- **Structural Hazards:** Hardware resource conflicts (e.g., memory port contention).
- **Data Hazards:** Dependence on the result of a previous instruction (`RAW`, `WAR`, `WAW`).
- **Control Hazards:** Branch instructions changing execution flow.

```c
// Example showing Data Dependency:
int a = 5 + 10; // Inst 1: computes 'a'
int b = a * 2;  // Inst 2: requires 'a' (RAW Dependency)
```
