function parsePostText(text) {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  return {
    statement: lines[0] || '',
    explanation: lines.slice(1).join(' ') || '',
  };
}

module.exports = { parsePostText };