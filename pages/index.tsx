import Head from 'next/head';
import { GetStaticProps } from 'next';

// Components
import AudioPlayer from "@components/AudioPlayer";

export default function Home({}:{}) {
  return (
    <>
    <div className="hero">
      <h1 className="hero__prompt text-6xl font-bold text-center"> Sound relaxation </h1>
    </div>
    <AudioPlayer srcMpeg="/audio.mp3" title="Sound 1" volume={.2}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      
    }
  }
}