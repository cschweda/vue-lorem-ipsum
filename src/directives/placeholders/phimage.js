module.exports = {


inserted: function (el,binding) {
  this.config  = {
    text_size: 10,
    fill_color: '#BBBBBB',
    text_color: '#EEEEEE',
    dimensions: binding.arg,
    el
  }
    if(!this.config.dimensions) return
    var dataUrl,
        size = { w: this.config.dimensions.match( /^(\d+)x(\d+)$/ )[1], h: this.config.dimensions.match( /^(\d+)x(\d+)$/ )[2] }
        this.config.el.setAttribute("title", this.config.dimensions)
        this.config.el.setAttribute("alt", this.config.dimensions)

        dataUrl = drawImage(this.config.dimensions, size)

        if (this.config.el.tagName === "IMG") {
          this.config.el.setAttribute('src', dataUrl)
        } else {
          this.config.el.style.backgroundImage = 'url('+dataUrl+')';
        }

        function getTextSize (size) {
          var dimension_arr = [size.w, size.h].sort(),
          maxFactor     = Math.round(dimension_arr[1] / 16)
          return Math.max(this.config.text_size, maxFactor)
        }

        function drawImage (val, size) {
          var canvas    = document.createElement( 'canvas' ),
          context       = canvas.getContext( '2d' ),
          text_size     = getTextSize(size),
          config        = this.config,
          text          = val

          canvas.width = size.w
          canvas.height = size.h
          context.fillStyle = config.fill_color
          context.fillRect( 0, 0, size.w, size.h )
          context.fillStyle = config.text_color
          context.textAlign = 'center'
          context.textBaseline = 'middle'
          context.font = 'bold '+ text_size + 'pt sans-serif'

          if (context.measureText(text).width / size.w > 1) {
            text_size = config.text_size / (context.measureText(text).width / size.w)
            context.font = 'bold ' + text_size + 'pt sans-serif'
          }

          context.fillText( text, size.w / 2, size.h / 2 )
          return canvas.toDataURL("image/png")

      }

    }
}
