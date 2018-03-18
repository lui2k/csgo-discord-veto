const Discord = require('discord.js');
const client = new Discord.Client();
var maps;
var mapsLeft;
var allowBan = false;

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!mapveto' || message.content.toLowerCase() === '!map veto') {
        message.reply('Enter !ActiveDutyVeto  OR  !PopflashVeto');
        mapsLeft = 50;
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!mapsLeft') {
        message.reply("Maps left: "+maps + " ("+mapsLeft - 1+")");
    }
});



client.on('message', message => {
    if (message.content.toLowerCase() === '!activedutyveto') {
        maps = 'cobble, cache, inferno, mirage, nuke, overpass, train';
        message.reply('Active Duty Map Veto starting: Choose to ban any of the following maps: ' + maps);
        mapsLeft = maps.split(",").length;
        allowBan=true;
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!popflashveto') {
        maps = 'subzero, dust2, canals, cobble, cache, inferno, mirage, nuke, overpass, train';
        message.reply('Popflash Map Veto starting: Choose to ban any of the following maps: ' + maps);
        mapsLeft = maps.split(",").length;
        allowBan=true;
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r cobble' && maps.indexOf('cobble')!= -1 && allowBan) {
        maps = maps.replace('cobble, ', '');
        message.reply('Cobblestone removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r cache' && maps.indexOf('cache')!= -1 && allowBan) {
        maps = maps.replace('cache, ', '');
        mapsLeft = maps.split(",").length;
        message.reply('Cache removed. Maps left: ' + maps + " ("+mapsLeft +")");
        CheckMaps();
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r mirage' && maps.indexOf('mirage')!= -1 && allowBan) {
        maps = maps.replace('mirage, ', '');
        mapsLeft = maps.split(",").length;
        message.reply('Mirage removed. Maps left: ' + maps + " ("+mapsLeft +")");
        CheckMaps();
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!r nuke' && maps.indexOf('nuke')!= -1 && allowBan) {
        maps = maps.replace('nuke, ', '');
        message.reply('Nuke removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});



client.on('message', message => {
    if (message.content.toLowerCase() === '!r overpass' && maps.indexOf('overpass')!= -1 && allowBan) {
        maps = maps.replace('overpass, ', '');
        message.reply('Overpass removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!r train' && maps.indexOf('train')!= -1 && allowBan) {
        maps = maps.replace('train', '');
        message.reply('Train removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!r inferno' && maps.indexOf('inferno')!= -1 && allowBan ) {
        maps = maps.replace('inferno, ', '');
        message.reply('Inferno removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!r canals' && maps.indexOf('canals')!= -1 &&allowBan) {
        maps = maps.replace('canals, ', '');
        message.reply('Canals removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r subzero' && maps.indexOf('subzero')!= -1 &&allowBan) {
        maps = maps.replace('subzero, ', '');
        message.reply('Subzero removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r dust2' && maps.indexOf('dust2')!= -1 &&allowBan) {
        maps = maps.replace('dust2, ', '');
        message.reply('Dust 2 removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});
client.on('message', message => {
    if (message.content.toLowerCase() === '!r dust 2' && maps.indexOf('dust2')!= -1 &&allowBan) {
        maps = maps.replace('dust2, ', '');
        message.reply('Dust 2 removed. Maps left: ' + maps);
        mapsLeft = maps.split(",").length;
        CheckMaps();
    }
});


function CheckMaps()
{
    if(mapsLeft<2)
    {
        message.channel.send("Map Veto ended: Map is" + maps);
        mapsLeft = 50;
        allowBan=false;
    }
}


client.on('message',message=> {
    if(message.content === '!randomMap') {
     message.reply( items[Math.floor(Math.random()*items.length)] );
    }
});


client.login(process.env.BOT_TOKEN);
