let space1 = "звезда, гагарин, скафандр, полёт, невесомость, метеорит, иллюминатор, телескоп, луноход, ракета, собака, планетарий, тайна, топливо, старт, шаттл, притяжение, воздух, холод, тишина, нло, небо, восход, королёв, космодром, комета, стыковка, аэродинамика, сфера, вакуум";
let sport1 = "бег, футбол, теннис, допинг, танцы, карате, травма, секундомер, биатлон, пот, плавание, мяч, скакалка, волейбол, бейсбол, медаль, турник, баскетбол, акробатика, кубок, дисциплина, болельщик, адидас, клюшка, чемпионат, хоккей, велосипед, разминка, адреналин, фехтование, цель, лыжня, гребля, упражнение, олимпиада, здоровье, сила, зарядка";
let nature1 = "лес, отдых, пикник, фауна, поле, заповедник, луг, гринпис, наука, звери, воздух, парк, поход, родина, птички, река, флора, дача, ландшафт, степь, костёр, рассвет, дождь, закат, роща, опушка, озеро, птицы, цветы, радуга, утёс, зима, лето, молния, скала, сад, грибы, волк, тропинка, эхо, овраг, туман, комары, нора, турист, муравейник, топь, дупло, пихта, лужайка";
let art1 = "живопись, художник, музыка, картина, музей, культура, красота, наука, галерея, талант, скульптура, ренессанс, страсть, балет, муза, натюрморт, оригами, воображение, талант, поэт, дар, креатив, краски, мольберт, ван гог, репин, галерея, гуашь, кисти, масло, палитра, акварель, холст, мазок, гамма, ноты, рок, песня, ноты, аккорд, рок-н-ролл, скрипка, моцарт, чайковский";
let space2 = [];
let s = 0;
let sport2 = [];
let nature2 = [];
let art2 = [];
let tim = 0;
let space = space1.split(", ");
let sport = sport1.split(", ");
let nature = nature1.split(", ");
let art = art1.split(", ");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let game = {
    top: 1,
    active: 1,
    wn: 0,
};
let team1 = {
    nameteam: "",
    points: 0,
};
let team2 = {
    nameteam: "",
    points: 0,
};

//After pressing start button
function restartGame() {
    game.top = 1;
    game.active = 1;
    game.wn = 0;
    team1.nameteam = "";
    team2.points = 0;
    team2.nameteam = "";
    team1.points = 0;
    tim = 0;
    document.getElementById('bstart').style.display = "inline-block";
    document.getElementById('s1').style.display = "inline-block";
    document.getElementById('game_heading').style.display = "block";
}

function startGame() {
    //start button
    document.getElementById('bstart').style.display = "none";
    document.getElementById('s1').style.display = "none";
    //creating object
    document.getElementById('game_heading').style.display = "none";
    teamscreation();
}

function teamscreation() {
    document.getElementById('Tset').style.display = "block";
    document.getElementById('Team1').style.display = "block";
    document.getElementById('Team2').style.display = "block";
    document.getElementById('a1').style.display = "inline-block";
    document.getElementById('a2').style.display = "inline-block";
    document.getElementById('a3').style.display = "inline-block";
    document.getElementById('a4').style.display = "inline-block";
    document.getElementById('submit').style.display = "block";
    document.getElementById('Tset').textContent = "TEAMS";
    document.getElementById('Team1').textContent = "First team : ";
    document.getElementById('Team2').textContent = "Second team : ";
}

function vis(n, k) {
    let a = [];
    a[1] = "Alien";
    a[2] = "Monkey";
    a[3] = "Astronaut";
    a[4] = "Snowman";
    if (n == 1)
        team1.nameteam = a[k];
    if (n == 2)
        team2.nameteam = a[k];
    if (n == 1)
        document.getElementById('Team1').textContent = team1.nameteam;
    else document.getElementById('Team2').textContent = team2.nameteam;
}

