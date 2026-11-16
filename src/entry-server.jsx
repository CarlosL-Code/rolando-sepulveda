import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { SeoContext } from './components/seoContext.js';

export function render(url) {
  let head = {};
  const onSeoUpdate = (nextHead) => {
    head = nextHead;
  };

  const html = renderToString(
    <React.StrictMode>
      <SeoContext.Provider value={onSeoUpdate}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </React.StrictMode>
  );

  return { html, head };
}
