class MyEquilateralTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			1, 0, 0,	//1
			0, 1, 0,	//2
			-1, 0, 0,	//3 (0)
			1, 0, 0,	//4 (1)
			0, 1, 0,	//5 (2)
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			5, 4, 3
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		]

		this.texCoords = [
			0,0,
			0,0,
			0,0,
			0,0,
			0,0,
			0,0
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	setTexCoords(texCoords) {
		this.texCoords = texCoords;
		this.updateTexCoordsGLBuffers();
	}
}