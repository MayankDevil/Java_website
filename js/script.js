/*
-	website-7 "LearnCoreJava"
-	Developed | Designed by Mayank
-	All Right Reserved by Mayank
-	JavaScript : ./js/script.js
*/
try
{
    let main = document.getElementById('main')

    let aside = document.getElementById('aside')

    var active = true
    
    //document.getElementById('content_frame').src="file:///home/user/Pictures/z8.jpg"

	/*
		[ menu open function ] -------------------------------------
	*/
    function menu_open()
    {
        aside.style.display = "block"

        active = true
    }
    /*
		[ menu close function ] ------------------------------------
    */
    function menu_close()
    {
        aside.style.display = "none"

        active = false
    }

    /*
        -----------
        |  |
        -----------
    */

    sourceFileData.forEach( element => {

        console.log(element)
                
        var souceFileURL = `https://github.com/MayankDevil/LearnCoreJava/${element}.java`
            
        aside.insertAdjacentHTML("beforeend",`<a href='${souceFileURL}' target="myFrame"> ${element} </a>`)            
    })

    /*
    	-----------------------------------------------------------
    	| menu button function | onclick close else open
    	-----------------------------------------------------------
   	*/

    document.getElementById('menu_button').onclick = () => (active)? menu_close() : menu_open();

    /*
    	-----------------------------------------------------------
		| aside anchore function | onclick close menu
		-----------------------------------------------------------
    */

    document.querySelectorAll('#aside > a').forEach(i => { i.onclick = () => menu_close() });
    
    document.title = "Mayank"
}
catch(error)
{
    console.log(`${error}`)
}
// the end
