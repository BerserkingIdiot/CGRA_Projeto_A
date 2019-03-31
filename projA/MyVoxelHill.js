class MyVoxelHill extends CGFobject {
	constructor(scene, levels) {
		super(scene);
        this.cube = new MyUnitCubeQuad(scene);
        this.levels = levels;
    }

    display() {
        this.scene.translate(-0.5 * (this.levels-1), 0, -0.5 * (this.levels-1));
        for(let i = this.levels; i > 1; i--) {
            for(let j = (i-1)*2; j > 0; j--) {
                this.cube.display();
                this.scene.translate(0.5,0,0);
            }
            for(let j = (i-1)*2; j > 0; j--) {
                this.cube.display();
                this.scene.translate(0,0,0.5);
            }
            for(let j = (i-1)*2; j > 0; j--) {
                this.cube.display();
                this.scene.translate(-0.5,0,0);
            }
            for(let j = (i-1)*2; j > 0; j--) {
                this.cube.display();
                this.scene.translate(0,0,-0.5);
            }
            this.scene.translate(0.5,0.5,0.5);
        }
        this.cube.display();
    }
 
    

}