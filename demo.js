


 

 
var fs = require("fs");
var dirName = process.argv[2] 
fs.exists("./"+dirName,function(exists){
  if(exists){
	console.log("文件存在")
    process.exit(1)
  }
  if(!exists){
	fs.mkdirSync("./" + dirName) 
	process.chdir("./" + dirName) 
	fs.mkdirSync('css') 
	fs.mkdirSync('js')
	 
	fs.writeFileSync("./index.html", "<!DOCTYPE><title>Hello</title><h1>Hi</h1>")
	fs.writeFileSync("./css/style.css", "h1{color: red;}")
	fs.writeFileSync("./js/main.js", "var string = Hello World alert(string)")

	process.exit(0)
  }
  })