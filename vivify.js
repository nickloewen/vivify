// vivify.js
// Include this script on your page and fenced code blocks tagged `javascript; runnable`  ...

(function () {
  function insertAfter (newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
  }

  function addRunButtons () {
    var preTags = document.getElementsByTagName('code')
    for (var i = 0; i < preTags.length; i++) {
      var tag = preTags[i]
      console.log(tag.text)
      if (tag.className.includes('javascript') &&
        (tag.className.includes('runnable') || tag.className.includes('hidden'))) {
        tag.id = 'runnable-script-' + i
        tag.className += ' runnable'
        var runButton = document.createElement('button')
        runButton.id = 'run-button-' + i
        runButton.className = 'runButton button-integrate'
        if (tag.className.includes('hidden')) {
          runButton.className = 'runButton button-solo'
        }
        runButton.innerHTML = '&#9654;'

        tag.parentElement.parentElement.insertBefore(runButton, tag.parentNode)

        runButton.addEventListener('click', function () { runScript(this) })
      }
    }
  }

  function runScript (runButton) {
    var scriptId = runButton.id.substring(11)
    var scriptElement = document.getElementById('runnable-script-' + scriptId)
    var script = scriptElement.innerHTML
    var r = eval(script.text())

    var output = document.getElementById('output-' + scriptId)
    if (output === null) {
      output = document.createElement('div')
      output.className = 'output'
      output.id = 'output-' + scriptId
      insertAfter(output, scriptElement.parentNode)
    }
    output.innerHTML = r
  }

  String.prototype.text = function () {
    var rex = /(<([^>]+)>)/ig
    return this.replace(rex, '')
  }

  window.addEventListener('load', addRunButtons)
}())
