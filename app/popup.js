// Copyright (c) 2014 Nicola Mustone. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var ipify = {
  ipifyURL: 'http://api.ipify.org?format=json',

  /**
   * Sends an XHR GET request.
   *
   * @public
   */
  requestIP: function () {
    var req = new XMLHttpRequest();
    req.open("GET", this.ipifyURL, true);
    req.onload = this.writeIP.bind(this);
    req.send(null);
  },

  /**
   * Handle the 'onload' event.
   *
   * @param {ProgressEvent} e The XHR ProgressEvent.
   * @private
   */
  writeIP: function (e) {
    var json = e.target.responseText;
    json  = JSON.parse(json);
    var div = document.createElement('div');
    div.innerHTML = "<p>Your public IP address is</p><p>" + json.ip + "</p>";
    document.body.appendChild(div);
  }
};


document.addEventListener('DOMContentLoaded', function () {
    ipify.requestIP();
});
