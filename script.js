let rootElem = $("#root");



function desk1 () {
    let desktop1 = $("<div>");
    desktop1.addClass('first-container');
    rootElem.append(desktop1);


    let logo=$("<img>");
    logo.addClass('logotype');
    logo.attr('src', 'images/logo.png');
    desktop1.append(logo);

    let ul = $("<ul>");
    ul.addClass('list1');
    let li1 = $("<li>");
    let li2 = $("<li>");
    let li3 = $("<li>");
    li1.text("О нас");
    li2.text("Проекты");
    li3.text("Контакты");
    ul.append(li1);
    ul.append(li2);
    ul.append(li3);

    desktop1.append(ul);

    let socNetsLogo = $("<img>");
    socNetsLogo.addClass("socNets");
    socNetsLogo.attr('src', 'images/socNetsLogo.png');
    desktop1.append(socNetsLogo);

    $('li').on('mouseover', function () {
        $(this).css("cursor", "pointer");
        $(this).css("text-decoration", "underline blue");
    })

    $('li').on('mouseleave', function () {
        $(this).css("cursor", "none");
        $(this).css("text-decoration", "none");
    })

    return desktop1;
}

desk1();

function desk2 () {
    let desktop2 = $("<div>");
    desktop2.addClass("second-container");
    rootElem.append(desktop2);

    let elem1 = $("<div>");
    elem1.addClass("elem1");
    let elem1Text = $("<p>");
    elem1Text.text("Ваш проект - наша основная задача");
    elem1.append(elem1Text);

    desktop2.append(elem1);

    let desk2Main = $("<div>");
    desk2Main.addClass("desk2Main");

    desktop2.append(desk2Main);

    let desk2Img = $("<div>");
    desk2Img.addClass("desk2Img");

    desk2Main.append(desk2Img);

    let link = "images/desk2.png";
    $('.desk2Img').css({'background-image' : `url('${link}')`, 'background-size' : 'cover'});

    

    let textBtnCont = $("<div>");
    textBtnCont.addClass("textBtnCont");
    desk2Main.append(textBtnCont);

    let btnCont = $("<div>");
    btnCont.addClass("btnCont");
    textBtnCont.append(btnCont);

    let btn1 = $("<div>");
    let btn2 = $("<div>");
    let btn3 = $("<div>");

    btn1.addClass("btn1");
    btn2.addClass("btn2");
    btn3.addClass("btn3");

    btn1.text("Цели");
    btn2.text("Задачи");
    btn3.text("Методы");

    btnCont.append(btn1);
    btnCont.append(btn2);
    btnCont.append(btn3);

    

    let textCont = $("<div>");
    textCont.addClass("textCont");
    textBtnCont.append(textCont);

    textCont.text("Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты. Здоровой может быть даже выпечка, если она приготовлена на пару. Практически все из нас знают, что есть полезная и вредная еда, мы делим все продукты на плохие и хорошие, и это действительно так, потому что не все они полезны для человеческого организма, и есть много таких, которые вредны, а иногда и опасны. Ни для кого не будет открытием, что овощи и фрукты принесут организму колоссальную пользу, так как являются вкусной и полезной едой, насыщенной витаминами и массой других полезных веществ. Покушать утром особо полезно тем, что этот прием пищи заряжает энергией на целый день, и запускает процесс метаболизма в организме. Голодный человек думает не о работе, а о том, что хочет покушать. Ценность яблок кроется в их составе. Почти 80% яблок составляет вода. Остальная часть приходится на клетчатку, органические кислоты, углеводы. Именно зеленое яблоко рекомендуют употреблять во время диет. Среди фруктов яблоко является очень распространенным продуктом и практически целый год присутствует в нашем рационе питания. Употребление этих плодов натощак недопустимо при гастритах с повышенной кислотностью, язвенных болезнях, желчекаменной болезни.")
    let changeText1 = $("<p>");
    changeText1.addClass("changeText1"); 
    changeText1.text("Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты. Здоровой может быть даже выпечка, если она приготовлена на пару. Практически все из нас знают, что есть полезная и вредная еда, мы делим все продукты на плохие и хорошие, и это действительно так, потому что не все они полезны для человеческого организма, и есть много таких, которые вредны, а иногда и опасны. Ни для кого не будет открытием, что овощи и фрукты принесут организму колоссальную пользу, так как являются вкусной и полезной едой, насыщенной витаминами и массой других полезных веществ. Покушать утром особо полезно тем, что этот прием пищи заряжает энергией на целый день, и запускает процесс метаболизма в организме. Голодный человек думает не о работе, а о том, что хочет покушать. Ценность яблок кроется в их составе. Почти 80% яблок составляет вода. Остальная часть приходится на клетчатку, органические кислоты, углеводы. Именно зеленое яблоко рекомендуют употреблять во время диет. Среди фруктов яблоко является очень распространенным продуктом и практически целый год присутствует в нашем рационе питания. Употребление этих плодов натощак недопустимо при гастритах с повышенной кислотностью, язвенных болезнях, желчекаменной болезни.")
    $('.btn1').on('click', function () {
        textCont.text("Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты. Здоровой может быть даже выпечка, если она приготовлена на пару. Практически все из нас знают, что есть полезная и вредная еда, мы делим все продукты на плохие и хорошие, и это действительно так, потому что не все они полезны для человеческого организма, и есть много таких, которые вредны, а иногда и опасны. Ни для кого не будет открытием, что овощи и фрукты принесут организму колоссальную пользу, так как являются вкусной и полезной едой, насыщенной витаминами и массой других полезных веществ. Покушать утром особо полезно тем, что этот прием пищи заряжает энергией на целый день, и запускает процесс метаболизма в организме. Голодный человек думает не о работе, а о том, что хочет покушать. Ценность яблок кроется в их составе. Почти 80% яблок составляет вода. Остальная часть приходится на клетчатку, органические кислоты, углеводы. Именно зеленое яблоко рекомендуют употреблять во время диет. Среди фруктов яблоко является очень распространенным продуктом и практически целый год присутствует в нашем рационе питания. Употребление этих плодов натощак недопустимо при гастритах с повышенной кислотностью, язвенных болезнях, желчекаменной болезни.");
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
    
        let color = `rgb(${r}, ${g}, ${b})`;

        $(this).css("background-color", color);
    })

    $('.btn2').on('click', function () {
        textCont.text("Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития."); 
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
    
        let color = `rgb(${r}, ${g}, ${b})`;

        $(this).css("background-color", color)
    })

    $('.btn3').on('click', function () {
        textCont.text("Если у вас есть какие то интересные предложения, обращайтесь! Студия Web-Boss всегда готова решить любую задачу. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития."); 
        let r = Math.round(Math.random()*255);
        let g = Math.round(Math.random()*255);
        let b = Math.round(Math.random()*255);
    
        let color = `rgb(${r}, ${g}, ${b})`;

        $(this).css("background-color", color);
        
        
    })

    


    $('.textCont').on('mouseover', function () {
        $(this).css("cursor", "pointer");
        $(this).css("text-decoration", "underline blue");
    })

    $('.textCont').on('mouseleave', function () {
        $(this).css("cursor", "none");
        $(this).css("text-decoration", "none");
    })

}

