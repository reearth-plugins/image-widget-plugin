var CONFIG = {
  imageUrlFallback: "https://example.com/logo.svg",
  widthFallback: 200,
};

function render() {
  var prop = reearth.extension.widget?.property?.default;
  var imageUrl = prop?.imageUrl || CONFIG.imageUrlFallback;
  var width = prop?.width || CONFIG.widthFallback;
  var enableLink = prop?.enableLink || false;
  var linkUrl = prop?.linkUrl || "";
  var linkTarget = prop?.linkTarget || "_blank";

  reearth.ui.show(
    `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { background: transparent; overflow: visible; width: ${width}px; }
        #root { display: inline-block; line-height: 0; }
        img {
          display: block;
          width: ${width}px;
          height: auto;
          user-select: none;
          -webkit-user-drag: none;
        }
      </style>
    </head>
    <body>
      <div id="root">
        ${
          enableLink && linkUrl
            ? `<a href="${linkUrl}" target="${linkTarget}" rel="noopener noreferrer">
               <img src="${imageUrl}" alt="" />
             </a>`
            : `<img src="${imageUrl}" alt="" />`
        }
      </div>
    </body>
    </html>
  `,
    { visible: true },
  );
}

render();

reearth.on("update", render);
