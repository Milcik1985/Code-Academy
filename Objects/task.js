console.groupCollapsed('Masyvai objekte. 7 uzduotis')

const posts = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      id: 7,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      id: 8,
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      id: 9,
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      id: 10,
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
      id: 11,
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
      id: 12,
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
      id: 16,
      title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
      id: 17,
      title: "fugit voluptas sed molestias voluptatem provident",
      body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
      id: 18,
      title: "voluptate et itaque vero tempora molestiae",
      body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
      id: 19,
      title: "adipisci placeat illum aut reiciendis qui",
      body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
      id: 20,
      title: "doloribus ad provident suscipit at",
      body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
      id: 21,
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
      id: 22,
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
      id: 23,
      title: "maxime id vitae nihil numquam",
      body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
      id: 24,
      title: "autem hic labore sunt dolores incidunt",
      body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
      id: 25,
      title: "rem alias distinctio quo quis",
      body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    }
  ]
  console.log(posts)

// 7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
// 7.1. Gauti pirmo masyvo nario reikšmę.
// console.log(posts)

/*function firstElement(posts) {
    if (posts.length > 0) {return posts[0]} 
    else {return `array is empty`};}

console.log(firstElement(posts))*/
function firstElement(posts) {
    return posts[0]}
console.log(firstElement(posts))

// 7.2. Gauti paskutinio masyvo nario reikšmę.
function lastElement(posts) {
    if (posts.length > 0) {return posts[posts.length -1]}
    else {return 'Masyvas yra tuščias.'}}
console.log(lastElement(posts))

// 7.3. Gauti 15 masyvo nario reikšmę.
function fifteenthElement(posts) {
    if (posts.length >= 15) {return posts[14]}
    else {return 'Masyvas yra tuščias.'}}
console.log(fifteenthElement(posts))

// 7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
function thirteenthElement(posts) {
    if (posts.length >= 15) {return posts[posts.length-13]}
    else {return 'Masyvas yra tuščias.'}}
console.log(thirteenthElement(posts))

// 7.5. Gauti vidurinio masyvo nario reikšmę.
function getMiddle(posts) {
    if (posts.length > 0) {
        if (posts.length % 2 !== 0) {
            const middleIndex = Math.floor(posts.length / 2);
            return posts[middleIndex];} 
            else {return 'Masyvas turi lyginį elementų skaičių.';}}}
console.log(getMiddle(posts))

// 7.6. Gauti pirmų keturių masyvo narių reikšmes.
function firstFour(posts) {
    if (posts.length >= 4) {
        return posts.slice(0,4)}}
console.log(firstFour(posts))

// 7.7. Gauti paskutinių penkių masyvo narių reikšmes.
function lastFive(posts) {
    return posts.slice(-5)}
console.log(lastFive(posts))
console.log(posts.length)

// 7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
function someElements(posts) {
    return posts.slice(5,15)}
console.log(someElements(posts))

// 7.9. Gauti kas antro masyvo nario reikšmes.
function everySecond (posts) {
    const result = [];
    for (let i = 0; i < posts.length; i +=2) 
    {result.push(posts[i])}
    return result}
console.log(everySecond(posts))

// 7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
function getFirstAndLast(posts) {
  if (posts.length > 0) {
      const firstElement = posts[0];
      const lastElement = posts[posts.length - 1];
      return { firstElement, lastElement};}
       else {return 'Masyvas yra tuščias.';}}
console.log(getFirstAndLast(posts))

// 7.11. Gauti pirmą masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
function getFirstTitle(posts) {
  if (posts.length > 0) {const firstElement = posts[0];
      if (firstElement.hasOwnProperty('title')) {
          const titleValue = firstElement.title;
          console.log('Pirmo nario title reikšmė:', titleValue);} 
      else {console.log('Pirmas narys neturi "title" savybės.');}} 
          else {console.log('Masyvas yra tuščias.');}}
getFirstTitle(posts)

// 7.12. Gauti antrą masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
function getSecondBody(posts) {
  if (posts.length > 0) 
  {const secondElement = posts[1];
  if (secondElement.hasOwnProperty('body')) {
    const bodyValue = secondElement.body;
    console.log(`Antro nario body reiksme:`, bodyValue);}
  else {console.log('Antras narys neturi "body" savybės.');}}}
getSecondBody(posts)

// 7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
    function getThird(posts){
      if (posts.length >= 3) {
          const thirdElement = posts[2];
          if (thirdElement.hasOwnProperty('title') && thirdElement.hasOwnProperty('body')) {
              const titleValue = thirdElement.title;
              const bodyValue = thirdElement.body;
              console.log(`Post title is: '${titleValue}' and the content is: '${bodyValue}'.`);} 
              else {console.log('Trecias narys neturi "title" arba "body" savybių.');}} 
              else {console.log('Masyvas neturi pakankamai narių.');}}
