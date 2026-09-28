"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import StoryMode from "@/components/StoryMode";

type Phase = "welcome" | "story" | "done";

export default function WelcomeScreen() {
  const mountRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [phase, setPhase] = useState<Phase>("welcome");
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 100);
    camera.position.set(-5, 2.5, -3.5);
    scene.add(camera);

    scene.add(new THREE.AmbientLight(0xcccccc));

    const pointLight = new THREE.PointLight(0xffffff, 100);
    camera.add(pointLight);

    const goldColor = new THREE.Color(0xf0c413);
    const geometry = new THREE.TorusKnotGeometry(1.4, 0.4, 200, 32);
    const material = new THREE.MeshStandardMaterial({
      color: goldColor,
      emissive: goldColor,
      emissiveIntensity: 1.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const spheres: THREE.Mesh[] = [];
    const sphereGeo = new THREE.SphereGeometry(0.15, 16, 16);
    for (let i = 0; i < 12; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: goldColor,
        emissive: goldColor,
        emissiveIntensity: 2,
      });
      const sphere = new THREE.Mesh(sphereGeo, mat);
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3 + Math.random() * 1.5;
      sphere.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 4,
        Math.sin(angle) * radius
      );
      sphere.userData = { angle, radius, speed: 0.3 + Math.random() * 0.5 };
      spheres.push(sphere);
      scene.add(sphere);
    }

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ReinhardToneMapping;
    mount.appendChild(renderer.domElement);

    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.0,
      0.4,
      0.0
    );

    const composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 3;
    controls.maxDistance = 8;
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    const clock = new THREE.Clock();

    function animate() {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      mesh.rotation.x += delta * 0.3;
      mesh.rotation.y += delta * 0.2;

      spheres.forEach((sphere) => {
        const data = sphere.userData as {
          angle: number;
          radius: number;
          speed: number;
        };
        const a = data.angle + elapsed * data.speed * 0.3;
        sphere.position.x = Math.cos(a) * data.radius;
        sphere.position.z = Math.sin(a) * data.radius;
        sphere.position.y += Math.sin(elapsed * data.speed + data.angle) * 0.005;
      });

      controls.update();
      composer.render();
    }

    renderer.setAnimationLoop(animate);

    function onResize() {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      geometry.dispose();
      sphereGeo.dispose();
      material.dispose();
      spheres.forEach((s) => {
        const mat = s.material as THREE.Material;
        mat.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  function handleEnter(withSound: boolean) {
    if (withSound && audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => {});
    }
    setFading(true);
    setTimeout(() => {
      setPhase("story");
      setFading(false);
    }, 800);
  }

  function handleStoryComplete() {
    setFading(true);
    setTimeout(() => setPhase("done"), 800);
  }

  if (phase === "done") return null;

  if (phase === "story") {
    return (
      <>
        <div className={`story-mode ${fading ? "welcome-fading" : ""}`}>
          <StoryMode onComplete={handleStoryComplete} />
        </div>
        <audio
          ref={audioRef}
          loop
          preload="auto"
          src="https://cdn.pixabay.com/audio/2022/10/30/audio_347111d65a.mp3"
        />
      </>
    );
  }

  return (
    <div className={`welcome-screen ${fading ? "welcome-fading" : ""}`}>
      <div className="welcome-canvas" ref={mountRef} />

      <div className="welcome-overlay">
        <div className="welcome-content">
          <p className="eyebrow">MILAN JOSHI · DIGITAL · PROJECTS · INSURANCE</p>

          <h1 className="welcome-title">Hello, Welcome.</h1>

          <p className="welcome-subtitle">
            Would you like to experience the website with sound?
          </p>

          <div className="welcome-choices">
            <button
              className="button button-primary welcome-button"
              onClick={() => handleEnter(true)}
            >
              Yes Please!
            </button>

            <button
              className="button welcome-button"
              onClick={() => handleEnter(false)}
            >
              No, continue without sound
            </button>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/audio/2022/10/30/audio_347111d65a.mp3"
      />
    </div>
  );
}
