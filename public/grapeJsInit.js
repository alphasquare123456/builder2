
const editor = grapesjs.init({
  showOffsets: 1,
  noticeOnUnload: 0,
  container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: { autoload: 0 },
  styleManager: {
    // ... your style manager configuration
  },
});

editor.BlockManager.add('testBlock', {
  label: 'Block',
  attributes: { class: 'gjs-fonts gjs-f-b1' },
  content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">Test block</div>`,
});