test('the abc function',()=> {
    //test pass since nothing fails it...
})
test('the xyz function',()=> {
    //test pass since nothing fails it...
}) 
test('some function exploded',()=> {
    //tests fail when your code throws unexpectedly
    // throw new Error('Boom!!!')
})  

//assume the sum function was imported from another module... 
const sum = (a, b) => a + b;

test('the sum function',()=> {
    //tests fail when an assertion is false
    expect(sum(1, 2)).toBe(3);
    // expect(sum(1, 2)).toBe(4);
})
test('batching assertions of the sum function',()=> {
    //batching assertions in a single test is possible 
    const actual = sum(1, 2)
    
    expect(actual).toBe(3);
    expect(actual).toBeGreaterThan(2);
    expect(actual % 3 == 0).toBeTruthy();
})