'use client'
import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import plugin from 'grapesjs-preset-newsletter';


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
      plugins: [plugin],
      pluginsOpts: {
        [plugin]: { /* options */ },
      },
     
     
    });
    
    editor.addComponents({
      type: 'text',
       classes:['cls'],
       content: 'Your custom HTML content goes here',
        style: {
          // Add any additional styling properties as needed
          color: 'black',
          'font-size': '36px',
        },
     })
     editor.addComponents({
      type: 'image',
       classes:['cls'],
       content: 'New componesssssssssssssnt'
     })
     editor.addComponents({
      type: 'text',
       classes:['cls'],
       content: 'New componesst'
     })
   // Save the editor instance to the ref
   editorRef.current = editor;


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

      console.log(editor.Commands.run('gjs-get-inlined-html'))
      // Log or use the HTML content as needed
      console.log(htmlContent);
    }
  };

 

  return (<><div id="gjs" ></div></>
  );
}
