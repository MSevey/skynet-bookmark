// renderPage renders the article object
function renderPage(article) {
    return `<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${article.title}</title>
        <style>
            footer { text-align: center; border-top: 1px solid #e1e1e1; }
            img { max-width: 100% }
        </style>
    </head>
    <body>
        <article class="typesettings golden">
            <section>
                <header><h1>${article.title}</h1></header>
                <p>${article.excerpt}</p>
                <p><address><a href="${article.url}">${article.byline || article.siteName || '&#9875;'}</a></address></p>
            </section>
            <section>${article.content}</section>
        </article>
        <footer class="typesettings"><small><a href="https://siasky.net/">Skynet</a></small></footer>
    </body>
</html>`;
}

// async function skynetUpload(article) {
//   window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler);
//     let upload = skynet.UploadFile("log.txt", skylink,DefaultUploadOptions);
//     upload.then((skylink)=> {
//         console.log("file uploaded?");
//         console.log("skylink: "+skylink);
//         return skylink;
//     });
// }

//     console.log("here");
function handleClick() {
    chrome.tabs.executeScript({ file: 'Readability.js' }, function () {
        chrome.tabs.executeScript({ file: 'action.js' });
    });
}

async function handleMessage(article) {
    console.log("handlemessage");
    // let { skylink } = await skynetUpload(article);
    // for (let img in article.images) {
    //     let response = await fetch(article.images[img]);
    //     if (!response || !response.ok) {
    //         console.error('Unexpected response', response);
    //         continue;
    //     }
    //     let { skylink } = await skynetUpload(hash, await response.blob(), img, response.headers.get('content-type'));
    //     gw = put.gw;
    //     hash = put.hash;
    // }
    // let url = `https://siasky.net/${skylink}/`;
    // chrome.tabs.create({ url: url });
    // chrome.bookmarks.create({ title: article.title, url: url });
}

chrome.browserAction.onClicked.addListener(handleClick);
chrome.runtime.onMessage.addListener(handleMessage);
