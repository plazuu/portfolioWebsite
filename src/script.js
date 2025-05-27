import Experience from '../experience/Experience';


const experience = new Experience(document.querySelector('canvas.webgl'));

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
// const tick = () =>{
//     // controls.update();
//     renderer.render(scene, camera);
//     window.requestAnimationFrame(tick);
// }
// tick();
