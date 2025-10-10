// ==UserScript==
// @name         Canvas Custom UI
// @namespace    http://tampermonkey.net/
// @version      2025-10-09
// @description  Improving the ui/ux of canvas
// @author       JoiSpoi
// @match        *://reykjavik.instructure.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==



(function() {
    'use strict';

    function replaceImages() {
        // Select all <img> elements that match the given structure
        const images = document.querySelectorAll('div.user_content > p > img');
        images.forEach(img => {
            // Create a new <hr> element
            const hr = document.createElement('hr');
            // Replace the image with the hr
            img.replaceWith(hr);
        });
    }

        const style = document.createElement('style');
        style.textContent = 'Style'
        document.head.appendChild(style);
        console.log('--!! Style Added !!--');
    // });
})();


/*

https://acorn.firefox.com/latest/desktop/design-tokens/color-pCFFM8pk

background: #1c1b22
box: #23222b
text: #fbfbfe
info: #84c6ff

link-primary: #00cadb
link-hover: #61dce9
link-active: #a6ecf4


div.user_content
p
img


*/



