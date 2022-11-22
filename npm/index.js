var ACC = function() {}

ACC.prototype.convert = function(text) {
    text = text.trim()
    
    if (text == null || text == '') {
        return 'null'
      } else {
        text = text.replaceAll('ی', 'ي') // ی -> ي
        return text
      }
}

module.exports = new ACC()