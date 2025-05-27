import * as THREE from 'three';
import Experience from './Experience';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export default class Camera{

    constructor(){
       
        this.experience = new Experience();

        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas;

        this.instance = new THREE.PerspectiveCamera(45,
            this.sizes.width/this.sizes.height, 0.1, 100);

        this.setOrbitControls();
    }

    setOrbitControls(){
        this.controls = new OrbitControls(
            this.instance,
            this.canvas);
        this.controls.target.set(0,0,0);
    }
    resize(){
        this.instance.aspectRatio = this.sizes.width/this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update(){
    this.controls.update();
    }
}
