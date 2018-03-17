const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  });
  
  client.on('message',message => {
    if(message.content === '!startVeto') {
    message.reply('VetoStarting');
      //VetoStart();
    }
 });
 
 client.login(process.env.BOT_TOKEN);


function VetoStart()
{ 
  var maps = ['cobble','cache', 'inferno','mirage','nuke','overpass','train'];
  message.reply("Pick a map to remove: " + maps);
  
  client.on('message',message => {
    if(message.content === '!r cobble') {
      message.reply('Cobble removed');
      maps = remove(maps,'cobble');
    }
 });

  client.on('message',message => {
    if(message.content === '!r cache') {
      message.reply('Cache removed');
      maps = remove(maps,'cache');
    }
 });
  
  client.on('message',message => {
    if(message.content === '!r mirage') {
      message.reply('Mirage removed');
      maps = remove(maps,'mirage');
    }
 });
  
    
  client.on('message',message => {
    if(message.content === '!r nuke') {
      message.reply('Nuke removed');
      maps = remove(maps,'nuke');
    }
 });



  client.on('message',message => {
    if(message.content === '!r overpass') {
      message.reply('Overpass removed');
      maps = remove(maps,'overpass');
    }
 });


  client.on('message',message => {
    if(message.content === '!r train') {
      message.reply('train removed');
      maps = remove(maps,'train');
    }
 });




  client.on('message',message => {
    if(message.content === '!r inferno') {
      message.reply('inferno removed');
      maps = remove(maps,'inferno');
    }
 });


  if(maps.length==1)
  {
    return maps;
  }

}


function remove(array, element) {
  return array.filter(e => e !== element);
}
