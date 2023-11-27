<!----- BEGIN GHOST DOCS HEADER ----->

# cf-tiktoken

[![npm-version](https://img.shields.io/npm/v/@jill64/cf-tiktoken)](https://npmjs.com/package/@jill64/cf-tiktoken) [![npm-license](https://img.shields.io/npm/l/@jill64/cf-tiktoken)](https://npmjs.com/package/@jill64/cf-tiktoken) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/cf-tiktoken)](https://npmjs.com/package/@jill64/cf-tiktoken) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/cf-tiktoken)](https://npmjs.com/package/@jill64/cf-tiktoken)

⏳ js-tiktoken on Cloudflare Pages

## Installation

```sh
npm i @jill64/cf-tiktoken
```

<!----- END GHOST DOCS HEADER ----->

Currently [`js-tiktoken`](https://github.com/dqbd/tiktoken/tree/main/js) does not work with Cloudflare Pages due to worker size limitations.  
This library uses conditional export to **exclude** `js-tiktoken` implementations from Cloudflare worker bundles.

> [!IMPORTANT]
> This is **not** the library that makes `js-tiktoken` work on Cloudflare Workers.

```js
// This function can be imported by both edge and browser.
// however, on edge it returns invalid output regardless of the input value.
import { encodingForModel } from '@jill64/cf-tiktoken'

export const fn = () => {
  const enc = encodingForModel('gpt-4')
  // ...
}
```
