function myFind(arr, func)
{
    let i = 0
    for(let a of arr)
    {
        if(func(a,i,arr))
            {return a;}
        i+=1;
    }
}
function myFindIndex(arr, func)
{
    let i = 0
    for(let a of arr)
    {
        if(func(a,i,arr))
            {return i;}
        i+=1;
    }
}