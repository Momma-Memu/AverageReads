
const fetchBooks = async () => {
    const res = await fetch("http://localhost:8080/users/mybooks", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem(
                "AVG_READS_ACCESS_TOKEN"
            )}`,
        },
    });
    if (res.status === 401) {
        // window.location.href = "/log-in";
        return;
    }
    const { mybooks } = await res.json();
    console.log(mybooks)
}


document.addEventListener("DOMContentLoaded", async () => {
    try {
        await fetchBooks();
    } catch (e) {
        console.error(e);
    }
    console.log("nofetchaction")
});

// document.addEventListener("DOMContentLoaded", () => {


//     //define interval for dbPopulate
//     setInterval(async () => {
//         try {

//             //sends fetch request do back-end server for book
//             const res = await fetch("http://localhost:8080/db-populate");
//             if (res.body === 'no book') {
//                 console.log('no book');
//             } else {
//                 //awaits on destructuring book from the response object
//                 let { book } = await res.json();

//                 console.log(book);

//                 //define function to parse XML to JS Object
//                 function parseXml(xml, arrayTags) {
//                     var dom = null;
//                     if (window.DOMParser) {
//                         dom = (new DOMParser()).parseFromString(xml, "text/xml");
//                     }
//                     else if (window.ActiveXObject) {
//                         dom = new ActiveXObject('Microsoft.XMLDOM');
//                         dom.async = false;
//                         if (!dom.loadXML(xml)) {
//                             throw dom.parseError.reason + " " + dom.parseError.srcText;
//                         }
//                     }
//                     else {
//                         throw "cannot parse xml string!";
//                     }

//                     function isArray(o) {
//                         return Object.prototype.toString.apply(o) === '[object Array]';
//                     }

//                     function parseNode(xmlNode, result) {
//                         if (xmlNode.nodeName == "#text") {
//                             var v = xmlNode.nodeValue;
//                             if (v.trim()) {
//                                 result['#text'] = v;
//                             }
//                             return;
//                         }

//                         var jsonNode = {};
//                         var existing = result[xmlNode.nodeName];
//                         if (existing) {
//                             if (!isArray(existing)) {
//                                 result[xmlNode.nodeName] = [existing, jsonNode];
//                             }
//                             else {
//                                 result[xmlNode.nodeName].push(jsonNode);
//                             }
//                         }
//                         else {
//                             if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) {
//                                 result[xmlNode.nodeName] = [jsonNode];
//                             }
//                             else {
//                                 result[xmlNode.nodeName] = jsonNode;
//                             }
//                         }

//                         if (xmlNode.attributes) {
//                             var length = xmlNode.attributes.length;
//                             for (var i = 0; i < length; i++) {
//                                 var attribute = xmlNode.attributes[i];
//                                 jsonNode[attribute.nodeName] = attribute.nodeValue;
//                             }
//                         }

//                         var length = xmlNode.childNodes.length;
//                         for (var i = 0; i < length; i++) {
//                             parseNode(xmlNode.childNodes[i], jsonNode);
//                         }
//                     }

//                     var result = {};
//                     for (let i = 0; i < dom.childNodes.length; i++) {
//                         parseNode(dom.childNodes[i], result);
//                     }

//                     return result;
//                 }
//                 //replaces every instance of <![CDATA with '' because it was making so some item couldn't be accessed
//                 while (book.match(/\<\!\[CDATA\[/)) {
//                     book = book.replace(`<![CDATA[`, '');
//                 }
//                 //replaces every instance of ]] with '' because it was making so some item couldn't be accessed
//                 while (book.match(/\]\]\>/)) {
//                     book = book.replace(']]>', '');
//                 }
//                 //console logs edited book XML string
//                 console.log(book);
//                 //console logs XML book after invoking parseXML function on it making it a JS Object
//                 console.log(parseXml(book));
//                 //reassign book to JS Object
//                 book = parseXml(book);

//                 //initiates new instance of xhr for POST request for sending the new book object back to the back end server
//                 var xhr = new XMLHttpRequest();
//                 xhr.open("POST", 'http://127.0.0.1:8080/db-populate', true);
//                 xhr.setRequestHeader('Content-Type', 'application/json');
//                 xhr.send(JSON.stringify({
//                     book,
//                 }));
//             }
//         } catch (e) {
//             console.error(e);
//         }
//     }, 5000);
// });
