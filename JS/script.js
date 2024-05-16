// Configuración del lienzo de Three.js para la imagen del producto
function juego(){
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);
    document.getElementById('product-cube-container').appendChild(renderer.domElement);

    // Cargar la imagen como textura

    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load('CONTENIDO/ps5.jpg');
    var geometry = new THREE.BoxGeometry(8, 100, 75);
    var material = new THREE.MeshBasicMaterial({ map: texture }); // Aplicar la textura al material
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);


    // Posicionar la cámara
    camera.position.z = 120;

    // Renderizar la escena
    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.y += 0.0095;
        renderer.render(scene, camera);
    }
    animate();
}
juego()