#PROJECT STRUCTURE

Learnerkia/
│
├── public/
│ ├── index.html
│ ├── favicon.ico
│ └── manifest.json
│
├── src/
│ ├── assets/
│ │ ├── images/
│ │ ├── fonts/
│ │ └── styles/
│ │
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button.jsx
│ │ │ └── Input.jsx
│ │ │
│ │ ├── layout/
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── Sidebar.jsx
│ │ │
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── CourseDetail.jsx
│ │ │ ├── Login.jsx
│ │ │ └── Register.jsx
│ │ │
│ │ └── payment/
│ │ ├── Checkout.jsx
│ │ └── PaymentSuccess.jsx
│ │
│ ├── context/
│ │ ├── AuthContext.jsx
│ │ └── CourseContext.jsx
│ │
│ ├── hooks/
│ │ ├── useAuth.js
│ │ └── useCourses.js
│ │
│ ├── services/
│ │ ├── api.js
│ │ └── stripe.js
│ │
│ ├── utils/
│ │ ├── helpers.js
│ │ └── constants.js
│ │
│ ├── App.jsx
│ ├── index.js
│ ├── index.css
│ └── routes.jsx
│
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js
