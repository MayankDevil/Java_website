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
        | display | set sourceFileData into aside anchor
        -----------
    */

    sourceFileData.forEach( element => {
           
        var souceFileURL = `./data/html/${element}.html`
        
        var strings = element
                
        let anchor = strings.charAt(0).toUpperCase() + strings.slice(1);
        
        anchor = anchor.split('_').join(" ")
            
        aside.insertAdjacentHTML("beforeend",`<a href='${souceFileURL}' target="myFrame"> ${ anchor } </a>`)
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
    
    document.querySelectorAll('#aside > a').forEach(function(i)
    {
        i.onclick = () => menu_close()
    });
    
    /*
        ----------------------
        [ SEARCHBAR FUNCTION ] ========================================
        ----------------------
    */
    
    let searchBar = document.getElementById('searchBar')

    let asidelinks = document.querySelectorAll('#aside  a')
    
    // search function : on key press loop to match value to anchor
    
    searchBar.onkeyup = function()
    {    
        let search = searchBar.value.toUpperCase();

        for(let i = 0; i < asidelinks.length; i++)
        {
            let a = asidelinks[i];

            let data = a.textContent || a.innerHTML;

            if(data.toUpperCase().indexOf(search) > -1)
            {
                asidelinks[i].style.display = "block";
            }
            else
            {
                asidelinks[i].style.display = "none";
            }
        }
    }
    
    document.title = "Mayank"
}
catch(error)
{
    console.log(`${error}`)
}
// the end
