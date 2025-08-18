import * as THREE from 'three';
import { ref, onUnmounted, type Ref } from 'vue';

export function useCube(canvasContainer: Ref<HTMLElement | null>) {
  // Проверка наличия контейнера
  if (!canvasContainer.value) {
    console.error('Canvas container is not available');
    return;
  }

  // Инициализация Three.js
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  // Настройка рендерера
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  canvasContainer.value.appendChild(renderer.domElement);

  // Создание куба
  const geometry = new THREE.BoxGeometry();
  const cubeColor = ref(0x00ff00);
  const material = new THREE.MeshBasicMaterial({ color: cubeColor.value });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  // Обработка изменения размера окна
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', handleResize);

  // Анимация
  let animationId: number;
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();

  // Функция изменения цвета
  const changeCubeColor = (newColor: number) => {
    cubeColor.value = newColor;
    material.color.setHex(newColor);
  };

  // Очистка
  onUnmounted(() => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    if (canvasContainer.value && renderer.domElement.parentNode === canvasContainer.value) {
      canvasContainer.value.removeChild(renderer.domElement);
    }
  });

  return {
    scene,
    camera,
    renderer,
    cube,
    cubeColor,
    changeCubeColor
  };
}
