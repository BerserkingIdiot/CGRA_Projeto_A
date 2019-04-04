class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tree = new MyTree(scene, 2, 0.5, 1.5, 1);
        this.randomizers = [];
        for (let i = 0; i < 9; i++) {
            let randomizer = Math.random()*(1-0.7) + 0.7;
            this.randomizers.push(randomizer);
        }
    }   

    display(scene) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.scene.pushMatrix();
                this.scene.translate(i*3*this.randomizers[i+j] + 0.5, 0, j*3*this.randomizers[i+j] + 0.5);
                this.tree.display();
                this.scene.popMatrix();
            }
        }   
    }
}
