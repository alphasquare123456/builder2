

// https://grapesjs.com/docs/api/editor.html#getwrapper
'use client'
import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import  'grapesjs-preset-webpage';
import plugin1 from 'grapesjs-blocks-basic';



export default function Home() {
  const editorRef = useRef(null);

  useEffect(() => {

    const editor = grapesjs.init({
      showOffsets: 1,
      noticeOnUnload: 0,
      container: '#gjs',
      fromElement: true, // Load existing content from the container
      // For example:
      storageManager: { autoload: 0 },
      styleManager : {
        sectors: [{
            name: 'General',
            open: false,
            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']
          },{
            name: 'Flex',
            open: false,
            buildProps: ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content', 'order', 'flex-basis', 'flex-grow', 'flex-shrink', 'align-self']
          },{
            name: 'Dimension',
            open: false,
            buildProps: ['width', 'height', 'max-width', 'min-height', 'margin', 'padding'],
          },{
            name: 'Typography',
            open: false,
            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-shadow'],
          },{
            name: 'Decorations',
            open: false,
            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],
          },{
            name: 'Extra',
            open: false,
            buildProps: ['transition', 'perspective', 'transform'],
          }
        ],
      },
      plugins: [plugin1,'grapesjs-preset-webpage'],
      pluginsOpts: {
        [plugin1]: { /* options */ },
        'grapesjs-preset-webpage': {
          // Add preset-specific options here
        },
      },
     
    });
    
      
   // Save the editor instance to the ref
   editorRef.current = editor;

    
    setHtmlContent()
    // Cleanup on component unmount
    return () => {
      editor.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once after initial render


  const getHtmlContent = () => {
    const editor = editorRef.current;

    if (editor) {
      // Get the HTML content
      const htmlContent = editor.getHtml();

      // Log or use the HTML content as needed
      console.log(htmlContent);
    }
  };

  const setHtmlContent = () => {
    const editor = editorRef.current;
    const newHtmlContent = '<div data-gjs-highlightable="true" id="it4a" data-gjs-type="wrapper" class="gjs-hovered"><div data-gjs-highlightable="true" id="ipxi" data-gjs-type="default" draggable="true" class="panel gjs-selected"><div data-gjs-highlightable="true" id="i5x9i" data-gjs-type="text" draggable="true" class="">Test block</div><div data-gjs-highlightable="true" id="ikxkj" data-gjs-type="text" draggable="true" class="">Test block</div><h1 data-gjs-highlightable="true" id="i7l7" data-gjs-type="text" draggable="true" class="welcome">Welcome to</h1><div data-gjs-highlightable="true" id="ihu3" data-gjs-type="default" draggable="true" class="big-title"><svg id="ixbw" data-gjs-type="svg" draggable="true" viewBox="0 0 100 100" class="logo"><path id="ioe1" data-gjs-type="svg-in" draggable="true" d="M40 5l-12.9 7.4 -12.9 7.4c-1.4 0.8-2.7 2.3-3.7 3.9 -0.9 1.6-1.5 3.5-1.5 5.1v14.9 14.9c0 1.7 0.6 3.5 1.5 5.1 0.9 1.6 2.2 3.1 3.7 3.9l12.9 7.4 12.9 7.4c1.4 0.8 3.3 1.2 5.2 1.2 1.9 0 3.8-0.4 5.2-1.2l12.9-7.4 12.9-7.4c1.4-0.8 2.7-2.2 3.7-3.9 0.9-1.6 1.5-3.5 1.5-5.1v-14.9 -12.7c0-4.6-3.8-6-6.8-4.2l-28 16.2"></path></svg><span data-gjs-highlightable="true" id="iqzd" data-gjs-type="text" draggable="true" class="">GrapesJS</span></div><div data-gjs-highlightable="true" id="iju8" data-gjs-type="default" draggable="true" class="description"><img id="iztok" data-gjs-type="image" draggable="true" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+" class="gjs-plh-image" /></div></div></div>';

    // Clear the existing components
    editor.DomComponents.clear();
  
    // Create a new component from the HTML string
    const newComponent = editor.DomComponents.getWrapper();
    newComponent.set('content', newHtmlContent);
  
    // Add the new component to the canvas
    if (newComponent && newComponent.view && newComponent.view.el) {
      // Access the 'el' property only if it exists
      editor.getContainer().appendChild(newComponent.view.el);
    }
  };

  return (<><div id="gjs" ></div></>
  );
}
