const {app ,BrowserWindow}= require("electron")

let win;

function CreateWindows()
{

    win= new BrowserWindow({
        height:800,
        width:600,
        webPreferences:
        {
            nodeIntegration:true
        }
    })
    win.loadFile("index.html")
}
app.whenReady().then(CreateWindows);