
const callbackStack = [];
const vscode = acquireVsCodeApi();
function command(cmd, callback) {
  if (!cmd) {
    return;
  }
  let args = Array.from(arguments);
  if (typeof args[args.length - 1] === 'function') {
    callback = args[args.length - 1];
    args.length = args.length - 1;
  } else {
    callback = undefined;
  }
  args.shift();
  const messageId = new Date().getTime() + Math.random();
  
  callbackStack.push({
    messageId,
    callback
  });
  vscode.postMessage({
    messageId,
    command: cmd,
    parameter: args
  });
}

window.addEventListener('message', event => {
  const message = event.data;
  for (let index = 0; index < callbackStack.length; index++) {
    const callbackItem = callbackStack[index];
    if (callbackItem.messageId === message.messageId) {
      if (callbackItem.callback) {
        callbackItem.callback(message.payload);
      }
      callbackStack.splice(index, 1);
      break;
    }
  }
});

// function hello() {
//   command('extension.sayHello');
// }

// function closeTab() {
//   command('extension.vscexpressclose', 'index.html');
// }

function search() {
  command('stackpasta.search');
}

function favorite() {
  command('stackpasta.favorite');
}

function history() {
  command('stackpasta.history');
}

function offline() {
  command('stackpasta.offline');
}

function pinned() {
  command('stackpasta.pinned');
}

function setting() {
  command('stackpasta.setting');
}