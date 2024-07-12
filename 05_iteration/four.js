const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// in for in loop we dont get direct vlue we get the keys
const programming = ["js", "rb", "py", "java","cpp"]
for (const key in programming){
    console.log(programming[key]);
}