desk2();



function desk3 () {
      let desktop3 = $("<div>");
      desktop3.addClass("desktop3");
      rootElem.append(desktop3);

      let projects = $("<div>");
      projects.addClass("projects");
      projects.text("Проекты");
      desktop3.append(projects);

      let projectInc = $("<div>");
      projectInc.addClass("projectInc");
      desktop3.append(projectInc);

      let projectInc2 = $("<div>");
      projectInc2.addClass("projectInc2");
      desktop3.append(projectInc2);

      let projectInc3 = $("<div>");
      projectInc3.addClass("projectInc3");
      desktop3.append(projectInc3);

      


      let projectImages = $("<div>");
      projectImages.addClass("projectImages");
      projectInc.append(projectImages);

      let projectIncTitle = $("<div>");
      projectIncTitle.addClass(" projectIncTitle");
      projectIncTitle.text("Project Inc.")   
      projectImages.append(projectIncTitle);

      let projectImg1 = $("<img>");
      projectImg1.addClass("projectImg1");
      projectImg1.attr('src', 'images/projectInc1.png');
      projectImages.append(projectImg1);

      let projectImg2 = $("<img>");
      projectImg2.addClass("projectImg2");
      projectImg2.attr('src', 'images/projectInc2.png');
      projectImages.append(projectImg2);

      let projectLink = $("<p>");
      projectLink.addClass("projectLink");
      projectLink.text('www.site.com');
      projectLink.attr('href');
      projectImages.append(projectLink);

      let projectText = $("<div>");
      projectText.addClass("projectText");
      projectText.text("Здоровый праздничный ужин вовсе не обязательно должен состоять из шпината, гречки и вареной куриной грудки. Самыми лучшими способами приготовления еды являются следующие: варка на пару, запекание или варка в воде. Помимо стандартных мандаринов и ананасов, отличным украшением любого стола станут необычные, экзотические фрукты. Здоровой может быть даже выпечка, если она приготовлена на пару. Практически все из нас знают, что есть полезная и вредная еда, мы делим все продукты на плохие и хорошие, и это действительно так, потому что не все они полезны для человеческого организма, и есть много таких, которые вредны, а иногда и опасны. Ни для кого не будет открытием, что овощи и фрукты принесут организму колоссальную пользу, так как являются вкусной и полезной едой, насыщенной витаминами и массой других полезных веществ. Покушать утром особо полезно тем, что этот прием пищи заряжает энергией на целый день, и запускает процесс метаболизма в организме. Голодный человек думает не о работе, а о том, что хочет покушать. Ценность яблок кроется в их составе. Почти 80% яблок составляет вода. Остальная часть приходится на клетчатку, органические кислоты, углеводы. Именно зеленое яблоко рекомендуют употреблять во время диет. Среди фруктов яблоко является очень распространенным продуктом и практически целый год присутствует в нашем рационе питания. Употребление этих плодов натощак недопустимо при гастритах с повышенной кислотностью, язвенных болезнях, желчекаменной болезни.")
      projectInc.append(projectText);

      let points = $("<ul>");
      points.addClass("points");
      let point1 = $("<li>");
      point1.addClass("point1");
      let point2 = $("<li>");
      point2.addClass("point2");
      let point3 = $("<li>");
      point3.addClass("point3");
      points.append(point1);
      points.append(point2);
      points.append(point3);

      desktop3.append(points);

      let scrollCont = $("<div>");
      scrollCont.addClass("scrollCont");
      
      let scrollLine = $('<span>');
      scrollLine.addClass("scrollLine");

      let scrollLine2 = $('<span>');
      scrollLine2.addClass("scrollLine2"); 

      scrollCont.append(scrollLine);  
      scrollCont.append(scrollLine2); 

      desktop3.append(scrollCont);



      let scrollCont2 = $("<div>");
      scrollCont2.addClass("scrollCont2");
      
      let scrollLine3 = $('<span>');
      scrollLine3.addClass("scrollLine3");

      let scrollLine4 = $('<span>');
      scrollLine4.addClass("scrollLine4"); 

      scrollCont2.append(scrollLine3);  
      scrollCont2.append(scrollLine4); 

      desktop3.append(scrollCont2);






let width = desktop3.width();
let height = desktop3.height();

$('.scrollInc').width(width);
$('.scrollInc2').width(width);
$('.scrollInc3').width(width);

$('.scrollInc').height(height);
$('.scrollInc2').height(height);
$('.scrollInc3').height(height);

let slideCnt = $('.scrollInc').length;
let slideCnt2 = $('.scrollInc2').length; 
let slideCnt3 = $('.scrollInc3').length;  //указываем количество слайдов

$('.scrollInc').width(width * slideCnt)
$('.scrollInc2').width(width * slideCnt2)
$('.scrollInc3').width(width * slideCnt3)

let slideCntMain = slideCnt + slideCnt2 + slideCnt3;

let page = 0;
const SPEED = 200;

function goRight() {
    if (page === slideCntMain-1) {
        return
    }
    $('.scrollInc').animate({'left': `-${++page*width}px`}, SPEED);
    $('.scrollInc2').animate({'left': `-${++page*width}px`}, SPEED);
    $('.scrollInc3').animate({'left': `-${++page*width}px`}, SPEED);

    changeActivePoint();
}

function goLeft() {
    if (page === 0){
        return
    }
    $('.scrollInc').animate({'left': `-${--page*width}px`}, SPEED);
    $('.scrollInc2').animate({'left': `-${--page*width}px`}, SPEED);
    $('.scrollInc3').animate({'left': `-${--page*width}px`}, SPEED);
    
    changeActivePoint();
}


function changeActivePoint () {
    $('.points li').removeClass('active');
    $('.points li').eq(page).addClass('active');//points li - итерируемый объяект, то есть несколько объектов. eq позволяет вытягивать Jquery element
    
}

$('.scrollCont').on('click', goLeft);
$('.scrollCont2').on('click', goRight);

$('.points li').on('click', function() {
       let cur = $(this); 
       let index = $('.points li').index(cur); //нужно определить элемент, на который мы кликали c помощью index
       page = index;
       $('.scrollInc').animate({'left': `-${index*width}px`}, SPEED);
       $('.scrollInc2').animate({'left': `-${index*width}px`}, SPEED);
       $('.scrollInc3').animate({'left': `-${index*width}px`}, SPEED);
       
})

//ДОБАВЛЕНИЕ КЛАССА
//$('li').addClass('active');

//УДАЛЕНИЕ КЛАССА
//$('li').removeClass('active');


$('.points li').on('click', function() {
    let cur = $(this); //считываем элемент
    
    $('.points li').removeClass('active');
    cur.addClass('active');

    let index = $('.points li').index(cur);
    page = index;
    
    $('.scrollInc').animate({'left': `-${index*width}px`}, SPEED);
    $('.scrollInc2').animate({'left': `-${index*width}px`}, SPEED);
    $('.scrollInc3').animate({'left': `-${index*width}px`}, SPEED);
})  


      
      return desktop3;
}

