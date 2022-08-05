// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import axios from "axios";
const url = require('url');

export default async function handler(req, res) {

  const query = url.parse(req.url, true).search;

  //To be put in .env
  const link = 'https://api.ratecity.com.au/v2/home-loans';
  const key = 'MaDX2Oo31g3FLAHesYHtGa3rHe40uqkJ8TmbPJn9' ;

  const link2 = (query)? link+query: link;
 

  try {
    const response = await fetch(link2, {headers:{'x-api-key': key}});
    if (response.statusText != 'OK') {
      throw new Error()}
    res.status(200).json(await response.json());
    
  } catch (error) {
    console.log('hello api failed',error);
    res.status(404).send({message: 'failed with error'});
    
  }
  

  




  //axios.get();
}
