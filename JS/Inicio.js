var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(80, 1, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 600);
document.getElementById('product-cube-container1').appendChild(renderer.domElement);

//Pieza Cruz

const material = new THREE.MeshPhysicalMaterial({ color: 0xAB00FF });
const geometryHorizontal = new THREE.BoxGeometry(1.2, 0.2, 0.3);
const geometryVertical = new THREE.BoxGeometry(0.2, 1.2, 0.3);

const crossGroup = new THREE.Group();

const segmentHorizontal1 = new THREE.Mesh(geometryHorizontal, material);
segmentHorizontal1.position.y = 0;
crossGroup.add(segmentHorizontal1);

const segmentVertical1 = new THREE.Mesh(geometryVertical, material);
segmentVertical1.position.x = 0;
crossGroup.add(segmentVertical1);

scene.add(crossGroup);

//Pieza triangulo

const geometrytriangle = new THREE.TorusGeometry(0.5, 0.1, 16, 3);
const materialtriangle = new THREE.MeshPhongMaterial({ color: 0x49FFCB });
const triangleGroup = new THREE.Mesh(geometrytriangle, materialtriangle);
triangleGroup.rotation.z=-0.5;
scene.add(triangleGroup);


//Pieza cuadrado

const geometrysquare = new THREE.TorusGeometry(0.5, 0.1, 16, 4);
const materialsquare = new THREE.MeshPhongMaterial({ color: 0x49FFCB });
const squareGroup = new THREE.Mesh(geometrysquare, materialsquare);
squareGroup.rotation.z=  0.8;
scene.add(squareGroup);


//Pieza Aro

const geometry3 = new THREE.TorusGeometry(0.5, 0.1, 16, 100);
const materialTorus = new THREE.MeshPhongMaterial({ color: 0x49FFCB });
const torus = new THREE.Mesh(geometry3, materialTorus);
scene.add(torus);



const light = new THREE.PointLight(0xFF00DC, 1.5, 10);
light.position.set(0, 1, 0); // Posición arriba
scene.add(light);

const light1 = new THREE.PointLight(0xFF005D, 1.5, 10);
light1.position.set(0, -1, 0); // Posición abajo
scene.add(light1);

const light2 = new THREE.PointLight(0xFF0097, 2, 50);
light2.position.set(3, 0, 0); // Posición derecha
scene.add(light2);

const light3 = new THREE.PointLight(0x0046FF, 2, 20);
light3.position.set(-3, 0, 0); // Posición izquierda
scene.add(light3);


camera.position.z = 4.5; // Increase the camera distance for better visibility
var t = 0.005;



const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function onPointerMove(event) {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / 600) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.setSize(window.innerWidth, 600);
    t += 0.02;


    squareGroup.position.z = 2 * Math.cos(t + 1.1) + 0;
    squareGroup.position.x = 2 * Math.sin(t + 1.1) + 0;
    

    torus.position.z = 2 * Math.cos(t + 3.1) + 0;
    torus.position.x = 2 * Math.sin(t + 3.1) + 0;

    crossGroup.position.z = 2 * Math.cos(t + 0) + 0;
    crossGroup.position.x = 2 * Math.sin(t + 0) + 0;
    
    triangleGroup.position.z = 2 * Math.cos(t + 2.1) + 0;
    triangleGroup.position.x = 2 * Math.sin(t + 2.1) + 0;




    squareGroup.position.y = 1;
    triangleGroup.position.y = 1;
    torus.position.y = 1;
    crossGroup.position.y = 1;
    crossGroup.rotation.z = 15;
/*
    crossGroup.rotation.z = 15;
    triangleGroup.rotation.y += 0.02;
    crossGroup.rotation.y += 0.02;
 */   


    light.position.z = 0;
    light.position.x = 0;
    light.position.y = 0;


    light1.position.z = -3 * Math.cos(t + 0) + 0;
    light1.position.x = 0 * Math.sin(t + 0) + 0;
    light1.position.y = -3 * Math.sin(t + 0) + 0;

    light2.position.z = 3 * Math.cos(t + 0) + 0;
    light2.position.x = 0 * Math.sin(t + 0) + 0;
    light2.position.y = -3 * Math.sin(t + 0) + 0;

    light3.position.z = 0 * Math.cos(t + 0) + 0;
    light3.position.x = 4 * Math.sin(t + 0) + 0;
    light3.position.y = 4 * Math.sin(t + 0) + 0;


    material.color.set(0xAB00FF);
    materialtriangle.color.set(0xAB00FF);
    materialsquare.color.set(0xAB00FF);
    materialTorus.color.set(0xAB00FF);

    // Update the picking ray with the camera and pointer position
    raycaster.setFromCamera(pointer, camera);

    // Calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects(scene.children);

    for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
    }
    intersects = raycaster.intersectObjects(crossGroup.children);

    for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
    }

    renderer.render(scene, camera);
}

window.addEventListener('pointermove', onPointerMove);

animate(); // Start the animation loop and rendering