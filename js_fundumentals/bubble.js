function bubbleSort(a)
{
    var change;
    var n = a.length-1;
    var x=a;
    do {
        change = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               change = true;
            }
        }
        n--;
    } while (change);
 return x; 
}