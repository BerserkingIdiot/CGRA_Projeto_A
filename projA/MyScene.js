/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 8);
        this.cylinder = new MyCylinder(this, 8);
        this.tree = new MyTree(this, 2, 0.8, 3, 1.5);
        this.treeGroupPatch = new MyTreeGroupPatch(this);
        this.treeRowPatch = new MyTreeRowPatch(this);

        //Objects connected to MyInterface



        //------- Cube stuff

        this.voxelHill = new MyVoxelHill(this, 8);

        this.texture5 = new CGFtexture(this, 'images/mineSide.png');
        this.texture6 = new CGFtexture(this, 'images/mineTop.png');
        this.texture7 = new CGFtexture(this, 'images/mineBottom.png');
 
         
 
        // Mine side
        this.mine_side = new CGFappearance(this);
        this.mine_side.setAmbient(0.1, 0.1, 0.1, 1);
        this.mine_side.setDiffuse(0.9, 0.9, 0.9, 1);
        this.mine_side.setSpecular(0.1, 0.1, 0.1, 1);
        this.mine_side.setShininess(10.0);
        this.mine_side.setTexture(this.texture5);
 
        // Mine top
        this.mine_top = new CGFappearance(this);
        this.mine_top.setAmbient(0.1, 0.1, 0.1, 1);
        this.mine_top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.mine_top.setSpecular(0.1, 0.1, 0.1, 1);
        this.mine_top.setShininess(10.0);
        this.mine_top.setTexture(this.texture6);
 
        // Mine bottom
        this.mine_bottom = new CGFappearance(this);
        this.mine_bottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.mine_bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.mine_bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.mine_bottom.setShininess(10.0);
        this.mine_bottom.setTexture(this.texture7);
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();
        //this.cylinder.display();

        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section


        this.pushMatrix();
        this.treeRowPatch.display()
        this.popMatrix();

        //this.treeGroupPatch.display();

        //this.prism.display();


        // ---- END Primitive drawing section
    }
}