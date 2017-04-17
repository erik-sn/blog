import * as hljs from 'highlight.js/lib/highlight';
import * as marked from 'marked';

export function configureMarkdown(): void {
  hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
  hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
  hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
  hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));

  // Create your custom renderer.
  const renderer = new marked.Renderer();
  renderer.code = (code, language) => {
    // Check whether the given language is valid for highlight.js.
    const validLang = !!(language && hljs.getLanguage(language));
    // Highlight only if the language is valid.
    const highlighted = validLang ? hljs.highlight(language, code).value : code;
    // Render the highlighted code with `hljs` class.
    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
  };
  // Set the renderer to marked.
  marked.setOptions({ renderer });
};
