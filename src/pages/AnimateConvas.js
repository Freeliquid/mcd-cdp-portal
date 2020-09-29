import React, { Component } from 'react';
import * as THREE from 'three';
import SimplexNoise from 'simplex-noise';

class AnimateConvas extends Component {
  componentDidMount() {
    var width = this.mount.clientWidth;
    var height = this.mount.clientHeight;
    var speedSlider = 20;
    var spikesSlider = 0.7;
    var processingSlider = 1.0;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(37, width / height, 0.1, 1000);

    var canvas = document.createElement('canvas'),
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        context: canvas.getContext('webgl2'),
        antialias: true,
        alpha: true
      }),
      simplex = new SimplexNoise();
    renderer.setSize(width, height);
    this.mount.appendChild(renderer.domElement);
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    camera.position.z = 5;

    var geometry = new THREE.SphereGeometry(0.8, 128, 128);
    var material = new THREE.MeshPhongMaterial({
      color: 0x4e26ff
    });
    var lightTop = new THREE.DirectionalLight(0x2979ff, 0.7);
    lightTop.position.set(0, 500, 200);
    lightTop.castShadow = true;
    scene.add(lightTop);

    var lightBottom = new THREE.DirectionalLight(0x1976d2, 0.25);
    lightBottom.position.set(0, -500, 400);
    lightBottom.castShadow = true;
    scene.add(lightBottom);

    var ambientLight = new THREE.AmbientLight(0x798296);
    scene.add(ambientLight);

    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    var update = function() {
      var time = performance.now() * 0.00001 * speedSlider * Math.pow(processingSlider, 3),
        spikes = spikesSlider * processingSlider;

      for (let i = 0; i < sphere.geometry.vertices.length; i++) {
        let p = sphere.geometry.vertices[i];
        p.normalize().multiplyScalar(
          1 +
            0.3 *
              simplex.noise3D(p.x * spikes, p.y * spikes, p.z * spikes + time)
        );
      }

      sphere.geometry.computeVertexNormals();
      sphere.geometry.normalsNeedUpdate = true;
      sphere.geometry.verticesNeedUpdate = true;
    };

    var animate = function() {
      update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    animate();
  }
  render() {
    return <div className="blob"
    style={{ width: '500px', height: '500px' }}
    ref={(mount) => { this.mount = mount }}
  />;
  }
}

export default AnimateConvas;
