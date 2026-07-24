var TerminalCommands = (function () {
  var BOLD = TerminalData.BOLD;
  var DIM = TerminalData.DIM;
  var RESET = TerminalData.RESET;
  var EXPERIENCE = TerminalData.EXPERIENCE;
  var ALIAS_TO_KEY = TerminalData.ALIAS_TO_KEY;
  var MAN_PAGES = TerminalData.MAN_PAGES;
  var PROMPT = 'ashvin@portfolio:~$ ';

  var PROJECT_URLS = {
    switchsim: 'https://switchsim.ashvingaonkar.com/'
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
        ['juniper', 'ncsu', 'siemens', 'git'].forEach(function (key) {
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
        return ['', 'Unknown role: ' + args[0] + ' (try: hpe, juniper, ncsu, siemens, git)', ''];
      }

      var role = EXPERIENCE[key];
      var verbose = args[1] && args[1].toLowerCase() === '--verbose';
      if (verbose) {
        return [''].concat(role.verbose).concat(['']);
      }
      return ['', BOLD + role.title + RESET, DIM + role.date + RESET].concat(role.brief).concat(['']);
    },
    projects: function (args) {
      args = args || [];
      if (args[0] && args[1] && args[1].toLowerCase() === '--open') {
        var name = args[0].toLowerCase();
        var url = PROJECT_URLS[name];
        if (!url) {
          return ['', 'Unknown project: ' + name + ' (try: switchsim)', ''];
        }
        window.open(url, '_blank', 'noopener');
        return ['', 'Opening ' + url + ' ...', ''];
      }

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

  function run(cmd, onExit) {
    var trimmed = cmd.trim();
    var lower = trimmed.toLowerCase();

    if (trimmed === '') return [];
    if (lower === 'clear') return 'CLEAR';
    if (lower === 'exit') { onExit(); return null; }
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

  return {
    PROMPT: PROMPT,
    run: run
  };
})();
