let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
let firststring ='Enthusiastic Developer and Engineer';
let secondstring ='Future Data Scientist';
let thirdstring ='Driven by innovation and technology!';
typewriter
  .pauseFor(933)
  .typeString(firststring)
  .pauseFor(3777)
  .deleteChars(firststring.length)
  .typeString(secondstring)
  .pauseFor(3777)
  .deleteChars(secondstring.length)
  .typeString(thirdstring)
  .pauseFor(3777)
  .start();
