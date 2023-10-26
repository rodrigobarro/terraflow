"use client";

import React from "react";

import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <div>
      <Editor
        height="100vh"
        defaultLanguage="javascript"
        defaultValue="// comment"
        theme="vs-dark"
      />
    </div>
  );
};

export default CodeEditor;
