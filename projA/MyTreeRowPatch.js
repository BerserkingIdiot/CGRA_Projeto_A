class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tree = new MyTree(scene, 2, 0.5, 1.5, 1);
        this.randomizers = [];
        for (let i = 0; i < 6; i++) {
            let randomizer = Math.random()*(1-0.7) + 0.7;
            this.randomizers.push(randomizer);
        }
    }   

    display(scene) {
        for (let i = 0; i < 6; i++) {
            this.scene.pushMatrix();
            this.scene.translate(i*3*this.randomizers[i] + 0.7, 0, 3*this.randomizers[i] + 0.7);
            this.tree.display();
            this.scene.popMatrix();
        }   
    }
}
