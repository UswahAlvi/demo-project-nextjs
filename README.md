 Encountered this error: Invalid src prop (https://frontend-test-api.digitalcreative.cn/flutter.png) on `next/image`, hostname "frontend-test-api.digitalcreative.cn" is not configured under images in your `next.config.js`

 so added this 
 images: {
    remotePatterns: [new URL('https://frontend-test-api.digitalcreative.cn/**')],
  },
  in next.config.ts