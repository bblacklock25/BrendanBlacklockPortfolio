// Import libraries
import * as THREE from 'bblacklock25-BrendanBlacklockPortfolio/three.module.js';
import { FlakesTexture } from 'bblacklock25-BrendanBlacklockPortfolio/FlakesTexture.js';

// Define constants needed from three.js to create scene.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
var c;
// Initialize necessary variables.
var cancelAnimation;
var cancelReverseAnimation;
var cancelFinalAnimation;
var enterButtonStatus = 0;
var navbarChecked = 0;
var fov = camera.fov;
var zoom = 1.0;
var inc = -0.01;

// Event listeners
window.addEventListener('resize', onWindowResize, false);
document.getElementById('enter-button').addEventListener('click', enterButtonClicked, false);

// Set render size and add canvas element to HTML.
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );
document.body.appendChild(renderer.domElement);

// Set render tonemapping attributes.
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;

//Define constants and variables needed from three.js to apply material to geometry.
const spherePrimeMaterial = {
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    metalness: 0.2,
    roughness: 0,
    reflectivity: 0.75,
    color: 0x21ebff,
    normalMap: texture,
    normalScale: new THREE.Vector2(0.15, 0.15)
};
const torusOuterMaterial = {
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    metalness: 0.2,
    roughness: 0,
    reflectivity: 0.75,
    color: 0x5A5A5A,
    normalMap: texture,
    normalScale: new THREE.Vector2(0.15, 0.15)
};
const torusMiddleMaterial = {
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    metalness: 0.2,
    roughness: 0,
    reflectivity: 0.75,
    color: 0x5A5A5A,
    normalMap: texture,
    normalScale: new THREE.Vector2(0.15, 0.15)
};
const torusInnerMaterial = {
    clearcoat: 0.5,
    clearcoatRoughness: 0.1,
    metalness: 0.2,
    roughness: 0,
    reflectivity: 0.75,
    color: 0x5A5A5A,
    normalMap: texture,
    normalScale: new THREE.Vector2(0.15, 0.15)
};
var texture = new THREE.CanvasTexture(new FlakesTexture());
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.x = 10;
texture.repeat.y = 6;

// Outermost Sphere
var geometryOutermost = new THREE.SphereGeometry(5);
var materialOutermost = new THREE.MeshStandardMaterial( {color: 0x303030 , wireframe: true} );
var sphereOutermost = new THREE.Mesh(geometryOutermost, materialOutermost);

// Outer Sphere
var geometryOuter = new THREE.SphereGeometry(3);
var materialOuter = new THREE.MeshStandardMaterial( {color: 0x303030 , wireframe: true} );
var sphereOuter = new THREE.Mesh(geometryOuter, materialOuter);

// Inner Sphere
var geometryInner = new THREE.SphereGeometry(1);
var materialInner = new THREE.MeshStandardMaterial( {color: 0x303030 , wireframe: true} );
var sphereInner = new THREE.Mesh(geometryInner, materialInner);

// Innermost Sphere
var geometryInnermost = new THREE.SphereGeometry(.5);
var materialInnermost = new THREE.MeshStandardMaterial( {color: 0x303030 , wireframe: true} );
var sphereInnermost = new THREE.Mesh(geometryInnermost, materialInnermost);

// Prime Innermost Sphere
var geometryPrime = new THREE.SphereGeometry(.5);
var materialPrime = new THREE.MeshPhysicalMaterial(spherePrimeMaterial);
var spherePrime = new THREE.Mesh(geometryPrime, materialPrime);

// Outer Torus
var geometryTorusOuter = new THREE.TorusGeometry(0.825, 0.04, 16, 100);
var materialTorusOuter = new THREE.MeshPhysicalMaterial(torusOuterMaterial);
var torusOuter = new THREE.Mesh( geometryTorusOuter, materialTorusOuter );

// Middle Torus
var geometryTorusMiddle = new THREE.TorusGeometry(0.7, 0.04, 16, 100);
var materialTorusMiddle = new THREE.MeshPhysicalMaterial(torusMiddleMaterial);
var torusMiddle = new THREE.Mesh( geometryTorusMiddle, materialTorusMiddle );

// Inner Torus
var geometryTorusInner = new THREE.TorusGeometry(0.575, 0.04, 16, 100);
var materialTorusInner = new THREE.MeshPhysicalMaterial(torusInnerMaterial);
var torusInner = new THREE.Mesh( geometryTorusInner, materialTorusInner );

// Initialize lighting for scene.
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
var pointLight = new THREE.PointLight(0xffffff, 1, 0);
pointLight.position.set(0, 200, 0);
var pointLight2 = new THREE.PointLight(0xffffff, 1, 0);
pointLight2.position.set(10, 100, -50);
var pointLight3 = new THREE.PointLight(0xffffff, 1, 0);
pointLight3.position.set(-10, 100, -50);

