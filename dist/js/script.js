const studentName = document.getElementById('student-name');
const studentImg = document.getElementById('student-img');
const studentText = document.getElementById('student-text');
const nextBtn = document.getElementById('btn-right');
const prevBtn = document.getElementById('btn-left');
const btn = document.querySelectorAll('.btn-2');

let index = 0
const students = []

function Student(img, name, text) {
  this.img = img
  this.name = name
  this.text = text
}

function createStudent(img, name, text) {
  let Img = `./img/${img}.jpg`
  let student = new Student(Img, name, text);

  students.push(student);
}

createStudent(0, 'Lani J.', 'Thanks for nice lesson every time, Torleif. I have learnt for half year.  I learn norwegian with textbooks,  but it is boring.His lecture is very unique , fun , simple and very useful for the real norwegian conversation . It helps me to keep motivation to learn norwegian. I am very satisfyied with his lessons.');
createStudent(1, 'Michael', 'Torleif is a great Norwegian teacher and I feel my level has improved significantly in a short time. His lessons are very well organized and easy to follow. He is patient and explains things carefully giving useful feedback and advice. After each class I receive a summary of the lesson plus practice homework.');
createStudent(2, 'Robin', 'I\'ve had around 30 Norwegian lessons with Torleif and each has been engaging, well-planned and tailored to my level. He explains concepts clearly, and his slides for each lesson are really engaging which helps me remember the vocabulary and grammar. I can now have conversations with Norwegians in their native language, and most of that is thanks to Torleif\'s great teaching.');
createStudent(3, 'Tim', 'Torleif\'s teaching methods are highly effective and relevant. The way he approaches his language lessons is to allow the student to explore how the Norwegian language works, but at the same time provide support when the student struggles. This is demonstrated through his interactive slides, which are designed through a storyboard that is simple to follow and comprehensive at the same time. I\'ve had almost 50 lessons with Torleif, and I must say every lesson has been an amazing learning experience for me. Can\'t wait till we hit 100.');
createStudent(4, 'Brett', 'I have been learning several languages for most of my life and have had a lot of teachers with varying degrees of professionalism and competency who were either great or just average. In sum, Torlef is very professional, knowledgeable, friendly, and one of the best language teachers I have experienced..');
createStudent(5, 'Victoria', 'Torleif er uten tvil den beste språklæreren jeg noensinne har hatt. Han er forberedt for hver time med interessante og aktuelle presentasjoner som får meg til å snakke om alle slags temaer, og fører til morsomme samtaler. Aldri før har jeg følt meg så komfortabel med å bruke norsk! Jeg kjenner at både uttalen, flyten og selvtilliten min har forbedret seg i løpet av de siste seks månedene, og jeg høres mye mer naturlig ut når jeg snakker. Å lære et fremmedspråk er alltid vanskelig, men det er mye lettere når du har en så fantastisk lærer å veilede deg.')

btn.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('prevBtn')) {
      if (index === 0) {
        index = students.length
      }
      index--
      studentImg.src = students[index].img
      studentName.textContent = students[index].name
      studentText.textContent = students[index].text
    }

    if (e.target.parentElement.classList.contains('nextBtn')) {
      index++
      if (index === students.length) {
        index = 0
      }
      studentImg.src = students[index].img
      studentName.textContent = students[index].name
      studentText.textContent = students[index].text
    }
  })
});