
/*
    Don't ask about the name.
    Don't try to improve the name.
    Just accept it ok
*/


class MyRoundQuad extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0,	//0
			0.5, -0.5, 0,	//1
			-0.5, 0.5, 0,	//2
			0.5, 0.5, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 1, 0,
			2, 3, 1
		];

		//Facing Z positive
		this.normals = [
			(1/Math.sqrt(3)), (1/Math.sqrt(3)), -(1/Math.sqrt(3)),
			-(1/Math.sqrt(3)), (1/Math.sqrt(3)), -(1/Math.sqrt(3)),
			(1/Math.sqrt(3)), -(1/Math.sqrt(3)), -(1/Math.sqrt(3)),
			-(1/Math.sqrt(3)), -(1/Math.sqrt(3)), -(1/Math.sqrt(3))
		];
		
		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

		this.texCoords = [
			1, 1,
			0, 1,
			1, 0,
			0, 0
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}
