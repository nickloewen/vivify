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

  function closeOutput (closeButton) {
    var scriptId = closeButton.id.substring(13)
    var scriptElement = document.getElementById('output-' + scriptId)
    console.log(scriptElement)
  }


  function runScript (runButton) {
    var scriptId = runButton.id.substring(11)
    var scriptElement = document.getElementById('runnable-script-' + scriptId)
    var script = scriptElement.innerHTML
    var r = eval(script.text())

    var output = document.createElement('div')
    var closeButton = document.createElement('button')

    output.className = 'output'
    output.id = 'output-' + scriptId

    closeButton.id = 'close-output-' + scriptId
    // my goodness this would be easier if it were OO
    closeButton.value = '&times;'
    closeButton.className = 'closeButton button-integrate'
    closeButton.addEventListener('click', function () { closeOutput(this) })

    insertAfter(output, scriptElement.parentNode)
    output.insertBefore(closeButton, output.firstChild)
    output.innerHTML = r
  }

  String.prototype.text = function () {
    var rex = /(<([^>]+)>)/ig
    return this.replace(rex, '')
  }

  window.addEventListener('load', addRunButtons)
}())

var Output = function (parentScript) {
  this.parentScript = parentScript
  this.element = null

  this.create = function () {
    console.log('create')
    this.element = document.createElement('div')
    var closeButton = document.createElement('button')
    this.element.appendChild(closeButton)

  }

  this.delete = function () {

  }
}

