(function () {
  var DEV_MODE_ENABLED = false;

  var PROMPT = 'ashvin@portfolio:~$ ';
  var ESC_SEQ = String.fromCharCode(27);
  var BOLD = ESC_SEQ + '[1;36m';
  var DIM = ESC_SEQ + '[90m';
  var RESET = ESC_SEQ + '[0m';

  var EXPERIENCE = {
    juniper: {
      aliases: ['hpe', 'juniper'],
      title: 'Software Engineer, Juniper Networks Inc. (Acquired by HPE)',
      date: 'Nov 2024 - Present',
      brief: [
        '  - Maintain and support ASIC simulation environments for networking silicon',
        '  - Design/develop verification testbenches using C++ and SystemC',
        '  - Build Python automation for simulation workflows and infrastructure'
      ],
      verbose: [
        '  (placeholder — detailed writeup coming soon)',
        '  Tech stack: C++, SystemC, Python, Linux, Valgrind, Git',
        '  - Deeper description of day-to-day responsibilities to be added here.',
        '  - Specific projects, scale, and impact details to be added here.'
      ]
    },
    ncstate: {
      aliases: ['ncstate'],
      title: 'Researcher, Department of Nuclear Engineering, NC State',
      date: 'Jun 2024 - Nov 2024',
      brief: [
        '  - Revamped OpenPRA frontend with React + Elastic UI',
        '  - Built a Global Data Store with Cypress test coverage',
        '  - Documented APIs with Swagger'
      ],
      verbose: [
        '  (placeholder — detailed writeup coming soon)',
        '  Tech stack: React, Elastic UI, Cypress, Swagger, Node.js',
        '  - Deeper description of day-to-day responsibilities to be added here.',
        '  - Specific projects, scale, and impact details to be added here.'
      ]
    },
    siemens: {
      aliases: ['siemens'],
      title: 'Graduate Software Engineer, Siemens',
      date: 'Jul 2021 - Jun 2022',
      brief: [
        '  - Led zero-downtime Kong upgrade, 20% performance boost',
        '  - Built Java REST APIs on AWS, Jenkins pipelines (+30% deploy efficiency)',
        '  - Built custom Kong plugins'
      ],
      verbose: [
        '  (placeholder — detailed writeup coming soon)',
        '  Tech stack: Java, AWS, Kong, Jenkins, REST',
        '  - Deeper description of day-to-day responsibilities to be added here.',
        '  - Specific projects, scale, and impact details to be added here.'
      ]
    },
    git: {
      aliases: ['git'],
      title: 'Software Engineer Intern, New Age Incubation Center, KLS Gogte Institute of Technology',
      date: 'Mar 2019 - May 2019',
      brief: [
        '  - Designed a secure IoT application using defense-in-depth, multi-layer encryption (RSA)',
        '  - Implemented validation to verify data accuracy/integrity after decryption'
      ],
      verbose: [
        '  (placeholder — detailed writeup coming soon)',
        '  Tech stack: Python, RSA, IoT protocols',
        '  - Deeper description of day-to-day responsibilities to be added here.',
        '  - Specific projects, scale, and impact details to be added here.'
      ]
    }
  };

  var ALIAS_TO_KEY = {};
  Object.keys(EXPERIENCE).forEach(function (key) {
    EXPERIENCE[key].aliases.forEach(function (alias) {
      ALIAS_TO_KEY[alias] = key;
    });
  });

  var MAN_PAGES = {
    about: {
      synopsis: 'about',
      description: 'Prints a short bio: who I am and what I currently work on.'
    },
    skills: {
      synopsis: 'skills',
      description: 'Lists technical skills, grouped by languages, skillset, infrastructure, and frameworks/tools.'
    },
    experience: {
      synopsis: 'experience [<role>] [--verbose]',
      description: 'Prints work experience. With no arguments, prints a brief overview of every role. Pass a role key to see just that role; add --verbose for an expanded writeup.',
      options: [
        '<role>       one of: hpe, juniper, ncstate, siemens, git',
        '--verbose    show detailed responsibilities and tech stack for <role>'
      ],
      examples: [
        'experience',
        'experience hpe',
        'experience ncstate --verbose'
      ]
    },
    projects: {
      synopsis: 'projects',
      description: 'Lists notable projects with tech stack and a short summary of each.'
    },
    education: {
      synopsis: 'education',
      description: 'Prints education background.'
    },
    resume: {
      synopsis: 'resume',
      description: 'Opens/links to a resume, if available.'
    },
    contact: {
      synopsis: 'contact',
      description: 'Prints contact information: location, email, phone, LinkedIn, GitHub.'
    },
    github: {
      synopsis: 'github',
      description: 'Opens my GitHub profile in a new tab.'
    },
    linkedin: {
      synopsis: 'linkedin',
      description: 'Opens my LinkedIn profile in a new tab.'
    },
    clear: {
      synopsis: 'clear',
      description: 'Clears the terminal screen.'
    },
    exit: {
      synopsis: 'exit',
      description: 'Closes Dev Mode and returns to the normal site.'
    },
    man: {
      synopsis: 'man <command>',
      description: 'Shows usage details for a given command.'
    }
  };

  var COMMANDS = {
    help: function () {
      return [
        '',
        'Available commands:',
        '',
        '  about          Who am I?',
        '  skills         Technical skills',
        '  experience     Work experience',
        '  projects       View projects',
        '  education      Education background',
        '  resume         Open resume',
        '  contact        Contact information',
        '  github         GitHub profile',
        '  linkedin       LinkedIn profile',
        '  man            Show usage details for a command',
        '  clear          Clear the terminal',
        '  exit           Return to normal site',
        '',
        'fun:',
        '  sudo hire-ashvin',
        ''
      ];
    },
    man: function (args) {
      args = args || [];
      if (args.length === 0) {
        return ['', 'What manual page do you want? (try `man experience`)', ''];
      }

      var name = args[0].toLowerCase();
      var page = MAN_PAGES[name];
      if (!page) {
        return ['', 'No manual entry for ' + name, ''];
      }

      var lines = [
        '',
        BOLD + 'NAME' + RESET,
        '  ' + name,
        '',
        BOLD + 'SYNOPSIS' + RESET,
        '  ' + page.synopsis,
        '',
        BOLD + 'DESCRIPTION' + RESET,
        '  ' + page.description
      ];

      if (page.options) {
        lines.push('', BOLD + 'OPTIONS' + RESET);
        page.options.forEach(function (opt) { lines.push('  ' + opt); });
      }

      if (page.examples) {
        lines.push('', BOLD + 'EXAMPLES' + RESET);
        page.examples.forEach(function (ex) { lines.push('  ' + PROMPT + ex); });
      }

      lines.push('');
      return lines;
    },
    about: function () {
      return [
        '',
        'Ashvin Gaonkar',
        'Software Engineer',
        '',
        'Currently building models of networking hardware at Juniper Networks (acquired by HPE):',
        '  - C++',
        '  - SystemC',
        '  - Python',
        '  - Linux',
        '',
        'Interested in:',
        '  - Network ASICs',
        '  - Hardware simulation',
        '  - Computer architecture',
        ''
      ];
    },
    skills: function () {
      return [
        '',
        BOLD + 'Languages' + RESET,
        '  Python, C++, Java, JavaScript, HTML, CSS, SQL, NoSQL, Node.js, React',
        '',
        BOLD + 'Skillset' + RESET,
        '  API Development, CI/CD, Web Development, Data Analysis, Data Visualization, Testing',
        '',
        BOLD + 'Infrastructure' + RESET,
        '  AWS, Azure, Docker, Kubernetes, Git, Jenkins, Grafana, Prometheus',
        '',
        BOLD + 'Frameworks & Tools' + RESET,
        '  Spring, Kafka, Flask, Django, Cypress, JUnit, PyTest, Cucumber, Postman',
        ''
      ];
    },
    experience: function (args) {
      args = args || [];
      if (args.length === 0) {
        var all = [''];
        ['juniper', 'ncstate', 'siemens', 'git'].forEach(function (key) {
          var role = EXPERIENCE[key];
          all.push(BOLD + role.title + RESET);
          all.push(DIM + role.date + RESET);
          all = all.concat(role.brief);
          all.push('');
        });
        return all;
      }

      var key = ALIAS_TO_KEY[args[0].toLowerCase()];
      if (!key) {
        return ['', 'Unknown role: ' + args[0] + ' (try: hpe, juniper, ncstate, siemens, git)', ''];
      }

      var role = EXPERIENCE[key];
      var verbose = args[1] && args[1].toLowerCase() === '--verbose';
      var body = verbose ? role.verbose : role.brief;
      return ['', BOLD + role.title + RESET, DIM + role.date + RESET].concat(body).concat(['']);
    },
    projects: function () {
      return [
        '',
        BOLD + 'SwitchSim: Network Switch Simulator' + RESET,
        DIM + 'Python, FastAPI, React, xterm.js, @xyflow/react' + RESET,
        '  - Simulates L2 switching: MAC learning, flooding, forwarding, STP loop protection',
        '  - Campaign mode (guided levels) and Playground mode (drag-and-drop multi-switch topologies)',
        '  - Terminal-driven CLI via xterm.js, backed by a FastAPI domain model',
        '',
        BOLD + 'Bookipedia: E-commerce for Books' + RESET,
        DIM + 'Node.js, React, MongoDB, Kafka, Ansible, Docker, Grafana' + RESET,
        '  - Full-stack dev with CI/CD cutting deploy time from 35 to 10 minutes',
        '  - Kafka-driven real-time inventory tracking and activity logging',
        '',
        BOLD + 'CollabCode: Live Code Editing Platform' + RESET,
        DIM + 'React, Node.js, Websockets, Docker' + RESET,
        '  - Real-time collaborative editor with auth, chat, and RBAC',
        '  - MongoDB storage, in-editor commenting',
        ''
      ];
    },
    education: function () {
      return [
        '',
        BOLD + 'North Carolina State University' + RESET,
        DIM + 'Aug 2022 - May 2024' + RESET,
        '  Master of Computer Science - GPA 3.8 / 4.0',
        '',
        BOLD + 'KLS Gogte Institute of Technology, Belgaum, India' + RESET,
        DIM + 'Aug 2017 - Jul 2021' + RESET,
        '  Bachelor of Engineering, Computer Science - Top 10%, GPA 9.43 / 10.0',
        ''
      ];
    },
    contact: function () {
      return [
        '',
        DIM + 'Location' + RESET + '  Sunnyvale, CA',
        DIM + 'Email' + RESET + '     ashvingaonkar@gmail.com',
        DIM + 'Phone' + RESET + '     +1 (984) 286-7889',
        DIM + 'LinkedIn' + RESET + '  linkedin.com/in/ashvin-gaonkar',
        DIM + 'GitHub' + RESET + '    github.com/Ashvin-G',
        ''
      ];
    },
    github: function () {
      window.open('https://github.com/Ashvin-G', '_blank', 'noopener');
      return ['', 'Opening github.com/Ashvin-G ...', ''];
    },
    linkedin: function () {
      window.open('https://linkedin.com/in/ashvin-gaonkar', '_blank', 'noopener');
      return ['', 'Opening linkedin.com/in/ashvin-gaonkar ...', ''];
    },
    resume: function () {
      return ['', 'Resume link coming soon — reach out via `contact` in the meantime.', ''];
    }
  };

  function run(term, cmd) {
    var trimmed = cmd.trim();
    var lower = trimmed.toLowerCase();

    if (trimmed === '') return [];
    if (lower === 'clear') { term.write('\r\x1b[K'); term.clear(); return null; }
    if (lower === 'exit') { closeTerminal(); return null; }
    if (lower === 'sudo hire-ashvin') {
      return [
        '',
        '[sudo] password for ashvin: ',
        'Permission granted.',
        'Initiating hiring sequence... done.',
        'Contact ashvingaonkar@gmail.com to make it official.',
        ''
      ];
    }
    var parts = trimmed.split(/\s+/);
    var base = parts[0].toLowerCase();
    var cmdArgs = parts.slice(1);

    if (COMMANDS[base]) return COMMANDS[base](cmdArgs);

    return ['', 'command not found: ' + trimmed + ' (try `help`)', ''];
  }

  var ESC = String.fromCharCode(27);
  var ARROW_UP = ESC + '[A';
  var ARROW_DOWN = ESC + '[B';
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
        var result = run(term, inputBuffer);
        inputBuffer = '';
        if (result === null) {
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
      if (e.key === 'Escape' && document.getElementById('terminal-overlay').classList.contains('active')) {
        closeTerminal();
      }
    });
  } else {
    var devmodeBtn = document.getElementById('devmode-btn');
    if (devmodeBtn) devmodeBtn.style.display = 'none';
  }
})();
