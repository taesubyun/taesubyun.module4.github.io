var names = [
  "Yaakov",
  "John",
  "Jen",
  "Jason",
  "Paul",
  "Frank",
  "Larry",
  "Paula",
  "Laura",
  "Jim",
];
var i;
for (i = 0; i < names.length; i++) {
  if (!(names[i].charAt(0) == "j" || names[i].charAt(0) == "J")) {
    //say Goodbye
    speakHello(names[i]);
  } else {
    //say Hello
    speakGoodbye(names[i]);
  }
}
