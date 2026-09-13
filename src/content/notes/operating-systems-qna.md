---
title: "Unit 2: Operating Systems & Process Scheduling"
description: "Process management, CPU scheduling algorithms, and deadlock prevention."
subject: "Operating Systems"
date: "2026-09-13"
tags: ["Unit-2", "OS", "Scheduling"]
---

# Operating Systems Q&A

## Q1: Compare FCFS, SJF, and Round Robin scheduling algorithms.

1. **FCFS (First Come First Serve):**
   - Non-preemptive.
   - Simple but susceptible to the **Convoy Effect**.
2. **SJF (Shortest Job First):**
   - Optimal average waiting time.
   - Requires knowing execution burst time in advance.
3. **Round Robin (RR):**
   - Preemptive with time quantum \(q\).
   - Designed for time-sharing systems.

---

## Q2: What are the 4 necessary conditions for Deadlock?

Deadlock occurs if and only if all four conditions hold simultaneously:

1. **Mutual Exclusion:** At least one resource must be held in a non-shareable mode.
2. **Hold and Wait:** A process is holding at least one resource and waiting to acquire additional resources.
3. **No Preemption:** Resources cannot be preempted.
4. **Circular Wait:** A closed chain of processes exists such that each process holds resources needed by the next.

> **Formula for Banker's Algorithm:**
> \[\text{Need}[i][j] = \text{Max}[i][j] - \text{Allocation}[i][j]\]
