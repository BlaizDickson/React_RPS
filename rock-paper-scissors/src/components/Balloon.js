import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Balloon = ({ animateBalloon }) => {
  const canvasRef = useRef(null);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const balloonGeometry = new THREE.SphereGeometry(1, 32, 32);
    const balloonMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // You can customize the balloon color
    const balloonMesh = new THREE.Mesh(balloonGeometry, balloonMaterial);

    scene.add(balloonMesh);
    camera.position.z = 5; // Adjust camera position to see the balloon

    // Animation code
    const animate = () => {
      requestAnimationFrame(animate);

      // If a winner is determined, scale up the balloon
      if (winner) {
        balloonMesh.scale.set(1.2, 1.2, 1.2);
      }

      renderer.render(scene, camera);
    };
    animate();
  }, [winner]);

  // Function to trigger the balloon animation
  useEffect(() => {
    if (animateBalloon) {
      setWinner(true);
    }
  }, [animateBalloon]);

  return <canvas ref={canvasRef} />;
};

export default Balloon;
