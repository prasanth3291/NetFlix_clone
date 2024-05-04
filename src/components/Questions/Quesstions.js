import React, {useState} from 'react'
import './Questions.css'

function Quesstions() {

  const [questionStates, setQuestionStates] = useState([false, false, false]);

  const toggleDiv = (index) => {
    const updatedStates = [...questionStates];
    updatedStates[index] = !updatedStates[index];
    setQuestionStates(updatedStates);
  };

  return (
    <div className='question_container'>
      <div className='headline'>Frequently Asked Questions</div>

     {questionStates.map((isOpen, index) => (
        <div key={index}>
          <div className='question_box' onClick={() => toggleDiv(index)}>
            <span className='question'>What is Netflix?</span>
            <span className='plus_sign'>
              {isOpen ? 'x' : '+'}
            </span>
          </div>
          {isOpen && (
            <div className='additional_info'>
              This is additional information about Netflix.
            </div>
          )}
        </div>
      ))}

      <h1 className='description'>Ready to watch? Enter your email to create or restart your membership.</h1>
                <div class="input-container">
                <input type="text" class="transparent-input" placeholder="Email address" />
                <button class="custom-button">Get Started</button>
                </div>

                <div className='gray'></div>
    </div>
  )
}

export default Quesstions
