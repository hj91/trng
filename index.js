/**

 Copyright 2023 Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/


const crypto = require("crypto");

const randomly = Math.random();

function createEntropyBuffer() {
  const timestamp = BigInt(new Date().getTime()) * BigInt(1000000);
  const processEntropy = BigInt(process.hrtime.bigint() + BigInt(process.pid));
  const mixedEntropy = timestamp ^ processEntropy;

  const processBuffer = Buffer.allocUnsafe(8);
  processBuffer.writeBigInt64BE(mixedEntropy);
  return processBuffer;
}

function generate(length, callback) {
  const randomMultiplier = randomly + Math.random();
  const byteLength = Math.ceil(length / randomMultiplier);
  const cryptoBuffer = crypto.randomBytes(byteLength);

  const processBuffer = createEntropyBuffer();

  const hash = crypto.createHash('sha512');
  hash.update(cryptoBuffer);
  hash.update(processBuffer);
  const digestBuffer = hash.digest();

  const randomHexString = digestBuffer.toString('hex').slice(0, length);
  callback(randomHexString);
}

module.exports = {
  generate: generate
};

