var TerminalData = (function () {
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
        BOLD + 'Company' + RESET,
        'Hewlett Packard Enterprise (formerly Juniper Networks)',
        '',
        BOLD + 'Role' + RESET,
        'Software Engineer',
        '',
        BOLD + 'Duration' + RESET,
        'Nov 2024 – Present',
        '',
        BOLD + 'Organization' + RESET,
        'Networking Business Unit',
        '└── ASIC Team',
        '    └── Simulator Team',
        '',
        BOLD + 'Overview' + RESET,
        'Develop software models and simulation infrastructure for',
        'next-generation networking ASICs used in carrier-grade routers.',
        '',
        BOLD + 'Products' + RESET,
        'ASIC',
        '  • Express 5',
        '',
        'Platforms',
        '  • PTX Series Routers',
        '  • vJunosEvolved-BX',
        '  • vBX-COSIM',
        '',
        BOLD + 'Primary Responsibilities' + RESET,
        '• Develop and maintain SystemC behavioral models and C++ testbenches for the Packet Processing Subsystem',
        '',
        '• Build and maintain simulation infrastructure for functional',
        '  verification and automated regression testing',
        '',
        '• Design Python automation to simplify development workflows and',
        '  improve engineering productivity',
        '',
        '• Collaborate with RTL, DV, and software teams to validate',
        '  networking ASIC functionality',
        '',
        BOLD + 'Major Contributions' + RESET,
        '✓ Built distributed regression infrastructure using Python, SQLite, and mpirun to execute regressions across multiple machines, significantly reducing turnaround time.',
        '',
        '✓ Developed custom AI agents to assist with debugging, log analysis, and root-cause investigation, accelerating issue diagnosis and improving developer productivity.',
        '',
        '✓ Diagnosed and resolved large-scale memory leaks, improving simulator stability and long-running reliability',
        '',
        '✓ Improved simulator performance through optimization of critical execution paths',
        '',
        '✓ Integrated AddressSanitizer (ASan) and UndefinedBehaviorSanitizer (UBSan) into the simulator regression workflow, enabling early detection of memory errors and undefined behavior.',
        '',
        '✓ Migrated the simulation environment to a newer Ubuntu release, ensuring compatibility across the development infrastructure.',
        '',
        '✓ Developed Python and Ansible automation to provision and configure Ubuntu machines for a fully reproducible development environment',
        '',
        '✓ Containerized the simulator and its development environment using Docker, providing a reproducible and portable setup across development machines.',
        '',
        '✓ Developed Python utilities to synchronize source code between UVM and COSIM repositories',
        '',
        BOLD + 'Tech Stack' + RESET,
        'Languages',
        '  • C++',
        '  • Python',
        '  • SystemC',
        '',
        'Infrastructure',
        '  • Linux',
        '  • Git',
        '  • GDB',
        '  • Valgrind',
        '',
        BOLD + 'Domains' + RESET,
        '• ASIC Design',
        '• Networking',
        '• Packet Processing',
        '• Behavioral Modeling',
        '• Hardware Simulation',
        '• Regression Infrastructure'
      ]
    },
    ncsu: {
      aliases: ['ncsu'],
      title: 'Researcher, Department of Nuclear Engineering, NC State University',
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
        BOLD + 'Company' + RESET,
        'Siemens Digital Industries Software',
        '',
        BOLD + 'Role' + RESET,
        'Software Engineer Intern',
        '',
        BOLD + 'Duration' + RESET,
        'Jul 2021 – Jun 2022',
        '',
        BOLD + 'Organization' + RESET,
        'Siemens Digital Industries Software',
        '└── MindSphere Platform',
        '    └── Gateway Team',
        '',
        BOLD + 'Overview' + RESET,
        'Worked on the Gateway Team for MindSphere, Siemens\'',
        'Industrial IoT platform, developing backend services,',
        'API gateway infrastructure, and cloud-native deployment',
        'solutions.',
        '',
        BOLD + 'Responsibilities' + RESET,
        '• Developed Java-based RESTful APIs supporting cloud-based industrial IoT applications',
        '',
        '• Built and maintained API gateway components using Kong',
        '',
        '• Developed custom Kong plugins to extend gateway functionality and meet platform requirements',
        '',
        '• Integrated backend services with AWS cloud components',
        '',
        '• Contributed to CI/CD pipelines for automated build, testing, and deployment workflows',
        '',
        '• Managed containerized applications using Docker and Kubernetes',
        '',
        BOLD + 'Major Contributions' + RESET,
        '✓ Upgraded Kong API Gateway in production using blue-green deployment strategy with zero downtime',
        '',
        '✓ Designed and implemented custom Kong plugins to enhance API gateway capabilities',
        '',
        '✓ Improved deployment workflows using ArgoCD for GitOps-based continuous delivery',
        '',
        '✓ Developed scalable REST APIs using Spring Boot',
        '',
        '✓ Worked with multi-cloud infrastructure spanning AWS and Azure',
        '',
        BOLD + 'Technology Stack' + RESET,
        'Backend',
        '  • Java',
        '  • Spring Boot',
        '  • REST APIs',
        '',
        'API Gateway',
        '  • Kong Gateway',
        '  • Custom Kong Plugins',
        '',
        'Cloud',
        '  • AWS',
        '  • Azure',
        '',
        'DevOps',
        '  • Docker',
        '  • Kubernetes',
        '  • ArgoCD',
        '  • CI/CD Pipelines',
        '',
        'Practices',
        '  • Microservices',
        '  • GitOps',
        '  • Blue-Green Deployment',
        '  • Cloud-Native Development',
        '',
        BOLD + 'Impact' + RESET,
        '• Enabled zero-downtime production upgrades',
        '• Improved deployment reliability through automation',
        '• Extended API gateway capabilities through custom plugins',
        '• Built scalable backend services for industrial IoT workloads'
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

  var PROJECT_URLS = {
    switchsim: 'https://switchsim.ashvingaonkar.com/',
    auctioneer: 'https://github.com/Ashvin-G/Auctioneer',
    virtualmouse: 'https://github.com/Ashvin-G/Virtual-Mouse',
    sudokusolver: 'https://github.com/Ashvin-G/Sudoku_Solver',
    blinker: 'https://github.com/Ashvin-G/Blinker',
    fras: 'https://github.com/Ashvin-G/Face-Recognition-Based-Attendance-System'
  };

  var PROJECTS = [
    {
      title: 'SwitchSim: Network Switch Simulator',
      stack: 'Python, FastAPI, React, xterm.js, @xyflow/react',
      points: [
        'Simulates L2 switching: MAC learning, flooding, forwarding, STP loop protection',
        'Campaign mode (guided levels) and Playground mode (drag-and-drop multi-switch topologies)',
        'Terminal-driven CLI via xterm.js, backed by a FastAPI domain model'
      ]
    },
    {
      title: 'Bookipedia: E-commerce for Books',
      stack: 'Node.js, React, MongoDB, Kafka, Ansible, Docker, Grafana',
      points: [
        'Full-stack dev with CI/CD cutting deploy time from 35 to 10 minutes',
        'Kafka-driven real-time inventory tracking and activity logging'
      ]
    },
    {
      title: 'CollabCode: Live Code Editing Platform',
      stack: 'React, Node.js, Websockets, Docker',
      points: [
        'Real-time collaborative editor with auth, chat, and RBAC',
        'MongoDB storage, in-editor commenting'
      ]
    },
    {
      title: 'Auctioneer: Multithreaded Auction & Reliable File Transfer',
      stack: 'Python, Sockets, TCP, UDP, Multithreading',
      points: [
        'Multithreaded TCP auction server running sealed-bid auctions over raw sockets',
        'Custom Stop-and-Wait reliable data transfer (RDT) protocol over UDP'
      ]
    },
    {
      title: 'Virtual Mouse: Hand Gesture Mouse Control',
      stack: 'Python, OpenCV, MediaPipe, Numpy, Pynput',
      points: [
        'Camera-driven virtual mouse tracking 20 hand landmarks in real time',
        'Gesture-to-action mapping for click, double-click, and scroll'
      ]
    },
    {
      title: 'Sudoku Solver: CNN-Based Image Recognition & Backtracking',
      stack: 'Python, OpenCV, TensorFlow, Numpy, Matplotlib',
      points: [
        'Image pipeline isolating and splitting a Sudoku grid from a photo',
        'CNN digit recognition combined with a backtracking solver'
      ]
    },
    {
      title: 'Blinker: Eye-Blink to Morse Code Communication',
      stack: 'Python, OpenCV, dlib, Numpy',
      points: [
        'Detects 68 facial landmarks to track eye state and blink duration',
        'Classifies blinks as Morse Code dots/dashes and decodes to text'
      ]
    },
    {
      title: 'Face Recognition Based Attendance System',
      stack: 'Python, OpenCV, Haar Cascade, Numpy',
      points: [
        'End-to-end facial recognition pipeline for automated attendance',
        'Three-stage workflow: dataset capture, model training, live detection'
      ]
    },
    {
      title: 'Secure File Transfer & MITM Attacks',
      stack: 'Python, PyCryptodome, Sockets, AES-GCM, Diffie-Hellman',
      points: [
        'Encrypted file transfer over sockets using AES-256-GCM with PBKDF2-derived keys',
        'MITM proxy performing separate DH exchanges to decrypt/re-encrypt traffic'
      ]
    },
    {
      title: 'Network Security Audit: NC State Infrastructure Recon',
      stack: 'Python, Censys, Shodan, Plotly, Certificate Transparency',
      points: [
        'Passive network security audit identifying owned IPv4 CIDR blocks',
        'Censys/Shodan host profiling and shadow IT discovery via certificate transparency'
      ]
    }
  ];

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
        '<role>       one of: hpe, juniper, ncsu, siemens, git',
        '--verbose    show detailed responsibilities and tech stack for <role>'
      ],
      examples: [
        'experience',
        'experience hpe',
        'experience hpe --verbose'
      ]
    },
    projects: {
      synopsis: 'projects [<name> --open]',
      description: 'Lists notable projects with tech stack and a short summary of each. Pass a project name with --open to open its live demo in a new tab.',
      options: [
        '<name>     one of: switchsim, auctioneer, virtualmouse, sudokusolver, blinker, fras',
        '--open     open the live demo for <name> or GitHub project source code'
      ],
      examples: [
        'projects',
        'projects switchsim --open'
      ]
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

  return {
    BOLD: BOLD,
    DIM: DIM,
    RESET: RESET,
    EXPERIENCE: EXPERIENCE,
    ALIAS_TO_KEY: ALIAS_TO_KEY,
    PROJECT_URLS: PROJECT_URLS,
    PROJECTS: PROJECTS,
    MAN_PAGES: MAN_PAGES
  };
})();
