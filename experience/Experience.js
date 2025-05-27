import * as THREE from 'three';
import Sizes from './util/Sizes';
import Camera from './Camera';
import Renderer from './Renderer';
import World from './world/world';

export default class Experience {
    static instance = null;

    constructor(canvas){
        if(Experience.instance){

            return Experience.instance;

        }

        Experience.instance = this;

        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer()
        this.world = new World();

        this.scene.add(this.camera.instance);
        
        this.time = {
            delta: 16,
            current: Date.now(),
            elapsed: 0,
            start: Date.now()
        };

        window.requestAnimationFrame(() => {
            this.tick();
        });
        window.addEventListener("resize", ()=> {
            this.resize();         
        });

    }


    tick(){
        this.updateTime();
        this.update();

        window.requestAnimationFrame(() => {
            this.tick();
        });
    };

    resize(){
        this.sizes.resize();
        this.camera.resize();
        this.renderer.resize();
    }

    update(){
        this.camera.update();
        this.renderer.update();
    }

    updateTime(){
        const currentTime = Date.now();
        this.time.delta = currentTime - this.time.current;
        this.time.current = currentTime;
        this.time.elapsed = currentTime - this.time.start;

    }



}
