const hackerConsole = () => {
  const dbConsole = document.getElementById("hack-console");
  if (dbConsole) {
    const dbInput = dbConsole.querySelector("textarea");
    const dbIframe = document.getElementById("hack-secret");
    let dbCount = 0;
    const dbText = "$><div>Le mot de passe est : <span style='color: red;'>D@t@-Hunt! </span><div>Bravo tu as hacké le system! La db est accessible juste en dessous</div>"
    dbInput.addEventListener("keyup", (e) => {
      dbCount += 1;
      dbInput.value = dbText.substring(0, dbCount);
      if (dbCount > 40) {
        dbIframe.classList.remove("d-none")
      }
    });
  }
}


const hackerAnimation = () => {
  var a3 = $('#a3');
  if (a3) {
    var i = 0;
    var a4 = $('#a4');
    var a5 = $('#a5');
    var a8 = $('#a8');
    var f2 = $('#f2');
    var f1 = $('#f1');
    var f5 = $('#f5');

    for (i = 1; i < 11; i++) {
      a3.append('<span class=a3'+i+'></span>');
      $('.a3'+i+'').css({
        '-webkit-animation' : 'a3 1s '+(Math.random()*2)+'s  infinite',
        '-moz-animation' : 'a3 1s '+(Math.random()*2)+'s  infinite'
      });
    }
    setInterval(function() {
      $('#a3 span').each(function() {
          $(this).text(Math.ceil(Math.random()*999));;
      });
    }, 100);

    for (i = 1; i < 31; i++) {
      a4.append('<span class=a3'+i+'></span>');
      setInterval(function() {
        $('#a4 span').each(function() {
          $(this).width((Math.random()*15));
        });
      }, 500);
    }

    for (i = 1; i < 16; i++) {
      a5.append('<span><b class=a5'+i+'></b></span>');
      $('.a5'+i+'').css({
        '-webkit-animation' : 'a3 1s 0.'+i+'s  infinite',
        '-moz-animation' : 'a3 1s 0.'+i+'s  infinite'
      });
    }

    setInterval(function() {
      var h = Math.ceil(Math.random()*24);
      var m = Math.ceil(Math.random()*60);
      if (h<10) {$('.a731').text('0'+h+':');}
      else {$('.a731').text(h+':');}
      if (m<10) {$('.a732').text('0'+m);}
      else {$('.a732').text(m);}
    }, 100);

    setInterval(function() {
      var d = Math.ceil(Math.random()*30);
      var m = Math.ceil(Math.random()*12);
      var min = 1700, max = 1999;
      var rand = min - 0.5 + Math.random()*(max-min+1)
      rand = Math.round(rand);

      if (d<10) {$('.a741').text('0'+d+'/');}
      else {$('.a741').text(d+'/');}
      if (m<10) {$('.a742').text('0'+m+'/');}
      else {$('.a742').text(m+'/');}
      $('.a743').text(rand);
    }, 50);

    for (i = 1; i < 41; i++) {
      a8.append('<span></span>');
    }

    // setInterval(function() {
    //   var mino = 10000, maxo = 99999;
    //   var rand = mino - 0.5 + Math.random()*(maxo-mino+1);
    //   rand = Math.round(rand);

    //   var mine = 100000000, maxe = 999999999;
    //   var ran = mine - 0.5 + Math.random()*(maxe-mine+1);
    //   ran = Math.round(ran);

    //   // $('#a9 span:odd').text(rand);
    //   // $('#a9 span:even').text(ran);

    // }, 100);


    for (i = 1; i < 37; i++) {
      f2.append('<span class=f2'+i+'></span>');
      $('.f2'+i+'').css({
        '-webkit-transform' : 'rotateZ('+i+'0deg) translateY(95px)'
      });
    }

    for (i = 1; i < 19; i++) {
      f5.append('<span class=f5'+i+'><b>'+Math.random()*30+'</b></span>');
      $('.f5'+i+'').css({
        '-webkit-transform' : 'rotateZ('+i*2+'0deg) translateY(40px)'
      });
    }

    for (i = 1; i < 13; i++) {
      f1.append('<span class=f1'+i+'></span>');
      $('.f1'+i+'').css({
        '-webkit-transform' : 'rotateZ('+i*30+'deg) translateY(91px)'
      });
    }

  }
}

export { hackerAnimation, hackerConsole };
