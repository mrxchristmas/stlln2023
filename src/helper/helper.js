

export const getDateNow =()=>{
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const year = date.getFullYear();

    // console.log(d, m, year)

    let day = '';
    let month = '';

    if(parseInt(d) <= 9){
        day = '0' + d;
    }else{
        day = d;
    }

    if(parseInt(m) <= 9){
        month = '0' + m;
    }else{
        month = m;
    }
    
    return {year, month, day}
}
export const getDateNowText =()=>{
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const year = date.getFullYear();

    // console.log(d, m, year)

    let day = '';
    let month = '';

    if(parseInt(d) <= 9){
        day = '0' + d;
    }else{
        day = d;
    }

    if(parseInt(m) <= 9){
        month = '0' + m;
    }else{
        month = m;
    }
    
    return `${month}-${day}-${year}`
}
export const dateToText = (_date) =>{
    // must use getCorrectDateFormat date passed in here
    const date = new Date(_date);
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const year = date.getFullYear();

    // console.log(d, m, year)

    let day = '';
    let month = '';

    if(parseInt(d) <= 9){
        day = '0' + d;
    }else{
        day = d;
    }

    if(parseInt(m) <= 9){
        month = '0' + m;
    }else{
        month = m;
    }
    
    return `${month}-${day}-${year}`
}

export const zgetMonthObject =(d)=>{
    const date = new Date(d)
    const fd = new Date(date.getFullYear(), date.getMonth(), 1);
    const ld = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let ret = [];
    const lmld = new Date(date.getFullYear(), date.getMonth(), 0);
    const lmzd = new Date(date.getFullYear(), date.getMonth(), 0)
    lmzd.setDate((lmzd.getDate() - lmzd.getDay()));

    // console.log('AAAAA', lmzd, lmld, lmzd.getDate() - lmzd.getDay())
    
    const add = lmld.getDate() - lmzd.getDate() + 1;


    let x = parseInt(fd.getDate())
    let y = parseInt(ld.getDate()) + add

    console.log(x, y, add)
    while (x < y){
        let week = []; 
        const current = new Date(date.getFullYear(), date.getMonth(), x)
        current.setDate((current.getDate() - current.getDay()));
        for (var i = 0; i < 7; i++) {
            week.push(
                dateToText( new Date(current) )
            ); 
            current.setDate(current.getDate() +1);
            // if(ld.getMonth === current.getMonth()){
                x++;
            // }
        }
        ret.push(week)
    }

    return ret;
}

export const getMonthObject =(d)=>{
    const darr = d.split('-')
    const date = getCorrectDateFormat({
        day: darr[1],
        month: darr[0],
        year: darr[2]
    })
    const fd = new Date(date.getFullYear(), date.getMonth(), 1);
    const ld = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let ret = [];
    const lmld = new Date(date.getFullYear(), date.getMonth(), 0);
    const lmzd = new Date(date.getFullYear(), date.getMonth(), 0)
    lmzd.setDate((lmzd.getDate() - lmzd.getDay()));
    
    const add = lmld.getDate() - lmzd.getDate() + 1;

    // return `AAAAA, ${fd} ${ld} ${lmld} ${lmzd} `

    let x = parseInt(fd.getDate())
    let y = parseInt(ld.getDate()) + add

    while (x < y){
        let week = []; 
        // const current = new Date(date.getFullYear(), date.getMonth(), x)
        const current = new Date(date.getFullYear(), date.getMonth(), x)
        current.setDate((current.getDate() - current.getDay()));
        for (var i = 0; i < 7; i++) {
            week.push(
                dateToText( new Date(current) )
            ); 
            current.setDate(current.getDate() +1);
            // if(ld.getMonth === current.getMonth()){
                x++;
            // }
        }
        ret.push(week)
    }

    // console.log(ret)
    return ret;

}

export const getCorrectDateFormat =({day, month, year})=>{
    return new Date(year, parseInt(month) - 1, day)
}
// export const getCDFFormat =(datestring)=>{
//     const darr = datestring.split('-')
//     return getCorrectDateFormat({
//         day: darr[1],
//         month: darr[0],
//         year: darr[2]
//     })
// }

export const dateToMonthText =(date, isMobile=false)=>{
    const darr = date.split('-')
    const d = getCorrectDateFormat({
        day: darr[1],
        month: darr[0],
        year: darr[2]
    })
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    const monthNamesMin = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    if(isMobile){
        return monthNamesMin[d.getMonth()]
    }
    return monthNames[d.getMonth()]
}

