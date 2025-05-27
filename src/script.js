import * as THREE from 'three';
import Experience from '../experience/Experience';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import GUI from 'lil-gui';


const experience = new Experience(document.querySelector('canvas.webgl'));

//
// const canvas = document.querySelector('canvas.webgl');
//
// //scene
// const scene = new THREE.Scene();
//
// //ligth
// const ambientLight = new THREE.AmbientLight("white");
// scene.add(ambientLight);
//
//
// //model texter/sound loaders
// // const GLTFLoader = new GLTFLoader();
//
//
// //////objecst
//
// //test cube 
//
// const plane = new THREE.Mesh(
//     new THREE.PlaneGeometry(100, 100),
//     new THREE.MeshStandardMaterial({ color: 'white'})
// );
// plane.rotation.x = - Math.PI * 0.5;
// plane.geometry.center();
// scene.add(plane);
//
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshStandardMaterial({ color: 'white'})
// );
// //use mesh standered for actuall blender files 
// cube.position.y += 1 * 0.5;
// scene.add(cube);
//
//
//
// //////utilty
//
//
// //window info
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight,
//     aspectRatio: window.innerWidth/window.innerHeight
// }
//
// //render
// // const renderer = new THREE.WebGLRenderer({ canvas: canvas }); 
// // renderer.setSize(sizes.width, sizes.height);
// // renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//
// //if you resize
// window.addEventListener('resize', () => {
//     //update sizes
//     sizes.width = window.innerWidth;
//     sizes.height= window.innerHeight;
//     sizes.aspectRatio = sizes.width/sizes.height;
//
//     camera.aspect = sizes.aspectRatio;
//     camera.updateProjectionMatrix();
//
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//
// })
//
// //camera
// const cameraGroup = new THREE.Group();
// scene.add(cameraGroup);
//
// const camera = new THREE.PerspectiveCamera(35, sizes.aspectRatio, 0.1, 100);
// camera.position.z = 6;
// cameraGroup.add(camera);
//
// // const controls = new OrbitControls(camera, canvas);
// // controls.target.set(0, 0.75, 0);
//
// //this is for wayyy later when everythign is set up 
// //basically slow and suddel cam movement
// const cursor = {}
// cursor.x = 0;
// cursor.y = 0;
//
// window.addEventListener('mousemove', (event)=>{
//     cursor.x = event.clientX / sizes.width - 0.5;
//     cursor.y = event.clientY / sizes.height - 0.5;
//     console.log(cursor);
// })
//
//
//
// //clock
// const clock = new THREE.Clock();
// let previousTime = 0;
//
// //game loop
// const tick = () =>{
//
//     const elapsedTime = clock.getElapsedTime();
//     const deltaTime = elapsedTime - previousTime;
//     previousTime = elapsedTime;
//
//     console.log(deltaTime)
//     const parallaxX = cursor.x;
//     const parallaxY = - cursor.y;
//     cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 3 * deltaTime;
//     cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 3 * deltaTime;
//
//
//     
//     // controls.update();
//     renderer.render(scene, camera);
//    
//     window.requestAnimationFrame(tick);
// }
//
// tick();
