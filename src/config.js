module.exports = {
  events: [
    'guildMemberAdd',
    'guildMemberRemove',
    'messageDelete',
    'messageDeleteBulk',
    'messageUpdate',
    'userUpdate',
    /*'voiceStateUpdate'*/
  ],
  clientMap: { web: '🌐', mobile: '📱', desktop: '💻' },
  colors: {
    base: 0x7289da,
    positive: 0x3498db,
    neutral: 0xe67e22,
    negative: 0xe91e63
  },
  deleteTimeThreshold: 0,
  editTimeThreshold: 0,
  guildChannelMap: {
    '473481851592507417': {
      logChannelId: '679647662789623888',
      ignoreChannelIds: ['478091743179309066','478561733754224644','478045201269522433','550347273637462057','550347274174201876','550347274853548052','550347275377836032','550347276048924672','610822103851204608']
    }
  }
};
