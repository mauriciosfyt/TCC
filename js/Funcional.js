const horarios = {
    segunda: [
      { inicio: "06:15h", fim: "07:15h", status: "disponível" },
      { inicio: "07:15h", fim: "08:15h", status: "indisponível" },
      { inicio: "10:00h", fim: "11:00h", status: "disponível" }
    ],
    terca: [
      { inicio: "08:00h", fim: "09:00h", status: "disponível" },
      { inicio: "09:00h", fim: "10:00h", status: "indisponível" }
    ],
    quarta: [
      { inicio: "06:15h", fim: "07:15h", status: "disponível" },
      { inicio: "07:15h", fim: "08:15h", status: "indisponível" }
    ],
    quinta: [
      { inicio: "06:15h", fim: "07:15h", status: "disponível" },
      { inicio: "07:15h", fim: "08:15h", status: "indisponível" }
    ],
    sexta: [
      { inicio: "06:15h", fim: "07:15h", status: "disponível" },
      { inicio: "07:15h", fim: "08:15h", status: "indisponível" }
    ]
  };

  document.querySelectorAll('[data-day]').forEach(button => {
    button.addEventListener('click', () => {
      const dia = button.getAttribute('data-day');
      const horariosDoDia = horarios[dia];

      const container = document.getElementById('schedule');
      container.innerHTML = '';

      if (!horariosDoDia || horariosDoDia.length === 0) {
        container.innerHTML = '<p class="text-white text-center">Nenhum horário disponível.</p>';
        return;
      }

      const titulo = document.createElement('h3');
      titulo.textContent = button.textContent.toUpperCase();
      container.appendChild(titulo);

      horariosDoDia.forEach(horario => {
        const card = document.createElement('div');
        card.className = 'horario-card';

        const topo = document.createElement('div');
        topo.className = 'horario-topo';
        topo.innerHTML = `<span>${horario.inicio}</span> <span>ás</span> <span>${horario.fim}</span>`;

        const rodape = document.createElement('div');
        rodape.className = 'horario-rodape';

        const statusSpan = document.createElement('span');
        statusSpan.className = `status ${horario.status === 'disponível' ? 'disponivel' : 'indisponivel'}`;
        statusSpan.textContent = horario.status.toUpperCase();

        rodape.appendChild(statusSpan);

        if (horario.status === 'disponível') {
          const agendar = document.createElement('span');
          agendar.className = 'agendar';
          agendar.textContent = 'AGENDAR';
          rodape.appendChild(agendar);
        }

        card.appendChild(topo);
        card.appendChild(rodape);
        container.appendChild(card);
      });
    });
  });