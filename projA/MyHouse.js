class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.prism = new MyPrism(scene, 6);
        this.pyramid = new MyPyramid(scene, 4);
    }   

    display(scene) {
        this.scene.pushMatrix();
        this.scene.scale(2,2,2);
        this.scene.translate(0,0.25,0);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2,1,0.2);
        this.scene.translate(3.5,0,3.5);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2,1,0.2);
        this.scene.translate(-3.5,0,-3.5);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2,1,0.2);
        this.scene.translate(3.5,0,-3.5);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.2,1,0.2);
        this.scene.translate(-3.5,0,3.5);
        this.prism.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/4,0,1,0);
        this.scene.translate(0,1,0);
        this.scene.scale(1.25,1.25,1.25);
        this.pyramid.display();
        this.scene.popMatrix();
    }
}