// Add initial elements to scene and render.
scene.add(ambientLight);
scene.add(sphereOutermost);
scene.add(sphereOuter);
scene.add(sphereInner);
scene.add(sphereInnermost);
renderer.render(scene, camera);

camera.position.z = 5;  // Set camera position z direction. 

function onWindowResize() {
    // Update camera aspect.
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    cancelAnimation = requestAnimationFrame(animate);
    sphereOutermost.rotation.x += 0.005;
    sphereOutermost.rotation.y += 0.005;
    sphereOuter.rotation.x += 0.005;
    sphereOuter.rotation.y += 0.005;
    sphereInner.rotation.x += 0.005;
    sphereInner.rotation.y += 0.005;
    sphereInnermost.rotation.x += 0.005;
    sphereInnermost.rotation.y += 0.005;
    renderer.render(scene, camera);
}

function animateReverse() {
    fovZoom();
    cancelReverseAnimation = requestAnimationFrame(animateReverse);
    sphereOutermost.rotation.x -= 0.005;
    sphereOutermost.rotation.y -= 0.005;
    sphereOuter.rotation.x -= 0.005;
    sphereOuter.rotation.y -= 0.005;
    sphereInner.rotation.x -= 0.005;
    sphereInner.rotation.y -= 0.005;
    sphereInnermost.rotation.x -= 0.005;
    sphereInnermost.rotation.y -= 0.005;
    torusOuter.rotation.x += 0.002;
    torusOuter.rotation.y += 0.002;
    torusMiddle.rotation.x += 0.0035;
    torusMiddle.rotation.y += 0.0035;
    torusInner.rotation.x += 0.005;
    torusInner.rotation.y += 0.005;
    renderer.render(scene, camera);
}

function animateFinal() {
    cancelFinalAnimation = requestAnimationFrame(animateFinal);
    sphereOuter.rotation.x -= 0.001;
    sphereOuter.rotation.y -= 0.001;
    sphereInner.rotation.x -= 0.001;
    sphereInner.rotation.y -= 0.001;
    spherePrime.rotation.x -= 0.005;
    spherePrime.rotation.y -= 0.005;
    torusOuter.rotation.x += 0.002;
    torusOuter.rotation.y += 0.002;
    torusMiddle.rotation.x += 0.0035;
    torusMiddle.rotation.y += 0.0035;
    torusInner.rotation.x += 0.005;
    torusInner.rotation.y += 0.005;
    renderer.render(scene, camera);
}

if (enterButtonStatus == 0) {
    animate();
}

function enterButtonClicked() {
    // Initialize fade targets (main section and button)
    var fadeTarget = document.getElementById("entry-section");
    var fadeTarget2 = document.getElementById("enter-button");
    // Initialize timer function to fade target elements. 
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 50);
    var fadeEffect2 = setInterval(function () {
        if (!fadeTarget2.style.opacity) {
            fadeTarget2.style.opacity = 1;
        }
        if (fadeTarget2.style.opacity > 0) {
            fadeTarget2.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect2);
        }
    }, 0);
    enterButtonStatus = 1;  // Update button status to end animate();
    cancelAnimationFrame(cancelAnimation);  // Cancel animate();
    animateReverse();  // Call reverse animation.
}

function fovZoom() {
    // Timer function to zoom FOV.
    setTimeout(function() {
        // Update FOV.
        camera.fov = fov * zoom;
        camera.updateProjectionMatrix();
        // Increment zoom for FOV.
        zoom += inc;
        // If zoomed all the way in,
        if (zoom < -0.08) {
            // Add lighting
            // scene.add(pointLight);
            scene.add(pointLight2);
            scene.add(pointLight3);
        }
        // Else If zoomed almost all the way out,
        if (zoom < -2.35) {
            // Update scene.
            scene.remove(sphereInnermost);
            scene.add(spherePrime);
            scene.add(torusOuter);
            scene.add(torusMiddle);
            scene.add(torusInner);
        }
        // Else If zoomed all the way out,
        if (zoom < -2.4) {
            if (navbarChecked == 0) {
                // Fadein navbar and heading.
                document.getElementById('navbar').classList.toggle('navbar-fadein');
                document.getElementById('main-section-title').classList.toggle('main-section-title-fadein');
                navbarChecked = 1;
            }
            scene.remove(sphereOutermost);  // Remove outermost sphere.
        }
        // If back to original zoom,
        if (zoom < -3.75) { 
            // Update current animation.
            cancelAnimationFrame(cancelReverseAnimation);
            animateFinal();
        }
    }, 35);
}
