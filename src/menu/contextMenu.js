const {remote} = window.require('electron')
const {Menu, MenuItem} = remote

// text context menu
const template = [{
  label: 'Undo',
  accelerator: 'CmdOrCtrl+Z',
  role: 'undo'
}, {
  label: 'Redo',
  accelerator: 'Shift+CmdOrCtrl+Z',
  role: 'redo'
}, {
  type: 'separator'
}, {
  label: 'Cut',
  accelerator: 'CmdOrCtrl+X',
  role: 'cut'
}, {
  label: 'Copy',
  accelerator: 'CmdOrCtrl+C',
  role: 'copy'
}, {
  label: 'Paste',
  accelerator: 'CmdOrCtrl+V',
  role: 'paste'
}, {
  type: 'separator'
}, {
  label: 'Select All',
  accelerator: 'CmdOrCtrl+A',
  role: 'selectall'
}]

const contextMenu = Menu.buildFromTemplate(template)

// export the menu
export default contextMenu
