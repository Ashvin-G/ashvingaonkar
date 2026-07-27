(function () {
  var DEV_MODE_ENABLED = true;

  var PROMPT = TerminalCommands.PROMPT;
  var ESC_SEQ = String.fromCharCode(27);
  var BOLD = TerminalData.BOLD;
  var DIM = TerminalData.DIM;
  var RESET = TerminalData.RESET;

  var ARROW_UP = ESC_SEQ + '[A';
  var ARROW_DOWN = ESC_SEQ + '[B';
  var term, fitAddon, inputBuffer = '', history = [], historyIdx = -1, initialized = false;

  function writePrompt() {
    term.write('\r\n' + PROMPT);
  }

  function printLines(lines) {
    lines.forEach(function (line) {
      term.write('\r\n' + line);
    });
  }

  function initTerminal() {
    term = new Terminal({
      cursorBlink: true,
      fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
      fontSize: 14,
      theme: {
        background: '#0a0c10',
        foreground: '#e7e9ee',
        cursor: '#5b8def',
        selectionBackground: '#5b8def55'
      }
    });
    fitAddon = new FitAddon.FitAddon();
    term.loadAddon(fitAddon);
    term.open(document.getElementById('terminal-container'));
    fitAddon.fit();

    term.attachCustomKeyEventHandler(function (e) {
      if (e.key === 'Escape' && e.type === 'keydown') {
        closeTerminal();
        return false;
      }
      return true;
    });

    var banner = [
      BOLD + '██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗' + RESET,
      BOLD + '██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝' + RESET,
      BOLD + '██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ' + RESET,
      BOLD + '██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ' + RESET,
      BOLD + '╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗' + RESET,
      BOLD + ' ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝' + RESET,
      '',
      DIM + '  Type `help` to see available commands.' + RESET,
      ''
    ];
    banner.forEach(function (line) { term.writeln(line); });
    term.write(PROMPT);

    term.onData(function (data) {
      var code = data.charCodeAt(0);

      if (data === '\r') {
        history.push(inputBuffer);
        historyIdx = history.length;
        var result = TerminalCommands.run(inputBuffer, closeTerminal);
        inputBuffer = '';
        if (result === 'CLEAR') {
          term.write('\r\n\x1b[K');
          term.clear();
          term.write(PROMPT);
        } else if (result === null) {
          term.write('\r\n' + PROMPT);
        } else {
          printLines(result);
          term.write('\r\n' + PROMPT);
        }
      } else if (code === 127) {
        if (inputBuffer.length > 0) {
          inputBuffer = inputBuffer.slice(0, -1);
          term.write('\b \b');
        }
      } else if (data === ARROW_UP) {
        if (historyIdx > 0) {
          historyIdx--;
          replaceInput(history[historyIdx] || '');
        }
      } else if (data === ARROW_DOWN) {
        if (historyIdx < history.length - 1) {
          historyIdx++;
          replaceInput(history[historyIdx] || '');
        } else {
          historyIdx = history.length;
          replaceInput('');
        }
      } else if (code >= 32) {
        inputBuffer += data;
        term.write(data);
      }
    });

    window.addEventListener('resize', function () {
      if (fitAddon && document.getElementById('terminal-overlay').classList.contains('active')) {
        fitAddon.fit();
      }
    });
  }

  function replaceInput(newValue) {
    while (inputBuffer.length > 0) {
      term.write('\b \b');
      inputBuffer = inputBuffer.slice(0, -1);
    }
    inputBuffer = newValue;
    term.write(newValue);
  }

  function openTerminal() {
    var overlay = document.getElementById('terminal-overlay');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (!initialized) {
      initTerminal();
      initialized = true;
    }
    setTimeout(function () {
      fitAddon.fit();
      term.focus();
    }, 0);
  }

  function closeTerminal() {
    document.getElementById('terminal-overlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  if (DEV_MODE_ENABLED) {
    document.getElementById('devmode-btn').addEventListener('click', openTerminal);
    document.getElementById('terminal-exit').addEventListener('click', closeTerminal);
    document.addEventListener('keydown', function (e) {
      var overlay = document.getElementById('terminal-overlay');
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeTerminal();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && !overlay.classList.contains('active')) {
        e.preventDefault();
        openTerminal();
      }
    });
  } else {
    var devmodeBtn = document.getElementById('devmode-btn');
    if (devmodeBtn) devmodeBtn.style.display = 'none';
  }
})();
