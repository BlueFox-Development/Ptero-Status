const Status = require('../index');
require('dotenv').config();

/*
Embed Placeholders:

NODE:
{node.name} - Node's name
{node.memory.used} - Total node's memory
{node.memory.total} - Total used memory
{node.disk.used} - Total used disk
{node.disk.total} - Total node's disk
{node.cpu.used} - Total used cpu
{node.cpu.cores} - Total cpu cores
{node.cpu} - Displays the cpu model
{node.os} - Displays the os
{node.status} - Shows if it's online or offline

NODES:
{nodes.online} - Number of online nodes
{nodes.offline} - Number of offline nodes
{nodes.list} - List of nodes along with their statuses
{nodes.total} - Number of total nodes

TOTAL:
{memory.total} - Total memory
{disk.total} - Total disk
{cores.total} - Total cores

USED:
{memory.used} - Total memory used by nodes
{disk.used} - Total disk used by nodes
{memory.used%} - Total memory percentage used by nodes 
{disk.used%} - Total disk percentage used by nodes

PTERODACTYL:
{pterodactyl.users} - Number of current panel users
{pterodactyl.servers} - Number of current panel servers
{pterodactyl.locations} - Number of current panel locations

DATES:
{lastupdated} - Last updated time
{lastupdated.date} - Currently day of the month
{lastupdated.month} - Current month of the year
{lastupdated.hours} - Current hour of the day
{lastupdated.minutes} - Current minute of the hour
{lastupdated.seconds} - Current second of hour
{lastupdated.year} - Current year

OTHER:
{eval('CODE-HERE')} - Evals javascript code
*/

const Controller = new Status.Controller(4000, {
    token: process.env.token,
    guildID: '704423873415741510',
    channelID: '832318915366879263',
    color: '#06cce2', // Embed color
    pterodactyl: {
        panel: "https://panel.bluefoxhost.com",
        apiKey: process.env.apiKey,
    },
    node: {
        message: '**{node.name}**: {node.status}\n```Memory: {node.memory.used}/{node.memory.total}\nDisk: {node.disk.used}/{node.disk.total}\nCPU: {node.cpu.used} ({node.cpu.cores} cores)```',
        online: '🟢 **ONLINE**',
        offline: '🔴 **OFFLINE**'
    },
    embed: {
        color: '#06cce2',
        title: 'Node Status [{nodes.total} nodes]',
        description: '__**Nodes**__:\n{nodes.list}\n\n__**Total**__:\nMemory: {memory.used}/{memory.total} ({memory.used%})\nDisk: {disk.used}/{disk.total} ({disk.used%})\n\n__**Pterodactyl:**__\nUsers: {pterodactyl.users}\nServers: {pterodactyl.servers}',
        footer: {
            text: 'Last updated: {lastupdated}',
            icon: 'https://i.imgur.com/9b1qwml.jpg'
        }
    },
    interval: 15000
});



const Daemon = new Status.Daemon("Node1", 15000, {
    ip: "0.0.0.0",
    port: "4000",
    secure: false, // SSL
});