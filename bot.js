const Discord = require('discord.js');
const client = new Discord.Client();
var maps;

client.on('ready', () => {
  console.log('I am ready!');
  });
  
  client.on('message',message => {
    if(message.content === '!startVeto' || message.content === '!resetVeto') {
      message.reply('VetoStarting');
      maps = ['cobble','cache', 'inferno','mirage','nuke','overpass','train'];
    }
 });
 
 client.login(process.env.BOT_TOKEN);


function remove(array, element) {
  return array.filter(e => e !== element);
}

  message.reply("Pick a map to remove: " + maps);
  
  client.on('message',message => {
    if(message.content === '!r cobble') {
      maps = remove(maps,'cobble');
      message.reply('Cobblestone removed. Maps left: ' + maps);
    }
 });

  client.on('message',message => {
    if(message.content === '!r cache') {
      maps = remove(maps,'cache');
      message.reply('Cache removed. Maps left: ' + maps);
    }
 });
  
  client.on('message',message => {
    if(message.content === '!r mirage') {
      maps = remove(maps,'mirage');
      message.reply('Mirage removed. Maps left: ' + maps);
    }
 });
  
    
  client.on('message',message => {
    if(message.content === '!r nuke') {
      maps = remove(maps,'nuke');
      message.reply('Nuke removed. Maps left: ' + maps);
    }
 });



  client.on('message',message => {
    if(message.content === '!r overpass') {
      maps = remove(maps,'overpass');
      message.reply('Overpass removed. Maps left: ' + maps);
    }
 });


  client.on('message',message => {
    if(message.content === '!r train') {
      maps = remove(maps,'train');
      message.reply('Train removed. Maps left: ' + maps);
    }
 });


  client.on('message',message => {
    if(message.content === '!r inferno') {
      maps = remove(maps,'inferno');
      message.reply('inferno removed. Maps left: ' + maps);
    }
 });


}

}
