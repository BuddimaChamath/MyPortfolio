// Define Project type
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  category: 'mobile' | 'desktop' | 'web';
  github?: string;
  demo?: string;
  image?: string;
  features?: string[];
  team?: string;
  duration?: string;
  challenges?: string[];
  solutions?: string[];
  myContribution?: string[];
  screenshots?: string[];
}

// Export project data
export const projectsData: Record<string, Project> = {
  'pizza-ordering': {
    id: 'pizza-ordering',
    title: 'Pizza Ordering System',
    description: 'Desktop app with advanced pizza customization and design pattern implementation.',
    fullDescription: 'Developed a user-focused pizza ordering system with advanced customization features and seven design pattern implementations including Builder, State, Observer, Strategy, Command, Chain of Responsibility, and Decorator.',
    technologies: ['Java', 'JavaFX', 'SQLite', 'Maven'],
    category: 'desktop',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    screenshots: [
      '../pizza/pizza1.jpg',
      '../pizza/pizza2.jpg',
      '../pizza/pizza3.jpg'
    ],
    github: 'https://github.com/BuddimaChamath/PizzaOrderingSystem.git',
    features: [
      'Custom pizza builder with crust, sauce, and toppings selection',
      'Order lifecycle management with real-time status tracking (Placed → Delivered)',
      'Favorites system for quick reorders',
      'Promo code system with discounts (e.g., SUMMER20)',
      'Loyalty points and feedback integration',
      'Applied 7 design patterns: Builder, State, Observer, Strategy, Command, Chain of Responsibility, Decorator'
    ],
    team: 'Academic solo project',
    duration: '2 months',
    challenges: [
      'Implementing multiple design patterns cohesively',
      'Creating an intuitive user interface for order customization',
      'Managing order state transitions effectively'
    ],
    solutions: [
      'Applied 7 design patterns to solve specific architectural challenges',
      'Used JavaFX for creating a responsive and user-friendly UI',
      'Implemented state pattern for order lifecycle management'
    ]
  },
  'the-ruin-ui': {
  id: 'the-ruin-ui',
  title: 'The Ruin – Tropical Event Venue Homepage - Glassmorphism UI',
  description: 'Glassmorphism-themed UI/UX homepage for a tropical beachfront venue in Sri Lanka.',
  fullDescription: 'Designed and developed a responsive homepage for The Ruin, a premium beachfront venue in Hiriketiya, Sri Lanka. The design uses a modern glassmorphism style to highlight elegance, brand identity, and functionality with key features like quote requests, services, and bookings. The project focused on creating a smooth user experience across all devices.',
  technologies: ['React', 'Vite', 'TypeScript', 'Glassmorphism', 'Responsive Design'],
  category: 'web',
  image: '../theRuin/Main.jpg', 
  github: 'https://github.com/BuddimaChamath/The-Ruin-Tropical-Event-Venue-Homepage-Glassmorphism-UI-Project.git', // (if available)
  demo: 'https://the-ruin-tropical-event-venue-homep.vercel.app/', // (if hosted — optional)
  features: [
    'Glassmorphism-based hero, about, and service sections',
    'Responsive layout for desktop, tablet, and mobile',
    'Call-to-action buttons: Request a Quote, Book Now',
    'Structured, clear visual hierarchy for user engagement',
    'About and Story sections reflecting venue’s identity'
  ],
  team: 'Solo design & development project',
  duration: '1–2 weeks',
  challenges: [
    'Implementing modern UI effects (blur, transparency) without hurting performance',
    'Ensuring responsive behavior across breakpoints'
  ],
  solutions: [
    'Used `backdrop-filter`, semi-transparent layers and gradients for smooth glass UI',
    'Applied responsive layout techniques with CSS modules/flexbox/grid as needed'
  ]
},
  'transportation-app': {
    id: 'transportation-app',
    title: 'Public Transportation Bus App',
    description: 'Mobile app for public bus transportation services in Sri Lanka. this system includes three apps: User, Admin, and Driver.',
    fullDescription: 'Developed a comprehensive mobile application for public bus transportation services in Sri Lanka, featuring three distinct apps: User, Admin, and Driver. The User app allows passengers to search for buses, calculate fares, and track bus locations in real-time. The Admin app manages reported posts and oversees operations, while the Driver app updates driver locations to enhance user experience.',
    technologies: ['Flutter', 'Firebase', 'Dart', 'OpenRouteService API'],
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    screenshots: [
      '../busApp/image1.jpg',
      '../busApp/image2.jpg',
      '../busApp/image3.jpg',
      '../busApp/image4.jpg',
      '../busApp/image5.jpg',
      '../busApp/image6.jpg',
      '../busApp/image7.jpg',
      '../busApp/image8.jpg',
      '../busApp/image9.jpg',
      '../busApp/image10.jpg',
      '../busApp/image11.jpg',
      '../busApp/image12.jpg',
      '../busApp/image13.jpg',
      '../busApp/image14.jpg',
      '../busApp/image15.jpg',
      '../busApp/image16.jpg',
      '../busApp/image17.jpg',
      '../busApp/image18.jpg',
      '../busApp/image19.jpg',
      '../busApp/image20.jpg'
    ],
    github: 'https://github.com/BuddimaChamath/publicTranspotationSystemforBuses.git',
    demo: 'https://appetize.io/embed/b_rma43anq33jfj3kwobfwqzp56y',
    features: [
      'User App: Community News, Bus Search (via map and halt names), Fare Calculation, Bus Tracking, Bus Schedules',
      'Premium and Free Tier Plans for users',
      'Admin App: Manages reported posts and admin operations',
      'Driver App: Updates driver location in real-time to show in User App Map',
      'Integrated real-time bus route and distance tracking using OpenRouteService API',
      'Implemented reporting mechanism and content moderation for community safety'
    ],
    team: 'Academic solo project - Final Year Project',
    duration: '4 months',
    challenges: [
      'Integrating real-time location tracking across multiple app instances',
      'Designing an intuitive UI for three different user roles',
      'Implementing efficient data synchronization with Firebase'
    ],
    solutions: [
      'Used OpenRouteService API for accurate route tracking and mapping',
      'Created role-specific interfaces with shared core functionality',
      'Implemented reporting mechanism and content moderation for community safety'
    ]
  },
  'gaming-community': {
    id: 'gaming-community',
    title: 'Game Lounge - A PC Game Details and Gamer Community App',
    description: 'Mobile app for gamers to access PC game details and communicate with each other.',
    fullDescription: 'Contributed to a Flutter-based mobile application developed as a group project to help gamers stay updated on PC game details and communicate with each other using real-time chat functionality.',
    technologies: ['Flutter', 'Firebase', 'Dart', 'RAWG API'],
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    screenshots: [
      '../gameApp/game1.jpg',
      '../gameApp/game2.jpg',
      '../gameApp/game3.jpg',
      '../gameApp/game4.jpg',
      '../gameApp/game5.jpg',
    ],
    github: 'https://github.com/BuddimaChamath/GameDetailApp---Mobile-CW2.git',
    //demo: 'https://github.com/BuddimaChamath/GameDetailApp---Mobile-CW2',
    features: [
      'Game detail screen showing release info, platform, and description using RAWG API to fetch data',
      'User registration and profile creation',
      'Real-time chat room for game discussions',
      'Firebase Firestore used for storing game data and messages',
      'Responsive mobile UI optimized for different devices',
      'Collaborated using Git and participated in agile-style task distribution'
    ],
    team: 'Academic team project - 4 members',
    duration: '3 months',
    challenges: [
      'Coordinating development tasks across a team of 4',
      'Integrating third-party API data with local database',
      'Implementing real-time chat functionality'
    ],
    solutions: [
      'Used Git for version control and collaboration',
      'Created API service layer for data normalization',
      'Implemented Firebase real-time database for chat functionality'
    ]
  },
  'car-rental': {
    id: 'car-rental',
    title: 'Car Rental System',
    description: 'Windows app with login, reservation, billing, and UI forms.',
    fullDescription: 'A desktop application for car rental businesses to manage their fleet, customer bookings, and billing processes with a user-friendly interface.',
    technologies: ['C#', '.NET', 'MS SQL'],
    category: 'desktop',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    github: 'https://github.com/BuddimaChamath/CarRentalService',
    features: [
      'User authentication and role-based access',
      'Vehicle inventory management',
      'Reservation and booking system',
      'Automated billing and invoicing',
      'Customer database management'
    ],
    team: 'Academic solo project',
    duration: '1 and 1/2 months'
  },
  'hospital-management': {
    id: 'hospital-management',
    title: 'Hospital Management Website',
    description: 'Role-based CRUD system for hospital operations.',
    fullDescription: 'A web-based hospital management system with features for patient management, appointments, billing, and staff scheduling tailored for healthcare institutions.',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    github: 'https://github.com/BuddimaChamath/Simple-HMS',
    features: [
      'Patient registration and medical history',
      'Doctor appointment scheduling',
      'Pharmacy inventory management',
      'Billing and insurance processing',
      'Staff management and scheduling'
    ],
    team: 'Academic solo project',
    duration: '2 months'
  },
  'news-headlines': {
    id: 'news-headlines',
    title: 'News Articles Web App',
    description: 'Responsive app fetching news via News API with Material UI.',
    fullDescription: 'A responsive web application that fetches and displays the latest news articles from various sources using the News API, with filtering and search capabilities.',
    technologies: ['React', 'Vite', 'Material UI', 'News API'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    github: 'https://github.com/BuddimaChamath/NewsHeadlinesApp',
    features: [
      'News categorization and filtering',
      'Search functionality',
      'Responsive design for all devices',
      'Bookmarking favorite articles',
      'Dark/light theme toggle'
    ],
    team: 'Personal project',
    duration: '1 month'
  },
  'flutter-news-app': {
    id: 'flutter-news-app',
    title: 'News Articles App',
    description: 'Cross-platform mobile app for delivering categorized news articles with bookmarking and theme switching.',
    fullDescription: 'The News App is an Android mobile application designed to deliver up-to-date news articles to users, categorized by topic (e.g., business, sports, technology) using Flutter. It utilizes a public news API to fetch articles and presents them in a clean, user-friendly UI. The app also features offline bookmarking, allowing users to save their favorite articles for later reading.',
    technologies: ['Flutter', 'Dart', 'HTTP package', 'Provider', 'Shared Preferences', 'SQLite', 'WebView Flutter'],
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    screenshots: [
      '../newsApp/news1.jpg',
      '../newsApp/news2.jpg',
      '../newsApp/news3.jpg',
      '../newsApp/news4.jpg'
    ],
    github: 'https://github.com/BuddimaChamath/NewsApp---CW1-Part-B',
    demo: 'https://appetize.io/embed/b_xtci5jjvbme7mhpy5sf67gydv4',
    features: [
      'Fetch and display top headlines using a news API',
      'Categorized news filtering (e.g., Health, Tech, Sports)',
      'Article detail view with WebView integration for full articles',
      'Local bookmark system (CRUD operations)',
      'Theme switching between light and dark modes',
      'Responsive and smooth user interface'
    ],
    team: 'Academic solo project',
    duration: '2 months',
    challenges: [
      'Implementing efficient state management across multiple screens',
      'Creating a seamless bookmarking experience with local storage',
      'Building a responsive UI that works well across different device sizes'
    ],
    solutions: [
      'Used Provider package for state management',
      'Implemented SQLite/Shared Preferences for bookmark storage',
      'Created adaptive layouts with Flutter\'s responsive design capabilities'
    ]
  },
  'smart-campus-system': {
    id: 'smart-campus-system',
    title: 'Smart Campus Management System',
    description: 'Web-based platform for university administration, resource management, and communication.',
    fullDescription: 'The Smart Campus Management System is a web-based platform built to streamline university administration, resource allocation, scheduling, and communication between students, lecturers, and administrators. The system integrates learning and resource management into a single role-based platform with distinct dashboards for each user type. It enables real-time messaging, resource reservations, class/event scheduling, report generation, and file sharing.',
    technologies: ['WAMP Stack', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'TCPDF', 'FullCalendar', 'AJAX', 'Figma'],
    category: 'web',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    github: 'https://github.com/BuddimaChamath/Smart_Campus-SDP-',
    features: [
      'Role-based dashboards for Admins, Lecturers, and Students',
      'User management with secure authentication (registration, login, profile)',
      'Class and event scheduling, calendar management, and notifications',
      'Online resource reservation with conflict avoidance logic',
      'File upload (lecturers) and download (students) functionality',
      'Real-time messaging and email/SMS notifications',
      'Reporting system for event participation (PDF export using TCPDF)',
      'Fully responsive web design, accessible and scalable',
      'Security features include RBAC, HTTPS, MD5 password hashing, input sanitization'
    ],
    team: 'Academic team project - 4 members',
    duration: '4 months',
    challenges: [
      'Implementing secure role-based access control across multiple user types',
      'Creating PDF generation system for dynamic reports',
      'Building responsive interfaces for different devices and screen sizes',
      'Ensuring secure file upload/download system with role-based permissions'
    ],
    solutions: [
      'Utilized TCPDF library for dynamic PDF report generation',
      'Implemented responsive design using Bootstrap and custom CSS',
      'Created role-based security system with proper authentication and authorization',
      'Built modular components for file handling with secure permissions'
    ],
    myContribution: [
      'Developed event participation reporting system with PDF exports using TCPDF',
      'Implemented email communication system for Admins to notify users',
      'Created lecturer and student mail viewing components with role-based filtering',
      'Built lecturer file upload and student file download interfaces',
      'Styled application using custom CSS and ensured frontend responsiveness',
      'Collaborated in agile sprints, participated in UI/UX prototyping using Figma'
    ]
  }
};