export const getDay =(d)=>{
    const names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return names[parseFloat(d)]
}

export const rngPassword =()=>{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

export const getSubCategory =(cat)=>{
    let ret = []
    getCategories().forEach(category => {
        if(category.id === cat){
            ret = category
        }
    })
    return ret
    
}
export const getCategories =()=>{
    return [
        {
            id: 'essential',
            title: 'Essential Expenses',
            data: [
                    {
                        id: 'ess1',
                        description: 'body care, household cleaning supplies, etc.',   
                        name: 'Supermarket'
                    },{
                        id: 'ess2',
                        description: 'food bought at farmers market, fish market etc.',
                        name: 'Other Food Shopping'
                    },{
                        id: 'ess3',
                        description: 'medicine, vitamins, and other specialized products',
                        name: 'Pharmacy'
                    },{
                        id: 'ess4',
                        description: 'baby food, diapers, school supplies, clothing, etc.',
                        name: 'Children'
                    },{
                        id: 'ess5',
                        description: 'bus, train and subway fares; parking fees; tolls, gas, etc.',
                        name: 'Transportation'
                    },{
                        id: 'ess6',
                        description: 'pet food, veterinary expenses, grooming, etc.',
                        name: 'Pets'
                    },{
                        id: 'ess7',
                        description: '(if you dont have a fixed monthly plan)',
                        name: 'Cellphone Expenses'
                    }
                ]
        },{
            id: 'optional',
            title: 'Optional Expenses',
            data: [
                {
                    id: 'opt1',
                    description: 'new cloting, shoes, accesories, sporting goods, etc.',
                    name: "Shopping(Adults)"
                },{
                    id: 'opt2',
                    description: 'makeup, creams, nail polish, perfume, etc.',
                    name: "Cosmetics"
                },{
                    id: 'opt3',
                    description: 'Uber, City Taxi, etc.',
                    name: "Taxi's"
                },{
                    id: 'opt4',
                    description: 'anniversary gift, holiday gifts, birthday presents, (this item can be significant if you have a small children who attends a lot of birthday parties)',
                    name: "Gifts"
                }
            ]
        },{
            id: 'leisure',
            title: 'Entertainment and Leisure',
            data: [
                {
                    id: 'leis1',
                    description: 'Any Paper Material Product',
                    name: "Books and Magazines"
                },{
                    id: 'leis2',
                    description: 'CDs, songs, videos, spotify subscription, etc.',
                    name: "Music"
                },{
                    id: 'leis3',
                    description: 'DVDs, theaters, streaming, Netflix subscription, etc.',
                    name: "Movies"
                },{
                    id: 'leis4',
                    description: 'concerts, plays, festivals, etc.',
                    name: "Shows"
                },{
                    id: 'leis5',
                    description: 'Liqor, Beer, girls night out, etc.',
                    name: "Nightclubs and other Entertainment"
                },{
                    id: 'leis6',
                    description: 'Business lunches and lunch with family and friends, pizza, hamburgers, kebabs and other snacks',
                    name: "Restaurants and takeout"
                },{
                    id: 'leis7',
                    description: 'coffee and other beverage cocktails',
                    name: "Cafes"
                },{
                    id: 'leis8',
                    description: 'Bakery products',
                    name: "Pastry Shop"
                }
            ]
        },{
            id: 'extras',
            title: 'Extras and Unforseen Events',
            data: [
                {
                    id: 'ext1',
                    description: 'Doctor visits and tests, etc.',
                    name: 'Medical Expenses'
                },{
                    id: 'ext2',
                    description: '(unless included in set costs)',
                    name: 'Childcare'
                },,{
                    id: 'ext3',
                    description: 'Electrician, plumber, mechanic, painter',
                    name: 'Repairs'
                },,{
                    id: 'ext4',
                    description: 'computer, cellphone upgrade or replacement, television, camera, stereo system, etc.',
                    name: 'Electronics'
                },,{
                    id: 'ext5',
                    description: 'furniture, household appliances, cookware, linens, tools, etc.',
                    name: 'Furnishings and housewares'
                },,{
                    id: 'ext6',
                    description: 'transportation, lodging, food, etc. If you travel frequently, you can include these expenses under Optional Expenses',
                    name: 'Personal Travel'
                }
            ]
        }
    ]
}

export const getCategoryChartColors =(cat, len)=>{
    const ret = {
        extras: ['#196BA0', '#13AADE', '#35C3E1', '#49C2C8', '#5EC3AD', '#87CFC2'],
        leisure: ['#754C9E', '#9757A3', '#CC549F', '#EB548C', '#EA7268', '#F0A58F'],
        essential: ['#BF2526', '#DE552B', '#EE7E31', '#EF9A3A', '#E9BD38', '#E7E34D'],
        optional: ['#3E7FC0', '#4493BA', '#35C96E', '#69D12D', '#76C539', '#69B24C'],
    }
    return ret[cat].slice(parseInt(len) - 1)
}

export const getRandomTitle =()=>{
    const list = [
        "Nothing better to do?",
        "Ready for the next battle?",
        "Got kicked out of the house?",
        "You're not you when you're hungry!",
        "Feeling Lucky?",
        "It's Christmas time!",
        "It's not over!",
        "Feeling lonely?",
        "Lost the game?",
        "Your mom loves you!",
        "Bored?",
        "Bored in the house?",
        "Tired?",
        "Feeling Special?",
        "Won the lottery?",
        "Not lovin' it?",
        "Suave much?",
        "Feeling sexy?"
    ]
    return list[Math.floor((Math.random() * list.length) + 0)]
}

export const getLastDayOfMonthFromDate =(d)=>{
    // const date = new Date(d)
    const darr = d.split('-')
    const date = getCorrectDateFormat({
        day: darr[1],
        month: darr[0],
        year: darr[2]
    })
    return getCorrectDateFormat({
        day: 0,
        month: date.getMonth() + 1,
        year: date.getFullYear()
    })
    // return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}


export const rngNum =(min, max)=>{
    return Math.floor((Math.random() * max) + min);
}


export const getFirstAndLastDateFromWeek = (week, month, year) => {

    const nd = getMonthObject(`${month}-15-${year}`)
    // console.log(nd)

    let first = ''
    let last = ''

    // console.log(nd[week][0].split('-')[0], month)

    if(parseFloat(nd[week][0].split('-')[0]) !== parseFloat(month)){
        first = getFirstAndLastDateOfMonth(month, year).first
    }else{
        first = nd[week][0]
    }
    if(parseFloat(nd[week][6].split('-')[0]) !== parseFloat(month)){
        last = getFirstAndLastDateOfMonth(month, year).last
    }else{
        last = nd[week][6]
    }

    return {
        first,
        last
    }
}

export const getFirstAndLastDateOfMonth = (month, year) => {

    // const nd = new Date(`${month}-01-${year}`)
    // const darr = d.split('-')
    const nd = getCorrectDateFormat({
        day: '01',
        month: month,
        year: year
    })

    const sd = new Date(nd)
    sd.setMonth(sd.getMonth() + 1)
    sd.setDate(0)

    // console.log(dateToText(nd), dateToText(sd))

    return {
        first: dateToText(nd),
        last: dateToText(sd)
    }
}



function formatPoints(points, close) {
    points = [...points];
    // so that coords can be passed as objects or arrays
    if (!Array.isArray(points[0])) {
      points = points.map(({ x, y }) => [x, y]);
    }
  
    if (close) {
      const lastPoint = points[points.length - 1];
      const secondToLastPoint = points[points.length - 2];
  
      const firstPoint = points[0];
      const secondPoint = points[1];
  
      points.unshift(lastPoint);
      points.unshift(secondToLastPoint);
  
      points.push(firstPoint);
      points.push(secondPoint);
    }
  
    return points.flat();
  }
  
export const spline =(points = [], tension = 1, close = false, cb)=> {
    points = formatPoints(points, close);
  
    const size = points.length;
    const last = size - 4;
  
    const startPointX = close ? points[2] : points[0];
    const startPointY = close ? points[3] : points[1];
  
    let path = "M" + [startPointX, startPointY];
  
    cb && cb("MOVE", [startPointX, startPointY]);
  
    const startIteration = close ? 2 : 0;
    const maxIteration = close ? size - 4 : size - 2;
    const inc = 2;
  
    for (let i = startIteration; i < maxIteration; i += inc) {
      const x0 = i ? points[i - 2] : points[0];
      const y0 = i ? points[i - 1] : points[1];
  
      const x1 = points[i + 0];
      const y1 = points[i + 1];
  
      const x2 = points[i + 2];
      const y2 = points[i + 3];
  
      const x3 = i !== last ? points[i + 4] : x2;
      const y3 = i !== last ? points[i + 5] : y2;
  
      const cp1x = x1 + ((x2 - x0) / 6) * tension;
      const cp1y = y1 + ((y2 - y0) / 6) * tension;
  
      const cp2x = x2 - ((x3 - x1) / 6) * tension;
      const cp2y = y2 - ((y3 - y1) / 6) * tension;
  
      path += "C" + [cp1x, cp1y, cp2x, cp2y, x2, y2];
  
      cb && cb("CURVE", [cp1x, cp1y, cp2x, cp2y, x2, y2]);
    }
  
    return path;
}
  

export const sendEmailToLezzt =({ sender, message, callback, email })=> {
    // <script src="https://smtpjs.com/v3/smtp.js"></script>
    console.log("Sending Email");
	let toemail = '';
    let tx = 0;
    // $.each(options.toemail, function(key, value){
    //     toemail += `${value}${tx == 0 ? "" : ","}`;
    //     tx++;
    // });
    const ggdomain = `https://lezzt.com/`;
    const htmlBody = `
    <div style="width: 800px;
    height: auto;
    padding: 20px;
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <span class="subject" style="
        display: inline-block;
        font-size: 1.5em;
        font-weight: bold;
        background-color: #fdcb30;
        color: white;
        width: 100%;
        padding: 10px 0px;
        text-align: center;
        margin-bottom: 20px;">WE RECEIVED AN EMAIL FROM A USER</span>
        <br>
        <br>
    
        <span class="text" style="
        display: inline-block;
        width: calc(100% - 40px);
        padding: 10px 20px;
        letter-spacing: 2px;
        line-height: 1.5em;
        font-size: 1.2em;">
           User ${sender.displayName} contacted us!
        </span>

        <span class="text" style="
        display: inline-block;
        width: calc(100% - 40px);
        padding: 10px 20px;
        letter-spacing: 2px;
        line-height: 1.5em;
        font-size: 1.2em;">
           User used the name ${sender.name}!
        </span>

        <span class="text" style="
        display: inline-block;
        width: calc(100% - 40px);
        padding: 10px 20px;
        letter-spacing: 2px;
        line-height: 1.5em;
        font-size: 1.2em;">
           User UID: ${sender.uid}!
        </span>

        <span class="text" style="
        display: inline-block;
        width: calc(100% - 40px);
        padding: 10px 20px;
        letter-spacing: 2px;
        line-height: 1.5em;
        font-size: 1.2em;">
           ${message}
        </span>


        <a style="
        display: inline-block;
        padding: 15px 50px;
        letter-spacing: 3px;
        line-height: 1.3em;
        font-size: 1.2em;
        font-weight: bold;
        background-color: #fdcb30;
        color: whitesmoke;
        text-decoration: none;
        margin-top: 20px;"
        href="mailto:${email}">Send a Reply</a>
    
        
    
        <br>
        <br>
        
        <table>
            <tbody>
                <tr>
                    <td rowspan="3"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4yLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0ic3ZnX2xvZ28iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNzIwIDI1MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIwIDI1MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJCS5zdDB7DQoJCQlmaWxsOiAjRkVDQzMwOw0KCQkJaGVpZ2h0OiA0MHB4Ow0KCQkJZmlsdGVyOiBkcm9wLXNoYWRvdyggNnB4IDAgMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjMpKTsNCgkJfQ0KDQoJCS5mMXsNCgkJYW5pbWF0aW9uOiBmbG9hdDEgMjBzIGVhc2UtaW4tb3V0IGluZmluaXRlOw0KCQlhbmltYXRpb24tZGVsYXk6IDBzOw0KCQl9DQoJCS5mMnsNCgkJYW5pbWF0aW9uOiBmbG9hdDEgMjBzIGVhc2UtaW4tb3V0IGluZmluaXRlOw0KCQlhbmltYXRpb24tZGVsYXk6IDAuNXM7DQoJCX0NCgkJLmYzew0KCQlhbmltYXRpb246IGZsb2F0MSAyMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7DQoJCWFuaW1hdGlvbi1kZWxheTogMXM7DQoJCX0NCgkJLmY0ew0KCQlhbmltYXRpb246IGZsb2F0MSAyMHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7DQoJCWFuaW1hdGlvbi1kZWxheTogMS41czsNCgkJfQ0KCQkuZjV7DQoJCWFuaW1hdGlvbjogZmxvYXQxIDIwcyBlYXNlLWluLW91dCBpbmZpbml0ZTsNCgkJYW5pbWF0aW9uLWRlbGF5OiAyczsNCgkJfQ0KDQoJCUBrZXlmcmFtZXMgZmxvYXQxIHsNCgkJCTAlIHsNCgkJCQl0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoMHB4KTsNCgkJCX0NCgkJCTMlIHsNCgkJCQl0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpOw0KCQkJfQ0KCQkJOSUgew0KCQkJCXRyYW5zZm9ybTogdHJhbnNsYXRleSgyMHB4KTsNCgkJCX0NCgkJCTEyJSB7DQoJCQkJdHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7DQoJCQl9DQoJCX0NCg0KCX0NCgk8L3N0eWxlPg0KCTxnIGNsYXNzPSJhYWEiPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QwIGYxIiBwb2ludHM9IjExMy44NiwyMTkuNjQgMTEzLjg2LDMyLjM2IDI5LjgyLDMyLjM2IDI5LjgyLDE3Ny42MyA4NS4yNCwxNzcuNjMgODUuMjQsMjE5LjY0IAkiLz4NCgkJPHBvbHlnb24gY2xhc3M9InN0MCBmNCIgcG9pbnRzPSI1MTEuNDcsMzIuMzYgNTExLjQ3LDcxLjA4IDQ1MS43NSwxNzcuNjMgNTExLjQ3LDE3Ny42MyA1MTEuNDcsMjE5LjY0IDU3Ny4wNCwyMTkuNjQgNTc3LjA0LDc0LjM3IDU0MC4wOSw3NC4zNyA1NDAuMDksMzIuMzYgCSIvPg0KCQk8cG9seWdvbiBjbGFzcz0ic3QwIGYzIiBwb2ludHM9IjM5My4yOSwyMTkuNjQgMzkzLjI5LDE4OC4yNiA0NTcuODIsNzQuMzcgMzkzLjI5LDc0LjM3IDM5My4yOSwzMi4zNiAzNjQuNjcsMzIuMzYgMzY0LjY3LDcxLjA4IDMwNC45NSwxNzcuNjMgMzY0LjY3LDE3Ny42MyAzNjQuNjcsMjE5LjY0IAkiLz4NCgkJPHBvbHlnb24gY2xhc3M9InN0MCBmNSIgcG9pbnRzPSI2NjEuNTYsMzIuMzYgNjYxLjU2LDc0LjM3IDYyNC44Nyw3NC4zNyA2MjQuODcsMjE5LjY0IDY5MC4xOCwyMTkuNjQgNjkwLjE4LDMyLjM2IAkiLz4NCgkJPHBvbHlnb24gY2xhc3M9InN0MCBmMiIgcG9pbnRzPSIyNDYuNDksMjE5LjY0IDI0Ni40OSwxODguMjYgMzExLjAyLDc0LjM3IDI0Ni40OSw3NC4zNyAyNDYuNDksMzIuMzYgMjE3Ljg3LDMyLjM2IDIxNy44Nyw3NC4zNyAxNTkuNjYsNzQuMzcgMTU5LjY2LDEwMy40OCAyMTYuMSwxMDMuNDggMjE2LjEsMTQ1LjQ5IDE1OS42NiwxNDUuNDkgMTU5LjY2LDE3Ny42MyAyMTcuODcsMTc3LjYzIDIxNy44NywyMTkuNjQgCSIvPg0KCTwvZz4NCjwvc3ZnPg0K" alt="" style="width: 150px; height: 150px; object-fit: contain;" /> </td>
                    <td><img src="${ggdomain}icons/deck_black_48dp.svg" alt="" style="display: block; height: 20px; width: 20px; object-fit: contain; " /></td>
                    <td><span style="font-size: 1em;">3390 Keele Street North York ON M3J1L6 Canada</span></td>
                </tr>
                <tr>
                    <td><img src="${ggdomain}icons/mail_black_48dp.svg" alt="" style="display: block; height: 20px; width: 20px; object-fit: contain; " /></td>
                    <td><span style="font-size: 1em;">support@lezzt.com</span></td>
                </tr>
                <tr>
                <td><img src="${ggdomain}icons/public_black_48dp.svg" alt="" style="display: block; height: 20px; width: 20px; object-fit: contain; " /></td>
                <td><a href="${ggdomain}">${ggdomain}</a></td>
                </tr>
            </tbody>
        </table>
      
    
    
    </div>`;
    // Email variable is in index.html file inside head tag
	window.Email.send({
	Host: "smtp.gmail.com",
	Username : "lezzt.stlln@gmail.com",
	Password : "hkezuomlvpuslnja",
    To : 'support@lezzt.com',
	From : "support@lezzt.com",
	Subject : "LEZZT USER QUERY",
    Body : htmlBody,
	}).then(function(message){
        console.log("MESSAGE", message)
        callback(message);
    })
    .catch(err => {
        console.log(err.message)
    });
}



String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}