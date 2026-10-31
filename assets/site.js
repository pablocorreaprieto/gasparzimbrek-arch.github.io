// Shared script for all three language pages.
(function () {
  // Printing (Print / PDF button or Ctrl+P): unfold every "Details" block, fold them back afterwards.
  var opened = [];
  window.addEventListener('beforeprint', function () {
    opened = [];
    document.querySelectorAll('details:not([open])').forEach(function (d) { d.open = true; opened.push(d); });
  });
  window.addEventListener('afterprint', function () {
    opened.forEach(function (d) { d.open = false; });
    opened = [];
  });

  // Contact form: send without leaving the page. Without JavaScript the form still posts normally.
  var form = document.querySelector('form.contact');
  if (!form || form.closest('[hidden]')) return;
  var status = form.querySelector('.form-status');
  var button = form.querySelector('button');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    button.disabled = true;
    status.textContent = '';
    fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        form.reset();
        status.textContent = form.dataset.ok;
      })
      .catch(function () { status.textContent = form.dataset.err; })
      .finally(function () { button.disabled = false; });
  });
})();
