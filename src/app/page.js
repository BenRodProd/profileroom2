"use client"
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Title from '@/components/Title';
import Camera from '@/components/Camera';

const Main = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;

`;

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false });

export default function Home() {
  return (
    <>
      <Main>
        <Canvas>
          <Camera />
         
          <Title />

          <Common />
        </Canvas>
        
      </Main>
    </>
  );
}
