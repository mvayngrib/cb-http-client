var utils = require('./utils')

function Transactions(url) {
  this.url = url
}

Transactions.prototype.get = function(txIds, callback) {
  utils.jsendBatchedRequest(this.url + '/get', {
    txIds: txIds
  }, Array.isArray(txIds), callback)
}

Transactions.prototype.latest = function(callback) {
  utils.jsendBatchedRequest(this.url + '/latest', {}, true, callback)
}

Transactions.prototype.propagate = function(txHexs, callback) {
  utils.jsendBatchedRequest(this.url + '/propagate', {
    txHexs: txHexs
  }, Array.isArray(txHexs), callback)
}

Transactions.prototype.summary = function(txIds, callback) {
  utils.jsendBatchedRequest(this.url + '/summary', {
    txIds: txIds
  }, Array.isArray(txIds), callback)
}

module.exports = Transactions
