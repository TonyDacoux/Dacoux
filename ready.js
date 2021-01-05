module.exports = async (client) => {
console.log(`ONLINE`)

  console.log(`${client.user.tag} = ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} user dacoux!`);
  client.channels.cache.get('id').send("emoji・**Le bot est opérationnel !**");
  

  let activities = ['desc', `${client.guilds.cache.size.toString()} Servers`, `${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} Users`], i = 0;


  setInterval(() => client.user.setPresence({ activity: { name: `${activities[i++ % activities.length]}`, type: 'WATCHING' }, status: 'online' }), 30000);
}
