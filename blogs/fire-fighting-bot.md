---
title: Autonomous Fire Fighting Bot
tagline: An Arduino Uno-based mobile robot programmed to navigate, detect flame sources, and extinguish them.
category: Robotics
date: 2024
skills:
  - Arduino Uno
  - Flame Sensors
  - Relay Control
  - DC Gear Motors
  - H-Bridge Driver
thumbnail: ''
---

# Project Overview

This autonomous safety vehicle traverses a room, scans for infrared flame signatures, navigates toward the heat source, and activates a water pump.

![Fire fighting robot](images/fire-fighting-bot.jpg)

---

# Operation Workflow

The robot uses three IR flame sensors to decide whether to turn or drive forward. When the center sensor detects a sufficiently strong signal, the robot approaches the flame, stops, triggers a relay, and sprays water through a front-mounted nozzle.

```text
[ Start Search ] -> [ Flame Detected? ] -> [ Approach ] -> [ Extinguish ]
```

### Core Challenge & Solution

> [!IMPORTANT]
> **Challenge: Noise and Ambient Light False Alarms**
> Sunlight and incandescent lighting could trigger the sensors.

Sensor shading, a narrower viewing angle, and software thresholds reduced false alarms.
