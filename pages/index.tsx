import Head from 'next/head';
import { GetStaticProps } from 'next';

export default function Home({}:{}) {
  return (
    <>
    <div className="hero">
      <h1 className="hero__prompt text-6xl font-bold text-center"> Sound relaxation </h1>
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      
    }
  }
}