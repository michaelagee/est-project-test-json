const { app, BrowserWindow } = require("electron");
const Store = require("electron-store");
const store = new Store();

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: "./src/message-control/renderer.js",
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  //load the index.html from a url
  win.loadURL("http://localhost:3000");

  // Open the DevTools.
  win.webContents.openDevTools();

  // create new electron store
  //   store.set("unicorn", "🦄");
  console.log(store.get("unicorn"));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
// In main process.
const { ipcMain } = require("electron");

ipcMain.on("asynchronous-message", (event, arg) => {
  console.log('wtf bro', arg); // prints "ping"
  if (arg === "ping") event.reply("asynchronous-reply", "pong!");
  else event.reply("asynchronous-reply", "please, send me ping.");
});

ipcMain.on("synchronous-message", (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = "pong";
});
