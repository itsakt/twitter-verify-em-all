setInterval(init, 1000)

function init() {
  var verify = true
  var badgeHtml = '<span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span>'
  var badgeList = document.getElementsByClassName('UserBadges')
  console.log('found ' + badgeList.length + ' badges.')
  for (var i = 0; i < badgeList.length; i++) {
    var badgeWrapper = badgeList[i]
    var badge = badgeWrapper.firstElementChild
    if (!badge && verify) {
      badgeWrapper.insertAdjacentHTML('afterbegin', badgeHtml)
    } else if (!!badge && !verify) {
      badge.remove()
    }
  }
}
