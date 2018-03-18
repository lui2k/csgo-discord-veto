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
    if (message.content.toLowerCase() === '!r cobble' && maps.indexOf('cobble')!= -1) {
        maps = maps.replace('cobble, ', '');
        message.reply('Cobblestone removed. Maps left: ' + maps);
    }
});

client.on('message', message => {
    if (message.content.toLowerCase() === '!r cache' && maps.indexOf('cache')!= -1 {
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
        message.reply('inferno removed. Maps left: ' + maps);
    }
});



client.on('message',message=> {
    if(message.content === '!randomMap') {
     message.reply( items[Math.floor(Math.random()*items.length)] );
    }
});



client.on('message', message => {
    if (message.content.toLowerCase() === '!whatmaps') {
        message.reply("Map Pool: Cobblestone, Cache, Inferno, Mirage, Nuke, Overpass, Train");
    }
});
