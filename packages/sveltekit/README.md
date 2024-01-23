<br />
<p style="display:flex; align-items:center; gap:1rem;">
  <svg width="100" height="100" viewBox="0 0 317 253" fill="none" xmlns="http://www.w3.org/2000/svg" id="igj83"><path d="M250.949 251.595L52.4687 252.855L0.258789 155.335L64.0588 154.935L88.7488 199.735L277.589 198.545L198.739 53.6647L125.729 54.1248L96.0889 1.45471L234.269 0.574707L316.909 152.045L250.949 251.595Z" fill="url(#paint0_linear_34_9)"></path><path d="M75.8489 54.8647L100.759 100.745L173.329 99.4247L201.509 153.205L64.0588 154.935L10.5488 55.2748L75.8489 54.8647Z" fill="url(#paint1_linear_34_9)"></path><defs><linearGradient id="paint0_linear_34_9" x1="0.0209912" y1="127.714" x2="316.675" y2="125.725" gradientUnits="userSpaceOnUse"><stop stop-color="#FF931E"></stop><stop offset="0.05" stop-color="#F59325"></stop><stop offset="0.14" stop-color="#DC943A"></stop><stop offset="0.25" stop-color="#B2965C"></stop><stop offset="0.39" stop-color="#78988C"></stop><stop offset="0.53" stop-color="#309BC7"></stop><stop offset="0.57" stop-color="#1E9CD7"></stop><stop offset="0.87" stop-color="#0075BE"></stop><stop offset="0.99" stop-color="#005B97"></stop></linearGradient><linearGradient id="paint1_linear_34_9" x1="10.8008" y1="105.366" x2="201.137" y2="104.17" gradientUnits="userSpaceOnUse"><stop stop-color="#FF931E"></stop><stop offset="0.05" stop-color="#F59325"></stop><stop offset="0.14" stop-color="#DC943A"></stop><stop offset="0.25" stop-color="#B2965C"></stop><stop offset="0.39" stop-color="#78988C"></stop><stop offset="0.53" stop-color="#309BC7"></stop><stop offset="0.57" stop-color="#1E9CD7"></stop><stop offset="0.87" stop-color="#0075BE"></stop><stop offset="0.99" stop-color="#005B97"></stop></linearGradient></defs></svg>
  <span style="font-size:5rem">BLINK X</span>
</p>

<h3>
  Design experiences faster, connect any framework.
</h3>

<p valign="middle">
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

<table style="width:100%;">
<tr>
<td>Dislpay your content</td>
</tr>
<tr>
    
<td width="100%">
<pre lang="tsx">
import { blink } from 'blinkx.io'
&nbsp; 
blink.init('YOUR_KEY');
&nbsp; 
async function getBlinkPages() {
&nbsp;&nbsp;const blinkContent = await blink.getContentItem('PAGE_URL','html');
&nbsp;
&nbsp;&nbsp;return{
&nbsp;&nbsp;&nbsp;&nbsp;content:{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;html: blinkContent.body.html,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;css: blinkContent.body.css,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;seo: blinkContent.seo_fields
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;}
}
</pre>
</tr>
</table>
<br />

## Table of contents

- [Get started](#get-started)
- [Key Features](#key-features)
  - [Blink X Core](#blink-x-core)
  - [Developer experience](#developer-experience)
- [Join the community](#join-the-community)
- [Want to contribute?](#want-to-contribute)
- [License](#license)

## Get started

- Create a free account on [blinkx.io](https://blinkx.io/signup) and start visually designing your page or app.

- Install the [SDK](https://www.npmjs.com/package/blinkx.io) with npm:

    ```bash
    npm i blinkx.io
    ```

- Or Integrate the [Blink REST API](https://blinkx.io/api-browser) to your site or app

## Key Features

![blink-sdk-components](https://user-images.githubusercontent.com/4421818/141836560-655a5f40-a1d3-498e-adec-1a2b2ad7a446.png)

### [Blink X Core](https://blinkx.io)

- Visual Experience Editor (VX Editor)
- Responsive Layouts
- [Headless Commerce](https://blinkx.io/coming-soon)
- [Audience Manager](https://blinkx.io/coming-soon)
- [App Marketplace](https://blinkx.io/coming-soon)


### [Developer Experience](https://blinkx.io)

- [Custom Plug-ins](https://blinkx.io/coming-soon)
- [Custom Components](https://blinkx.io/coming-soon)
- [Use Javascript to enhance the VX Editor](https://blinkx.io/coming-soon)

## Join the community!

Questions? Chat with us in our [official forum](https://discord.gg/6rTSFY95)!

## Want to contribute?

Found a bug, or want to contribute code? Pull requests and issues are most welcome.

## Troubleshooting and feedback

Open an [issue](https://github.com/Blinkx-IO/blink/issues).

## License

Blink X is available under the [_MIT License_](https://github.com/Blinkx-IO/blink/blob/main/LICENSE)
