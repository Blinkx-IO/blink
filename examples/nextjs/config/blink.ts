/* eslint-disable import/no-anonymous-default-export */
if (!process.env.BLINK_API_KEY) {
    throw new Error('Missing env variaBLE BLINK_API_KEY')
  
}

const apikey = process.env.BLINK_API_KEY;
  
export default {
    apiKey: apikey,
}