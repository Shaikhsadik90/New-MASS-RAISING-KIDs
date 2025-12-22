// Smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});



// Volunteer Form Handler



// const volunteerForm = document.getElementById('volunteerForm');
// if (volunteerForm) {
//     volunteerForm.addEventListener('submit', async function (e) {
//         e.preventDefault();

//         const formData = {
//             name: document.getElementById('volName').value,
//             email: document.getElementById('volEmail').value,
//             phone: document.getElementById('volPhone').value || null,
//             age: parseInt(document.getElementById('volAge').value),
//             languages: document.getElementById('volLanguages').value || null,
//             availability: document.querySelector('input[name="availability"]:checked').value,
//             message: document.getElementById('volMessage').value || null
//         };

//         try {
//             const response = await fetch('/api/volunteers', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const messageDiv = document.getElementById('volunteerMessage');

//             if (response.ok) {
//                 messageDiv.className = 'form-message success';
//                 messageDiv.textContent = 'Thank you for applying! We will contact you soon.';
//                 volunteerForm.reset();
//             } else {
//                 const error = await response.json();
//                 messageDiv.className = 'form-message error';
//                 messageDiv.textContent = 'Error submitting form. Please try again.';
//             }

//             messageDiv.style.display = 'block';
//             setTimeout(() => {
//                 messageDiv.style.display = 'none';
//             }, 5000);
//         } catch (error) {
//             console.error('Error:', error);
//             const messageDiv = document.getElementById('volunteerMessage');
//             messageDiv.className = 'form-message error';
//             messageDiv.textContent = 'Error submitting form. Please check your connection.';
//             messageDiv.style.display = 'block';
//         }
        
//     });
// }





// Contact Form Handler
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', async function (e) {
//         e.preventDefault();

//         const formData = {
//             name: document.getElementById('conName').value,
//             email: document.getElementById('conEmail').value,
//             subject: document.getElementById('conSubject').value || null,
//             message: document.getElementById('conMessage').value
//         };

//         try {
//             const response = await fetch('/api/contacts', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const messageDiv = document.getElementById('contactMessage');

//             if (response.ok) {
//                 messageDiv.className = 'form-message success';
//                 messageDiv.textContent = 'Thank you! We received your message and will get back to you soon.';
//                 contactForm.reset();
//             } else {
//                 messageDiv.className = 'form-message error';
//                 messageDiv.textContent = 'Error sending message. Please try again.';
//             }

//             messageDiv.style.display = 'block';
//             setTimeout(() => {
//                 messageDiv.style.display = 'none';
//             }, 5000);
//         } catch (error) {
//             console.error('Error:', error);
//             const messageDiv = document.getElementById('contactMessage');
//             messageDiv.className = 'form-message error';
//             messageDiv.textContent = 'Error sending message. Please check your connection.';
//             messageDiv.style.display = 'block';
//         }
//     });
// }


// Mobile responsive nav menu styling
function adjustNavMenu() {
    const width = window.innerWidth;
    const navMenu = document.querySelector('.nav-menu');
    if (width > 768) {
        navMenu.classList.remove('active');
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    }
}

window.addEventListener('resize', adjustNavMenu);







/* ===============================
   MASS RAISING KIDS – MCQ QUIZ
   RESULT SHOW ON PAGE
================================ */


const quizQuestions = [
  {
    q: "What is the mission of MASS Raising Kids?",
    options: ["Profit", "Education & support", "Politics", "Entertainment"],
    answer: 1
  },
  {
    q: "Who can apply for this program?",
    options: ["Only kids", "Only adults", "Anyone 5 to 105", "Only teachers"],
    answer: 2
  },
  {
    q: "Which skills are taught?",
    options: ["Driving", "Cooking", "LSRW skills", "Sports"],
    answer: 2
  },
  {
    q: "Which group is supported?",
    options: ["Corporate staff", "Children & needy", "Celebrities", "Tourists"],
    answer: 1
  },
  {
    q: "Mode of teaching includes?",
    options: ["Only classroom", "Zoom & online", "Only offline", "Only home visits"],
    answer: 1
  },
  {
    q: "Top priority age group?",
    options: ["1–4", "5–20", "50–80", "80+"],
    answer: 1
  },
  {
    q: "Support group age?",
    options: ["10–15", "18–25", "35–40", "60–70"],
    answer: 1
  },
  {
    q: "Who manages budget & accounting?",
    options: ["Public", "Volunteers", "AR Rahman Tax & SAMrbc", "Students"],
    answer: 2
  },
  {
    q: "Project focus?",
    options: ["Profit", "Social impact", "Politics", "Marketing"],
    answer: 1
  },
  {
    q: "Languages supported include?",
    options: ["Only English", "Tamil coordination", "Only Hindi", "Only Urdu"],
    answer: 1
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");
  const quizResults = document.getElementById("quizResults");

  if (!quizForm) return;

  // Render questions
  quizQuestions.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "quiz-question";
    div.style.marginBottom = "20px";

    let html = `<p><strong>Q${index + 1}. ${item.q}</strong></p>`;

    item.options.forEach((opt, i) => {
      html += `
        <label style="display:block; margin-left:15px;">
          <input type="radio" name="q${index}" value="${i}" required>
          ${opt}
        </label>
      `;
    });

    div.innerHTML = html;
    quizForm.appendChild(div);
  });

  // Submit handler
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;

    quizQuestions.forEach((item, index) => {
      const selected = document.querySelector(`input[name="q${index}"]:checked`);
      if (selected && Number(selected.value) === item.answer) {
        score++;
      }
    });

    const percentage = Math.round((score / quizQuestions.length) * 100);

    quizResults.style.display = "block";
    quizResults.innerHTML = `
      <h3>Quiz Result</h3>
      <p><strong>Score: ${score} / ${quizQuestions.length}</strong></p>
      <p><strong>Percentage: ${percentage}%</strong></p>
      <p>
        ${
          percentage >= 70
            ? "🎉 Excellent! You understand our mission very well."
            : "❤️ Thank you for participating. Keep learning!"
        }
      </p>
    `;

    quizResults.scrollIntoView({ behavior: "smooth" });
  });
});

// Open MCQ Quiz Form
function openQuiz() {
  const form = document.getElementById("mcqForm");
  if (form) {
      form.style.display = "block";
      form.scrollIntoView({ behavior: "smooth" });
  }
}

document.getElementById("mcqForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Correct answers
  const answers = {
      q1: "Education & Support",
      q2: "Anyone 5–105",
      q3: "LSRW"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let q in answers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) {
          score++;
      }
  }

  let percentage = Math.round((score / total) * 100);

  // Show result
  document.getElementById("finalResult").style.display = "block";
  document.getElementById("scoreText").innerHTML =
      `Your Score: <strong>${score} / ${total}</strong> (${percentage}%)`;

  document.getElementById("statusText").innerHTML =
      percentage >= 60
          ? "✅ <strong>PASS</strong> – Great job! You understand our mission."
          : "❌ <strong>FAIL</strong> – Keep learning, you can try again.";

  // Add hidden score fields for Formspree
  let scoreInput = document.createElement("input");
  scoreInput.type = "hidden";
  scoreInput.name = "final_score";
  scoreInput.value = `${score}/${total} (${percentage}%)`;

  let statusInput = document.createElement("input");
  statusInput.type = "hidden";
  statusInput.name = "result_status";
  statusInput.value = percentage >= 60 ? "PASS" : "FAIL";

  this.appendChild(scoreInput);
  this.appendChild(statusInput);

  // Submit to Formspree AFTER showing result
  setTimeout(() => {
      this.submit();
  }, 2000);
});
