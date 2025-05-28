import * as THREE from 'three';
import Sizes from './util/Sizes';
import Camera from './Camera';
import Renderer from './Renderer';
import World from './world/world';
import Resources from './util/Resources';
import sources from './Sources';

export default class Experience {
    static instance = null;

    constructor(canvas){
        if(Experience.instance){

            return Experience.instance;

        }

        console.log(sources);
        Experience.instance = this;

        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.resouces = new Resources(sources);
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

    sceneAdd(items){
        console.log(items[0]);
        console.log(items.mainScene.path);
        for(const item in items){
            console.log(item);
            console.log('t');
            this.scene.add();
        }

    }

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