desk3();






function desk4 () {
    let desktop4 = $("<div>");
    desktop4.addClass("desktop4");
    rootElem.append(desktop4);

    
    let contactsText = $("<div>");
    contactsText.addClass("contactsText");
    contactsText.text("Контакты");
    desktop4.append(contactsText);

    let contacts = $("<div>");
    contacts.addClass("contacts");
    desktop4.append(contacts);

    let frame = $("<iframe>");
    frame.addClass("frame");
    frame.attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.6360840064635!2d30.23262731614081!3d59.855183675790116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963af6594b7a6b%3A0x58356008a5c0de83!2z0JvQtdC90LjQvdGB0LrQuNC5INC_0YAuLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsw!5e0!3m2!1sru!2sru!4v1589729287303!5m2!1sru!2sru" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"');
    contacts.append(frame);

    let contTextBtn = $("<div>");
    contTextBtn.addClass("contTextBtn");
    contacts.append(contTextBtn);

    let contTextBtnText = $("<div>");
    contTextBtnText.addClass("contTextBtnText");
    contTextBtn.append(contTextBtnText);

    let contTextBtnText1 = $("<div>");
    contTextBtnText1.addClass("contTextBtnText1");
    contTextBtnText1.text("Phone: 8 909 645 07 30");
    contTextBtnText.append(contTextBtnText1);

    let contTextBtnText2 = $("<div>");
    contTextBtnText2.addClass("contTextBtnText2");
    contTextBtnText2.text("Email : hayk.inanc@gmail.com");
    contTextBtnText.append(contTextBtnText2);

    let contTextBtnText3 = $("<div>");
    contTextBtnText3.addClass("contTextBtnText3");
    contTextBtnText3.text("Address: Проспект Мира, д.150");
    contTextBtnText.append(contTextBtnText3);

    let contTextBtnText4 = $("<div>");
    contTextBtnText4.addClass("contTextBtnText4");
    contTextBtnText4.text("Work hours: 9:00 - 22:00");
    contTextBtnText.append(contTextBtnText4);

    $('.contTextBtnText1').on('mouseover', function () {
        $(this).css("cursor", "pointer");
        $(this).css("text-decoration", "underline blue");
    })

    $('.contTextBtnText1').on('mouseleave', function () {
        $(this).css("cursor", "none");
        $(this).css("text-decoration", "none");
    })

    $('.contTextBtnText2').on('mouseover', function () {
        $(this).css("cursor", "pointer");
        $(this).css("text-decoration", "underline blue");
    })

    $('.contTextBtnText2').on('mouseleave', function () {
        $(this).css("cursor", "none");
        $(this).css("text-decoration", "none");
    })

    $('.contTextBtnText3').on('mouseover', function () {
        $(this).css("cursor", "pointer");
        $(this).css("text-decoration", "underline blue");
    })

    $('.contTextBtnText3').on('mouseleave', function () {
        $(this).css("cursor", "none");
        $(this).css("text-decoration", "none");
    })

    $('.contTextBtnText4').on('mouseover', function () {
        $(this).css("cursor", "pointer");
        $(this).css("text-decoration", "underline blue");
    })

    $('.contTextBtnText4').on('mouseleave', function () {
        $(this).css("cursor", "none");
        $(this).css("text-decoration", "none");
    })


    let btnOrderCall = $("<div>");
    btnOrderCall.addClass("btnOrderCall");
    btnOrderCall.text("Заказать звонок");
    contTextBtn.append(btnOrderCall);

    btnOrderCall.on('click', ()=>desk5());

    return desktop4;
}

