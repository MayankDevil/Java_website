/*
    HRvoid scriptsheet
*/ 
try
{
    let main = document.getElementById('main');
    let menu = document.getElementById('aside');

    
    var active = true;
    
    function menu_open(){
        menu.style.display = "block";
        main.style.gridTemplateColumns = "3fr 1fr";
        active = true;
    }
    function menu_close(){
        menu.style.display = "none";
        main.style.gridTemplateColumns = "1fr";
        active = false;
    }
    // menu button function
    document.getElementById('menu_button').onclick = () => (active)? menu_close() : menu_open();
    // menu anchor function
    document.querySelectorAll('#aside > a').forEach(i => { i.onclick = () => menu_close() });
}
catch(e)
{
    console.log(e);
}