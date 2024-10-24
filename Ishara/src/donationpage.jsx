import React, { useState } from 'react';
import './donationpage.css'; 
import { useNavigate } from 'react-router-dom'; 
import Nav from '../src/nav.jsx';
import deafschooljpg from '../src/images/deafschool.jpg';

function DonationPage() {
    const [customAmountVisible, setCustomAmountVisible] = useState(false);
    const [donationAmount, setDonationAmount] = useState("");
    const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
    const [name, setName] = useState("");
    const [expiryMonth, setExpiryMonth] = useState(1);
    const [expiryYear, setExpiryYear] = useState(2024);
    const [isBackVisible, setIsBackVisible] = useState(false);
    const [isCardFlipped, setIsCardFlipped] = useState(false);
    
    const navigate = useNavigate(); 

    const validateDateSelection = () => {
        if (expiryYear < 2024 || (expiryYear === 2024 && expiryMonth <= 10)) {
            alert("Date expired. Please select a card with expiry after October 2024.");
            return false;
        }
        return true;
    };

    const validateFormFields = () => {
        for (const number of cardNumber) {
            if (number.trim() === "") {
                alert("Please fill in all card number fields.");
                return false;
            }
        }
        if (name.trim() === "") {
            alert("Please enter your name.");
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        if (!validateDateSelection() || !validateFormFields()) {
            event.preventDefault();
        } else {
            alert("Donation made successfully!");
        }
    };

    return (
        <div id="area">
            <button className="back-to-home" onClick={() => navigate('/')}>
                Back to Home
            </button>
            <div className="bubble">
                <p>Help Empower Deaf and Mute Students: Your Contribution Matters!</p>
                <div>
                    <p>By contributing, you'll be directly helping schools and programs that focus on empowering deaf and mute students, ensuring they receive the tools and support they need to succeed. Together, we can open doors to a brighter future for these students. We only accept donations through cards. We apologize for any inconvenience caused.</p>
                </div>
                <div className="donation-amount">
                    <label htmlFor="donation">Select Donation Amount (in rupees):</label>
                    <select
                        id="donation"
                        value={donationAmount}
                        onChange={(e) => {
                            setDonationAmount(e.target.value);
                            setCustomAmountVisible(e.target.value === 'custom');
                        }}
                    >
                        <option value="1000">1000</option>
                        <option value="2000">2000</option>
                        <option value="5000">5000</option>
                        <option value="10000">10000</option>
                        <option value="custom">Other Amount</option>
                    </select>
                    {customAmountVisible && (
                        <input type="text" id="custom-amount" placeholder="Enter amount" />
                    )}
                </div>

                <div className="master-card">
                    <div className="card" style={{ transform: isCardFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}>
                        <div className="title">CREDIT/DEBIT CARD</div>
                        <div className="input-number">
                            <span className="title-number">CARD NUMBER</span>
                            <div className="inputs-number">
                                {cardNumber.map((number, index) => (
                                    <input
                                        className="btndondon"
                                        key={index}
                                        type="text"
                                        maxLength="4"
                                        value={number}
                                        onChange={(e) => {
                                            const newCardNumber = [...cardNumber];
                                            newCardNumber[index] = e.target.value;
                                            setCardNumber(newCardNumber);
                                        }}
                                        placeholder="0000"
                                        required
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="selects-date">
                            <div className="month-select">
                                <span className="spa">MONTH</span>
                                <select value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)}>
                                    {[...Array(12).keys()].map((i) => (
                                        <option key={i} value={i + 1}>{String(i + 1).padStart(2, '0')}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="year-select">
                                <span clasName="spa">YEAR</span>
                                <select value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)}>
                                    {[...Array(11).keys()].map((i) => (
                                        <option key={i} value={2024 + i}>{2024 + i}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="inputs-number">
                            <input
                                className="btndondon"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="NAME"
                                required
                            />
                        </div>
                        <div className="mark-gold">
                            <div className="round">
                                <div className="circles">
                                    <div className="circle-1"></div>
                                    <div className="circle-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-back" style={{ transform: isCardFlipped ? "rotateY(0deg)" : "rotateY(180deg)" }}>
                        <div className="tire"></div>
                        <div className="secret-area">
                            <input type="text" maxLength="3" placeholder="000" required />
                        </div>
                        <div className="chip-card"></div>
                    </div>
                </div>
                <div className="button-sent">
                    {isBackVisible && (
                        <button onClick={() => { setIsCardFlipped(false); setIsBackVisible(false); }}>BACK</button>
                    )}
                    <button className="btndondon" onClick={() => {
                        if (validateDateSelection()) {
                            setIsCardFlipped(true);
                            setIsBackVisible(true);
                        }
                    }}>CONTINUE</button>
                    <button className="btndondon" onClick={handleSubmit}>SUBMIT</button>
                </div>
            </div>
        </div>
    );
}

export default DonationPage;
