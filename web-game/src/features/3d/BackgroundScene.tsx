import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Wireframe Grid Floor with dynamic hills
const WireframeGrid = ({ speed }: { speed: number }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.z += speed;
            if (groupRef.current.position.z > 10) {
                groupRef.current.position.z = 0;
            }
        }
    });

    const gridLines = useMemo(() => {
        const lines = [];
        const gridSize = 100;
        const spacing = 2;

        // Horizontal lines with varying heights (hills)
        for (let z = -gridSize; z < gridSize; z += spacing) {
            const hillHeight = Math.sin(z * 0.05) * 1.2 + Math.cos(z * 0.08) * 0.8;
            lines.push(
                <mesh key={`h-${z}`} position={[0, -3 + hillHeight, z]}>
                    <boxGeometry args={[40, 0.02, 0.02]} />
                    <meshBasicMaterial color="#00d9ff" transparent opacity={0.4} />
                </mesh>
            );
        }

        // Vertical lines
        for (let x = -20; x <= 20; x += spacing) {
            lines.push(
                <mesh key={`v-${x}`} position={[x, -3, 0]}>
                    <boxGeometry args={[0.02, 0.02, gridSize * 2]} />
                    <meshBasicMaterial color="#ff006e" transparent opacity={0.4} />
                </mesh>
            );
        }

        return lines;
    }, []);

    return <group ref={groupRef}>{gridLines}</group>;
};

// Enhanced Wireframe Terrain Mountains
const WireframeTerrain = ({ side, speed }: { side: 'left' | 'right', speed: number }) => {
    const groupRef = useRef<THREE.Group>(null);
    const xOffset = side === 'left' ? -15 : 15;

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.z += speed;
            if (groupRef.current.position.z > 20) {
                groupRef.current.position.z = -80;
            }
        }
    });

    const terrain = useMemo(() => {
        const segments = 40;
        const geometry = new THREE.PlaneGeometry(12, 100, segments, segments);
        const positions = geometry.attributes.position;

        for (let i = 0; i < positions.count; i++) {
            const x = positions.getX(i);
            const y = positions.getY(i);

            const mountain1 = Math.sin(x * 0.4) * Math.cos(y * 0.08) * 4;
            const mountain2 = Math.sin(x * 0.6 + y * 0.1) * 3;
            const valley = Math.cos(x * 0.3) * Math.sin(y * 0.15) * 2;
            const ridge = Math.sin(y * 0.2) * Math.abs(Math.sin(x * 0.5)) * 2.5;

            const height = mountain1 + mountain2 - valley + ridge;
            positions.setZ(i, height);
        }

        return geometry;
    }, []);

    return (
        <group ref={groupRef} position={[xOffset, 0, -40]}>
            <mesh geometry={terrain} rotation={[0, side === 'left' ? Math.PI / 6 : -Math.PI / 6, 0]}>
                <meshBasicMaterial color="#00d9ff" wireframe transparent opacity={0.5} />
            </mesh>
        </group>
    );
};

// Trees that appear randomly
const Trees = ({ speed }: { speed: number }) => {
    const groupRef = useRef<THREE.Group>(null);

    const trees = useMemo(() => {
        const treeArray = [];
        for (let i = 0; i < 15; i++) {
            const x = (Math.random() - 0.5) * 12;
            const z = -Math.random() * 80 - 10;
            const height = 1.5 + Math.random() * 1;
            const side = Math.random() > 0.5 ? -1 : 1;

            treeArray.push({
                position: [x * side, -2.5, z] as [number, number, number],
                height,
                type: Math.random() > 0.5 ? 'pine' : 'round'
            });
        }
        return treeArray;
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        groupRef.current.children.forEach((child, i) => {
            child.position.z += speed * 0.8;

            // Recycle trees
            if (child.position.z > 15) {
                child.position.z = -80;
                child.position.x = (Math.random() - 0.5) * 12 * (Math.random() > 0.5 ? -1 : 1);
            }

            // Gentle sway animation
            const t = state.clock.getElapsedTime();
            child.rotation.z = Math.sin(t * 0.5 + i) * 0.05;
        });
    });

    return (
        <group ref={groupRef}>
            {trees.map((tree, i) => (
                <group key={i} position={tree.position}>
                    {/* Trunk */}
                    <mesh position={[0, tree.height / 2, 0]}>
                        <cylinderGeometry args={[0.1, 0.15, tree.height, 6]} />
                        <meshBasicMaterial color="#8B4513" transparent opacity={0.7} />
                    </mesh>
                    {/* Foliage */}
                    {tree.type === 'pine' ? (
                        <>
                            <mesh position={[0, tree.height + 0.3, 0]}>
                                <coneGeometry args={[0.4, 0.8, 8]} />
                                <meshBasicMaterial color="#00ff88" transparent opacity={0.6} />
                            </mesh>
                            <mesh position={[0, tree.height + 0.7, 0]}>
                                <coneGeometry args={[0.3, 0.6, 8]} />
                                <meshBasicMaterial color="#00ff88" transparent opacity={0.6} />
                            </mesh>
                        </>
                    ) : (
                        <mesh position={[0, tree.height + 0.4, 0]}>
                            <sphereGeometry args={[0.5, 8, 8]} />
                            <meshBasicMaterial color="#00ff88" transparent opacity={0.6} />
                        </mesh>
                    )}
                </group>
            ))}
        </group>
    );
};

