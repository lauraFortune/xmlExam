/*##################### START INTERACTION ONE ##########################*/
function interactionOne(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            showResult(xhttp.responseXML);
        }
    };
    xhttp.open("GET", "holidays.xml", true); //-######## MODIFY FILE NAME #########*/
    xhttp.send(); 
    
    
    function showResult(xml) {

        var txt = "";
        var id = document.getElementById("input1").value;  //-######## MODIFY INPUT ID AND VAR #########*/
        var item = document.getElementById("input2").value;
        path = "holidayLibrary/holiday[" + id + "]/destination | holidayLibrary/holiday[" + id + "]/" + item + ""; //-####MODIFY x-PATH (tells doc what info to retrieve) #########*/
        if (xml.evaluate) {
            var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null); //nodes = result of path
            var result = nodes.iterateNext(); //loop through all nodes to end
            while (result) {
                txt += result.childNodes[0].nodeValue + "<br>";
                result = nodes.iterateNext();
            } 
    
        // Code For Internet Explorer - do not change
        } else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
            xml.setProperty("SelectionLanguage", "XPath");
            nodes = xml.selectNodes(path);
            for (i = 0; i < nodes.length; i++) {
                txt += nodes[i].childNodes[0].nodeValue + "<br>";
            }
        }
        document.getElementById("answer1").innerHTML = txt; //########MODIFY DISPLAY AREA ID#########*/
    }
}
            
/*##################### END INTERACTION TWO ##########################*/   

/*##################### START INTERACTION TWO ##########################*/
    function interactionTwo(){

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                showResult(xhttp.responseXML);
            }
        };
        xhttp.open("GET", "holidays.xml", true); //-######## MODIFY FILE NAME #########*/
        xhttp.send(); 
        
        
        function showResult(xml) {

            var txt = "";
            var id = document.getElementById("input3").value;  //-######## MODIFY INPUT ID AND VAR #########*/

            path = "holidayLibrary/holiday[" + id + "]/accomodation | holidayLibrary/holiday[" + id + "]/cost"; //-####MODIFY x-PATH (tells doc what info to retrieve) #########*/
            if (xml.evaluate) {
                var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null); //nodes = result of path
                var result = nodes.iterateNext(); //loop through all nodes to end
                while (result) {
                    txt += result.childNodes[0].nodeValue + "<br>";
                    result = nodes.iterateNext();
                } 
        
            // Code For Internet Explorer - do not change
            } else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
                xml.setProperty("SelectionLanguage", "XPath");
                nodes = xml.selectNodes(path);
                for (i = 0; i < nodes.length; i++) {
                    txt += nodes[i].childNodes[0].nodeValue + "<br>";
                }
            }
            document.getElementById("answer2").innerHTML = txt; //-########MODIFY DISPLAY AREA ID#########*/
        }
    }
            
/*##################### END INTERACTION TWO ##########################*/