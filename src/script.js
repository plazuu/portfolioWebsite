import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import GUI from 'lil-gui';

//debug
const gui = new GUI();

/////setup
//canvas
const canvas = document.querySelector('canvas.webgl');

//scene
const scene = new THREE.Scene();


//model texter/sound loaders
// const GLTFLoader = new GLTFLoader();


//////objecst

//test cube 

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshBasicMaterial({ color: 'white'})
);
plane.rotation.x = - Math.PI * 0.5;
plane.geometry.center();
scene.add(plane);

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'white'})
);
//use mesh standered for actuall blender files 
cube.position.y += 1 * 0.5;
scene.add(cube);



//////utilty


//window info
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    aspectRatio: window.innerWidth/window.innerHeight
}

//render
const renderer = new THREE.WebGLRenderer({ canvas: canvas }); 
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//if you resize
window.addEventListener('resize', () => {
    //update sizes
    sizes.width = window.innerWidth;
    sizes.height= window.innerHeight;
    sizes.aspectRatio = sizes.width/sizes.height;

    camera.aspect = sizes.aspectRatio;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

})

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.aspectRatio, 0.1, 100);
camera.position.set(2,2,2);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0.75, 0);

//clock
const clock = new THREE.Clock();
let previousTime = 0;

//game loop
const tick = () =>{

    const elapsedTime = clock.getElapsedTime();
    const deltaTime = previousTime - elapsedTime;
    previousTime = elapsedTime;

    
    controls.update();
    renderer.render(scene, camera);
   
    window.requestAnimationFrame(tick);
}

tick();