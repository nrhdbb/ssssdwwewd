// config.js
module.exports = {
  token: process.env.DISCORD_TOKEN,
  prefix: "!",
  enablePrefix: true,
  supportServer: "https://discord.gg/9MVAPpfs8D",
  chatRoleId: "1473660437361983598",
  aiChannelId: "1459859179605856435",

  activity: {
    name: "music",
    type: "LISTENING" // PLAYING, LISTENING, WATCHING, STREAMING, COMPETING
  },

  express: {
    enabled: true,
    port: 5000
  },

  emojis: {
    play: "▶️",
    pause: "⏸️",
    stop: "⏹️",
    skip: "⏭️",
    queue: "📜",
    music: "🎵",
    loop: "🔁",
    shuffle: "🔀",
    volume: "🔊",
    success: "✅",
    error: "❌",
    info: "ℹ️"
  },

  aliases: {
    play: ['p'],
    pause: ['pa'],
    resume: ['r', 'res'],
    skip: ['s', 'next'],
    stop: ['st', 'leave', 'disconnect'],
    volume: ['v', 'vol'],
    volumeup: ['v+', 'up', 'besarin'],
    volumedown: ['v-', 'down', 'kecilin'],
    queue: ['q'],
    nowplaying: ['np', 'current'],
    shuffle: ['sh', 'mix'],
    loop: ['l', 'repeat'],
    remove: ['rm', 'delete'],
    move: ['mv'],
    clearqueue: ['cq', 'clear'],
    '247': ['24/7', 'stay'],
    stats: ['status', 'info'],
    ping: ['latency'],
    invite: ['inv'],
    support: ['server'],
    help: ['h', 'commands', 'cmd']
  },

  lavalink: {
    nodes: [
      {
        name: "Main Node",
        host: "lavalink.jirayu.net",
        port: 13592,
        password: "youshallnotpass",
        secure: false
      }
    ]
  }
};
