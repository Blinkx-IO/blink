
import type { NextPage, InferGetStaticPropsType, InferGetServerSidePropsType, GetServerSideProps } from "next";

interface body{
  css:string;
  html:string;
}

interface blinkContentItem {
  title: string;
  item_id : number;
  body : body;
  status : string;
  content_type : string;
  author : string;
  published_date : string;
  seo_fields : string; 
  page_url : string;
}

interface collection {
  content_items :blinkContentItem[];
}


export async function getServerSideProps (context : any) {
  //console.log(context.params.page)
  const blinkApiKey = process.env.blinkapikey;
  
  const collectionId= 58;
  
  const url = `https://blinkcms.com/api/v1/content-items?api_token=${blinkApiKey}&collectionid=${collectionId}`;

  const res = await fetch(url,
    {
      method:"GET"
    }
  );

  const blinkContent : collection = await res.json();

 
  const pageContent = blinkContent.content_items.filter((content)=>content.page_url == `/${context.params.page}`);
  if (pageContent.length == 0){
    
    return{
      redirect:{
        permanent:false,
        destination:'/'
      }
    };
  }
  else{
    const content ={body:{
      css:pageContent[0].body.css,
      html:pageContent[0].body.html
    }}
  
    return {
      props:{
        blinkContent :content //pageContent[0]
      }
    }
  }
  
}

export default function BlinkPages  ({blinkContent} : InferGetServerSidePropsType<typeof getServerSideProps>)  {
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html:blinkContent.body.css}}></style>

      <div dangerouslySetInnerHTML={{__html:blinkContent.body.html}}></div>
    </div>
  );
};

