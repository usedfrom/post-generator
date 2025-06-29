const { createCanvas } = require('canvas');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateImage(statement, explanation) {
  const width = 1080;
  const height = 1920;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Фон
  ctx.fillStyle = '#111111';
  ctx.fillRect(0, 0, width, height);

  // Текст
  ctx.font = 'bold 52px "Helvetica"';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';

  // Перенос строк
  const wrapText = (text, maxWidth) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const testLine = currentLine + ' ' + words[i];
      if (ctx.measureText(testLine).width < maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = words[i];
      }
    }
    lines.push(currentLine);
    return lines;
  };

  // Рендер текста
  const statementLines = wrapText(statement, width - 100);
  statementLines.forEach((line, i) => {
    ctx.fillText(line, width / 2, 400 + i * 60);
  });

  ctx.font = '36px "Helvetica"';
  const explanationLines = wrapText(explanation, width - 100);
  explanationLines.forEach((line, i) => {
    ctx.fillText(line, width / 2, 700 + i * 50);
  });

  // Сохранение
  const outputDir = path.resolve(__dirname, '../../output');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const buffer = canvas.toBuffer('image/png');
  const fileName = `post-${Date.now()}.png`;
  await sharp(buffer).toFile(path.join(outputDir, fileName));

  return fileName;
}

module.exports = { generateImage };