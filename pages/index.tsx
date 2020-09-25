import Head from 'next/head';
import { GetStaticProps } from 'next';

export default function Home({}:{}) {
  return (
    <>
      Index
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      
    }
  }
}