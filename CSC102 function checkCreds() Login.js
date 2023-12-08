function checkCreds()
{
    var FirstName = document.getElementById("firstName").value;
    var LastName = document.getElementById("lastName").value;
    var City = document.getElementById("city").value;
    var Badge = document.getElementById("badge").value;
    var ZipCode = document.getElementById("code").value;

    if (FirstName.length >0)
    {
       
        if (Badge >99 && Badge< 1000)
        {
            location.replace("CSC102 String.html");
        }
        else
        {
            alert("invalid badge # it's 3 digits long")
        }
    }
    else
    {
        alert(" first name not valid  length");
    }
    if (LastName.length >0)
    {
       
        if (ZipCode >1000 && ZipCode< 9999)
        {
            
        }
        else
        {
            alert("invalid ZipCode # it's 4 digits long")
        }
    }
    else
    {
        alert("last name not valid length");
    }


}