;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuchexuanzhong" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M366.268406 815.404148c-34.982746 0-63.318094 28.331255-63.318094 63.314001 0 34.982746 28.335349 63.320141 63.318094 63.320141 34.983769 0 63.320141-28.336372 63.320141-63.320141C429.587524 843.73438 401.251152 815.404148 366.268406 815.404148z"  ></path>' +
    '' +
    '<path d="M950.676529 175.573761c-16.340153-18.453281-38.791491-28.588105-63.222927-28.588105L333.778434 146.985656l-88.400353 0.020466-2.683109-15.484669c-5.65786-46.532803-45.366234-82.987063-92.025926-82.987063l-40.74089 0c-17.654079 0-31.979342 14.326287-31.979342 31.979342s14.325263 31.979342 31.979342 31.979342l40.74089 0c13.879102 0 28.077475 12.725836 29.996175 28.29851l30.858822 178.443112 54.236252 381.823172c5.626137 46.530756 46.14497 77.960583 92.225471 77.960583l520.68787 0c17.682731 0 30.718629-11.784394 30.717605-29.465079 0-17.686824-13.039991-29.466102-30.720675-29.466102L356.730169 720.087269c-13.554714 0-26.989701-12.505825-28.78151-27.342742l-4.366448-30.747281 74.376964-5.871731c0.77055 0 1.569752-0.028653 2.369977-0.094144l431.449429-31.882128c46.084595 0 86.570681-36.455283 92.006484-81.289398l50.393737-288.221354C977.924103 223.842091 969.349821 196.648752 950.676529 175.573761z"  ></path>' +
    '' +
    '<path d="M813.969984 815.404148c-34.983769 0-63.320141 28.331255-63.320141 63.314001 0 34.982746 28.336372 63.320141 63.320141 63.320141 34.984792 0 63.319118-28.336372 63.319118-63.320141C877.289102 843.73438 848.953753 815.404148 813.969984 815.404148z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)