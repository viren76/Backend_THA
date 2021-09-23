var args = process.argv.slice(2);

var fs = require("fs");

switch(args[0]){
    case "--createFolder":
        fs.mkdirSync(args[1]);
        break;
    case "--createFile":
        fs.writeFileSync(args[1],args[2],(err)=>{
            if(err){
                console.error(err);
            }
        });
        break;
    case "--read":
       var data=fs.readFileSync(args[1],"utf-8");
        console.log(data);
        break;
    case "--deleteFile":
        fs.unlinkSync(args[1]);
        break;
    case "--deleteFolder":
        fs.rmdirSync(args[1]);
        break;
}





