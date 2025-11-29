function check(){
    let first = document.getElementById("first").value.trim();
    let last = document.getElementById("last").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let email = document.getElementById("email").value.trim();
    let confrimemail = document.getElementById("cemail").value.trim();

    let err = 0;

    if (first == "")
    {
        alert("First Name Empty.");
        err++;
    };

    if (last == "")
    {
        alert("Last Name Empty.");
        err++;
    };

    if (address == "")
    {
        alert("Address Empty.");
        err++;
    };

    if (city == "")
    {
        alert("City field Empty.");
        err++;
    };

    if (email == "")
    {
        alert("Email Empty.");
        err++;
    };

    if (confrimemail == "")
    {
        alert("Confirm email Empty.");
        err++;
    };

    if(err == 0)
    {
        alert("Form Submitted successfull.");
        return true;
    }
    
    return false;
};