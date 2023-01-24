function mySome(arr, func)
{
    let i= 0;
    for(let a of arr)
    {
        if(func(a,i,arr))
        {return true;}
        i+=1;
    }
    return false;
}
function myEvery(arr,func)
{
    let i= 0;
    for(let a of arr)
    {
        if(!func(a,i,arr))
        return false;
        i+=1;
    }
    return true;
}