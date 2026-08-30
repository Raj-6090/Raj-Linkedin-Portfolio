import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import https from 'https'
import { defineConfig } from 'vite'

const CALLMEBOT_API_KEY = process.env.CALLMEBOT_API_KEY || ''; // Will be populated with user's key

function sendCallmebotWhatsApp(msg, apiKey) {
  const keyToUse = apiKey || CALLMEBOT_API_KEY;
  if (!keyToUse) return;
  const phone = '918160309964';
  const text = encodeURIComponent(
    `*New Portfolio Inquiry for Raj Kaneriya*\n\n` +
    `👤 *Name:* ${msg.name}\n` +
    `✉️ *Email:* ${msg.email}\n` +
    `💬 *Message:* ${msg.message}`
  );
  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${keyToUse}`;
  https.get(url, (res) => {
    console.log(`Callmebot WhatsApp notification status: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error('Callmebot WhatsApp notification error:', err.message);
  });
}

function saveMessagePlugin() {
  return {
    name: 'save-message-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-message', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            try {
              const newMsg = JSON.parse(body);
              const dbPath = path.resolve(process.cwd(), 'public/db.json');
              const fileData = fs.readFileSync(dbPath, 'utf-8');
              const json = JSON.parse(fileData);
              if (!json.messages) json.messages = [];
              json.messages.push(newMsg);
              fs.writeFileSync(dbPath, JSON.stringify(json, null, 4), 'utf-8');

              // Trigger background WhatsApp notification via Callmebot if key exists
              if (newMsg.apiKey || CALLMEBOT_API_KEY) {
                sendCallmebotWhatsApp(newMsg, newMsg.apiKey);
              }

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, messages: json.messages }));
            } catch (err) {
              console.error('Error writing to db.json:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
        } else {
          next();
        }
      });

      server.middlewares.use('/api/clear-messages', (req, res, next) => {
        if (req.method === 'POST') {
          try {
            const dbPath = path.resolve(process.cwd(), 'public/db.json');
            const fileData = fs.readFileSync(dbPath, 'utf-8');
            const json = JSON.parse(fileData);
            json.messages = [];
            fs.writeFileSync(dbPath, JSON.stringify(json, null, 4), 'utf-8');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, messages: [] }));
          } catch (err) {
            console.error('Error clearing db.json:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), saveMessagePlugin()],
})
