class MySkyBoxCube extends CGFobject {
	constructor(scene) {
        super(scene);
        this.roundquad = new MyRoundQuad(scene);
	}
	display() {

        this.scene.pushMatrix();
        this.scene.scale(10, 10, 10);

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.scene.skybox_mat_ft.apply();
        this.roundquad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.skybox_mat_rt.apply();
        this.roundquad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.scene.skybox_mat_lf.apply();
        this.roundquad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.skybox_mat_bk.apply();
        this.roundquad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.scene.skybox_mat_up.apply();
        this.roundquad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.skybox_mat_dn.apply();
        this.roundquad.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}