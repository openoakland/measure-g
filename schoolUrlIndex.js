function getSchoolURL(school)
{
    console.log(school)
    var schoolURLIndex  = createSchoolUrlIndex();
    var returnURL = "";
    for (var i = 0; i< schoolURLIndex.length; i++)
    {
         var compare1;
        var compare2;
        
        if(schoolURLIndex[i][1].length>school.length)
        {
            compare1 = (schoolURLIndex[i][1].toUpperCase()).substring(0,school.length)
            compare2 = school.toUpperCase()
        } else
        {
            compare1 = schoolURLIndex[i][1].toUpperCase()
            compare2 = (school.toUpperCase()).substring(0,schoolURLIndex[i][1].length)
        }
        if(compare1 == compare2)
        {
            returnURL = schoolURLIndex[i][0]
            console.log("Success! " + returnURL)
        }   
    }
    
    
    return returnURL;
    
}

var makeSchoolNamesClickable = function (){
	var cells = document.getElementsByTagName('div')
	for (var i = 0, cell; cell = cells[i]; i++){
		if (cell.className != 'school-name') continue
		console.log("test")
		var caseId = cell.innerHTML
		cell.innerHTML = ''
		var link = document.createElement('a')
		link.href = schoolURL
		link.appendChild(document.createTextNode(caseId))
		cell.appendChild(link)
	}
}

var createSchoolUrlIndex = function () {
                var schoolUrlIndex = [];
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2348' , 'Adult and Career Education'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/609' , 'Acorn Woodland Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/206' , 'Allendale Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2776' , 'Alliance Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2020' , 'Architecture Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/761' , 'Ascend Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2493' , 'Barack Obama Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/235' , 'Bella Vista Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2441' , 'Bret Harte Middle School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/789' , 'Bridges Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/246' , 'Brookfield Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1861' , 'Bunche Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1367' , 'Burbank Center'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/261' , 'Burckhalter Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2189' , 'Business Information & Technology HS'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2252' , 'Business, Entrepreneurial School of Technology'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/800' , 'Carl B. Munck Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2200' , 'Castlemont High School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/288' , 'Chabot Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2875' , 'Claremont Middle School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/314' , 'Cleveland Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2851' , 'Coliseum College Prep Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1962' , 'Community Day HS'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/850' , 'Community United Elementary School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/326' , 'Crocker Highlands Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1872' , 'Dewey Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/299' , 'East Oakland Pride Elementary School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2239' , 'East Oakland School of the Arts'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2504' , 'Edna M Brewer Middle School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2754' , 'Elmhurst Community Prep'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/415' , 'Emerson Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/352' , 'EnCompass'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/891' , 'Esperanza Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2801' , 'Explore MS'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1916' , 'Far West'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/454' , 'Franklin Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2122' , 'Fremont High School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2178' , 'Freshman Prep Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2379' , 'Frick Middle'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/465' , 'Fruitvale Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/697' , 'Futures Elementary School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/481' , 'Garfield Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/532' , 'Glenview Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/359' , 'Global Family School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/643' , 'Grass Valley Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/337' , 'Greenleaf Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/746' , 'Hillcrest Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2375' , 'Hillside Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/924' , 'Hoover Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/880' , 'Horace Mann Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/710' , 'Howard Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/866' , 'International Comm. Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/913' , 'Joaquin Miller Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1296' , 'Kaiser Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/902' , 'Korematsu Discovery Acade'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1192' , 'La Escuelita Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1508' , 'Lafayette Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1402' , 'Lakeview Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1254' , 'Laurel Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1080' , 'Lazear Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1426' , 'Learning Without Limits'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1979' , 'Life Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1519' , 'Lincoln Elementary School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1456' , 'M L King Jr Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2718' , 'Madison Middle School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2091' , 'Mandela High School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1415' , 'Manzanita Community School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1351' , 'Manzanita SEED'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1388' , 'Markham Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1329' , 'Marshall Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1307' , 'Maxwell Park Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2263' , 'McClymonds'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1681' , 'Melrose Leadership Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1994' , 'MetWest'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1285' , 'Montclair Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2515' , 'Montera Middle School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1203' , 'New Highland Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1687' , 'Oakland High School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2308' , 'OAKLAND INTERNATIONAL HIGH'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1755' , 'Oakland Technical High'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/198' , 'Oakland Unified School District'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/969' , 'Oakland Unified School District'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1683' , 'Oakland Unified School District'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2377' , 'Oakland Unified School District'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/971' , 'Parker Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1012' , 'Peralta Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1023' , 'Piedmont Avenue Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1467' , 'Place at Prescott'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1628' , 'REACH Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1049' , 'Redwood Heights Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1617' , 'RISE'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2080' , 'Robeson Visual Performing Arts'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2585' , 'Roosevelt Middle School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2812' , 'Roots International Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2274' , 'Rudsdale Continuation'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1589' , 'Sankofa Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1143' , 'OTX West Training Site'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1154' , 'Sequoia Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1766' , 'Skyline High School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1165' , 'Madison Park Academy (TK-5)'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1929' , 'Sojourner Truth Independent Study'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1901' , 'Street Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2319' , 'Student Website'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1564' , 'Think College Now'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1181' , 'Thornhill Elementary'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2833' , 'United for Success'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2862' , 'Urban Promise Academy'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2430' , 'West Oakland Middle School'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/2630' , 'Westlake Middle'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/1318' , 'OUSD Career Pathways'])
                schoolUrlIndex.push(['http://www.ousd.k12.ca.us/Domain/878' , 'ZZZ Additional Site'])
                return schoolUrlIndex;
            }