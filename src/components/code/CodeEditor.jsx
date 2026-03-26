import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { HiSparkles, HiTerminal } from "react-icons/hi"; 

function CodeEditor() {
  const [activeFile, setActiveFile] = useState("html");
  const [html, setHtml] = useState("<!DOCTYPE html>\n<html>\n  <body>\n    <h1 class='title'>NextYou Editor</h1>\n    <p id='msg'>Kod yazmağa başla...</p>\n  </body>\n</html>");
  const [css, setCss] = useState(".title {\n  color: #378079;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: 10px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n}");
  const [js, setJs] = useState("console.log('Sistem aktivdir...');\ndocument.getElementById('msg').innerText = 'Öz tempində irəlilə!';");

  const [srcDoc, setSrcDoc] = useState("");
  const [logs, setLogs] = useState([]);

  const runCode = () => {
    setLogs([]);
    const combinedDoc = `
      <html>
        <head><style>${css}</style></head>
        <body style="background: #06090f; color: #f0ebe2; padding: 20px; font-family: sans-serif;">
          ${html}
          <script>
            (function () {
              const createProxy = (type) => (...args) => {
                window.parent.postMessage({ 
                  type, 
                  message: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(" ") 
                }, "*");
              };
              console.log = createProxy("log");
              console.error = createProxy("error");
              window.onerror = (m) => console.error(m);
            })();
          </script>
          <script>${js}</script>
        </body>
      </html>
    `;
    setSrcDoc(combinedDoc);
  };

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data.type === "log" || e.data.type === "error") {
        setLogs((prev) => [...prev, { type: e.data.type, text: e.data.message }]);
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section className="bg-[#06090f] min-h-screen p-4 md:p-12 relative overflow-hidden text-[#f0ebe2]">
      

      <div className="relative z-10 max-w-400 mx-auto">
        
        <div className="flex flex-row items-center justify-between mb-8 gap-4 animate-[fadeUp_0.7s_ease_both]">
          <div>
            <div className="flex items-center gap-2 mb-1 md:mb-3">
              <div className="w-6 md:w-8 h-px bg-[#378079]" />
              <span className="text-[8px] md:text-[10px] tracking-[0.25em] text-[#378079] uppercase font-bold">Laboratoriya</span>
            </div>
            <h2 className="font-black text-xl md:text-5xl tracking-tighter uppercase italic leading-none">
              KOD <span className="text-transparent" style={{ WebkitTextStroke: '1px #f0ebe2' }}>REDAKTORU</span>
            </h2>
          </div>

          <button 
            onClick={runCode}
            className="flex items-center justify-center gap-2 px-5 md:px-8 h-10 md:h-12 bg-[#378079] text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#45a098] active:scale-95 shadow-[0_0_20px_rgba(55,128,121,0.2)] shrink-0"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
          >
            RUN <HiSparkles size={14} className="hidden md:block" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(55,128,121,0.25)] border border-[rgba(55,128,121,0.2)] shadow-2xl overflow-hidden min-h-150 md:h-175">
          
          <div className="bg-[#0b0f17] flex flex-col h-87.5 md:h-full transition-all duration-500">
            <div className="flex bg-[#06090f] border-b border-[rgba(55,128,121,0.1)] overflow-x-auto">
              {[
                { id: "html", name: "index.html" },
                { id: "css", name: "styles.css" },
                { id: "js", name: "script.js" }
              ].map((file) => (
                <button
                  key={file.id}
                  onClick={() => setActiveFile(file.id)}
                  className={`px-6 md:px-8 py-4 text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-bold transition-all relative shrink-0 ${
                    activeFile === file.id 
                    ? "bg-[#0b0f17] text-[#378079]" 
                    : "text-[rgba(240,235,226,0.25)] hover:text-[#f0ebe2]"
                  }`}
                >
                  {file.name}
                  {activeFile === file.id && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#378079]" />}
                </button>
              ))}
            </div>
            
            <div className="flex-1 pt-2">
              <Editor
                theme="vs-dark"
                language={activeFile === "js" ? "javascript" : activeFile}
                value={activeFile === "html" ? html : activeFile === "css" ? css : js}
                onChange={(v) => {
                  if(activeFile === "html") setHtml(v || "");
                  else if(activeFile === "css") setCss(v || "");
                  else setJs(v || "");
                }}
                options={{ fontSize: 14, minimap: { enabled: false }, automaticLayout: true }}
              />
            </div>
          </div>

          <div className="flex flex-col h-150 md:h-full bg-[#0b0f17]">
            <div className="flex-[1.5] bg-[#06090f] m-3 md:m-5 rounded-sm border border-[rgba(240,235,226,0.04)] overflow-hidden relative shadow-inner">
              <iframe title="preview" srcDoc={srcDoc} className="w-full h-full" sandbox="allow-scripts" />
            </div>

            <div className="flex-1 bg-[#04060a] mx-3 md:mx-5 mb-3 md:mb-5 rounded-sm border border-[rgba(55,128,121,0.15)] flex flex-col overflow-hidden">
              <div className="px-4 py-2 border-b border-[rgba(55,128,121,0.1)] flex justify-between items-center bg-[rgba(55,128,121,0.05)] text-[9px]">
                <span className="text-[#378079] font-black flex items-center gap-2 uppercase tracking-widest">
                  <HiTerminal size={14} /> TERMINAL_V1.0
                </span>
                <button onClick={() => setLogs([])} className="text-[rgba(240,235,226,0.2)] hover:text-red-400 uppercase tracking-widest">Clear</button>
              </div>
              <div className="p-3 overflow-y-auto font-mono text-[10px] md:text-[11px] space-y-1.5 custom-scrollbar">
                {logs.map((log, i) => (
                  <div key={i} className={`flex gap-3 ${log.type === 'error' ? 'text-red-400' : 'text-[#f0ebe2]/60'}`}>
                    <span className="text-[#378079] font-bold">λ</span>
                    <span className="break-all">{log.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .monaco-editor, .overflow-guard { background-color: #0b0f17 !important; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(55,128,121,0.3); border-radius: 10px; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default CodeEditor;