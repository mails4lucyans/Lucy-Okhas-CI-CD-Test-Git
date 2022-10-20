//Task13

const book ={
    title: 'my first automation scripts',
    description:  'steps to test automation',
    numberOfPages: 65,
    author: 'lucy',
    reading: false,
    toggleReadingStatus:function(){
        if(book.reading===true){
            book.reading = false
        }else{
            book.reading = true
        }
    }

    }
    book.toggleReadingStatus
    console.log(book.reading)