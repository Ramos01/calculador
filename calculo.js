
    const btnEnvios = document.getElementById('btnEnvios');
    const btnRecibos = document.getElementById('btnRecibos');
    const formEnvios = document.getElementById('formEnvios');
    const formRecibos = document.getElementById('formRecibos');
    const container = document.querySelector('.container');

    const logoYape = document.getElementById('logoYape');
    const logoRecibo = document.getElementById('logoRecibo');

    btnEnvios.addEventListener('click', () => {
        btnEnvios.classList.add('active');
        btnRecibos.classList.remove('active');

        formEnvios.classList.add('active');
        formRecibos.classList.remove('active');

        // Cambiar fondo
        container.classList.add('fondo-yape');
        container.classList.remove('fondo-recibo');

        // Mostrar logo Yape
        logoYape.classList.add('visible');
        logoRecibo.classList.remove('visible');
    });

    btnRecibos.addEventListener('click', () => {
        btnRecibos.classList.add('active');
        btnEnvios.classList.remove('active');

        formRecibos.classList.add('active');
        formEnvios.classList.remove('active');

        // Cambiar fondo
        container.classList.add('fondo-recibo');
        container.classList.remove('fondo-yape');

        // Mostrar logo Recibo
        logoRecibo.classList.add('visible');
        logoYape.classList.remove('visible');
    });

    function calcularEnvio() {
        const monto = parseFloat(document.getElementById('montoEnvio').value);
        if (isNaN(monto) || monto <= 0) {
            alert('Por favor, ingresa un monto válido para envío.');
            return;
        }

        const comision = (monto / 50) * 2.5;
        const total = monto + comision;

        document.getElementById('comisionEnvio').textContent = comision.toFixed(2);
        document.getElementById('totalEnvio').textContent = total.toFixed(2);
    }

    function calcularRecibo() {
        const monto = parseFloat(document.getElementById('montoRecibo').value);
        if (isNaN(monto) || monto <= 0) {
            alert('Por favor, ingresa un monto válido para recibo.');
            return;
        }

        let comision = monto * 0.05; // 5% de comisión
        comision = Math.round(comision * 10) / 10; // Redondear a 1 decimal

        const total = monto + comision;

        document.getElementById('comisionRecibo').textContent = comision.toFixed(2);
        document.getElementById('totalRecibo').textContent = total.toFixed(2);
    }

