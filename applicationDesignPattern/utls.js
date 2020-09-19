const debounce=(func,delay=1000)=>{
    let timeOutid;
    return (...args)=>{
        if(timeOutid){
            clearTimeout(timeOutid);
        }
        timeOutid=setTimeout(()=>{
            func.apply(null,args);
        },delay)
};
};