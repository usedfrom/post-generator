const openai = require('../config/openai');
const { parsePostText } = require('../utils/textUtils');

async function generatePost() {
  const prompt = `
    Сгенерируй утверждение о жизни в формате:
    - Утверждение: 1-2 предложения.
    - Разъяснение: 2 предложения (если это было/не было, что делать).
    Дай только чистый текст без подписей "Утверждение" и "Разъяснение".
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 200,
  });

  return parsePostText(response.choices[0].message.content);
}

module.exports = { generatePost };