desk4();

function desk5 () {
    let desktop5 = $("<div>");
    desktop5.addClass("desktop5");
    rootElem.append(desktop5);
    
    let mailContainer = $("<div>");
    mailContainer.addClass("mailContainer");
    mailContainer.text("Ваша почта");
    desktop5.append(mailContainer);


    let yourMail = $("<input>");
    yourMail.addClass("yourMail");
    mailContainer.append(yourMail);

    let phoneContainer = $("<div>");
    phoneContainer.addClass("phoneContainer");
    phoneContainer.text("Ваш телефон");
    desktop5.append(phoneContainer);

    let yourPhone = $("<input>");
    yourPhone.addClass("yourMail");
    phoneContainer.append(yourPhone);

    let description = $("<div>");
    description.addClass("description");
    description.text("Коротко о вашем проекте");
    desktop5.append(description);

    let yourDescr = $("<input>");
    yourDescr.addClass("yourDescr");
    description.append(yourDescr);

    let sendInfo = $("<button>");
    sendInfo.addClass("sendInfo ");
    sendInfo.text("Отправить");
    desktop5.append(sendInfo);

    $('.sendInfo').on('click', function (event) {
        event.preventDefault();
    });

    desktop5.on('click', function () {
          desktop5.css('display', 'none');
    })
    

    desktop5.on('click', function (event) {
        event.stopPropagation(); //обрубает процесс спускания события к родительским элементам
    })


    return desktop5;
}

