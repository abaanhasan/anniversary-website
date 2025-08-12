const messages = [
    "1 year is nothing compared to how long we're gonna be together",
    "MY GOD I LOVE YOU SO MUCH",
    "i hope you stay with me forever :)",
    "i love you, my azia, my azi, my pookiechu, mon cherie, mon ange, my applepie, my icecream, my poomie, my princess, my pumpkin pie, my sugar plum LIST GOES ONNNN",
    "i hope we grow old together",
    "ARE YOU NOT TIRED YET (imagine if this is the first one)",
    "this took me a while..SO WORTH IT THO",
    "you're so beautiful and strong, OOWAWA DOESNT HAVE SHIT ON YOU",
    "1 year out of a billion more !!",
    "(abna de)",
    "i love talking to you",
    "how was i so lucky bro",
    "life's a race and i can't keep you waiting",
    "GAHH JUST KISS ME ALREADY",
    "is one year with that one done yet",
    "I MISS YOU COME HEREEE",
    "ARE YOU SMILING RN? EXACTLY WHAT I WANTED.",
    "you found the ultra rare message! here's a skid.. MWUAHHH",
    "if someone asks you what abaan is thinking, your best guess is definitely 'thinking about azia'",
    "DFSFIHNGOIADFGHSDOFGUH",
"AJDLSKQWEMNZXOPR",
"PQWOEIRUTYALSKDJ",
"ZXCMNBVASDFGQWER",
"LMNOPQRSUVWXYZAB",
"QAZWSXEDCRFVTGBY",
"TGBNHYUJMKOLPIUZ",
"MNZXCQWEASDRTYUI",
"VBNMASDFQWERZXCV",
"KJHGFDSAPOIUYTRE",
"PLMOKNIJBUHVYGCT",
"ZXCVBNMASDFQWERT",
"OIUYTREWQLKJHGFZ",
"QWERTYUIOPASDFGH",
"LKJHGFDSAZXCVBNM",
"MNBVCXZLKJHGFDSA",
"WERTYUIOPLKJHGFZ",
"ASDFGHJKLQWERTYU",
"POIUYTREWQASDFGH"

];

document.getElementById('new-message').addEventListener('click', () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('love-message').textContent = randomMsg;
});
