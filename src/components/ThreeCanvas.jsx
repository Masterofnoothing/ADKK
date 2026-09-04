import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight || 500;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 6.5);
    camera.lookAt(0, 0.8, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = false;
    containerRef.current.appendChild(renderer.domElement);

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0, isDown: false };

    const updateMouseFromEvent = (clientX, clientY) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const currentWidth = rect.width;
      const currentHeight = rect.height;
      mouse.targetX = ((clientX - rect.left) / currentWidth) * 2 - 1;
      mouse.targetY = -(((clientY - rect.top) / currentHeight) * 2 - 1);
    };

    const onMouseMove = (e) => updateMouseFromEvent(e.clientX, e.clientY);
    const onDown = () => { mouse.isDown = true; };
    const onUp = () => { mouse.isDown = false; };
    const onTouchMove = (e) => {
      if (e.touches.length) {
        const t = e.touches[0];
        updateMouseFromEvent(t.clientX, t.clientY);
      }
    };

    containerRef.current.addEventListener('mousemove', onMouseMove);
    containerRef.current.addEventListener('mousedown', onDown);
    containerRef.current.addEventListener('mouseup', onUp);
    containerRef.current.addEventListener('touchmove', onTouchMove);
    containerRef.current.addEventListener('touchstart', onDown);
    containerRef.current.addEventListener('touchend', onUp);

    // ── Lighting — soft matte industrial ──────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfaf8f5, 2.8);
    keyLight.position.set(5, 7, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdde8ff, 1.4);
    fillLight.position.set(-4, 1.5, 2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xf0f0f8, 0.7);
    rimLight.position.set(0, -3, 3);
    scene.add(rimLight);

    // Subtle accent light on gripper
    const accentLight = new THREE.PointLight(0x818cf8, 1.8, 8);
    scene.add(accentLight);

    // ── Materials — matte industrial finish ───────────────────────────────────
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x7a7a80,
      metalness: 0.35,
      roughness: 0.7,
    });

    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a42,
      metalness: 0.3,
      roughness: 0.75,
    });

    const jointMat = new THREE.MeshStandardMaterial({
      color: 0x505060,
      metalness: 0.4,
      roughness: 0.65,
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      metalness: 0.5,
      roughness: 0.5,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.2,
    });

    // ── Robot Arm — compact industrial proportions ────────────────────────────
    const robotArm = new THREE.Group();
    robotArm.position.y = -0.8;
    scene.add(robotArm);

    // Compact base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.95, 0.35, 32), darkMat);
    robotArm.add(base);

    const baseRing = new THREE.Mesh(new THREE.CylinderGeometry(0.87, 0.87, 0.05, 32), accentMat);
    baseRing.position.y = 0.13;
    robotArm.add(baseRing);

    // Turret (rotating base)
    const turret = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.5, 24), bodyMat);
    turret.position.y = 0.32;
    robotArm.add(turret);

    // Shoulder joint
    const shoulderGroup = new THREE.Group();
    shoulderGroup.position.set(0, 0.58, 0);
    robotArm.add(shoulderGroup);

    shoulderGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.45, 24, 24), jointMat));

    // Shoulder hub
    const sHub = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.88, 16), darkMat);
    sHub.rotation.z = Math.PI / 2;
    shoulderGroup.add(sHub);

    // Upper arm group
    const upperArm = new THREE.Group();
    shoulderGroup.add(upperArm);

    // Two support bars
    const barL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.4, 16), bodyMat);
    barL.position.set(-0.22, 0.7, 0);
    upperArm.add(barL);

    const barR = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.4, 16), bodyMat);
    barR.position.set(0.22, 0.7, 0);
    upperArm.add(barR);

    // Upper arm sleeve
    const sleeve = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.75, 0.25), darkMat);
    sleeve.position.set(0, 0.7, 0);
    upperArm.add(sleeve);

    // Hydraulic cylinder
    const hydBarrel = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.0, 12), bodyMat);
    hydBarrel.position.set(0, 0.52, -0.2);
    hydBarrel.rotation.x = -0.15;
    upperArm.add(hydBarrel);

    const hydPiston = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.6, 12), accentMat);
    hydPiston.position.set(0, 0.95, -0.24);
    upperArm.add(hydPiston);

    // Elbow joint
    const elbowGroup = new THREE.Group();
    elbowGroup.position.set(0, 1.45, 0);
    upperArm.add(elbowGroup);

    elbowGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.38, 24, 24), jointMat));

    const elbowRing = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.035, 8, 32), accentMat);
    elbowRing.rotation.x = Math.PI / 2;
    elbowGroup.add(elbowRing);

    // Forearm
    const forearmGroup = new THREE.Group();
    elbowGroup.add(forearmGroup);

    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.11, 1.3, 16), bodyMat);
    forearm.position.set(0, 0.65, 0);
    forearmGroup.add(forearm);

    const actuator = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.65, 0.09), accentMat);
    actuator.position.set(0, 0.55, 0.16);
    forearmGroup.add(actuator);

    // Wrist
    const wristGroup = new THREE.Group();
    wristGroup.position.set(0, 1.3, 0);
    forearmGroup.add(wristGroup);

    wristGroup.add(new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), jointMat));

    const clawBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.16, 16), darkMat);
    clawBase.position.y = 0.12;
    clawBase.rotation.x = Math.PI / 2;
    wristGroup.add(clawBase);

    // Gripper fingers
    const fingerGeo = new THREE.BoxGeometry(0.055, 0.35, 0.14);
    const tipGeo = new THREE.BoxGeometry(0.055, 0.14, 0.09);

    const fingerLeftGroup = new THREE.Group();
    fingerLeftGroup.position.set(-0.12, 0.2, 0);
    wristGroup.add(fingerLeftGroup);
    fingerLeftGroup.add(new THREE.Mesh(fingerGeo, bodyMat)).position.y = 0.175;
    const tipL = new THREE.Mesh(tipGeo, accentMat);
    tipL.position.set(0.045, 0.315, 0);
    tipL.rotation.z = -0.44;
    fingerLeftGroup.add(tipL);

    const fingerRightGroup = new THREE.Group();
    fingerRightGroup.position.set(0.12, 0.2, 0);
    wristGroup.add(fingerRightGroup);
    fingerRightGroup.add(new THREE.Mesh(fingerGeo, bodyMat)).position.y = 0.175;
    const tipR = new THREE.Mesh(tipGeo, accentMat);
    tipR.position.set(-0.045, 0.315, 0);
    tipR.rotation.z = 0.44;
    fingerRightGroup.add(tipR);

    // Subtle grid plane
    const gridHelper = new THREE.GridHelper(8, 16, 0xc7d2fe, 0xe0e7ff);
    gridHelper.position.y = -0.8;
    gridHelper.material.opacity = 0.35;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse following with clamping
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const clampedX = Math.max(-0.9, Math.min(0.9, mouse.x));
      const clampedY = Math.max(-0.7, Math.min(0.7, mouse.y));

      turret.rotation.y = clampedX * 1.2;
      shoulderGroup.rotation.x = clampedY * 0.6 + 0.25;
      shoulderGroup.rotation.z = -clampedX * 0.25;
      elbowGroup.rotation.x = -clampedY * 0.75 - 0.35 + Math.sin(t * 0.8) * 0.02;
      wristGroup.rotation.x = -shoulderGroup.rotation.x - elbowGroup.rotation.x + 0.25;
      wristGroup.rotation.y = t * 0.25;

      const grip = mouse.isDown ? 0.3 : 0.05;
      fingerLeftGroup.rotation.z += (grip - fingerLeftGroup.rotation.z) * 0.1;
      fingerRightGroup.rotation.z += (-grip - fingerRightGroup.rotation.z) * 0.1;

      hydPiston.position.y = 0.75 + Math.sin(shoulderGroup.rotation.x) * 0.1;

      // Move accent light to gripper
      const wp = new THREE.Vector3();
      wristGroup.getWorldPosition(wp);
      accentLight.position.copy(wp);

      // Subtle pulsing on accent parts
      const pulse = 0.85 + Math.sin(t * 1.8) * 0.15;
      const r = 0.388 * pulse, g = 0.4 * pulse, b = 0.945 * pulse;
      [baseRing, elbowRing, actuator, tipL, tipR, hydPiston].forEach(m => {
        m.material.color.setRGB(r, g, b);
      });

      gridHelper.rotation.y = t * 0.03;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousemove', onMouseMove);
        containerRef.current.removeEventListener('mousedown', onDown);
        containerRef.current.removeEventListener('mouseup', onUp);
        containerRef.current.removeEventListener('touchmove', onTouchMove);
        containerRef.current.removeEventListener('touchstart', onDown);
        containerRef.current.removeEventListener('touchend', onUp);
      }
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      if (containerRef.current && renderer.domElement && containerRef.current.contains(renderer.domElement))
        containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[520px]">
      <div ref={containerRef} className="w-full h-full min-h-[420px] md:min-h-[520px] cursor-grab active:cursor-grabbing" />
      {/* Minimal HUD overlay */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-text-400 pointer-events-none select-none border-l-2 border-primary-400 pl-2.5 py-0.5">
        <p className="text-primary-600 font-semibold uppercase tracking-widest text-[8px] mb-0.5">6-DOF Industrial Arm</p>
        <p>Move mouse to control · Click to grip</p>
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[9px] text-text-400 pointer-events-none select-none text-right">
        <p>Inverse Kinematics: Active</p>
        <p>All Joints: Operational</p>
      </div>
    </div>
  );
}