function ziro(x) {
    document.getElementById('pause').style.display = 'none';
    document.getElementById('nextr').style.display = "none";
    document.getElementById('endg').style.display = "none";
    document.getElementById('nextr').style.display = "none";
    document.getElementById('endg').style.display = "none";
    document.getElementById('te1').style.display = "none";
    document.getElementById('te2').style.display = "none";
    document.getElementById('pi1').style.display = "none";
    document.getElementById('pi2').style.display = "none";
    document.getElementById('pi3').style.display = "none";
    document.getElementById('pi4').style.display = "none";

    document.getElementById('points1').style.display = "none";
    document.getElementById('points2').style.display = "none";
    if (x == 1) {
        document.getElementById('a1').style.display = "none";
        document.getElementById('a2').style.display = "none";
        document.getElementById('a3').style.display = "none";
        document.getElementById('a4').style.display = "none";
        document.getElementById('Team1').style.display = "none";
        document.getElementById('Team2').style.display = "none";
        document.getElementById('submit').style.display = "none";
        document.getElementById('Tset').style.display = "none";

        document.getElementById('t1pic').style.display = "none";
        document.getElementById('t2pic').style.display = "none";
        document.getElementById('t3pic').style.display = "none";
        document.getElementById('t4pic').style.display = "none";

        document.getElementById('pic1').style.display = "none";
        document.getElementById('pic2').style.display = "none";

        document.getElementById('points').style.display = "none";
        document.getElementById('word').style.display = "none";
        document.getElementById('teamname').style.display = "none";
        document.getElementById('clock').style.display = "none";

    }
    if (x == 2) {
        document.getElementById('T1').style.display = "none";
        document.getElementById('T2').style.display = "none";
        document.getElementById('T3').style.display = "none";
        document.getElementById('T4').style.display = "none";
        document.getElementById('Tset').style.display = "none";

        document.getElementById('t1pic').style.display = "none";
        document.getElementById('t2pic').style.display = "none";
        document.getElementById('t3pic').style.display = "none";
        document.getElementById('t4pic').style.display = "none";
    }
}

function topic() {
    ziro(1);

    document.getElementById('Tset').style.display = "block";
    document.getElementById('Tset').textContent = "Topics";

    document.getElementById('T1').style.display = "block";
    document.getElementById('T2').style.display = "block";
    document.getElementById('T3').style.display = "block";
    document.getElementById('T4').style.display = "block";
    for (let i = 0; i < 60; i++) {
        space2[i] = 0;
        sport2[i] = 0;
        nature2[i] = 0;
        art2[i] = 0;
    }
    s=0;
}

function round(n) {
    tim = 0;
    wn = 0;
    ziro(2);
    game.top = n;
    if (game.active == 1) {
        document.getElementById('teamname').textContent = team1.nameteam;
        if (team1.nameteam == "Alien")
            document.getElementById('t2pic').style.display = "block";
        if (team1.nameteam == "Monkey")
            document.getElementById('t4pic').style.display = "block";
        document.getElementById('points').textContent = "Points : " + team1.points;
    }
    if (game.active == 2) {
        document.getElementById('teamname').textContent = team2.nameteam;
        if (team2.nameteam == "Astronaut")
            document.getElementById('t3pic').style.display = "block";
        if (team2.nameteam == "Snowman")
            document.getElementById('t1pic').style.display = "block";
        document.getElementById('points').textContent = "Points : " + team2.points;
    }

    document.getElementById('pic1').style.display = "inline-block";
    document.getElementById('pic2').style.display = "inline-block";

    if (game.top == 1) {
        s++;
        if (s < space.length-1) {
            wn = getRandomInt(space.length - 1);
            while (space2[wn] == 1) wn = getRandomInt(space.length - 1);
            space2[wn] = 1;
            document.getElementById('word').textContent = space[wn];
        } else document.getElementById('word').textContent = "no words !!!";
    }
    if (game.top == 2) {
        s++;
        if (s < sport.length-1) {
            wn = getRandomInt(sport.length - 1);
            while (sport2[wn] == 1) wn = getRandomInt(sport.length - 1);
            sport2[wn] = 1;
            document.getElementById('word').textContent = sport[wn];
        } else document.getElementById('word').textContent = "no words !!!";
    }
    if (game.top == 3) {
        s++;
        if (s < nature.length-1) {
            wn = getRandomInt(nature.length - 1);
            while (nature2[wn] == 1) wn = getRandomInt(nature.length - 1);
            nature2[wn] = 1;
            document.getElementById('word').textContent = nature[wn];
        } else document.getElementById('word').textContent = "no words !!!";
    }
    if (game.top == 4) {
        s++;
        if (s < art.length-1) {
            wn = getRandomInt(art.length - 1);
            while (art2[wn] == 1) wn = getRandomInt(art.length - 1);
            art2[wn] = 1;
            document.getElementById('word').textContent = art[wn];
        } else document.getElementById('word').textContent = "no words !!!";
    }
    document.getElementById('clock').textContent = tim;
    document.getElementById('word').style.display = "block";
    document.getElementById('teamname').style.display = "block";
    document.getElementById('clock').style.display = "block";
    document.getElementById('points').style.display = "block";
    setTimeout(myFunction, 1);
}

