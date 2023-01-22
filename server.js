const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {// create the server 
    console.log(req.url, req.method);

    //response ekak yawana widiha
    //me tiyanne text ekak widihata liyana widiha
   /* res.setHeader('Content-Type','text/plain'); //header ekak hadanna one mona wage data da display karanne kiyla
    res.write('Hello, MotherFucker !!!');
    res.end();*/

    //one nam response eka apita html widihata display karannath puluwan
    /*
    res.setHeader('Content-Type','text/html');
    res.write('<p><center>Hello, MotherFucker !!!</center></p>');
    res.write('<p>Again Welcome, This time is write into HTML</p>');
    res.end();*/


    //apita one nam wena kohe hari tiyana html page ekak return karannath puluwan
   /* res.setHeader('Content-Type','text/html');
    fs.readFile('./views/Home.html', (err, data) => {
        if(err){
            console.log(err)
            res.end();
        }else {
            res.write(data);
            res.end();

            //uda widihata yewwa data eka apita single line ekain yawanna puluwan palleha widihata
            //res.end(data);
        }
    })*/

    //page godak tiyanwa nam userta ynna one page eka anuwa page eka load karanne
    let path = './views/';
    switch(req.url){
        case '/' : 
            path += 'Home.html';
            res.statusCode = 200;
            break;
        case '/About' : 
            path += 'About.html';
            res.statusCode = 200;
            break;
        case '/About-me' :  // about-me wage wena ekak gehuwot about ekatama redirect wenna code eka liyanne mehemai
            res.statusCode = 301;
            res.setHeader('Location','/about');   // othana location kiyala denna one
            res.end();
            break;
        default : 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    res.setHeader('Content-Type','text/html');
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end();
        }else {
            res.write(data);
            res.end();

            //uda widihata yewwa data eka apita single line ekain yawanna puluwan palleha widihata
            //res.end(data);
        }
    })

}); 

server.listen(3001, 'localhost',() => {
  
    console.log('Listing for request on 3000');
})
/*
const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req);
})

server.listen(3000,'localhost', () => {
    console.log('Listnig for the request on port 3000')
})*/