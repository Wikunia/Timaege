#Timæge
> A secure image upload service

![upload page](documentation/uploadpage.png)

##What is Timæge
Timæge is a secure image upload service. It uses AES to encrypt an image before uploading it to the server. Then you will get a link, which is the only way to access the uploaded image.

In the future, we will add a "self-destruction mode" where you can set a time for how long the image will be accessible.

Nobody exept someone with the right link can access the image. Even the server doesn't know the key or receive any decrpted data. Everything is done on the client side.

##Warning
This project is in early development. Don't use it for production! It is not safe and have many bugs!

##What we use
We use some awesome libraries for processing, generating, encrypting and manipulating:

- [Zepto.js](https://github.com/madrobby/zepto) for DOM manipulation
- [sjcl](https://github.com/bitwiseshiftleft/sjcl) for encryption
- [JavaScript Load Image](https://github.com/blueimp/JavaScript-Load-Image) for processing and manipulating the image data
- [Password.js](https://github.com/konstantinkobs/Password.js) for generating secure passwords

##License (MIT)
Copyright (c) 2014 Konstantin Kobs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.