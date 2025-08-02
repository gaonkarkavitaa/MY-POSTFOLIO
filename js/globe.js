console.log("Globe.js loaded ✅");

const container = document.getElementById("globe-container");

// Three.js Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 250;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Add Globe
const globe = new ThreeGlobe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

scene.add(globe);

// Lighting
scene.add(new THREE.AmbientLight(0xbbbbbb));
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(0, 0, 400);
scene.add(dirLight);

// Animate
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.0015;
  renderer.render(scene, camera);
}
animate();
