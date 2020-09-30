const googleSearch = require('./script');

dbMock=[
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com'
];

//synchronous pure functions
describe('googleSearch', ()=>{
    it('this is a test', () =>{
        expect('hello').toBe('hello')
        //googleSearch('testtest', dbMock);
    })
    
    it('testing google', () =>{
        expect(googleSearch('dog',dbMock)).toEqual(['dog.com','dogpictures.com'])
    })
    
    it('work with undefined and null inputs', () =>{
        expect(googleSearch(undefined,dbMock)).toEqual([])
        expect(googleSearch(null,dbMock)).toEqual([])
    })
    
    it('does not return more than 3 matches', () =>{
        expect(googleSearch('.com',dbMock).length).toEqual(3);
        //toEqual(4) will return fail, because more than 3 items are cut off in GoogleSearch function
    })
})