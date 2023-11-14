import dotenv from 'dotenv';
import express from 'express';
import { AccessToken } from 'livekit-server-sdk';

dotenv.config();

const createToken = () => {

  const roomName = 'swift Room';
  const participantName = 'Ajinkya';

  const at = new AccessToken(process.env.ENV_API_KEY, process.env.ENV_API_SECRET, {
    identity: participantName,
  });
  at.addGrant({ roomJoin: true, room: roomName });

  return at.toJwt();
}

const app = express();
const port = 3000;


app.get('/getToken', (req, res) => {
  res.send(createToken());
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})