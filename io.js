const fs = require('fs');

const data = "This is a test content";

fs.writeFile('./store_data/www.ecoinput.com.txt', data, (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
    	console.log('Writen to file successfully!');
    }
})