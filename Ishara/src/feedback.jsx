import './feedback.css';

const Feedback = () => {
  const feedbacks = [
    {
      name: "John Doe",
      title: "Speech-Language Pathologist",
      text: "The real-time translation is accurate and smooth! It's been incredibly helpful for learning sign language",
      img: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Bryan Smith",
      title: "Teacher",
      text: "I love the interactive simulator. The 3D models of hand gestures make it easier to understand each sign",
      img: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      name: "Emily Johnson",
      title: "Sign Language Interpreter",
      text: "It would be great if there were more regional variations of signs, as different countries have unique sign languages.",
      img: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      name: "David Johnatan",
      title: "Deaf Community Advocate",
      text: "I appreciate the option to input text and see the corresponding sign language translation instantly—it's very intuitive.",
      img: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      name: "Andrew Miller",
      title: "Linguist",
      text: "I wish there were a feature where we could practice hand movements using a webcam to compare them with the simulator.",
      img: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      name: "James Wilson",
      title: "Parent of Deaf",
      text: "The user interface is clean and easy to navigate, but adding a dark mode option would enhance the experience further.",
      img: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      name: "Sara Williams",
      title: "College Student",
      text: "It would be helpful if you could incorporate quizzes to test our sign language skills.",
      img: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Jessica Lee",
      title: "UX/UI Designer",
      text: "The video tutorials alongside the sign animations are very helpful, but adding voice descriptions for each sign would make the learning process even more accessible.",
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
