//task14
const books =[
    {
        title: 'Why Ask Why',
        description: 'Answer to building a better life',
        numberOfPage: 140,
        author: 'John Mason',
        reading: true
    },

    {
        title: 'You are awesome',
        description: 'Find your confidence',
        numberOfPage: 150,
        author: 'Matthew syde',
        reading: false

    },

    {

        title: 'The maid',
        description: 'Be the same as everyoneelse and yet entirely different',
        numberOfPage: 140,
        author: 'Nita Prose',
        reading: true
    },
]

for(let key in books) {
    if(books[key].reading=== true){
      console.log(key,books[key]);  
    }
}