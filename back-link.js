/* =====================================================================
   ★  BACK LINK INJECTOR  ★
   ---------------------------------------------------------------------
   Adds a "← All stories" link right after the masthead on every news
   page. The editor does NOT have to write the link by hand. Include
   this script once in every news file, just before </body>:

       <script src="../back-link.js"></script>

   It looks for any element with class "masthead" and inserts the link
   immediately after it. If the page has no masthead, nothing happens.
   ===================================================================== */
(function () {
  var STYLE =
    'display:inline-block;' +
    'margin:20px 0 0 40px;' +
    'font-family:Georgia,"Times New Roman",serif;' +
    'font-size:12px;' +
    'letter-spacing:2px;' +
    'text-transform:uppercase;' +
    'color:#1e3a5f;' +
    'text-decoration:none;' +
    'border-bottom:2px solid #c9a961;' +
    'padding-bottom:2px;';

  function inject() {
    var mastheads = document.querySelectorAll('.masthead');
    for (var i = 0; i < mastheads.length; i++) {
      var m = mastheads[i];
      // avoid double-insertion if the editor also hard-coded a link
      var next = m.nextElementSibling;
      if (next && next.classList && next.classList.contains('back-link')) continue;

      var a = document.createElement('a');
      a.className = 'back-link';
      a.href = '../index.html';
      a.textContent = '← All stories';
      a.style.cssText = STYLE;
      m.parentNode.insertBefore(a, m.nextSibling);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
