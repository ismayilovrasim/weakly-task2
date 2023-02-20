
//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR




// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR. 


// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN 

// let SET = 'SET_DATA';
// let GET = 'GET_DATA';
// let DELETE = 'DELETE_DATA';

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin 
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin
//
//
// function newData(type) {
//     switch (type){
//         case SET:
//             return console.log('SET');
//         case GET:
//             return console.log('GET');
//         case DELETE:
//             return console.log('DELETE')
//         default:
//             return reportError(Error)
//     }
// }
// newData(GET)


// 1.2  2ci merhelede functiondan kenarda array yaradin ve
// //         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// let newArr = [];
//
// function newData() {
//     switch (SET){
//         case SET:
//             return newArr.push(Math.floor(Math.random() * 10) + 1);
//         default:
//             return reportError(Error)
//     }
// }
// newData()
// console.log(newArr)



// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.


// let arr = [1,2];
// function deleteItems(arr, type) {
//   switch (type) {
//     case DELETE:
//       if(arr.length>0){
//       arr.pop();
//       }
//       else{
//         console.error('SILINECEK DATA TAPILMADI')
//       }
//       break;
//     default:
//       console.error('Invalid Opaeration')
//   }
// }

// deleteItems(arr, DELETE)
// console.log(arr);



// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

// let arr = [1, 2];
// function deleteItems(arr, type) {
//   switch (type) {
//     case GET:
//         console.log(arr)  
//         break;
//     default:
//       console.error('Invalid Oparation')
//   }
// }
// deleteItems(arr, GET)

///////////////////////////////////////////////////////////////////////////////////////////
//     let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.

// function getDaysInMonth(monthName) {
//     switch (monthName) {
//         case 'January':
//         case 'March':
//         case 'May':
//         case 'July':
//         case 'August':
//         case 'October':
//         case 'December':
//             return `${monthName} - ` + 31 + ' days';
//         case 'April':
//         case 'June':
//         case 'September':
//         case 'November':
//             return `${monthName} - ` + 30 + ' days';
//         case 'February':
//             return `${monthName} - ` + 28 + "-" + 29 + ' days'
//         default:
//             return 'Wrong month'
//     }
// }
//
// console.log(getDaysInMonth(prompt()))  // Burda promtla vermishem ki istediyiniz ayi yoxlayasiz



// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// function showMonthDateLength() {
//     const today = new Date();
//     const month = today.getMonth() + 1; // +1 elave eledim ki aylar sifirdan bashlamasin
//     let monthName, daysInMonth;
  
//     switch (month) {
//       case 1:
//         monthName = "January";
//         daysInMonth = 31;
//         break;
//       case 2:
//         monthName = "February";
//         daysInMonth = 28;
//         break;
//       case 3:
//         monthName = "March";
//         daysInMonth = 31;
//         break;
//       case 4:
//         monthName = "April";
//         daysInMonth = 30;
//         break;
//       case 5:
//         monthName = "May";
//         daysInMonth = 31;
//         break;
//       case 6:
//         monthName = "June";
//         daysInMonth = 30;
//         break;
//       case 7:
//         monthName = "July";
//         daysInMonth = 31;
//         break;
//       case 8:
//         monthName = "August";
//         daysInMonth = 31;
//         break;
//       case 9:
//         monthName = "September";
//         daysInMonth = 30;
//         break;
//       case 10:
//         monthName = "October";
//         daysInMonth = 31;
//         break;
//       case 11:
//         monthName = "November";
//         daysInMonth = 30;
//         break;
//       case 12:
//         monthName = "December";
//         daysInMonth = 31;
//         break;
//       default:
//         monthName = "Unknown";
//         daysInMonth = 0;
//         break;
//     }
//     console.log(`Indiki ay ${monthName}, gunlerin sayi ${daysInMonth}`);
// }
//   showMonthDateLength()


// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

// function halfYear() {
//     const date = new Date();
//     const currentMonth = date.getMonth();
  
//     // Ili iki hisseye bolmushem
//     const firstHalf = mL.slice(0, 6);
//     const secondHalf = mL.slice(6);
  
//     switch (mL[currentMonth]) {
//       case 'January':
//       case 'February':
//       case 'March':
//       case 'April':
//       case 'May':
//       case 'June':
//         console.log(`${mL[currentMonth]} is in first half`);
//         break;
//       case 'July':
//       case 'August':
//       case 'September':
//       case 'October':
//       case 'November':
//       case 'December':
//         console.log(`${mL[currentMonth]} is in second half`);
//         break;
//       default:
//         console.log('Invalid month');
//         break;
//     }
//   }
  
//   console.log(halfYear('February'));
  
  


// 5) 4 cu taski heftenin gunleri ile yoxlayin

// function halfWeek() {
//     const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const date = new Date();
//     const currentDay = date.getDay(); 
  
//     // Hefteni hisselere bolurem burda
//     const firstHalf = daysOfWeek.slice(1, 3);
//     const secondHalf = daysOfWeek.slice(3, 6);
//     const weekend = daysOfWeek.slice(0, 1)
  
