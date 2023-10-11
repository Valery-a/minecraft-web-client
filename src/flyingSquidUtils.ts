import * as crypto from 'crypto'
import UUID from 'uuid-1345'


// https://github.com/PrismarineJS/node-minecraft-protocol/blob/cf1f67117d586b5e6e21f0d9602da12e9fcf46b6/src/server/login.js#L170
function javaUUID (s: string) {
  const hash = crypto.createHash('md5')
  hash.update(s, 'utf8')
  const buffer = hash.digest()
  buffer[6] = (buffer[6] & 15) | 48
  buffer[8] = (buffer[8] & 63) | 128
  return buffer
}

export function nameToMcOfflineUUID (name) {
  return (new UUID(javaUUID('OfflinePlayer:' + name))).toString()
}
