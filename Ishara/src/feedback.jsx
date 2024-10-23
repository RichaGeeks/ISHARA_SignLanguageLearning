import './feedback.css';

const Feedback = () => {
  const feedbacks = [
    {
      name: "John Doe",
      title: "Financial Analyst",
      text: "Using this app has transformed the way I manage my finances. It's intuitive and makes tracking my expenses so much easier. Highly recommended!",
      img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Bryan Smith",
      title: "Small Business Owner",
      text: "This app has been a game-changer for my business. I can easily track income and expenses, and the budgeting tools have helped me save a lot of money.",
      img: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emily Johnson",
      title: "Freelance Designer",
      text: "I love how simple and efficient this app is. The ability to split bills and track payments has made managing my freelance income a breeze.",
      img: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "David Johnatan",
      title: "Software Engineer",
      text: "The insights and summaries provided by this app are fantastic. It has made financial planning straightforward and stress-free.",
      img: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Andrew Miller",
      title: "Entrepreneur",
      text: "I've tried several finance apps, but this one stands out. The interface is user-friendly, and the features are exactly what I need to manage my business finances.",
      img: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      name: "James Wilson",
      title: "Consultant",
      text: "The app's ability to categorize expenses automatically saves me a lot of time. It's an essential tool for anyone looking to take control of their finances.",
      img: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      name: "Sara Williams",
      title: "College Student",
      text: "As a student, keeping track of my finances can be challenging. This app has been incredibly helpful in managing my budget and savings. It's a must-have!",
      img: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Jessica Lee",
      title: "Marketing Manager",
      text: "Thanks to this app, I have a clear overview of my spending habits. The monthly summaries are very detailed and easy to understand.",
      img: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <div className="feedback-section">
      <h2 className="feedback-heading">What people say</h2>
      <div className="feedback-grid">
        {feedbacks.map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <img src={feedback.img} alt={feedback.name} className="feedback-img" />
            <h3 className="feedback-name">{feedback.name}</h3>
            <p className="feedback-title">{feedback.title}</p>
            <p className="feedback-text">{feedback.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