//     switch (daysOfWeek[currentDay]) {
//       case 'Monday':
//       case 'Tuesday':
//       case 'Wednesday':
//         console.log(`${daysOfWeek[currentDay]} Heftenin ilk yarisindadir`);
//         break;
//       case 'Thursday':
//       case 'Friday':
//       case 'Saturday':
//         console.log(`${daysOfWeek[currentDay]} Heftenin ikinci yarisindadir`);
//         break;
//       case 'Sunday':  
//         console.log(`${daysOfWeek[currentDay]} Istirahet gunudur`);
//         break;
//       default:
//         console.log('Invalid day of the week');
//         break;
//     }
//   }
//   separateByHalfWeek()


// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun

// function separateByWeeks() {
//     const date = new Date();
//     const currentMonth = date.getMonth(); 
//     const currentDate = date.getDate();
  
//     // Ayin gunlerini reqem sheklinde almaq ucun.
//     const daysInMonth = new Date(date.getFullYear(), currentMonth + 1, 0).getDate();
  
//     let currentWeek = null;
//     switch (true) {
//       case currentDate >= 1 && currentDate <= 7:
//         currentWeek = 1;
//         break;
//       case currentDate >= 8 && currentDate <= 14:
//         currentWeek = 2;
//         break;
//       case currentDate >= 15 && currentDate <= 21:
//         currentWeek = 3;
//         break;
//       case currentDate >= 22 && currentDate <= daysInMonth:
//         currentWeek = 4;
//         break;
//       default:
//         console.log('Invalid date');
//         return;
//     }
  
//     console.log(`${mL[currentMonth]} ${currentDate} ayin ${currentWeek} heftesidir`);
//   }
  
// separateByWeeks()

///////////////////////////////////////////////////////////////////////////////////////////



// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while  for In for Of istifade edilmekle hell edilmelidir.


// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin 
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// for (let i = 0; i < mL.length; i++) {
//     mL[i] = [mL[i]];
//   }
//   console.log(mL);

//  Almali oldugunuz
// let mL = [
//     ['January'], 
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'], 
//     ['August'], 
//     ['September'],
//     ['October'],
//     ['November'], 
//     ['December']
// ];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const arr = [[], [], []];

// for (let i = 0; i < mL.length; i++) {
//   if (i < 4) {
//     arr[0].push(mL[i]);
//   } else if (i < 8) {
//     arr[1].push(mL[i]);
//   } else {
//     arr[2].push(mL[i]);
//   }
// }

// console.log(arr);


//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'],
//     ['May','June','July','August'],
//     ['September' , 'October', 'November', 'December']
// ];



///////////////////////////////////////////////////////////////////////////////////////////


// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['May','June',['July','August']],
//     ['September' , ['October', 'November', 'December']]
// ];


///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//
//
//
//
//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]],
//     ['May','June',['July',['August']]],
//     ['September' , ['October', 'November', ['December']]]
// ];


///////////////////////////////////////////////////////////////////////////////////////////


// 1.5 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


//  Almali oldugunuz
// let arr = [
//     ['January','February',['March','April']],
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']],
// ];

///////////////////////////////////////////////////////////////////////////////////////////



// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'RASIM ISMAYILOV';

// let nameArray = fullName.split('');
// let result = [];

// for (let i = 0; i < nameArray.length; i++) {
//   if (nameArray[i] !== ' ') {
//     for (let j = i + 1; j < nameArray.length; j++) {
//       if (nameArray[j] !== ' ') {
//         result.push([nameArray[i], nameArray[j]]);
//         break;
//       } else if (j === nameArray.length - 1) {
//         result.push([nameArray[i], 'X']);
//       }
//     }
//   }
// }

// console.log(result);




// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var) 
// sonra onlari umumi arraya elave etmelisiz


///////////////////////////////////////////////////////////////////////////////////////////



// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// let sentence = "Ey babeK kebaB ye!";
// let reversed = "";
// let characters = sentence.split("");

// for (let i = characters.length - 1; i >= 0; i--) {
//   reversed += characters[i];
// }

// console.log(reversed); 



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin
// let newArr = [];
// for (i = 0; i <= arr.length; i++) {
//     if (arr[i] % 5 === 0 && arr[i] % 7 === 0) {
//         newArr.push(arr[i])
//     }
// }
// const sum = newArr.reduce((a, b) => {
//     return a + b;
// });
// console.log(sum)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)

// let newArr = [];
//
// for (i = 0; i <= arr.length; i++) {
//     if (arr[i] >= 100 && arr[i] <= 999 && evenNumber(arr[i])) {
//         newArr.push(arr[i])
//     }
// }
// function evenNumber(num) {
//     while (num > 0) {
//         let digit = num % 10;
//         if (digit % 2 !== 0) {
//             return false;
//         }
//         num = Math.floor(num / 10);
//     }
//     return true;
// }
// console.log(newArr);
//


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// let newArr = [];
//
// for (i = 0; i <= arr.length; i++) {
//     if (arr[i] % 3 === 0 && arr[i] !== 3) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin
// let obj = {
//     key1: 0,
//     key2: 3,
//     key3:2,
//     key4:4,
//     key5:53,
//     key7:7,
//     key8:8,
//     key9:91,
// }
//
// for (let key in obj) {
//     let value = obj[key];
//     let lastChar = key.slice(-1);
//     if (lastChar === value.toString().slice(-1)) {
//         console.log(`Key: ${key}, Value: ${value}`);
//     }
// }

////////////////////////////////////////////////////////////////////////////////////////////////



// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.


// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.


// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.


// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.


// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.


// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce  
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin


// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin. 
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.


// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin. 
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin. 


// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur. 
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin. 


// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun 

