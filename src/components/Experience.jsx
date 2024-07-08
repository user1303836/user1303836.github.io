import { OrbitControls } from "@react-three/drei";
import {
  Environment,
  useGLTF,
  MeshReflectorMaterial,
  BakeShadows,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  LUT,
  BrightnessContrast,
  HueSaturation,
  ToneMapping,
} from "@react-three/postprocessing";

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 3,
        (1 + state.pointer.y) / 2,
        5.5,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export const Experience = () => {
  return (
    <>
      <OrbitControls maxPolarAngle={900.0} />
      <color attach="background" args={["white"]} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        decay={0}
        position={[10, 20, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <torusKnotGeometry args={[0.09, 1, 333, 90, 500, 4]} />
        <meshNormalMaterial flatShading={true} />
      </mesh>
    </>
  );
};
