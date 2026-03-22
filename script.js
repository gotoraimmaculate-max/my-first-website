// Get elements
const moreAboutUsBtn = document.querySelector('.cn');
const loginForm = document.querySelector('.form');
const loginBtn = document.querySelector('.btnn');
const themeToggleBtn = document.createElement('button');
const heading = document.querySelector('.logo');

// Add theme toggle button
themeToggleBtn.textContent = 'Toggle Theme';
themeToggleBtn.style.position = 'fixed';
themeToggleBtn.style.top = '10px';
themeToggleBtn.style.right = '10px';
document.body.appendChild(themeToggleBtn);

// Dark/Light mode toggle
let isDarkMode = false;
themeToggleBtn.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.style.background = isDarkMode ? '#333' : '';
  document.body.style.color = isDarkMode ? '#fff' : '';
});

// MORE ABOUT US button click
moreAboutUsBtn.addEventListener('click', () => {
  alert('blood groups are classified by antigenson red blood cells. knowing your type is crucial for safe transfusion!');
});

// Login form handling
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  if (email && password) {
    console.log('Login successful!');
    alert('Login successful!');
  } else {
    console.log('Please fill in all fields!');
    alert('Please fill in all fields!');
  }
});

// Dynamic text update
const funFacts = [
  'Did you know? Every 2 seconds, someone in the world needs blood.',
  'Blood donation can save up to 3 lives!',
  'Type O negative is the universal donor.'
];
heading.textContent = funFacts[Math.floor(Math.random() * funFacts.length)];

// Blood group quiz (bonus)
const quizBtn = document.createElement('button');
quizBtn.textContent = 'Take Blood Group Quiz';
document.body.appendChild(quizBtn);
quizBtn.addEventListener('click', () => {
  const answers = [];
  const q1 = prompt('Do you have A or B antigens? (A/B/Neither)');
  answers.push(q1);
  const q2 = prompt('Do you have Rh factor? (Yes/No)');
  answers.push(q2);
  let bloodGroup;
  if (answers[0] === 'A' && answers[1] === 'Yes') bloodGroup = 'A+';
  else if (answers[0] === 'A' && answers[1] === 'No') bloodGroup = 'A-';
  // Add more logic...
  alert(`Your blood group is likely ${bloodGroup}!`);
});
