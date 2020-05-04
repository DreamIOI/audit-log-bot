#!/usr/bin/env node

const { Client } = require('discord.js');
const { token } = require('./config');

const client = new Client();

require('./util/loadListeners')(client);

client.login(process.env.BOT_TOKEN).catch(error => {
  console.error(error);
  process.exit(1);
});
