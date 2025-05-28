import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import Experience from '../Experience';

export default class Resources{

    constructor(sources){


        this.sources = sources;

        this.experience = new Experience();

        this.items = {};
        this.toLoad = this.sources.length;
        this.loaded = 0;

        this.setLoader();
        this.startLoading();
    }

    setLoader(){
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.texterLoader = new THREE.TextureLoader()
        this.loaders.cubeTexterLoader = new THREE.CubeTextureLoader();
    }

    startLoading(){
        
        for(const source of this.sources){

            if(source.type === 'gltfModel'){
                this.loaders.gltfLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                });
            }
            if(source.type === 'cubetexture'){
                this.loaders.gltfLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                });
            }
            if(source.type === 'texture'){
                this.loaders.gltfLoader.load(source.path, (file) => {
                    this.sourceLoaded(source, file);
                });
            }
        }
    
    }
    sourceLoaded(source, file){
        this.items[source.name] = file;

        this.loaded++;

        if(this.loaded === this.toLoad){
            this.experience.sceneAdd(this.items);
        }
    }
}
