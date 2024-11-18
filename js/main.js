let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
let firststring ='Experienced Developer and Engineer';
let secondstring ='Driven by innovation and technology!';
typewriter
  .pauseFor(933)
  .typeString(firststring)
  .pauseFor(777)
  .deleteChars(firststring.length)
  .typeString(secondstring)
  .pauseFor(777)
  .start();