// Houses that evolve/change over time
const EvolvingHouses = ({ speed }: { speed: number }) => {
    const groupRef = useRef<THREE.Group>(null);

    const houses = useMemo(() => {
        const houseArray = [];
        for (let i = 0; i < 8; i++) {
            const side = i % 2 === 0 ? -1 : 1;
            const x = (6 + Math.random() * 2) * side;
            const z = -i * 15 - 10;
            const size = 0.8 + Math.random() * 0.5;

            houseArray.push({
                position: [x, -2.5, z] as [number, number, number],
                size,
                evolutionStage: Math.floor(Math.random() * 3) // 0=small, 1=medium, 2=large
            });
        }
        return houseArray;
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        const t = state.clock.getElapsedTime();

        groupRef.current.children.forEach((child, i) => {
            child.position.z += speed * 0.7;

            // Recycle houses
            if (child.position.z > 15) {
                child.position.z = -80;
                // Evolve the house when it recycles
                const newStage = (Math.floor(t / 10) + i) % 3;
                const scale = 1 + newStage * 0.3;
                child.scale.set(scale, scale, scale);
            }

            // Pulse/glow effect
            const material = (child.children[0] as THREE.Mesh).material as THREE.MeshStandardMaterial;
            if (material.emissive) {
                material.emissiveIntensity = 1 + Math.sin(t * 2 + i) * 0.3;
            }
        });
    });

    return (
        <group ref={groupRef}>
            {houses.map((house, i) => (
                <group key={i} position={house.position} scale={[1 + house.evolutionStage * 0.3, 1 + house.evolutionStage * 0.3, 1 + house.evolutionStage * 0.3]}>
                    {/* Base */}
                    <mesh position={[0, house.size / 2, 0]}>
                        <boxGeometry args={[house.size, house.size, house.size]} />
                        <meshStandardMaterial
                            color="#9d00ff"
                            emissive="#9d00ff"
                            emissiveIntensity={1}
                            transparent
                            opacity={0.7}
                        />
                    </mesh>
                    {/* Roof */}
                    <mesh position={[0, house.size + 0.3, 0]}>
                        <coneGeometry args={[house.size * 0.7, 0.6, 4]} />
                        <meshBasicMaterial color="#ff006e" transparent opacity={0.7} />
                    </mesh>
                    {/* Window */}
                    <mesh position={[0, house.size / 2, house.size / 2 + 0.01]}>
                        <boxGeometry args={[0.2, 0.2, 0.05]} />
                        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={2} />
                    </mesh>
                </group>
            ))}
        </group>
    );
};

