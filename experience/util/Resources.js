import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

export default class Resources{

    constructor(sources){

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
        
        for(const source of sources){

            if(source.type === 'gltfModel'){
                this.loaders.gltfLoader.load(source.path, (file) => {
                    console.log("do something");
                });
            }
            if(source.type === 'cubetexture'){
                this.loaders.gltfLoader.load(source.path, (file) => {
                    console.log("do something");
                });
            }
            if(source.type === 'texture'){
                this.loaders.gltfLoader.load(source.path, (file) => {
                    console.log("do something");
                });
            }
        }
    }
    sourceLoaded(source,file){
        this.item[source.name] = file;

        this.loaded++;//
        //need an event listener or somthing idk haven gone too deep into it
    }
}
