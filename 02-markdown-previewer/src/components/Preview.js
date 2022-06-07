import { marked } from 'marked';

function Preview(props) {
  const {editorText} = props;
  const options = {
    "baseUrl": null,
    "breaks": true,
    "extensions": null,
    "gfm": true,
    "headerIds": true,
    "headerPrefix": "",
    "highlight": null,
    "langPrefix": "language-",
    "mangle": true,
    "pedantic": false,
    "sanitize": false,
    "sanitizer": null,
    "silent": false,
    "smartLists": false,
    "smartypants": false,
    "tokenizer": null,
    "walkTokens": null,
    "xhtml": false
   };

  const parsedText = marked.parse(editorText, options);
  const parsedHTML = {__html: parsedText };

  return (
    <div id="preview" dangerouslySetInnerHTML={parsedHTML}>
    </div>
  );
}

export default Preview;
