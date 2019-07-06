//Lui2k's tournament edition of a CSGO veto bot. Updated with Summer 2019 map pool with Vertigo.


const Discord = require('discord.js');
const client = new Discord.Client();

var mapPool = ['dust2', 'inferno', 'mirage', 'nuke', 'overpass', 'train', 'vertigo'];
var pickSide = ['heads', 'tails'];
var allowBan = false, bestOfSelected = false;
var bestOf;
var count = 1;
var pickedMaps = [];

client.on('message', message => {
    if (message.content.toLowerCase() === '!mapveto' || message.content.toLowerCase() === '!map veto' || message.content.toLowerCase() === '!veto') {
        message.reply('Enter !veto bo1  OR  !veto bo3');
        bestOfSelected = false;
        allowBan = false;
        count = 1;
    }
    else if (message.content.toLowerCase() === '!veto flipcoin' || message.content.toLowerCase() === '!veto flipacoin') {
        message.reply('the coin has landed on ' + pickSide[Math.floor(Math.random() * pickSide.length)] + '.');
    }
    else if (message.content.toLowerCase() === '!veto bo1' && !allowBan && !bestOfSelected) {
        bestOf = 1;
        bestOfSelected = true;
        allowBan = true;
        message.reply('Enter !Veto ActiveDuty  OR  !Veto Popflash for a best of ' + bestOf + "match.");
    }
    else if (message.content.toLowerCase() === '!veto bo3' && !allowBan && !bestOfSelected) {
        bestOf = 3;
        bestOfSelected = true;
        allowBan = true;
        message.reply('Active Duty Map Veto starting: Type !veto MapName to ban any of the following maps: ' + mapPool);
    }
    else if (message.content.toLowerCase() === '!mapsleft' && allowBan) {
        message.reply("Maps left: " + mapPool + " (" + (mapPool.length - 1) + ")");
    }
    else if (message.content.toLowerCase() === '!veto help') {
        message.reply("Need help with the Veto Bot? Contact the developer: `Lui2k#3225` or https://twitter.com/lui2k_");
    }
    else if (message.content.toLowerCase() === '!randommap' || message.content.toLowerCase() === '!random map') {
        message.reply(activeMaps[Math.floor(Math.random() * activeMaps.length)]);
    }
    else if (message.content.toLowerCase().indexOf('!veto ') === 0 && allowBan) {
        var map = message.content.toLowerCase().slice(5).trim();
        if (mapPool.indexOf(map) !== -1) {
            mapPool = mapPool.filter(function (m) { return m !== map; });
            if (mapPool.length == 1 && bestOf==1) {
                message.reply("You will play a best-of-1 on "+mapPool +". Good luck, have fun!");
                allowBan = false;
                bestOfSelected = false;
            }
            else if( (count == 3||count==4) && bestOf==3)
            {
                pickedMaps.push(map);
                message.reply("Picked: "+map + ". Maps left: "+mapPool);
                map.slice(1)
                count+=1;
            }
            else if(count == 6 && bestOf==3)
            {
                pickedMaps.push(mapPool[0]);
                message.reply("You will play a best-of-3 on "+pickedMaps.toString()+". Good luck, have fun!");
                allowBan = false;
                bestOfSelected = false;
            }
            else
            {
                message.reply(map[0].toUpperCase() + map.slice(1) + ' removed. Maps left: ' + mapPool);
                count+=1;
                map.slice(1)
            }
        }
        else {
            message.reply("Unrecognized command or map is missing from map pool '" + map + "', available maps for veto are: " + mapPool);
        }
    }
});

client.login(process.env.BOT_TOKEN);
