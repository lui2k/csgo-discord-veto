const Discord = require('discord.js');
const client = new Discord.Client();
var maps;

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!mapveto' || message.content.toLowerCase() === '!map veto) {
        message.reply('Enter !ActiveDutyVeto  OR  !PopflashVeto');
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!activedutyveto') {
        message.reply('VetoStarting');
        maps = 'cobble, cache, inferno, mirage, nuke, overpass, train';
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!popflashveto') {
        message.reply('VetoStarting');
        maps = 'subzero, dust2, canals, cobble, cache, inferno, mirage, nuke, overpass, train';
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r cobble' && maps.indexOf('cobble')!= -1) {
        maps = maps.replace('cobble, ', '');
        message.reply('Cobblestone removed. Maps left: ' + maps);
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r cache' && maps.indexOf('cache')!= -1) {
        maps = maps.replace('cache, ', '');
        message.reply('Cache removed. Maps left: ' + maps);
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r mirage' && maps.indexOf('mirage')!= -1) {
        maps = maps.replace('mirage, ', '');
        message.reply('Mirage removed. Maps left: ' + maps);
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!r nuke' && maps.indexOf('nuke')!= -1) {
        maps = maps.replace('nuke, ', '');
        message.reply('Nuke removed. Maps left: ' + maps);
    }
});



client.on('message', message => {
    if (message.content.toLowerCase() === '!r overpass' && maps.indexOf('overpass')!= -1) {
        maps = maps.replace('overpass, ', '');
        message.reply('Overpass removed. Maps left: ' + maps);
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!r train' && maps.indexOf('train')!= -1) {
        maps = maps.replace('train', '');
        message.reply('Train removed. Maps left: ' + maps);
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!r inferno' && maps.indexOf('inferno')!= -1 ) {
        maps = maps.replace('inferno, ', '');
        message.reply('Inferno removed. Maps left: ' + maps);
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === '!r canals' && maps.indexOf('canals')!= -1 ) {
        maps = maps.replace('canals, ', '');
        message.reply('Canals removed. Maps left: ' + maps);
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r subzero' && maps.indexOf('subzero')!= -1 ) {
        maps = maps.replace('subzero, ', '');
        message.reply('Subzero removed. Maps left: ' + maps);
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r dust2' && maps.indexOf('dust2')!= -1 ) {
        maps = maps.replace('dust2, ', '');
        message.reply('Dust 2 removed. Maps left: ' + maps);
    }
});
client.on('message', message => {
    if (message.content.toLowerCase() === '!r dust 2' && maps.indexOf('dust2')!= -1 ) {
        maps = maps.replace('dust2, ', '');
        message.reply('Dust 2 removed. Maps left: ' + maps);
    }
});



client.on('message',message=> {
    if(message.content === '!randomMap') {
     message.reply( items[Math.floor(Math.random()*items.length)] );
    }
});


client.login(process.env.BOT_TOKEN);
