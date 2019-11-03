for(var i = 1; i <= 100; i++)
{
    if(i%15 == 0)
    {
        console.log("ZeroCool");
    }
    
    else if(i%3 == 0)
    {
        console.log("Zero");
    }

    else if(i%5 == 0)
    {
        console.log("Cool");       
    }

    else
    {
        console.log(i);
    }
}