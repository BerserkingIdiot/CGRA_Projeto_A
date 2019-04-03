class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(scene, 6);
        this.cone = new MyCone(scene, 6, 1);
    }   

    display(scene) {
        this.scene.pushMatrix();
        this.scene.scale(0.8,2,0.8);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,1.8,0);
        this.scene.scale(1.5,2.5,1.5);
        this.cone.display();
        this.scene.popMatrix();
    }
}