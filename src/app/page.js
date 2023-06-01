"use client"
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Title from '@/components/Title';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Tech from '@/components/TechStack';
import Certificates from '@/components/Certificates';
import Camera from '@/components/Camera';

const Main = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
`;

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false });

export default function Home() {
  return (
    <>
      <Main>
        <Canvas>
          <Camera />
         
          <Title />
          <About />
          <Projects />
          <Contact />
          <Tech />
          <Certificates />
          <Common />
        </Canvas>
      </Main>
    </>
  );
}
