const generateHeader = async () => {
  return `
    <header class="site-header">
      <div class="header-container">
        <nav class="header-nav" id="mobile-nav">
        </nav>
        <button class="hamburger" id="hamburger">☰</button>
      </div>
    </header>
  `;
};

app.get('/', (req, res) => {
  res.redirect('/battle/scorp');
});

app.get('/battle/scorp', async (req, res) => {
  const header = await generateHeader();

  const html = `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>蠍Ⅳ</title>
      <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
      ${header}
        </div>
      </div>
      <script>


      </script>
      <script src="/js/header.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

