function parseXml(xml, arrayTags) {
    var dom = null;
    if (window.DOMParser) {
        dom = (new DOMParser()).parseFromString(xml, "text/xml");
    }
    else if (window.ActiveXObject) {
        dom = new ActiveXObject('Microsoft.XMLDOM');
        dom.async = false;
        if (!dom.loadXML(xml)) {
            throw dom.parseError.reason + " " + dom.parseError.srcText;
        }
    }
    else {
        throw "cannot parse xml string!";
    }

    function isArray(o) {
        return Object.prototype.toString.apply(o) === '[object Array]';
    }

    function parseNode(xmlNode, result) {
        if (xmlNode.nodeName == "#text") {
            var v = xmlNode.nodeValue;
            if (v.trim()) {
                result['#text'] = v;
            }
            return;
        }

        var jsonNode = {};
        var existing = result[xmlNode.nodeName];
        if (existing) {
            if (!isArray(existing)) {
                result[xmlNode.nodeName] = [existing, jsonNode];
            }
            else {
                result[xmlNode.nodeName].push(jsonNode);
            }
        }
        else {
            if (arrayTags && arrayTags.indexOf(xmlNode.nodeName) != -1) {
                result[xmlNode.nodeName] = [jsonNode];
            }
            else {
                result[xmlNode.nodeName] = jsonNode;
            }
        }

        if (xmlNode.attributes) {
            var length = xmlNode.attributes.length;
            for (var i = 0; i < length; i++) {
                var attribute = xmlNode.attributes[i];
                jsonNode[attribute.nodeName] = attribute.nodeValue;
            }
        }

        var length = xmlNode.childNodes.length;
        for (var i = 0; i < length; i++) {
            parseNode(xmlNode.childNodes[i], jsonNode);
        }
    }

    var result = {};
    for (let i = 0; i < dom.childNodes.length; i++) {
        parseNode(dom.childNodes[i], result);
    }

    return result;
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<GoodreadsResponse>
    <Request>
        <authentication>true</authentication>
        <key>
            <![CDATA[1kGAgCELnQJuBOO98Nmxcw]]>
        </key>
        <method>
            <![CDATA[search_search]]>
        </method>
    </Request>
    <search>
        <query>
            <![CDATA[Ender's Game]]>
        </query>
        <results-start>1</results-start>
        <results-end>20</results-end>
        <total-results>794</total-results>
        <source>Goodreads</source>
        <query-time-seconds>0.05</query-time-seconds>
        <results>
            <work>
                <id type="integer">2422333</id>
                <books_count type="integer">15</books_count>
                <ratings_count type="integer">1117509</ratings_count>
                <text_reviews_count type="integer">43129</text_reviews_count>
                <original_publication_year type="integer">1985</original_publication_year>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.30</average_rating>
                <best_book type="Book">
                    <id type="integer">375802</id>
                    <title>Ender's Game (Ender's Saga, #1)</title>
                    <author>
                        <id type="integer">589</id>
                        <name>Orson Scott Card</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408303130l/375802._SY160_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408303130l/375802._SY75_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">938064</id>
                <books_count type="integer">65</books_count>
                <ratings_count type="integer">84377</ratings_count>
                <text_reviews_count type="integer">909</text_reviews_count>
                <original_publication_year type="integer">1984</original_publication_year>
                <original_publication_month type="integer">12</original_publication_month>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.17</average_rating>
                <best_book type="Book">
                    <id type="integer">44687</id>
                    <title>Enchanters' End Game (The Belgariad, #5)</title>
                    <author>
                        <id type="integer">8732</id>
                        <name>David Eddings</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1217735909l/44687._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1217735909l/44687._SY75_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">6581562</id>
                <books_count type="integer">5</books_count>
                <ratings_count type="integer">37469</ratings_count>
                <text_reviews_count type="integer">253</text_reviews_count>
                <original_publication_year type="integer">2009</original_publication_year>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.39</average_rating>
                <best_book type="Book">
                    <id type="integer">6393082</id>
                    <title>Ender's Game, Volume 1: Battle School (Ender's Saga)</title>
                    <author>
                        <id type="integer">38491</id>
                        <name>Christopher Yost</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">55447683</id>
                <books_count type="integer">45</books_count>
                <ratings_count type="integer">34455</ratings_count>
                <text_reviews_count type="integer">2164</text_reviews_count>
                <original_publication_year type="integer">2017</original_publication_year>
                <original_publication_month type="integer">11</original_publication_month>
                <original_publication_day type="integer">14</original_publication_day>
                <average_rating>4.15</average_rating>
                <best_book type="Book">
                    <id type="integer">34368113</id>
                    <title>End Game (Will Robie, #5)</title>
                    <author>
                        <id type="integer">9291</id>
                        <name>David Baldacci</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495976812l/34368113._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495976812l/34368113._SY75_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">56291562</id>
                <books_count type="integer">7</books_count>
                <ratings_count type="integer">7514</ratings_count>
                <text_reviews_count type="integer">388</text_reviews_count>
                <original_publication_year type="integer">2017</original_publication_year>
                <original_publication_month type="integer">7</original_publication_month>
                <original_publication_day type="integer">9</original_publication_day>
                <average_rating>4.17</average_rating>
                <best_book type="Book">
                    <id type="integer">35010791</id>
                    <title>The Gender End (The Gender Game, #7)</title>
                    <author>
                        <id type="integer">6860531</id>
                        <name>Bella Forrest</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">43992</id>
                <books_count type="integer">7</books_count>
                <ratings_count type="integer">14294</ratings_count>
                <text_reviews_count type="integer">248</text_reviews_count>
                <original_publication_year type="integer">1984</original_publication_year>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.27</average_rating>
                <best_book type="Book">
                    <id type="integer">44660</id>
                    <title>The Belgariad Boxed Set: Pawn of Prophecy / Queen of Sorcery / Magician's Gambit / Castle of Wizardry / Enchanters' End Game (The Belgariad, #1-5)</title>
                    <author>
                        <id type="integer">8732</id>
                        <name>David Eddings</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391347386l/44660._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391347386l/44660._SX50_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">7272274</id>
                <books_count type="integer">3</books_count>
                <ratings_count type="integer">15987</ratings_count>
                <text_reviews_count type="integer">56</text_reviews_count>
                <original_publication_year type="integer">2010</original_publication_year>
                <original_publication_month type="integer">3</original_publication_month>
                <original_publication_day type="integer">24</original_publication_day>
                <average_rating>4.60</average_rating>
                <best_book type="Book">
                    <id type="integer">7025086</id>
                    <title>Ender's Game, Volume 2: Command School</title>
                    <author>
                        <id type="integer">38491</id>
                        <name>Christopher Yost</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">42437887</id>
                <books_count type="integer">7</books_count>
                <ratings_count type="integer">5521</ratings_count>
                <text_reviews_count type="integer">673</text_reviews_count>
                <original_publication_year type="integer">2015</original_publication_year>
                <original_publication_month type="integer">9</original_publication_month>
                <original_publication_day type="integer">8</original_publication_day>
                <average_rating>4.11</average_rating>
                <best_book type="Book">
                    <id type="integer">22874150</id>
                    <title>The End Game</title>
                    <author>
                        <id type="integer">6876994</id>
                        <name>Kate  McCarthy</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423089153l/22874150._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423089153l/22874150._SY75_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">938065</id>
                <books_count type="integer">10</books_count>
                <ratings_count type="integer">7381</ratings_count>
                <text_reviews_count type="integer">149</text_reviews_count>
                <original_publication_year type="integer">1980</original_publication_year>
                <original_publication_month type="integer">1</original_publication_month>
                <original_publication_day type="integer">1</original_publication_day>
                <average_rating>4.39</average_rating>
                <best_book type="Book">
                    <id type="integer">18879</id>
                    <title>The Belgariad, Vol. Two: Castle of Wizardry / Enchanters' End Game (The Belgariad, #4-5)</title>
                    <author>
                        <id type="integer">8732</id>
                        <name>David Eddings</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">44223038</id>
                <books_count type="integer">20</books_count>
                <ratings_count type="integer">6380</ratings_count>
                <text_reviews_count type="integer">477</text_reviews_count>
                <original_publication_year type="integer">2015</original_publication_year>
                <original_publication_month type="integer">9</original_publication_month>
                <original_publication_day type="integer">15</original_publication_day>
                <average_rating>4.27</average_rating>
                <best_book type="Book">
                    <id type="integer">24611928</id>
                    <title>The End Game (A Brit in the FBI, #3)</title>
                    <author>
                        <id type="integer">1239</id>
                        <name>Catherine Coulter</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1425319746l/24611928._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1425319746l/24611928._SX50_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">56238306</id>
                <books_count type="integer">5</books_count>
                <ratings_count type="integer">2697</ratings_count>
                <text_reviews_count type="integer">98</text_reviews_count>
                <original_publication_year type="integer">2017</original_publication_year>
                <original_publication_month type="integer">4</original_publication_month>
                <original_publication_day type="integer">24</original_publication_day>
                <average_rating>4.33</average_rating>
                <best_book type="Book">
                    <id type="integer">34963329</id>
                    <title>End Game (Jack Noble #12)</title>
                    <author>
                        <id type="integer">6151659</id>
                        <name>L.T. Ryan</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">66029652</id>
                <books_count type="integer">3</books_count>
                <ratings_count type="integer">1492</ratings_count>
                <text_reviews_count type="integer">154</text_reviews_count>
                <original_publication_year type="integer" nil="true"/>
                <original_publication_month type="integer" nil="true"/>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.03</average_rating>
                <best_book type="Book">
                    <id type="integer">42372731</id>
                    <title>The End Game (Love Games #2)</title>
                    <author>
                        <id type="integer">15996299</id>
                        <name>Mickey Miller</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">53830455</id>
                <books_count type="integer">5</books_count>
                <ratings_count type="integer">2391</ratings_count>
                <text_reviews_count type="integer">175</text_reviews_count>
                <original_publication_year type="integer">2016</original_publication_year>
                <original_publication_month type="integer">11</original_publication_month>
                <original_publication_day type="integer">27</original_publication_day>
                <average_rating>4.42</average_rating>
                <best_book type="Book">
                    <id type="integer">33144572</id>
                    <title>End Game (Fallen Empire, #8)</title>
                    <author>
                        <id type="integer">4512224</id>
                        <name>Lindsay Buroker</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">51609213</id>
                <books_count type="integer">8</books_count>
                <ratings_count type="integer">1253</ratings_count>
                <text_reviews_count type="integer">279</text_reviews_count>
                <original_publication_year type="integer">2018</original_publication_year>
                <original_publication_month type="integer">1</original_publication_month>
                <original_publication_day type="integer">2</original_publication_day>
                <average_rating>4.21</average_rating>
                <best_book type="Book">
                    <id type="integer">30985221</id>
                    <title>End Game (Dirty Money, #4)</title>
                    <author>
                        <id type="integer">73977</id>
                        <name>Lisa Renee Jones</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1497740135l/30985221._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1497740135l/30985221._SX50_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">61846440</id>
                <books_count type="integer">2</books_count>
                <ratings_count type="integer">1324</ratings_count>
                <text_reviews_count type="integer">237</text_reviews_count>
                <original_publication_year type="integer">2018</original_publication_year>
                <original_publication_month type="integer">5</original_publication_month>
                <original_publication_day type="integer">23</original_publication_day>
                <average_rating>4.40</average_rating>
                <best_book type="Book">
                    <id type="integer">39947220</id>
                    <title>End Game (Bellevue Bullies, #4)</title>
                    <author>
                        <id type="integer">5255580</id>
                        <name>Toni Aleo</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526291653l/39947220._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526291653l/39947220._SY75_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">19174329</id>
                <books_count type="integer">1</books_count>
                <ratings_count type="integer">610</ratings_count>
                <text_reviews_count type="integer">110</text_reviews_count>
                <original_publication_year type="integer">2013</original_publication_year>
                <original_publication_month type="integer">1</original_publication_month>
                <original_publication_day type="integer">1</original_publication_day>
                <average_rating>3.74</average_rating>
                <best_book type="Book">
                    <id type="integer">13586977</id>
                    <title>Ender's World: Fresh Perspectives on the SF Classic Ender's Game</title>
                    <author>
                        <id type="integer">589</id>
                        <name>Orson Scott Card</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344608510l/13586977._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344608510l/13586977._SX50_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">12531</id>
                <books_count type="integer">1</books_count>
                <ratings_count type="integer">1900</ratings_count>
                <text_reviews_count type="integer">87</text_reviews_count>
                <original_publication_year type="integer">2001</original_publication_year>
                <original_publication_month type="integer">10</original_publication_month>
                <original_publication_day type="integer">14</original_publication_day>
                <average_rating>4.22</average_rating>
                <best_book type="Book">
                    <id type="integer">9736</id>
                    <title>Beyond Ender's Game: Speaker for the Dead, Xenocide, Children of the Mind (Ender's Saga, #2-4)</title>
                    <author>
                        <id type="integer">589</id>
                        <name>Orson Scott Card</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">12530</id>
                <books_count type="integer">3</books_count>
                <ratings_count type="integer">1924</ratings_count>
                <text_reviews_count type="integer">60</text_reviews_count>
                <original_publication_year type="integer">2002</original_publication_year>
                <original_publication_month type="integer">9</original_publication_month>
                <original_publication_day type="integer">16</original_publication_day>
                <average_rating>4.49</average_rating>
                <best_book type="Book">
                    <id type="integer">9735</id>
                    <title>Ender's Game Boxed Set: Ender's Game, Ender's Shadow, Shadow of the Hegemon</title>
                    <author>
                        <id type="integer">589</id>
                        <name>Orson Scott Card</name>
                    </author>
                    <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
                    <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">56991591</id>
                <books_count type="integer">5</books_count>
                <ratings_count type="integer">1396</ratings_count>
                <text_reviews_count type="integer">68</text_reviews_count>
                <original_publication_year type="integer">2017</original_publication_year>
                <original_publication_month type="integer">7</original_publication_month>
                <original_publication_day type="integer">7</original_publication_day>
                <average_rating>4.28</average_rating>
                <best_book type="Book">
                    <id type="integer">35563236</id>
                    <title>End Game (Langthorne #4)</title>
                    <author>
                        <id type="integer">6422267</id>
                        <name>Charlie Gallagher</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500842571l/35563236._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500842571l/35563236._SY75_.jpg</small_image_url>
                </best_book>
            </work>
            <work>
                <id type="integer">71051396</id>
                <books_count type="integer">4</books_count>
                <ratings_count type="integer">391</ratings_count>
                <text_reviews_count type="integer">204</text_reviews_count>
                <original_publication_year type="integer">2020</original_publication_year>
                <original_publication_month type="integer">1</original_publication_month>
                <original_publication_day type="integer" nil="true"/>
                <average_rating>4.22</average_rating>
                <best_book type="Book">
                    <id type="integer">46125032</id>
                    <title>End Game (Capital Intrigue, #1)</title>
                    <author>
                        <id type="integer">7913140</id>
                        <name>Rachel Dylan</name>
                    </author>
                    <image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563377096l/46125032._SX98_.jpg</image_url>
                    <small_image_url>https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563377096l/46125032._SY75_.jpg</small_image_url>
                </best_book>
            </work>
        </results>
    </search>
</GoodreadsResponse>`

const querys = ['original_publication_year', 'average_rating', 'title', 'author', 'image_url', 'small_image_url']
console.log(parseXml(xml, querys));