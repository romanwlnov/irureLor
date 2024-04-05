if ('speechSynthesis' in window) {
  // Create a new instance of SpeechSynthesisUtterance
  var utterance = new SpeechSynthesisUtterance('Hello World');

  // Set properties for the utterance
  utterance.voice = window.speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Google UK English Male'; })[0];
  utterance.volume = 1; // From 0 to 1
  utterance.rate = 1; // From 0.1 to 10
  utterance.pitch = 1; // From 0 to 2
  utterance.lang = 'en-GB';

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
} else {
  console.log('Speech synthesis not supported in this browser.');
}
