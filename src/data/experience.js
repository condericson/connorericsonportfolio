export const WORK_HISTORY = [
    {
        id: 'datascan',
        company: 'DataScan',
        location: 'Alpharetta, GA',
        role: 'Staff Software Engineer',
        period: 'October 2019 – Present',
        startDate: '2019-10-01',
        description: [
            "As a <span class='highlight-text'>Staff Software Engineer</span>, I played a key role in the technical evolution of DataScan’s ecosystem, progressing rapidly from a mid-level role by consistently delivering quality architectural solutions. My tenure has spanned the full stack, from leading the UI development of green field applications and establishing an <span class='highlight-text'>Angular component library</span>, to spearheading development on <span class='highlight-text'>market-first software features</span> and crafting the beginnings of a centralized internal <span class='highlight-text'>administration platform</span>, which is now the primary touchpoint on all client configurations for my team's application.",
            "My journey at DataScan started with the <span class='highlight-text'>modernization effort of a legacy UI</span> using Angular. During that time I was recognized for my drive to learn and grow as well as my commitment to improving the application I worked on. This led to my selection for a key <span class='highlight-text'>greenfield initiative</span> where I built out the bulk of the UI and supporting C# endpoints, setting the standard for future development on that application and multiples to come. Once this project was established and more team members had joined, I took on another challenge involving customer risk determination and management where I built out pipelines for aggregating data from multiple sources, including apis and <span class='highlight-text'>Kafka event streams</span>, and then used that data to build out a risk determination application to drive <span class='highlight-text'>real-time business decisions</span> for clients.",
            "Throughout all my years on all my different teams, the applications may have varied in purpose, but many of my goals remained consistent. First was maintaining user friendly UI's despite complex business logic and user interactions. I was also focused on building <span class='highlight-text'>reusable, sustainable code</span> through rigorous <span class='highlight-text'>unit testing</span>. I made a point to always drive up the unit test coverage of any project I worked on to at least 70%, if not higher. And finally, <span class='highlight-text'>mentoring</span> by sharing my knowledge and expertise with more junior developers and interns through pair programming, code reviews, and group presentations. I'm proud to say I filled the role of a <span class='highlight-text'>subject matter expert</span> on multiple teams and was a go to person for many of my peers.",
        ],
        skills: {
            frontEnd: ['Angular', 'TypeScript', 'JavaScript', 'SCSS'],
            backEnd: ['.NET', 'C#', 'PostgreSQL', 'AWS DocumentDB/MongoDB', 'Redis', 'AWS Lambdas', 'AWS ECS', 'AWS SQS', 'Kafka', 'Azure', 'Java', 'Terraform'],
            workflow: ['Git', 'GitKraken', 'GitLab CI', 'Jira', 'Confluence', 'Figma', 'Slack']
        }
    },
    {
        id: 'aarons',
        company: "Aaron's Inc",
        location: 'Kennesaw, GA',
        role: 'Intermediate Software Engineer',
        period: 'August 2017 – October 2019',
        startDate: '2017-08-01',
        endDate: '2019-10-01',
        description: [
            "At Aaron's, I worked on the <span class='highlight-text'>E-Commerce platform</span> and Customer Account Management applications. After starting as a Junior Developer, I quickly rose to a Intermediate Software Engineer via demonstrating my passion for learning and my focus on user experience. I primarily focused on front end development as this was my passion and filled a void within the team. My focus initially was on expanding the ASP.NET MVC style architecture to support new features and business requirements, but later was focused on a building out the UI following the company's migration to the <span class='highlight-text'>Salesforce Commerce Cloud</span> platform. Additionally, I utilized <span class='highlight-text'>feature flagging</span> to enable frequent production deployments and conducted <span class='highlight-text'>A/B testing</span> to validate hypotheses for website optimization."
        ],
        skills: {
            frontEnd: ['React', 'JavaScript', 'Salesforce Commerce Cloud'],
            backEnd: ['.NET', 'C#', 'MSSQL', 'Microservices', 'SQL'],
            workflow: ['Jira', 'Git', 'Agile', 'Slack']
        }
    },
    {
        id: 'mobileapphero',
        company: 'Mobile App Hero',
        location: 'Atlanta, GA',
        role: 'Mobile App Development Intern',
        period: 'July 2017 – August 2017',
        startDate: '2017-07-01',
        endDate: '2017-08-01',
        description: [
            "My career began with an internship where I built <span class='highlight-text'>cross-platform web applications</span> using <span class='highlight-text'>React Native</span>. This experience provided a strong foundation in industry best practices through close collaboration with senior developers."
        ],
        skills: {
            frontEnd: ['React Native', 'JavaScript'],
            backEnd: [],
            workflow: ['Expo']
        }
    },
    {
        id: 'thinkful',
        company: 'Thinkful',
        location: 'Atlanta, GA',
        role: 'Coding Instructor',
        period: 'March 2017 – August 2017',
        startDate: '2017-03-01',
        endDate: '2017-08-01',
        description: [
            "Parallel to my early development work, I <span class='highlight-text'>taught coding workshops</span> covering fundamentals of web development. I prepared presentation materials and trained teaching assistants to deliver effective learning experiences."
        ],
        skills: {
            frontEnd: ['HTML', 'CSS', 'JavaScript'],
            backEnd: [],
            workflow: ['PowerPoint', 'CodePen.io']
        }
    },
    {
        id: 'marcus-autism-center',
        company: 'Marcus Autism Center',
        location: 'Atlanta, GA',
        role: 'Clinical Specialist',
        period: 'August 2013 – March 2017',
        description: [
            "As a Clinical Specialist, I helped children with disabilities develop functional eating behaviors and trained team members on data management and treatment implementation. This background in psychology now offers me a <span class='highlight-text'>unique advantage in software development</span>, particularly in understanding user behavior and designing intuitive interfaces. It also enhances my approach to <span class='highlight-text'>leadership and team collaboration</span>, fostering better communication and empathy within technical teams."
        ]
    }
];

