import Promise from 'bluebird';

export const fetchIcecream = (cb)=> {
    setTimeout(() => {
        cb('cookies & cream')
    }, 300);
}





export const fetchDance = ()=> Promise.delay(300).then(()=> 'macarena');

export const fetchBrownies = (n) => {
    return Promise.delay(300).then(()=> {
        if(!n){
            throw new Error('Number of brownies was not specified...');
        }
        if(typeof n !== 'number')
            throw new Error('Number of brownies must be a number...');
        if(n > 5) 
            throw new Error('Brownies were maxed out!');

        return 'Have some brownies'
    })
};