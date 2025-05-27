import * as THREE from 'three';
import Experience from '../Experience';

export default class World{

    constructor(){

        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setLight();
        this.loadItems();
    }

    setLight(){

        const ambientLight = new THREE.AmbientLight();
        this.scene.add(ambientLight);
    }

    loadItems(){


        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(),
            new THREE.MeshBasicMaterial({})); 
        this.cube.position.set(0, 0, -2);
        this.scene.add(this.cube);

        this.plane = new THREE.Mesh(
            new THREE.PlaneGeometry(100, 100),
            new THREE.MeshStandardMaterial({ color: 'red'})
        );
        this.plane.rotation.x = - Math.PI * 0.5;
        this.plane.position.y = -1;
        this.scene.add(this.plane);


    }
}