export const ADDITIONAL_PROJECTS = [

    {
        id: 'trivia-slack-bot',
        name: 'Trivia Slack Bot',
        period: 'September 2017 – Present',
        description: [
            "Wrote two versions, one as a .NET console application and another as a Node.js server.",
            "Interfaced with Slack API and posted a daily trivia question that was answered by players and maintained through a MSSQL database.",
            "Hosted in Azure.",
            "Currently supports 120+ players"
        ],
        techStack: {
            frontEnd: [],
            backEnd: ['.NET', 'Node.js', 'Slack API', 'MSSQL', 'Azure'],
            workflow: []
        }
    },
    {
        id: 'trahlyta-estates',
        name: 'Trahlyta Estates HOA Site',
        period: 'September 2017 – September 2022',
        description: [
            "Written in Node.js, with an EJS front end framework, and a MongoDB database structure.",
            "Supported 40+ residents, providing address book, emergency contact, vendor, and other documentation information."
        ],
        techStack: {
            frontEnd: ['EJS'],
            backEnd: ['Node.js', 'MongoDB'],
            workflow: []
        }
    }
];

export const EDUCATION = [
    {
        id: 'thinkful',
        institution: 'Thinkful',
        location: 'Atlanta, GA',
        degree: 'Intensive Full Stack Web Development Course',
        period: 'May 2017',
        details: [
            "Completed intensive, six month course on full stack JavaScript development.",
            "Learned industry best practices, design patterns, and collaborative workflows by working several hours each week with a senior developer.",
        ]
    },
    {
        id: 'gsu',
        institution: 'Georgia State University',
        location: 'Atlanta, GA',
        degree: 'B.S. Psychology',
        period: 'May 2013',
        details: [
            "Magna Cum Laude, International Dean’s List Society, Tau Sigma Honor Society, Alpha Llamba Delta Honor Society, National Merit Scholarship Society, HOPE Scholarship"
        ]
    }
];

export const ABOUT_ME = {
    cards: [
        {
            id: 'drive',
            className: 'drive-card',
            title: 'Why I Code',
            description: "My desire to code comes from a desire to <span class='highlight-text'>help and serve others</span>. I strive to build intuitive online experiences that make users feel like using my application is the easiest and most enjoyable part of their day. <span class='highlight-text'>Solving business problems while bringing joy</span> to users through software development is my ultimate professional goal."
        },
        {
            id: 'family',
            className: 'family-card',
            title: 'My Family',
            description: "<span class='highlight-text'>My family is my greatest adventure.</span> My beautiful wife and I are an incredible team, and we have two wonderful children that we love to spoil. They are the light of my life and motivate me to make a positive impact on the world around me every day."
        },
        {
            id: 'hobbies',
            className: 'hobbies-card',
            title: 'Hobbies',
            description: "When I'm not coding, I love exploring the outdoors, off-roading, or getting into an exciting game of Magic: The Gathering. You can also find me gaming on my Steam Deck, but my favorite pastime has to be <span class='highlight-text'>discovering the world</span> through the eyes of my kids."
        }
    ],
    quote: '"In a world where you can be anything, be kind."'
};
