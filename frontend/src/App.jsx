import React, { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"; 
import Editor from 'react-simple-code-editor';
import prism from "prismjs";
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"
function App() {
  const [code,serCode] = useState('');
  const [review, setReview]= useState('');
  const [loading,setLoading] = useState(false);
  useEffect(() => {
    prism.highlightAll();
  },[]);


  const reviewCode = async()=> {
    setLoading(true)
     const response= await axios.post('http://localhost:3000/ai/get-review',{code});
    
     if (response) {
       setLoading(false)
       setReview(response.data);
     }

  }
  return (
    <>
      <main>
        <div className="left">
          <div  className="code">
            <Editor
             value={code}
             onValueChange={code => serCode(code)}
             highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
             padding={10}
             style={{
              fontFamily: "'fira code', 'Fira Mono', monospace",
              fontSize: 12,
              borderRadius: "5px",
              height: "100%",
              width: "100%"
             }}
            />
               
            
          </div>
          <button disabled={code ? false : true} onClick={() => reviewCode()} className="review">
            Review
          </button>
        </div>
        <div className="right" style={{ flex: 1 }}>
          {loading ? (
            <div className="loading">Code review process starting...</div>
          ) : (
            <ReactMarkdown
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <pre className={className}>
                      <code {...props}>{children}</code>
                    </pre>
                  ) : (
                    <code {...props} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {review}
            </ReactMarkdown>
          )}
        </div>
      </main>
    </>
  )
}


export default App


