class MyFireplace extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.prism = new MyPrism(scene, 6);
        this.pyramid = new MyPyramid(scene, 4);
    }   

    display(scene) {
        this.scene.wallMat.apply();

        this.scene.pushMatrix();
        this.scene.translate(0,0.25,6);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.5,6)
        this.scene.scale(0.5,0.5,0.5)
        this.scene.rotate(Math.PI/4,0,1,0)
        this.pyramid.display();
        this.scene.popMatrix();
    }
}