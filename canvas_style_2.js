(function () {
    'use strict';

    function add_styles (style_text) {
        const style = document.createElement('style');
        style.textContent = style_text
        document.head.appendChild(style);
        console.log('--!! Style Added !!--');
    }

    const CSS_URL = 'https://raw.githubusercontent.com/JoiSpoi/Canvas-Styling/refs/heads/main/canvas_css.css';
    const ETAG_KEY = 'cssEtag';
    const CSS_KEY = 'cssCached';

    const etag = GM_getValue(ETAG_KEY, null);
    const headers = {};
    if (etag) headers['If-None-Match'] = etag;

    GM.xmlHttpRequest({
        method: 'GET',
        url: CSS_URL,
        headers,
        onload: (res) => {
            if (res.status === 200) {
                const newEtag = res.responseHeaders.match(/^etag:\s*(.+)$/im)?.[1]?.trim();
                if (newEtag) GM_setValue(ETAG_KEY, newEtag);
                GM_setValue(CSS_KEY, res.responseText);
                add_styles(res.responseText);
            } else if (res.status === 304) {
                add_styles(GM_getValue(CSS_KEY, ''));
            } else {
                console.warn('CSS fetch status:', res.status);
                add_styles(GM_getValue(CSS_KEY, ''));
            }
        },
        onerror: () => add_styles(GM_getValue(CSS_KEY, ''))
    });
})();
