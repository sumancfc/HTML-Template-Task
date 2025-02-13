"use strict";

const cardContainer = document.querySelector('.card-container');
const hostingCard = document.getElementById('hostingCard');
const cancelHostingBtn = document.getElementById('cancelHosting');

cancelHostingBtn.addEventListener('click', () => {
    hostingCard.style.display = 'none';

    const feedbackCard = document.createElement('div');
    feedbackCard.classList.add('card');
    feedbackCard.innerHTML = `
            <img src="./assets/webhosting.svg" alt="Feedback View Image" />
            <div>            
                <h2 class="feedback-heading">Thank you for your feedback!</h2>
                <button class="primary">Give it a try</button>
            </div>
        `;

    cardContainer.appendChild(feedbackCard);
});