getThird(posts)
  
// 7.14. Išvesti visus masyvo narius į konsolę.
function allElements(posts) {
  if (posts.length > 0) {
      for (let i = 0; i < posts.length; i++) {
          console.log(posts[i]);}} 
          else {console.log('Masyvas yra tuščias.');}}
allElements(posts)

// 7.15. Išvesti visų masyvo narių property "title" į konsolę.
function AllElementsTitles(posts) {
  if (posts.length > 0) {
      for (let i = 0; i < posts.length; i++) {
          if (posts[i].hasOwnProperty('title')) {
              console.log(posts[i].title);} 
              else {console.log('Narys neturi "title" savybės.');}}} 
              else {console.log('Masyvas yra tuščias.');}}
AllElementsTitles(posts)

// 7.16. Išvesti visų masyvo narių property "body" į konsolę.
function allElementsBodys(posts) {
  if (posts.length > 0) { 
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].hasOwnProperty('body')) {
        console.log(posts[i].body)}
        else {console.log('Narys neturi "title" savybės.');}}} 
        else {console.log('Masyvas yra tuščias.');}}
allElementsBodys(posts)

// 7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function getAllTitlesAndBodys(posts) {
  if (posts.length > 0) {
      for (let i = 0; i < posts.length; i++) {
          const currentPost = posts[i];
          if (currentPost.hasOwnProperty('title') && currentPost.hasOwnProperty('body')) {
              const titleValue = currentPost.title;
              const bodyValue = currentPost.body;
              console.log(`Title: '${titleValue}'. Content: '${bodyValue}'.`);} 
              else {
              console.log(`Narys ${i} neturi "title" arba "body" savybių.`);}}} 
              else {console.log('Masyvas yra tuščias.');}}
getAllTitlesAndBodys(posts);

// 7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function getFirstFourTitlesAndBodys(posts) {
  if (posts.length > 0) {
      for (let i = 0; i < Math.min(4, posts.length); i++) {
          const currentPost1 = posts[i];
          if (currentPost1.hasOwnProperty('title') && currentPost1.hasOwnProperty('body')) {
              const titleValue3 = currentPost1.title;
              const bodyValue3 = currentPost1.body;
              console.log(`Title: "${titleValue3}". Content: "${bodyValue3}".`);} 
              else {
              console.log(`Narys ${i} neturi "title" arba "body" savybių.`);}}} 
              else {console.log('Masyvas yra tuščias.');}}
getFirstFourTitlesAndBodys(posts);

// 7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
function lastSevenProperties(posts) {
  if (posts.length > 0) {
      for (let i = Math.max(0, posts.length - 7); i < posts.length; i++) {const currentPost = posts[i];
          if (currentPost.hasOwnProperty('title') && currentPost.hasOwnProperty('body')) {
              const titleValue = currentPost.title;
              const bodyValue = currentPost.body;
              console.log(`Title: "${titleValue}". Content: "${bodyValue}".`);}
              else {console.log(`Narys ${i} neturi "title" arba "body" savybių.`);}}} 
              else {console.log('Masyvas yra tuščias.');}}
lastSevenProperties(posts)

// 7.22. Išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".
function getElementsStartingS(posts) {
  if (posts.length > 0) {
      for (let i = 0; i < posts.length; i++) {
          const currentPost = posts[i];
          if (currentPost.hasOwnProperty('title') && currentPost.title.toLowerCase().startsWith('s')) {
              const titleValue = currentPost.title;
              const bodyValue = currentPost.body || 'Turinys nėra nurodytas';
              console.log(`Title: "${titleValue}". Content: "${bodyValue}".`);}}} 
              else {console.log('Masyvas yra tuščias.');}}
getElementsStartingS(posts) 

// 7.23. Išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
function elemntsEndsBy(endT, endM, posts) {
  if (posts.length > 0) {
      for (let i = 0; i < posts.length; i++) {
          const currentPost = posts[i];
          const titleValue = currentPost.title || 'Pavadinimas nėra nurodytas';
          const bodyValue = currentPost.body || 'Turinys nėra nurodytas';
          if (titleValue.toLowerCase().endsWith(endT) || titleValue.toLowerCase().endsWith(endM)) {
              console.log(`Title: "${titleValue}". Content: "${bodyValue}".`);}}} 
              else {console.log('Masyvas yra tuščias.');}}
