
      document.addEventListener("DOMContentLoaded", function () {
        // Ustal datę startu działalności (RRRR-MM-DD)
        const startDate = new Date("2024-07-31");
        const today = new Date();
        // Wyliczamy różnicę w milisekundach, następnie przeliczamy na dni
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        document
          .getElementById("daysActive")
          .setAttribute("data-target", diffDays);

        // Znajdujemy wszystkie elementy licznika
        const counters = document.querySelectorAll(".counter");
        // Określamy, jak szybko ma się zwiększać licznik
        const speed = 35; // Im większa liczba, tym wolniejsze zliczanie

        function animateCounter(counter) {
          const target = +counter.getAttribute("data-target");
          let count = +counter.innerText;
          // Jednostkowe przyrosty (zaokrąglamy w górę, by uniknąć wolnego przyrastania przy dużej wartości target)
          const step = Math.ceil(target / speed);

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              counter.innerText = target;
              clearInterval(timer);
            } else {
              counter.innerText = count;
            }
          }, 15);
        }

        // Włączamy animację dopiero, gdy element pojawi się w zasięgu widoku
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCounter(entry.target);
                // Po wywołaniu animacji, przestajemy obserwować dany licznik
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 }
        );
        // threshold: 0.5 oznacza, że przynajmniej 50% wysokości elementu
        // musi być widoczne, by uznać go za "Intersection"

        // Obserwujemy każdy licznik
        counters.forEach((counter) => observer.observe(counter));
      });