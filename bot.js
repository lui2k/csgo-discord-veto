const Discord = require('discord.js');
const client = new Discord.Client();
var maps;
var items = ['cache','cobblestone','mirage','inferno','nuke','overpass','train'];

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!startVeto' || message.content === '!resetVeto') {
        message.reply('VetoStarting');
        maps = 'cobble, cache, inferno, mirage, nuke, overpass, train';
    }
});

client.login(process.env.BOT_TOKEN);


client.on('message', message => {
    if (message.content === '!r cobble') {
        maps = maps.replace('cobble, ', '');
        message.reply('Cobblestone removed. Maps left: ' + maps);
    }
});

client.on('message', message => {
    if (message.content === '!r cache') {
        maps = maps.replace('cache, ', '');
        message.reply('Cache removed. Maps left: ' + maps);
    }
});

client.on('message', message => {
    if (message.content === '!r mirage') {
        maps = maps.replace('mirage, ', '');
        message.reply('Mirage removed. Maps left: ' + maps);
    }
});


client.on('message', message => {
    if (message.content === '!r nuke') {
        maps = maps.replace('nuke, ', '');
        message.reply('Nuke removed. Maps left: ' + maps);
    }
});



client.on('message', message => {
    if (message.content === '!r overpass') {
        maps = maps.replace('overpass, ', '');
        message.reply('Overpass removed. Maps left: ' + maps);
    }
});


client.on('message', message => {
    if (message.content === '!r train') {
        maps = maps.replace('train', '');
        message.reply('Train removed. Maps left: ' + maps);
    }
});


client.on('message', message => {
    if (message.content === '!r inferno') {
        maps = maps.replace('inferno, ', '');
        message.reply('inferno removed. Maps left: ' + maps);
    }
});

client.on('message',message=> {
    if(message.content === '!randomMap') {
     message.reply( items[Math.floor(Math.random()*items.length)] );
    }
});
