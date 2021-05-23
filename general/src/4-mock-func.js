
export const forEach = (items, cb)=> {
    for(var item of items){
        cb(item);
    }
}

export const filter = (items, cb)=> {
    var out = [];
    for(var item of items){
        if(cb(item)){
            out.push(item)
        }
    }
    return out;
}