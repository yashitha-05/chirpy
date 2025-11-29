# Chirpy - Social Media Platform

A full-stack social media application built with React and Spring Boot, featuring real-time interactions, messaging, and community engagement.

## 🚀 Features

### Core Functionality
- **User Authentication**: Sign up/Sign in with email or Google OAuth
- **Post Management**: Create, like, retweet, and reply to posts
- **User Profiles**: Customizable profiles with follower/following system
- **Real-time Messaging**: Direct messaging between users with chat history
- **Notifications**: Stay updated with likes, replies, and follows
- **Explore**: Discover trending hashtags and connect to Instagram/Facebook
- **Communities**: Join and explore various interest-based communities

### Additional Features
- **Search**: Find users and content across the platform
- **Verified Accounts**: Blue checkmark verification system
- **Responsive Design**: Mobile-friendly interface
- **Dark/Light Theme**: Toggle between themes
- **Static Pages**: About, Help Center, Terms of Service, Privacy Policy

## 🛠️ Tech Stack

### Frontend
- **React** 18.x
- **Redux** - State management
- **Material-UI (MUI)** - UI components
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Formik & Yup** - Form handling and validation

### Backend
- **Spring Boot** 3.x
- **Java** 21
- **Spring Security** - Authentication & Authorization
- **Spring Data JPA** - Database operations
- **MySQL** - Database
- **JWT** - Token-based authentication
- **Lombok** - Reduce boilerplate code
- **Maven** - Dependency management

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Java JDK** 21
- **Maven** 3.8+
- **MySQL** 8.0+

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd chirpy-project
```

### 2. Backend Setup

#### Configure Database
1. Create a MySQL database:
```sql
CREATE DATABASE chirpy_db;
```

2. Update `backend spring boot/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/chirpy_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

#### Run Backend
```bash
cd "backend spring boot"
mvnw clean install
mvnw spring-boot:run
```

Backend will run on `http://localhost:8080`

### 3. Frontend Setup

#### Install Dependencies
```bash
cd "frontend react"
npm install
```

#### Configure API Endpoint
Update `frontend react/src/Config/api.js` if needed:
```javascript
export const API_BASE_URL = "http://localhost:8080";
```

#### Run Frontend
```bash
npm start
```

Frontend will run on `http://localhost:3000`

## 🌐 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000`
6. Copy Client ID and update in your frontend configuration

## 📁 Project Structure

```
chirpy-project/
├── backend spring boot/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/zosh/
│   │   │   │       ├── config/
│   │   │   │       ├── controller/
│   │   │   │       ├── model/
│   │   │   │       ├── repository/
│   │   │   │       ├── service/
│   │   │   │       └── util/
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   └── pom.xml
│
└── frontend react/
    ├── public/
    │   ├── chirpy-logo.png
    │   └── index.html
    ├── src/
    │   ├── Components/
    │   │   ├── Authentication/
    │   │   ├── Home/
    │   │   ├── Profile/
    │   │   ├── Explore/
    │   │   ├── Messages/
    │   │   ├── Notifications/
    │   │   ├── Communities/
    │   │   ├── Navigation/
    │   │   ├── RightPart/
    │   │   ├── More/
    │   │   └── StaticPages/
    │   ├── Store/
    │   │   ├── Auth/
    │   │   ├── Tweet/
    │   │   └── Theme/
    │   ├── Config/
    │   ├── Utils/
    │   └── App.js
    └── package.json
```

## 🎯 API Endpoints

### Authentication
- `POST /auth/signup` - Register new user
- `POST /auth/signin` - Login user
- `POST /auth/google` - Google OAuth login

### Posts (Tweets)
- `GET /api/tweets` - Get all posts
- `POST /api/tweets/create` - Create new post
- `PUT /api/tweets/{id}/like` - Like/unlike post
- `POST /api/tweets/{id}/retweet` - Retweet post
- `POST /api/tweets/reply` - Reply to post
- `DELETE /api/tweets/{id}` - Delete post

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/update` - Update profile
- `PUT /api/users/{userId}/follow` - Follow/unfollow user
- `GET /api/users/search` - Search users

## 🎨 Features Walkthrough

### 1. Authentication
- Modern login/signup page with social media imagery
- Google OAuth integration
- JWT-based session management

### 2. Home Feed
- View all posts from followed users
- Create new posts with text content
- Like, retweet, and reply to posts
- See all users section for discovery

### 3. Profile
- View user posts and replies
- Edit profile information
- Follow/unfollow users
- View followers and following lists

### 4. Explore
- Search hashtags
- Quick links to Instagram and Facebook
- Discover trending topics

### 5. Messages
- Real-time direct messaging
- User search for new conversations
- Chat history persistence with localStorage
- Message timestamps

### 6. Notifications
- View all platform activity
- See likes, replies, and follows
- Real-time updates

### 7. Communities
- Browse popular communities
- Search for specific communities
- Quick access to major platforms

## 🔐 Security Features

- JWT token authentication
- Password encryption with BCrypt
- CORS configuration
- Protected API endpoints
- Input validation and sanitization

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file:
```bash
mvnw clean package
```

2. Deploy to your preferred platform (AWS, Heroku, etc.)

### Frontend Deployment
1. Build production bundle:
```bash
npm run build
```

2. Deploy to Netlify, Vercel, or any static hosting service

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Material-UI for the component library
- Tailwind CSS for utility-first styling
- Spring Boot community for excellent documentation
- React community for helpful resources

## 📞 Support

For support, email support@chirpy.com or join our community Discord.

## 🐛 Known Issues

- None at the moment

## 🔮 Future Enhancements

- [ ] Video and image upload support
- [ ] Stories feature
- [ ] Live streaming
- [ ] Advanced search filters
- [ ] Bookmarks
- [ ] Lists management
- [ ] Analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Email notifications

---

Made with ❤️ by the Chirpy Team