// Diverse City Skyline
const CitySkyline = ({ speed }: { speed: number }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.position.z += speed * 0.3;
            if (groupRef.current.position.z > 10) {
                groupRef.current.position.z = -20;
            }
        }
    });

    const buildings = useMemo(() => {
        const buildingShapes = [];
        const numBuildings = 40;

        for (let i = 0; i < numBuildings; i++) {
            const x = (i - numBuildings / 2) * 1.2;
            const baseHeight = 2 + Math.random() * 10;
            const width = 0.5 + Math.random() * 0.8;
            const depth = 0.4 + Math.random() * 0.3;

            const buildingType = Math.floor(Math.random() * 4);

            switch (buildingType) {
                case 0:
                    buildingShapes.push(
                        <mesh key={i} position={[x, baseHeight / 2 - 3, -60]}>
                            <boxGeometry args={[width * 0.6, baseHeight * 1.3, depth]} />
                            <meshBasicMaterial color="#ff006e" transparent opacity={0.8} />
                        </mesh>
                    );
                    break;

                case 1:
                    buildingShapes.push(
                        <mesh key={i} position={[x, baseHeight * 0.5 - 3, -60]}>
                            <boxGeometry args={[width * 1.4, baseHeight * 0.7, depth]} />
                            <meshBasicMaterial color="#ff006e" transparent opacity={0.8} />
                        </mesh>
                    );
                    break;

                case 2:
                    buildingShapes.push(
                        <mesh key={i} position={[x, baseHeight * 0.6 - 3, -60]}>
                            <boxGeometry args={[width, baseHeight * 0.8, depth]} />
                            <meshBasicMaterial color="#ff006e" transparent opacity={0.8} />
                        </mesh>
                    );
                    buildingShapes.push(
                        <mesh key={`s-${i}`} position={[x, baseHeight * 0.6 - 3 + baseHeight * 0.8, -60]}>
                            <boxGeometry args={[width * 0.2, baseHeight * 0.4, depth * 0.2]} />
                            <meshBasicMaterial color="#ff006e" transparent opacity={0.9} />
                        </mesh>
                    );
                    break;

                case 3:
                    buildingShapes.push(
                        <mesh key={i} position={[x, baseHeight * 0.4 - 3, -60]}>
                            <boxGeometry args={[width, baseHeight * 0.6, depth]} />
                            <meshBasicMaterial color="#ff006e" transparent opacity={0.8} />
                        </mesh>
                    );
                    buildingShapes.push(
                        <mesh key={`t-${i}`} position={[x, baseHeight * 0.85 - 3, -60]}>
                            <boxGeometry args={[width * 0.7, baseHeight * 0.5, depth * 0.7]} />
                            <meshBasicMaterial color="#ff006e" transparent opacity={0.85} />
                        </mesh>
                    );
                    break;
            }

            if (Math.random() > 0.4) {
                const numWindows = Math.floor(Math.random() * 3) + 1;
                for (let w = 0; w < numWindows; w++) {
                    const windowY = (Math.random() - 0.5) * baseHeight * 0.6;
                    buildingShapes.push(
                        <mesh key={`w-${i}-${w}`} position={[x, windowY, -59.5]}>
                            <boxGeometry args={[0.12, 0.12, 0.1]} />
                            <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={2} />
                        </mesh>
                    );
                }
            }
        }

        return buildingShapes;
    }, []);

    return <group ref={groupRef}>{buildings}</group>;
};

// Retro Sun
const RetroSun = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            const material = meshRef.current.material as THREE.MeshStandardMaterial;
            material.emissiveIntensity = 1 + Math.sin(t * 0.5) * 0.2;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 2, -70]}>
            <circleGeometry args={[8, 64]} />
            <meshStandardMaterial
                color="#ff006e"
                emissive="#ff006e"
                emissiveIntensity={1}
                transparent
                opacity={0.6}
            />
        </mesh>
    );
};

// Retro Particles
const RetroParticles = ({ speed }: { speed: number }) => {
    const groupRef = useRef<THREE.Group>(null);

    const particles = useMemo(() => {
        const temp = [];
        const colors = ['#00d9ff', '#ff006e', '#9d00ff'];
        for (let i = 0; i < 30; i++) {
            const x = (Math.random() - 0.5) * 40;
            const y = Math.random() * 10 - 2;
            const z = Math.random() * -60;
            const size = 0.05 + Math.random() * 0.1;
            const color = colors[Math.floor(Math.random() * colors.length)];
            temp.push({ position: [x, y, z], size, color });
        }
        return temp;
    }, []);

    useFrame(() => {
        if (!groupRef.current) return;

        groupRef.current.children.forEach((child) => {
            child.position.z += speed * 0.5;

            if (child.position.z > 10) {
                child.position.z = -60;
                child.position.x = (Math.random() - 0.5) * 40;
                child.position.y = Math.random() * 10 - 2;
            }
        });
    });

    return (
        <group ref={groupRef}>
            {particles.map((p, i) => (
                <mesh key={i} position={p.position as [number, number, number]}>
                    <sphereGeometry args={[p.size, 8, 8]} />
                    <meshBasicMaterial
                        color={p.color}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            ))}
        </group>
    );
};

// Main Scene
const SynthwaveScene = () => {
    const speed = 0.125;

    return (
        <>
            <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={0.5} />
            <RetroSun />
            <CitySkyline speed={speed} />
            <WireframeGrid speed={speed} />
            <WireframeTerrain side="left" speed={speed} />
            <WireframeTerrain side="right" speed={speed} />
            <Trees speed={speed} />
            <EvolvingHouses speed={speed} />
            <RetroParticles speed={speed} />
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 5, 0]} intensity={0.5} color="#ff006e" />
            <fog attach="fog" args={['#1a0a2e', 20, 90]} />
        </>
    );
};

export const BackgroundScene: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 transition-colors duration-700 bg-gradient-to-b from-purple-950 via-purple-900 to-pink-900">
            <Canvas camera={{ position: [0, 1, 8], fov: 70 }}>
                <SynthwaveScene />
            </Canvas>
        </div>
    );
};
