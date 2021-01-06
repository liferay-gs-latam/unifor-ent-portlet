;(function (YUI, AUI, Liferay) {
  'use strict'

  class Portlet {
    constructor (selector) {
      this._selector = selector
      this._portlet = AUI().one(selector)
    }

    getPortletId () {
      return Liferay.Util.getPortletId(this._portlet.get('id'))
    }

    getFieldId (id) {
      return `#_${this.getPortletId()}_${id}`
    }

    getFieldName (name) {
      return `_${this.getPortletId()}_${name}`
    }

    refresh (data) {
      Liferay.Portlet.refresh(this._selector, data)
    }

    onRefreshed (cb) {
      Liferay.on(`${this.getPortletId()}:portletRefreshed`, cb)
    }

    createResourceUrl (resourceId) {
      let url = Liferay.PortletURL.createResourceURL()

      url.setPortletId(this.getPortletId())
      url.setResourceId(resourceId)

      return url.toString()
    }
  }

  YUI.add('ent-portlet', function (Y) {
    Y.Portlet = Portlet
  }, '1.0.1', {
    requires: ['liferay-portlet-url']
  })
})(window.YUI, window.AUI, window.Liferay)
