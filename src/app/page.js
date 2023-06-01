"use client"
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import Title from '@/components/Title';
import Camera from '@/components/Camera';
import Loading from '@/components/Loading';

const Main = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;

`;

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);



  return (
    <>
      <Main>
        {isLoading && <Loading />}
        <Canvas>
          <Camera />
         
          <Title setIsLoading={setIsLoading}/>

          <Common />
        </Canvas>
        
      </Main>
    </>
  );
}
