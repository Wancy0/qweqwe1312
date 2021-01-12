const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

if(!["797468654479867929"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).set0x2f3136('0x2f3136').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "797468654462566410"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:797487728434479184>`,
'1': `<a:bir:797487729456840704>`,
'2': `<a:iki:797487730099486752>`,
'3': `<a:uc:797487730140774400>`,
'4': `<a:dort:797487729465884702>`,
'5': `<a:bes:797487728987078677>`,
'6': `<a:alti:797487729507434546>`,
'7': `<a:yedi:797487729239392266>`,
'8': `<a:sekiz:797487728962568223>`,
'9': `<a:dokuz:797487729046323220>`}[d];})}
          
  
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:797487728434479184>`,
'1': `<a:bir:797487729456840704>`,
'2': `<a:iki:797487730099486752>`,
'3': `<a:uc:797487730140774400>`,
'4': `<a:dort:797487729465884702>`,
'5': `<a:bes:797487728987078677>`,
'6': `<a:alti:797487729507434546>`,
'7': `<a:yedi:797487729239392266>`,
'8': `<a:sekiz:797487728962568223>`,
'9': `<a:dokuz:797487729046323220>`}[d];})}
          

var taglılar = 0;
let tag = "TAG";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:797487728434479184>`,
'1': `<a:bir:797487729456840704>`,
'2': `<a:iki:797487730099486752>`,
'3': `<a:uc:797487730140774400>`,
'4': `<a:dort:797487729465884702>`,
'5': `<a:bes:797487728987078677>`,
'6': `<a:alti:797487729507434546>`,
'7': `<a:yedi:797487729239392266>`,
'8': `<a:sekiz:797487728962568223>`,
'9': `<a:dokuz:797487729046323220>`}[d];})}
          

  
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:797487728434479184>`,
'1': `<a:bir:797487729456840704>`,
'2': `<a:iki:797487730099486752>`,
'3': `<a:uc:797487730140774400>`,
'4': `<a:dort:797487729465884702>`,
'5': `<a:bes:797487728987078677>`,
'6': `<a:alti:797487729507434546>`,
'7': `<a:yedi:797487729239392266>`,
'8': `<a:sekiz:797487728962568223>`,
'9': `<a:dokuz:797487729046323220>`}[d];})}
          

  
  
  
var booster = message.guild.roles.cache.get("797600828424716298").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:797487728434479184>`,
'1': `<a:bir:797487729456840704>`,
'2': `<a:iki:797487730099486752>`,
'3': `<a:uc:797487730140774400>`,
'4': `<a:dort:797487729465884702>`,
'5': `<a:bes:797487728987078677>`,
'6': `<a:alti:797487729507434546>`,
'7': `<a:yedi:797487729239392266>`,
'8': `<a:sekiz:797487728962568223>`,
'9': `<a:dokuz:797487729046323220>`}[d];})}
          


  
const embed1 = new Discord.MessageEmbed()
.setColor('0x2f3136')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}