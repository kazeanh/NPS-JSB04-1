for (let i=1; i<10; i += 2)
{
    for (let k=0; k < (4 - i / 2); k++)
    {
        document.write('&nbsp;');
    }
    for (let j=0; j<i; j++)
    {
        document.write("1");
    }
    document.write("<br>");
}