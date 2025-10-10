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
        style.textContent = `
            /* Variables */
            :root {
                --box: #23222b;
                --text: #fbfbfe;
                --info: #84c6ff;
                --transparent: #00000000;
            }

            /* Base rules for the new styles */
            body {
                background-color: var(--box) !important;
                color: var(--text) !important;
            }

            /* Base link styles*/
            a {
                text-decoration: none !important;
                color: #00cadb !important;
            }
            a:hover {color: #61dce9 !important;}
            a:active {color: #a6ecf4 !important;}

            /* Remove previous/next buttons in pages */
            .module-sequence-footer {display: none !important;}

            /* Hiding navbar items */
            li.ic-app-header__menu-list-item:has(#global_nav_conversations_link,#global_nav_history_link),#context_external_tool_262_menu_item,div.ic-app-header__secondary-navigation:has(#primaryNavToggle) {
                display: none !important;
            }

            .sticky-toolbar {
                background-color: var(--box) !important;
            }

            #breadcrumbs {
                background-color: var(--box) !important;
                color: var(--text) !important;
            }

            #left-side > a {
                color: var(--text) !important;
            }

            .nav-badge {
                background: var(--info) !important;
                color: var(--transparent) !important;
            }

            .btn {
                background: inherit !important;
            }

            /* Remove immersive reader */
            #immersive_reader_mount_point {
                display: none !important;
            }

            /**/
            #section-tabs a {
                color: var(--text) !important;
            }
            a.active {
                background: 
            }
        `;
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



