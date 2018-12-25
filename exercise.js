/*--------------------------------------1---------------------------------*/
// let email=`serchenko1991@gmail.com`
// email.split('@').length==2?console.log("ok"):console.log("Not ok!");

/*--------------------------------------2---------------------------------*/
// printSubWord=(word,startIndex,lengthOfSubWord)=>
//     word.slice(startIndex,startIndex+lengthOfSubWord)
// console.log(printSubWord("ctionFUN",5,3))


/*--------------------------------------3---------------------------------*/
// reverseSentence=(sentence)=>
// sentence.split(",").reverse().join(" ")
// console.log(reverseSentence("Hello,my,friend,!"))

/*--------------------------------------4---------------------------------*/
// checkBookHandler=(name)=>books.some(book=>book==name)
// let books=["book1","book2","book3","book4","book5"]
// console.log(checkBookHandler("book1"))

/*--------------------------------------5---------------------------------*/
// checkMax=(...args)=>Math.max(...args)
// console.log(checkMax(1,2,3,4,7,9))

/*--------------------------------------6---------------------------------*/
// let date=new Date();
// timeInSeconds=(((date.getHours()+8)%24*3600))+(date.getMinutes()-20)%60*60+date.getSeconds();
// hours = Math.floor(timeInSeconds / (60*60));  
// minutes = Math.floor(timeInSeconds % (60*60)/60);
// seconds=Math.floor(timeInSeconds-(hours*60*60) -minutes*60);
// console.log( hours + ":" + minutes+':'+seconds)  

/*------------------------------------------Split--URL--------------------------------*/
// let urlParts={},
// path=[],
// url="http://example.com/path/to/page?name=ferret&color=purple",
// search=url.split("?")[1]



// urlParts.protocol=url.split("?")[0].split("://")[0];
// ((url.split("?")[0].split("://")[1]).split("/"))
// .map((part,index) => index==0 ? urlParts.domain=part:path.push(part)  
// )
// urlParts.path=path.join("/")

// urlParts.search=[]
// search.split("&").map(part=>urlParts.search.push(`${part.split("=")[0]}:${part.split("=")[1]}`))

// console.log(urlParts)

// console.log(`protocol:${protocol}\ndomain:${domain}\npath:${path.join("/")}\nsearch:${search}`)