elemntsEndsBy('t', 'm', posts)

// 7.24. Išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.
function getElementsLength (posts) {
  if (posts.length > 0) {
  for (let i = 0; i < posts.length; i++) {
    const currentPost = posts[i]
    const titleValue = currentPost.title || 'Pavadinimas nėra nurodytas'
    if (titleValue.length > 15) {console.log(`Title:`, `${titleValue}`)}}}
else {console.log('Masyvas yra tuščias.')}}
getElementsLength (posts) 


// 7.25. Išvesti tik tuos masyvo narius, kurių pavadinimas turi mažiau simbolių nei 20 ir kurių "body" turi daugiau simbolių nei 50.
function getElementsLength2(posts) {
  if (posts.length > 0) {
      for (let i = 0; i < posts.length; i++) {
          const currentPost = posts[i];
          const titleValue = currentPost.title || 'Pavadinimas nėra nurodytas';
          const bodyValue = currentPost.body || 'Turinys nėra nurodytas';
          if (titleValue.length < 20 && bodyValue.length > 50) {
              console.log(`Title: "${titleValue}". Content: "${bodyValue}".`);}}} 
              else {console.log('Masyvas yra tuščias.');}}
getElementsLength2(posts)

// 7.26. Išvesti tik tuos masyvo narius, kurių pavadinimas turi tarp 20 ir 30 simbolių ir kurių "body" turi tarp 70 ir 130 simbolių.
function getElementsLength3 (posts){
  if (posts.length > 0) {
    for (let i = 0; i < posts.length; i++) {
       const currentPost = posts[i]
       const titleValue = currentPost.title || 'Pavadinimas nėra nurodytas'
       const bodyValue = currentPost.body || 'Turinys nėra nurodytas'
       if (titleValue > 20 && titleValue < 30) {
        console.log(titleValue)}
       if (bodyValue < 70 && bodyValue > 130) {console.log(currentPost)}}}
      else {console.log('Masyvas yra tuščias.')}}
getElementsLength3(posts)

// 7.27. Išvesti tik tuos masyvo narius, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo".
function getSomeElements (posts) {
  if (posts > 0) {
    for ( let i = 0; i < posts.length; i++) {
      const currentPost = posts[i]
      const titleValue = currentPost.title
      const bodyValue = currentPost.body
      if (titleValue.includes('it') && bodyValue.includes('quo')) {
        console.log(`Title: "${titleValue}". Content: "${bodyValue}".`)}}}
  else {console.log('Masyve nėra narių, kurių pavadinimas turi simbolių junginį "it", o "body" turi simbolių junginį "quo"')}}
getSomeElements (posts)

// 7.28. Išvesti tik tuos masyvo narius, kurių "body" turi žodį "sit". Jeigu žodis turi šį simbolių junginį, tačiau tai nėra pilna jo reikšmė (pvz. žodžiai "sitto" ar "quasit"), jie neturėtų būti atvaizduojami.
/*Neteisingas:
function getSomeElementsCond (posts) {
  if (posts.length > 0) {
    for (let i = 0; i < posts.length; i++) {
      const currentPost = posts[i];
      const bodyValue = currentPost.body;
      if (bodyValue.includes('sit')) console.log(currentPost)}}
  else {console.log(`masyve nera nariu, kurių "body" turi žodį "sit".`)}}*/
//lektoriaus sprendimas:
  function task728(postsData) {
    console.log(postsData)

    let filteredPosts = postsData.filter(post => {
      let words = post.body.split(' ')
      return words.includes('sit')
    })

    console.log(filteredPosts)
  }
task728(posts)

// 7.29. Išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau nei 3 "a" raides, o "body" turi mažiau nei 7 "o" raides.
function task729(postsData) {
  console.log(postsData)
  let filteredPosts = postsData.filter(post =>post.title.split('a').length > 4 && post.body.split('o').length < 8) 
      console.log(filteredPosts)}

// 7.30. Išvesti visų masyvo narių pavadinimus surūšiuotus nuo mažiausiai iki daugiausiai raidžių "body" property turinčių narių. Papildomai, prie išvesto teksto pridėti ir "body" raidžių skaičių.
function task730(postsData) {
  console.log(postsData)
  let sortedPosts = postsData.toSorted((a, b) => {
  return a.body.length - b.body.length})
    let finishedPosts = sortedPosts.map(post => {
      let body = post.body
      let bodyLength = body.length
      let updatedPost = {
        id: post.id,
        title: post.title,
        body: `(${bodyLength})${body}`}
return updatedPost})
console.log(finishedPosts)}
task730(posts)


console.groupEnd()
