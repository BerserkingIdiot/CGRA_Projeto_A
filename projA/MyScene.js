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
        this.cube = new MyUnitCubeQuad(this);
        this.house = new MyHouse(this);
        this.skybox = new MyCubeMap(this);
        this.tree = new MyTree(this, 2, 0.8, 3, 1.5);
        this.treeGroupPatch1 = new MyTreeGroupPatch(this);
        this.treeGroupPatch2 = new MyTreeGroupPatch(this);
        this.treeRowPatch1 = new MyTreeRowPatch(this);
        this.treeRowPatch2 = new MyTreeRowPatch(this);
        this.plan = new MyQuad(this);
        this.voxelHill1 = new MyVoxelHill(this, 8);
        this.voxelHill2 = new MyVoxelHill(this, 5);
        this.fireplace = new MyFireplace(this);

        this.planTexCoords = [
            0,10,
            10,10,
            0,0,
            10,0
        ]

        this.plan.updateTexCoords(this.planTexCoords);

        //Objects connected to MyInterface

        this.textureMode = true;

        this.lightAndSkyboxMode = {
            'Day': 0,
            'MoonNight': 1,
            'FireNight': 2
        };
        this.selectedMode = 0;


        this.barkTexture = new CGFtexture(this, 'images/twee.jpg');
        this.treetopTexture = new CGFtexture(this, 'images/tweetop.jpg');
        this.groundTexture = new CGFtexture(this, 'images/grass.jpg');
        this.roofTexture = new CGFtexture(this, 'images/roof.jpg');
        this.pillarTexture = new CGFtexture(this, 'images/pillarMetal.png');
        this.wallTexture = new CGFtexture(this, 'images/wall.jpg');
        this.doorTexture = new CGFtexture(this, 'images/door.jpg');
        this.windowTexture = new CGFtexture(this, 'images/window2.jpg');

        this.barkMat = new CGFappearance(this);
        this.barkMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.barkMat.setDiffuse(0.7, 0.7, 0.7, 1);
        this.barkMat.setSpecular(0.1, 0.1, 0.1, 1);
        this.barkMat.setShininess(10.0);
        this.barkMat.setTexture(this.barkTexture);

        this.treetopMat = new CGFappearance(this);
        this.treetopMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.treetopMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.treetopMat.setSpecular(0.3, 0.3, 0.3, 1);
        this.treetopMat.setShininess(10.0);
        this.treetopMat.setTexture(this.treetopTexture);

        this.groundMat = new CGFappearance(this);
        this.groundMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.groundMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.groundMat.setSpecular(0.1, 0.1, 0.1, 1);
        this.groundMat.setShininess(10.0);
        this.groundMat.setTexture(this.groundTexture);
        this.groundMat.setTextureWrap('REPEAT','REPEAT');

        this.roofMat = new CGFappearance(this);
        this.roofMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.roofMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.roofMat.setSpecular(0, 0, 0, 1);
        this.roofMat.setShininess(10.0);
        this.roofMat.setTexture(this.roofTexture);

        this.pillarMat = new CGFappearance(this);
        this.pillarMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.pillarMat.setDiffuse(0.3, 0.3, 0.3, 1);
        this.pillarMat.setSpecular(0.9, 0.9, 0.9, 1);
        this.pillarMat.setShininess(10.0);
        this.pillarMat.setTexture(this.pillarTexture);

        this.wallMat = new CGFappearance(this);
        this.wallMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.wallMat.setDiffuse(1, 1, 1, 1);
        this.wallMat.setSpecular(0, 0, 0, 1);
        this.wallMat.setShininess(10.0);
        this.wallMat.setTexture(this.wallTexture);

        this.doorMat = new CGFappearance(this);
        this.doorMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.doorMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.doorMat.setSpecular(0.3, 0.3, 0.3, 1);
        this.doorMat.setShininess(10.0);
        this.doorMat.setTexture(this.doorTexture);

        this.windowMat = new CGFappearance(this);
        this.windowMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.windowMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.windowMat.setSpecular(0.3, 0.3, 0.3, 1);
        this.windowMat.setShininess(10.0);
        this.windowMat.setTexture(this.windowTexture);


        this.skybox_day = new CGFtexture(this, 'images/cloudtop_skybox.png');
        this.skybox_night = new CGFtexture(this, 'images/nightsky_skybox.png');

        this.skyboxMat = new CGFappearance(this);
        this.skyboxMat.setAmbient(1, 1, 1, 1);
        this.skyboxMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.skyboxMat.setSpecular(0.1, 0.1, 0.1, 1);
        this.skyboxMat.setShininess(10.0);
        this.skyboxMat.setTexture(this.skybox_day);


        

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

    updateTextureMode() {
        this.enableTextures(this.textureMode);

    }


    updateSkybox() {
        if(this.selectedMode == 0){
            this.skyboxMat.setTexture(this.skybox_day);
            //set light sun
        }
        else if(this.selectedMode == 1){
            this.skyboxMat.setTexture(this.skybox_night);
            //set light moon
        }
        else if(this.selectedMode == 2){
            this.skyboxMat.setTexture(this.skybox_night);
            //set light fire
        }
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
        this.skyboxMat.apply();
        this.scale(40, 40, 40);
        this.skybox.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(1.2, 1.2, 1.2);
        this.house.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(40, 40, 40);
        this.rotate(-Math.PI / 2, 1, 0, 0);
        this.groundMat.apply();
        this.plan.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(2, 2, 2);
        this.translate(-7, 0, -7);
        this.voxelHill1.display();
        this.popMatrix();

        this.pushMatrix();
        this.scale(2.3, 2.3, 2.3);
        this.translate(5, 0, 5);
        this.voxelHill2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0, 0, -20);
        this.treeRowPatch1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(0, 0, -17);
        this.treeRowPatch2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-15, 0, 0);
        this.treeGroupPatch1.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(-15, 0, 8);
        this.treeGroupPatch2.display();
        this.popMatrix();

        this.pushMatrix();
        this.fireplace.display();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}