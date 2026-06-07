const express = require('express');
const path = require('path');

const app = express();

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

      <main class="container">
        <h1>蠍Ⅳ</h1>
        
        <div class="button-grid">
          <button class="skill-btn" id="btn-1">ボタン1</button>
          <button class="skill-btn" id="btn-2">ボタン2</button>
          <button class="skill-btn" id="btn-3">ボタン3</button>
          
          <button class="skill-btn" id="btn-4">ボタン4</button>
          <button class="skill-btn" id="btn-5">ボタン5</button>
          <button class="skill-btn" id="btn-6">ボタン6</button>
          
          <button class="skill-btn" id="btn-7">ボタン7</button>
          <button class="skill-btn" id="btn-8">ボタン8</button>
          <button class="skill-btn" id="btn-9">ボタン9</button>
          
          <button class="skill-btn" id="btn-10">ボタン10</button>
          <button class="skill-btn" id="btn-11">ボタン11</button>
          <button class="skill-btn" id="btn-12">ボタン12</button>
        </div>
      </main>

      <script src="/js/header.js"></script>
      <script src="/js/main.js"></script>   <!-- ここに自分で書くスクリプト -->
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => console.log('サーバー起動: http://localhost:3000'));