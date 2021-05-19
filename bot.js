    const {Client, RichEmbed, Discord} = require('discord.js') ;
    const client = new Client ;
    const settings = require('./settings.json') ;
    
    client.on('ready',()=>{
        console.log(`${client.user.tag} 準備好上戰場惹！`) ;
    }) ;

    client.on('message',msg=>{
        if(msg.content.startsWith(settings.prefix+'test')){
            msg.channel.send('test committed') ;
        }
    }) ;

    client.on('message',msg=>{
            if(msg.author.bot) return;
            if(msg.content ==="早安") return msg.inlinReply("晚安")
        }) ;

    client.login(settings.token) ;
