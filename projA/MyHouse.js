class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.prism = new MyPrism(scene, 6);
        this.pyramid = new MyPyramid(scene, 4);
    }   

    display(scene) {
        //base cube  
        this.scene.wallMat.apply();

        this.scene.pushMatrix();
        this.scene.scale(4,2,4);
        this.scene.translate(0,0.25,0);
        this.cube.display();
        this.scene.popMatrix();

        //WINDOW 1
        this.scene.windowMat.apply();

        this.scene.pushMatrix();
        this.scene.scale(1,1,2.5);
        this.scene.translate(0.77,0.6,0);
        this.cube.display();
        this.scene.popMatrix();

        //window 2
        this.scene.pushMatrix();
        this.scene.scale(1,1,2.5);
        this.scene.translate(-0.77,0.6,0);
        this.cube.display();
        this.scene.popMatrix();

        ///////

        //DOOR
        this.scene.doorMat.apply();
        this.scene.pushMatrix();
        this.scene.scale(1,1.7,1);
        this.scene.translate(0,0.25,0.77);
        this.cube.display();
        this.scene.popMatrix();

        //pillars
        this.scene.pillarMat.apply();

        this.scene.pushMatrix();
        this.scene.scale(0.2,1,0.2);
        this.scene.translate(7,0,7);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2,1,0.2);
        this.scene.translate(-7,0,-7);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2,1,0.2);
        this.scene.translate(7,0,-7);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2,1,0.2);
        this.scene.translate(-7,0,7);
        this.prism.display();
        this.scene.popMatrix();

        //roof

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.translate(0,1,0);
        this.scene.scale(2.25,1.25,2.25);
        this.scene.roofMat.apply();
        this.pyramid.display();
        this.scene.popMatrix();
    }
}