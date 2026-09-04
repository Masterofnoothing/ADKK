---
title: Quadcopter Build - KK2.15 Flight Controller
tagline: A custom quadcopter assembled from scratch, calibrated for stable manual flight control.
category: Aerospace
date: 2025
skills:
  - KK2.15 Flight Controller
  - BLDC Motors
  - ESC Calibration
  - Radio Configuration
thumbnail: ''
---

# Project Overview

This build focused on understanding flight dynamics, control loops, throttle curves, and receiver-transmitter pairing at a hardware level.

### Tech Stack & Components

- **Flight Controller:** KK2.15 Multi-Rotor LCD board
- **Motors:** 4x 1000KV brushless DC motors
- **ESCs:** 30A Electronic Speed Controllers
- **Frame:** F450 quadcopter frame
- **Radio System:** FlySky FS-i6 and FS-iA6B
- **Battery:** 3S 2200mAh LiPo

![Quadcopter electronics](images/kk2-drone.jpg)

---

# Assembly & Calibration

The ESC power leads were soldered to the power distribution board, adjacent motors were configured to rotate in opposite directions, and the KK2.15 MPU6050 was calibrated on a level surface.

# Flight Dynamics & PID Tuning

Manual tuning was used to eliminate oscillations. Proportional gain controlled disturbance response, integral gain compensated for drift, and derivative damping reduced overshoot.
