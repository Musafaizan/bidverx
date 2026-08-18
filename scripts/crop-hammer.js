const zlib = require("zlib");
const fs = require("fs");

function crc32(buf) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c;
    }
  }
  let crc = -1;
  for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  return (crc ^ -1) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

const src = fs.readFileSync("src/assets/bidverx-logo.png");
let off = 8, sw, sh, idat = [];
while (off < src.length) {
  const len = src.readUInt32BE(off);
  const type = src.toString("ascii", off + 4, off + 8);
  if (type === "IHDR") {
    sw = src.readUInt32BE(off + 8);
    sh = src.readUInt32BE(off + 12);
  }
  if (type === "IDAT") idat.push(src.slice(off + 8, off + 8 + len));
  off += 12 + len;
}

const raw = zlib.inflateSync(Buffer.concat(idat));
const stride = sw * 4 + 1;

const x0 = 97, y0 = 55, x1 = 371, y1 = 297;
const w = x1 - x0, h = y1 - y0;

// pad canvas a bit so the hammer has breathing room: 18px margin all around
const pad = 18;
const cw = w + pad * 2, chh = h + pad * 2;
const rows = [];
for (let y = 0; y < chh; y++) {
  const row = Buffer.alloc(cw * 4 + 1);
  row[0] = 0; // filter: none
  const sy = y - pad + y0;
  if (sy < 0 || sy >= sh) {
    rows.push(row);
    continue;
  }
  const srcRow = raw.slice(sy * stride + 1, sy * stride + 1 + sw * 4);
  for (let x = 0; x < cw; x++) {
    const sx = x - pad + x0;
    const di = 1 + x * 4;
    if (sx < 0 || sx >= sw) continue;
    srcRow.copy(row, di, sx * 4, sx * 4 + 4);
  }
  rows.push(row);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(cw, 0);
ihdr.writeUInt32BE(chh, 4);
ihdr[8] = 8;
ihdr[9] = 6;

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", ihdr),
  chunk("IDAT", zlib.deflateSync(Buffer.concat(rows))),
  chunk("IEND", Buffer.alloc(0)),
]);

fs.writeFileSync("src/assets/bidverx-hammer.png", png);
console.log("written", cw + "x" + chh, png.length, "bytes");