function final(x) {
    ziro(1);
    console.log(x);
    if (x == 2) {
        document.getElementById('te1').textContent = team1.nameteam;
        document.getElementById('te1').style.display = "block";
        if (team1.nameteam == "Alien")
            document.getElementById('pi2').style.display = "block";
        if (team1.nameteam == "Monkey")
            document.getElementById('pi4').style.display = "block";
        document.getElementById('points1').textContent = "Points : " + team1.points;
        document.getElementById('points1').style.display = "block";

        document.getElementById('te2').textContent = team2.nameteam;
        document.getElementById('te2').style.display = "block";
        if (team2.nameteam == "Astronaut")
            document.getElementById('pi3').style.display = "block";
        if (team2.nameteam == "Snowman")
            document.getElementById('pi1').style.display = "block";
        document.getElementById('points2').textContent = "Points : " + team2.points;
        document.getElementById('points2').style.display = "block";

        document.getElementById('nextr').style.display = "inline-block";
        document.getElementById('endg').style.display = "inline-block";
    } else
        end(x);
}

function end(x) {
    if (x == 1) round(game.top);
    else
    if (x == 2) topic();
    else
    if (x == 3) {
        ziro(1);
        ziro(2);
        restartGame();
        return;
    }
}

function myFunction() {
    if (tim >= 20) {
        if (game.active == 1) {
            game.active = 2;
            tim = 0;
            between();
            return;
            //round(game.top);
        } else {
            game.active = 1;
            tim = 0;
            final(2);
            return;
            //topic();
        }
    }
    tim++;
    document.getElementById('clock').textContent = "Time : " + (20 - tim);
    setTimeout(myFunction, 1000);
}

function between() {
    ziro(1);
    ziro(2);
    document.getElementById('pause').style.display = 'block';
}

function points(k) {
    if (game.active == 1) {
        if (game.top == 1 && s < space.length-1)
        team1.points += k;
        
        if (game.top == 2 && s < sport.length-1)
        team1.points += k;
        
        if (game.top == 3 && s < nature.length-1)
        team1.points += k;
        
        if (game.top == 4 && s < art.length-1)
        team1.points += k;
        
        document.getElementById('points').textContent = "Points : " + team1.points;
    }
    if (game.active == 2) {
        if (game.top == 1 && s < space.length-1)
        team2.points += k;
        
        if (game.top == 2 && s < sport.length-1)
        team2.points += k;
        
        if (game.top == 3 && s < nature.length-1)
        team2.points += k;
        
        if (game.top == 4 && s < art.length-1)
        team2.points += k;
        
        document.getElementById('points').textContent = "Points : " + team2.points;
    }
    if (game.top == 1) {
        s++;
        if (s < space.length-1) {
            wn = getRandomInt(space.length - 1);
            while (space2[wn] == 1) wn = getRandomInt(space.length - 1);
            space2[wn] = 1;
            document.getElementById('word').textContent = space[wn];
        } else document.getElementById('word').textContent = "no words !!!";
    }
    if (game.top == 2) {
        s++;
        if (s < sport.length-1) {
            wn = getRandomInt(sport.length - 1);
            while (sport2[wn] == 1) wn = getRandomInt(sport.length - 1);
            sport2[wn] = 1;
            document.getElementById('word').textContent = sport[wn];
        } else document.getElementById('word').textContent = "no words !!!";
    }
    if (game.top == 3) {
        s++;
        if (s < nature.length-1) {
            wn = getRandomInt(nature.length - 1);
            while (nature2[wn] == 1) wn = getRandomInt(nature.length - 1);
            nature2[wn] = 1;
            document.getElementById('word').textContent = nature[wn];
        } else document.getElementById('word').textContent = "no words !!!";
    }
    if (game.top == 4) {
        s++;
        if (s < art.length-1) {
            wn = getRandomInt(art.length - 1);
            while (art2[wn] == 1) wn = getRandomInt(art.length - 1);
            art2[wn] = 1;
            document.getElementById('word').textContent = art[wn];
        } else document.getElementById('word').textContent = "no words !!!";
    }
}
