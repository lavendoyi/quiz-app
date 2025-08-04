console.log("Script loaded!");
document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById('quizForm');
  const resultDiv = document.getElementById('result');

  quizForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get all answers
    const answers = {
      q1: quizForm.q1.value,
      q2: quizForm.q2.value,
      q3: quizForm.q3.value,
      q4: quizForm.q4.value,
      q5: quizForm.q5.value,
    };

    const character = getCharacter(answers);
    displayResult(character);
  });

  function getCharacter(answers) {
    // Simple rule-based scoring system
    let scores = {
      Pororo: 0,
      Crong: 0,
      Eddy: 0,
      Loopy: 0,
      Poby: 0,
    };

    if (answers.q1 === 'morning') scores.Pororo++;
    if (answers.q1 === 'night') scores.Eddy++;
    if (answers.q1 === 'evening') scores.Loopy++;
    if (answers.q1 === 'afternoon') scores.Crong++;

    if (answers.q2 === 'banana') scores.Crong++;
    if (answers.q2 === 'icecream') scores.Loopy++;
    if (answers.q2 === 'sandwich') scores.Eddy++;
    if (answers.q2 === 'cookies') scores.Crong++;

    if (answers.q3 === 'play') scores.Pororo++;
    if (answers.q3 === 'read') scores.Eddy++;
    if (answers.q3 === 'video games') scores.Crong++;
    if (answers.q3 === 'cook') scores.Loopy++;

    if (answers.q4 === 'dog') scores.Crong++;
    if (answers.q4 === 'cat') scores.Loopy++;
    if (answers.q4 === 'bird') scores.Pororo++;
    if (answers.q4 === 'robot') scores.Eddy++;

    if (answers.q5 === 'flight') scores.Pororo++;
    if (answers.q5 === 'intelligence') scores.Eddy++;
    if (answers.q5 === 'super speed') scores.Crong++;
    if (answers.q5 === 'talk to animals') scores.Loopy++;

    // Find character with the highest score
    let bestMatch = 'Pororo';
    let maxScore = 0;

    for (let character in scores) {
      if (scores[character] > maxScore) {
        bestMatch = character;
        maxScore = scores[character];
      }
    }

    return bestMatch;
  }

  function displayResult(character) {
    const imgUrl = getCharacterImage(character);
    const description = getCharacterDescription(character);

    resultDiv.innerHTML = `
      <h2>You are <span style="color:#0066cc">${character}</span>!</h2>
      <img src="${imgUrl}" alt="${character}" class="character-img"/>
      <p>${description}</p>
      <p>🎧 Your playlist is being generated...</p>
    `;

    resultDiv.style.display = 'block';
  }

  function getCharacterImage(character) {
    const images = {
      'Pororo': 'pororo.png',
      'Crong':  'crong.png',
      'Eddy':  'eddy.png',
      'Loopy': 'loopypink.png',
    };
    return images[character] || '';
  }

  function getCharacterDescription(character) {
    const desc = {
      'Pororo': 'You are curious, energetic, and love fun with friends!',
      'Crong':  'You’re playful, a little mischievous, but very loyal.',
      'Eddy':   'You’re the brains of the group — always inventing something!',
      'Loopy':  'You’re kind, sensitive, and love to care for others.',
      'Poby':   'You’re calm, wise, and always ready to help.'
    };
    return desc[character] || '';
  }
});