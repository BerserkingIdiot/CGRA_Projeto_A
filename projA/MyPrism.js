class MyPrism extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.slices = slices;
        this.initBuffers(scene);
    }

    initBuffers(scene) { 
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        let ang = 0;
        let alphaAng = 2*Math.PI/this.slices;

        for (let i = 0; i < this.slices*2; i++) {
            let sa = Math.sin(ang);
            let saa = Math.sin(ang + alphaAng);
            let ca = Math.cos(ang);
            let caa = Math.cos(ang + alphaAng);

            // Declare vertices
            this.vertices.push(ca, 0, sa);
            this.vertices.push(ca, 1, sa);

            // Normals
            // triangle normal computed by cross product of two edges
            var normal= [
                saa-sa,
                ca*saa-sa*caa,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);
            // /Normals

            // Can't connect two faces if it's the first iteration
            if (i == 0) continue;

            if (i == 1) this.indices.push(2,0,1,3,2,1);

            else {
                this.indices.push(
                    this.indices[6*(i-2)]+2,
                    this.indices[6*(i-2)+1]+2,
                    this.indices[6*(i-2)+2]+2,
                    this.indices[6*(i-2)+3]+2,
                    this.indices[6*(i-2)+4]+2,
                    this.indices[6*(i-2)+5]+2
                )
            }

            ang += alphaAng;
        }

        // Duplicate vertex array
        //this.vertices = [...this.vertices];

        // Duplicate indices array
        //this.indices = [...this.indices];

        this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }

    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}