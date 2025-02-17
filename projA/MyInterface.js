/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        this.gui.add(this.scene, 'textureMode').name('Textures').onChange(this.scene.updateTextureMode.bind(this.scene));
        this.gui.add(this.scene, 'selectedMode', this.scene.lightAndSkyboxMode).name('skybox mode').onChange(this.scene.updateSkybox.bind(this.scene));

        return true;
    }
}