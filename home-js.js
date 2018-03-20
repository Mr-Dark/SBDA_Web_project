function changeBG() {

    var buttons=document.getElementsByName("radio");
    for(var i=0;i<buttons.length;i++)
    {
        if(buttons[i].checked==true)
        {
            document.getElementById("background").src=(i+1)+".jpg";
            break;
        }
    }
    
}