function generateMyth(theme, character) {
  const themes = {
    creation: `In the beginning, ${character} forged the heavens from whispers of the void...`,
    war: `${character}, the relentless, marched across burning lands to challenge the gods...`,
    love: `When ${character} beheld the moon goddess, even stars dimmed with envy...`
  };
  return {
    title: `${theme.toUpperCase()} OF ${character.toUpperCase()}`,
    content: themes[theme] || `${character} wandered into legend with an unknown fate.`
  };
}
