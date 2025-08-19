import * as THREE from 'three'
import {  reactive } from 'vue'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function useCube(canvasContainer: HTMLElement) {
  // Проверка наличия контейнера
  if (!canvasContainer) {
    console.error('Canvas container is not available')
    return
  }
  const sizes = {
    width: 1000,
    height: 1000,
  }

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
  const controls = new OrbitControls(camera, canvasContainer)
  controls.enableDamping = true
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 'white' })
  const group = new THREE.Group()
  const meshes: THREE.Mesh[] = []
  for (let x = -3; x <= 3; x += 3) {
    for (let y = -3; y <= 3; y += 3) {
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(x, y, 0)
      mesh.castShadow = true
      mesh.scale.set(0.5, 0.5, 0.5)
      meshes.push(mesh)
    }
  }
  const position = reactive({x: 0, y: 0})
  const getPosition = (event: MouseEvent) => {
    position.x = event.x + window.screenX*100
    position.y = event.y + window.screenY*100
  }
  document.addEventListener('mousemove', getPosition)

  group.add(...meshes)
  scene.add(group)

  camera.position.set(0, 1, 5)
  const renderer = new THREE.WebGLRenderer({ canvas: canvasContainer, antialias: true })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setClearColor('#000', 0)

  const clock = new THREE.Clock()
  const tick = () => {
    renderer.render(scene, camera)
    const delta = clock.getDelta()
    controls.update(delta)

    meshes.forEach((item, index) => {
      const isEven = index % 2 === 0 ? 1 : -1
      item.rotation.x += delta * isEven
      item.rotation.y += delta * isEven
      item.rotation.z += delta * isEven
    })
    requestAnimationFrame(tick)
  }
  tick()
}
