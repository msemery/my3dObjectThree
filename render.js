//Création d'une scène, d'une caméra et d'un moteur de rendu

scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,1,5000);
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 50;

renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//Ajout de lumières
hlight = new THREE.AmbientLight (0x000000,4);
scene.add(hlight);
directionalLight = new THREE.DirectionalLight(0xffffff,4);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);
light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light);
light2 = new THREE.PointLight(0xc4c4c4,10);
light2.position.set(500,100,0);
scene.add(light2);
light3 = new THREE.PointLight(0xc4c4c4,10);
light3.position.set(0,100,-500);
scene.add(light3);
light4 = new THREE.PointLight(0xc4c4c4,10);
light4.position.set(-500,300,500);
scene.add(light4);

//Utilisation de la classe GLTFLoader, chargement de notre fichier de modèle
let loader = new THREE.GLTFLoader();
loader.load('car/scene.gltf', function(gltf){
  car = gltf.scene.children[0];
  car.scale.set(0.5,0.5,0.5);
  car.position.y = -100;
  car.position.x = 1;
  car.position.z = 0;
  scene.add(car);
  animate();
});

//Utilisation du plugin OrbitControl pour ajouter
//une visionneuse à 360°, les utilisateurs peuvent faire
//pivoter la caméra
//Création de l'objet de controle
let controls;
 controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.addEventListener('change', renderer);
controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.05;

controls.screenSpacePanning = false;

controls.minDistance = 50;
controls.maxDistance = 500;

controls.maxPolarAngle = Math.PI / 2;

//Création d'une boucle d'animation pour mettre à jour
//la scene lorsque les utilisateurs tournent la caméra
function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }




