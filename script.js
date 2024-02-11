let strMarks = "[4, 5, 2, 3]";
let marks = JSON.parse(strMarks);
console.log(marks[2]);

let strStudent =
  '{"name": "John", "age": 25, "isStudent": false, "marks": [4, 5, 2, 3]}';
let student = JSON.parse(strStudent);
console.log(student.marks);

let str = '{"title":"Экзамен","date":"2019-02-03T12:00:00.000Z"}';

let test = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});
console.log(test.date);

let testJS = {
  title: "Test",
  subject: "JavaScript",
};

let strJS = JSON.stringify(testJS); // Преобразование в строку JSON
console.log(strJS); // {"title":"Test","subject":"JavaScript"}
test = JSON.parse(strJS); //Обратное преобразование в объект
console.log(test.title); // Test

document.cookie = "user=John";


