---
title: Blender Journey: From Spider Bot to Scene Builds
tagline: A learning journey that moves from a college mini project into chess pieces, environment work, and character studies.
category: 3D Design
date: 2026
skills:
  - Blender
  - Topology
  - Animation
  - Shading
  - Scene Composition
thumbnail: ''
---

# Project Overview

The first thing that pulled me into Blender was a 4-legged spider robot I made for my Computer Graphics mini project in college. At the time it was just a project requirement, but it turned into the starting point for a much longer learning path.

What kept me going was that every new model exposed a different part of the software. Some projects were about clean mechanical construction, some were about materials, some were about lighting, and some were about making an entire scene feel connected instead of just stacking objects in one place.

## Where It Started

The spider bot was the moment I realized Blender was not just about making shapes look correct. It was about thinking through how parts connect, where joints should pivot, and whether the model could actually move without falling apart visually.

Modeling the legs taught me more than I expected. The joints initially felt disconnected, like separate pieces placed next to each other. I had to go back and rebuild them with proper edge loops so each segment rotated from the correct spot instead of spinning around its own center.

Animation added another layer. Getting the legs to move in sync while the body followed a natural up-and-down motion was harder than I expected, and that is where I learned that timing matters as much as geometry.

<video controls preload="metadata" playsinline>
  <source src="videos/blender-journey-01-four-legged-spider-bot.mp4" type="video/mp4" />
</video>

Credit for that 4-legged bot reference goes to this video, which was the first place I learned the approach: [https://www.youtube.com/watch?v=EhSyVC7tI20](https://www.youtube.com/watch?v=EhSyVC7tI20).

## The Early Practice

After that first project, I kept learning Blender alongside my Robotics and Automation Engineering course for the next few months. I also kept doing smaller studies in between, including a coffee piece and a few other experiments, mostly to get more comfortable with surfaces, shading, and cleanup.

Those smaller builds mattered because they made the later projects easier. I started to notice when a model looked too rigid, when a material read as plastic instead of wood or metal, and when a scene needed more structure in the lighting.

## Chess Set

The chess set pushed me in a different way. Instead of one object, I had to design a full family of pieces that felt related but still distinct.

That meant thinking carefully about silhouette, proportion, and consistency. The pawn and rook were manageable, but the knight and bishop were where I really got stuck. The knight’s head and the bishop’s curve took a lot of revision before they felt right.

I also learned a lot from the technical side of the mesh. When the bishop detail started pushing the vertex count up, the scene began to lag. The fix was not to just keep adding geometry. I went back, cleaned up the topology, used proper loop cuts, and kept the detailed geometry only for the final render while using lighter stand-ins during animation.

Materials were another jump forward. That was the first time I spent real time tuning roughness and bump values until the wood stopped reading like plastic.

<video controls preload="metadata" playsinline>
  <source src="videos/blender-journey-02-chess-set.mp4" type="video/mp4" />
</video>

## Winter Town Scene

The winter town scene was the point where Blender stopped feeling like isolated modeling exercises and started feeling like scene building.

That shift changed the questions I was asking. It was no longer just about whether a single house looked good. It was about composition, scale, depth, and how pathways, snow banks, walls, and lighting all worked together to lead the eye through the frame.

The biggest problems were geometry and lighting. Early versions had flat facades, weak wall thickness, and lighting that made the whole thing feel like a default render. Using the Solidify modifier gave the structures proper depth, and Bevel helped the edges catch light more naturally.

The lighting took a lot of balancing. Warm light from inside the windows against cooler ambient light outside was what finally made the scene feel believable.

<video controls preload="metadata" playsinline>
  <source src="videos/blender-journey-03-winter-town-scene.mp4" type="video/mp4" />
</video>

## Kurto

Kurto was different again. This time I was not just modeling objects. I was trying to give a robot a bit of personality.

That changed the decisions I made. A screen face, the wheel placement, and the body proportions all mattered more than I expected. If those elements were off by even a little, the robot just felt like parts stuck together instead of a character.

The face was the hardest part to keep clean and smooth without pinching the corners. I leaned on loop cuts, subdivision, and bevels to keep the form soft while still preserving the mechanical feel.

<video controls preload="metadata" playsinline>
  <source src="videos/blender-journey-04-kurto-robot.mp4" type="video/mp4" />
</video>

## What Changed

Looking back, the biggest change is not just that the models got more detailed. It is that I started thinking in systems.

- The spider bot taught me mechanics and motion.
- The chess set taught me consistency and cleanup.
- The winter town scene taught me composition and lighting.
- Kurto taught me how small design choices can create personality.

That is the part of Blender I enjoy most now. Each project still feels like a new problem, but together they show the path from a college mini project to a much more confident workflow.
