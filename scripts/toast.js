document.addEventListener("DOMContentLoaded", function () {
    // Ustawienie opóźnienia przed wyświetleniem toast'a (5000 ms = 5 sekund)
    setTimeout(function () {
      var toastEl = document.getElementById("visitToast");
      var toast = new bootstrap.Toast(toastEl);
      toast.show();
    }, 1000);
  });