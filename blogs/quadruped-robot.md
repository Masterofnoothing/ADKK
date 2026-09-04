---
title: Quadruped Robot Prototype
tagline: An 8-DOF quadruped robot utilizing ESP32-S2 and coordinated gait kinematics.
category: Robotics
date: 2025
skills:
  - ESP32-S2
  - Arduino IDE
  - MG90 Servos
  - Kinematics
  - 3D Printing
thumbnail: ''
---

# Project Overview

This project details the development of an **8-Degrees-of-Freedom (8-DOF) Quadruped Robot Prototype**. The goal was to build a mobile robot capable of quadrupedal walking gaits using lightweight and budget-friendly hardware. The robot uses the compact **Lolin S2 Mini (ESP32-S2)** as its main brain and operates eight MG90 micro servo motors.

### Tech Stack & Components

- **Microcontroller:** Lolin S2 Mini (ESP32-S2)
- **Actuators:** 8x TowerPro MG90S Metal Gear Servos
- **Power Source:** 2S Li-ion battery with a 5V buck regulator
- **Programming Language:** C++ (Arduino IDE)
- **Mechanics:** Modified open-source chassis, 3D printed in PLA

---

# Design & Assembly

Each leg consists of two segments driven by two servos. Inverse kinematics maps the foot target coordinates to servo angles, allowing the robot to adjust step height and stride length dynamically.

![Quadruped robot build](images/quadruped-robot.jpg)

### Core Challenge & Solution

> [!WARNING]
> **Challenge: ESP32-S2 Servo Jitter & Power Spikes**
> When all eight servos moved simultaneously, current draw caused brownout resets.

The solution was to add decoupling capacitors across the servo rail, use a separate regulated supply for the servos, and sequence movements so the controller remained stable.
