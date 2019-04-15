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
        //this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 8);
        this.cylinder = new MyCylinder(this, 8);
        this.cube = new MyUnitCubeQuad(this);
        this.house = new MyHouse(this);
        this.skybox = new MySkyBoxCube(this);
        this.tree = new MyTree(this, 2, 0.8, 3, 1.5);
        this.treeGroupPatch = new MyTreeGroupPatch(this);
        this.treeRowPatch = new MyTreeRowPatch(this);

        //Objects connected to MyInterface

        this.lightAndSkyboxMode = {'Day' : 0, 'MoonNight' : 1, 'FireNight' : 2};
        this.selectedMode = 0;


        //------- Cube stuff

        this.voxelHill = new MyVoxelHill(this, 8);

        this.texture5 = new CGFtexture(this, 'images/twee.jpg');
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

        this.skybox_day_up = new CGFtexture(this, 'images/cloudtop_up.png');
        this.skybox_day_ft = new CGFtexture(this, 'images/cloudtop_ft.png');
        this.skybox_day_rt = new CGFtexture(this, 'images/cloudtop_rt.png');
        this.skybox_day_lf = new CGFtexture(this, 'images/cloudtop_lf.png');
        this.skybox_day_bk = new CGFtexture(this, 'images/cloudtop_bk.png');
        this.skybox_day_dn = new CGFtexture(this, 'images/cloudtop_dn.png');

        this.skybox_night_up = new CGFtexture(this, 'images/nightsky_up.png');
        this.skybox_night_ft = new CGFtexture(this, 'images/nightsky_ft.png');
        this.skybox_night_rt = new CGFtexture(this, 'images/nightsky_rt.png');
        this.skybox_night_lf = new CGFtexture(this, 'images/nightsky_lf.png');
        this.skybox_night_bk = new CGFtexture(this, 'images/nightsky_bk.png');
        this.skybox_night_dn = new CGFtexture(this, 'images/nightsky_dn.png');

        this.skybox_mat_up = new CGFappearance(this);
        this.initSkyboxMat(this.skybox_mat_up);
        this.skybox_mat_up.setTexture(this.skybox_day_up);

        this.skybox_mat_ft = new CGFappearance(this);
        this.initSkyboxMat(this.skybox_mat_ft);
        this.skybox_mat_ft.setTexture(this.skybox_day_ft);

        this.skybox_mat_rt = new CGFappearance(this);
        this.initSkyboxMat(this.skybox_mat_rt);
        this.skybox_mat_rt.setTexture(this.skybox_day_rt);

        this.skybox_mat_lf = new CGFappearance(this);
        this.initSkyboxMat(this.skybox_mat_lf);
        this.skybox_mat_lf.setTexture(this.skybox_day_lf);
        
        this.skybox_mat_bk = new CGFappearance(this);
        this.initSkyboxMat(this.skybox_mat_bk);
        this.skybox_mat_bk.setTexture(this.skybox_day_bk);
        
        this.skybox_mat_dn = new CGFappearance(this);
        this.initSkyboxMat(this.skybox_mat_dn);
        this.skybox_mat_dn.setTexture(this.skybox_day_dn);
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

    initSkyboxMat(mat) {
        mat.setAmbient(1, 1, 1, 1);
        mat.setDiffuse(0.9, 0.9, 0.9, 1);
        mat.setSpecular(0.1, 0.1, 0.1, 1);
        mat.setShininess(10.0);
    }

    updateSkybox() {
        if(this.selectedMode == 0){
            this.skybox_mat_up.setTexture(this.skybox_day_up);
            this.skybox_mat_ft.setTexture(this.skybox_day_ft);
            this.skybox_mat_rt.setTexture(this.skybox_day_rt);
            this.skybox_mat_lf.setTexture(this.skybox_day_lf);
            this.skybox_mat_bk.setTexture(this.skybox_day_bk);
            this.skybox_mat_dn.setTexture(this.skybox_day_dn);
            //set light sun
        }
        else if(this.selectedMode == 1){
            this.skybox_mat_up.setTexture(this.skybox_night_up);
            this.skybox_mat_ft.setTexture(this.skybox_night_ft);
            this.skybox_mat_rt.setTexture(this.skybox_night_rt);
            this.skybox_mat_lf.setTexture(this.skybox_night_lf);
            this.skybox_mat_bk.setTexture(this.skybox_night_bk);
            this.skybox_mat_dn.setTexture(this.skybox_night_dn);
            //set light moon
        }
        else if(this.selectedMode == 2){
            this.skybox_mat_up.setTexture(this.skybox_night_up);
            this.skybox_mat_ft.setTexture(this.skybox_night_ft);
            this.skybox_mat_rt.setTexture(this.skybox_night_rt);
            this.skybox_mat_lf.setTexture(this.skybox_night_lf);
            this.skybox_mat_bk.setTexture(this.skybox_night_bk);
            this.skybox_mat_dn.setTexture(this.skybox_night_dn);
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

        this.skybox.display();
      
        this.pushMatrix();
        this.treeRowPatch.display()
        this.popMatrix();

        //this.treeGroupPatch.display();

        //this.prism.display();
        //this.voxelHill.display();
        //this.tree.display();
        this.house.display();

        // ---- END Primitive drawing section
    }
}