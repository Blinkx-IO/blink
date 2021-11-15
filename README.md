<br />
<p align="center">
  <img alt="blinkx" src="https://cdn.blinkcms.com/blink/blinkxlogo.png" width="240"/>
</p>

<h3 align="center">
  Design experiences visually, deliver content faster.
</h3>
<p align="center">
  Seamlessly use Blink with the framework of your choice.
</p>


<p align="center" valign="middle">
  &nbsp; <a title="REST API" target="_blank" href="">
    <img width="40" src="https://user-images.githubusercontent.com/4421818/141838376-8c3dcbe4-2b93-4b22-8f7a-1db5ebb60cdd.png" />
  </a>&nbsp;
  &nbsp; <a title="GraphQL"  target="_blank" href="">
    <img width="40" src="https://user-images.githubusercontent.com/4421818/141838819-3226672f-f6b2-4a7f-8fb1-6b4c7f366c4b.png" />
  </a>&nbsp;
  &nbsp; <a title="Shopify"  target="_blank" href="">
   <img width="40" src="https://user-images.githubusercontent.com/4421818/141838939-4ca882e7-dba5-494a-9d98-f13f483c1618.png" />
  </a>&nbsp;
  &nbsp; <a title="React"  target="_blank" href="">
  <img width="40" src="https://user-images.githubusercontent.com/4421818/141839049-83662e52-16c0-421b-910d-207a05c59381.png" />
  </a>&nbsp;
  &nbsp; <a title="Next.js"  target="_blank" href="">
  <img width="40" src="https://user-images.githubusercontent.com/4421818/141839129-f3100226-9685-4e7a-9503-3980c8ffd0d6.png" />
  </a>&nbsp;
  &nbsp; <a title="Gatsby"  target="_blank" href="">
  <img width="40" src="https://user-images.githubusercontent.com/4421818/141839408-2e25a1cb-0f5b-47ff-956a-b4898f0e0c16.png" />
  </a>&nbsp;
  &nbsp; <a title="Vue"  target="_blank" href="">
  <img width="40" src="https://user-images.githubusercontent.com/4421818/141839472-cb06ffc9-6754-49ab-9171-29e7b828048c.png" />
  </a>&nbsp;
  &nbsp; <a title="Nuxt"  target="_blank" href="">
  <img width="40" src="https://user-images.githubusercontent.com/4421818/141839532-4d5d197b-b839-4810-9c3b-b267d4225527.png" />
  </a>&nbsp;
  &nbsp; <a title="Svelte"  target="_blank" href="">
  <img width="40" src="https://user-images.githubusercontent.com/4421818/141840831-79882ca7-6046-4b9a-8cbd-886aef764c98.png" />
  </a>&nbsp;
  &nbsp; <a title="Webcomponents"  target="_blank" href="">
    <img width="40" src="https://user-images.githubusercontent.com/4421818/141839603-271c5e79-2bbb-40eb-a9d9-5c282e781c41.png" />
  </a>&nbsp;
</p>

<table align="center" style="width:100%;">
<tr>
<td>Dislpay your content</td>
</tr>
<tr>
    
<td width="100%">
<pre lang="tsx">
import { blink } from 'blinkx.io'
&nbsp; 
blink.init('YOUR_KEY')
&nbsp; 
async function getBlinkPages() {
&nbsp;&nbsp;const blinkContent = await blink.getContentItem('PAGE_URL','html');
&nbsp;
&nbsp;&nbsp;return{
&nbsp;&nbsp;&nbsp;&nbsp;content:{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;html: blinkContent.body.html,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;css: blinkContent.body.css,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;seo: blinkContent.seo_fields
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;}
}
</pre>
</tr>
</table>
<br />
<div align="center">
## Table of contents

- [How does it work?](#how-does-it-work)
- [Key Features](#key-features)
  - [Blink Features](#)
  - [Developer experience](#developer-experience)
  - [Content](#-content)
- [Stay up to date](#stay-up-to-date)
- [Code of Conduct](#code-of-conduct)
- [Want to contribute?](#want-to-contribute)
- [License](#license)
</div>
## Key Features

![blink-sdk-components](https://user-images.githubusercontent.com/4421818/141836560-655a5f40-a1d3-498e-adec-1a2b2ad7a446.png)

## How does it work?

- Integrate the [Blink API](https://blinkx.io/api-browser) or [SDK](https://www.npmjs.com/package/blinkx.io) to your site or app
- Create a free account on [blinkx.io](https://blinkx.io/signup) and start visually designing your page or app.

## Join the community!

Questions? Chat with us in our [official forum](https://discord.gg/6rTSFY95)!

## Want to contribute?

Found a bug, or want to contribute code? Pull requests and issues are most welcome.

## Troubleshooting and feedback

Open an [issue](https://github.com/Blinkx-IO/blink/issues).
