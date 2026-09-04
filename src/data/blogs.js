const blogLoaders = import.meta.glob('../../blogs/*.md', {
  query: '?raw',
  import: 'default',
});

const projects = [
  {
    id: 'self-balancing-robot-3d',
    title: 'Blender Design: Self-Balancing 2-Arm Robot',
    tagline: 'A high-fidelity 3D model designed in Blender for a freelance client, utilizing hard-surface modeling.',
    category: '3D Design',
    date: '2024',
    skills: ['Blender', 'Hard-Surface Modeling', 'PBR Texturing', 'Shading', 'Product Rendering'],
    thumbnail: '',
  },
  {
    id: 'quadruped-robot',
    title: 'Quadruped Robot Prototype',
    tagline: 'An 8-DOF quadruped robot utilizing ESP32-S2 and coordinated gait kinematics.',
    category: 'Robotics',
    date: '2025',
    skills: ['ESP32-S2', 'Arduino IDE', 'MG90 Servos', 'Kinematics', '3D Printing'],
    thumbnail: '',
  },
  {
    id: 'kk2-drone',
    title: 'Quadcopter Build - KK2.15 Flight Controller',
    tagline: 'A custom quadcopter assembled from scratch, calibrated for stable manual flight control.',
    category: 'Aerospace',
    date: '2025',
    skills: ['KK2.15 Flight Controller', 'BLDC Motors', 'ESC Calibration', 'Radio Configuration'],
    thumbnail: '',
  },
  {
    id: 'fire-fighting-bot',
    title: 'Autonomous Fire Fighting Bot',
    tagline: 'An Arduino Uno-based mobile robot programmed to navigate, detect flame sources, and extinguish them.',
    category: 'Robotics',
    date: '2024',
    skills: ['Arduino Uno', 'Flame Sensors', 'Relay Control', 'DC Gear Motors', 'H-Bridge Driver'],
    thumbnail: '',
  },
  {
    id: 'blender-journey',
    title: 'Blender Journey: From Spider Bot to Scene Builds',
    tagline: 'A learning journey that moves from a college mini project into chess pieces, environment work, and character studies.',
    category: '3D Design',
    date: '2026',
    skills: ['Blender', 'Topology', 'Animation', 'Shading', 'Scene Composition'],
    thumbnail: '',
  },
  {
    id: 'cgr-4legged-robot',
    title: 'Blender Model: 4-Legged Explorer Robot',
    tagline: 'A computer graphics modeling project representing a quad-legged exploratory vehicle.',
    category: '3D Design',
    date: '2024',
    skills: ['Blender', 'Mesh Topology', 'Lighting Setup', 'Robotics Rendering', 'Academic Project'],
    thumbnail: '',
  },
].sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));

export async function loadBlogContent(projectId) {
  const path = `../../blogs/${projectId}.md`;
  const load = blogLoaders[path];
  if (!load) return '';

  const raw = await load();
  return raw.replace(/^---\s*\n[\s\S]*?\n---\s*\n?/, '').trim();
}

export default projects;
