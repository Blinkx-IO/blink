import type { InferGetServerSidePropsType} from 'next'
import Head from 'next/head'
import {blink} from "blinkx.io";

export async function getServerSideProps(_context : any) {

  const blinkApiKey = process.env.BLINK_API_KEY as string;
  blink.init(blinkApiKey);

  const data = await blink.getContentItem(185,'html');

  return {
    props: {
      blinkContent:data
    },
  }
};

export default function Home({blinkContent} : InferGetServerSidePropsType<typeof getServerSideProps>){
  return (
    
    <>
      <Head>
        <meta name="description" content={blinkContent.seo_fields.siteDescription}/>
        <meta name="author" content={blinkContent.seo_fields.author}/>
        <meta name="keywords" content={blinkContent.seo_fields.keywords}/>
        <title>{blinkContent.seo_fields.siteTitle}</title>
      </Head>
      <style dangerouslySetInnerHTML={{__html:blinkContent.body.css}}></style>

      <div dangerouslySetInnerHTML={{__html:blinkContent.body.html}}></div>
    </>
  )
};

