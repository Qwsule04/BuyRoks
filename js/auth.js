// auth.js

$(document).ready(function () {
    updateNavbar();

    // 1. Телефон нөмірін тексеру паттерні (+7 7XX XXX XX XX немесе 87XXXXXXXXX)
    const phoneRegex = /^(\+7|8)[\s\-]?\(?7\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    
    // 2. Құпиясөз күрделілігі (кемінде 8 таңба, 1 бас әріп, 1 кіші әріп, 1 сан)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // --- ТІРКЕЛУ (REGISTER) ФОРМАСЫ ---
    $('#registerForm').on('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        const name = $('#regName').val().trim();
        const email = $('#regEmail').val().trim();
        const phone = $('#regPhone').val().trim();
        const password = $('#regPassword').val();

        // Аты
        if (name.length < 2) {
            showError('#regName', 'Атыңызды толық енгізіңіз');
            isValid = false;
        } else {
            clearError('#regName');
        }

        // Email
        if (!email.includes('@') || !email.includes('.')) {
            showError('#regEmail', 'Дұрыс email енгізіңіз');
            isValid = false;
        } else {
            clearError('#regEmail');
        }

        // Телефон валидациясы
        if (!phoneRegex.test(phone)) {
            showError('#regPhone', 'Формат: +7 7XX XXX XX XX немесе 87001234567');
            isValid = false;
        } else {
            clearError('#regPhone');
        }

        // Құпиясөз күрделілігі
        if (!passwordRegex.test(password)) {
            showError('#regPassword', 'Кемінде 8 таңба, 1 бас әріп, 1 кіші әріп және 1 сан болуы керек');
            isValid = false;
        } else {
            clearError('#regPassword');
        }

        if (isValid) {
            // Деректерді localStorage-қа сақтау
            const userData = { name, email, phone, password };
            localStorage.setItem('buyRocksUser', JSON.stringify(userData));
            localStorage.setItem('isLoggedIn', 'true'); // Тіркелген соң бірден кіргізу

            alert('Сәтті тіркелдіңіз!');
            window.location.href = 'profile.html';
        }
    });

    // --- КІРУ (LOGIN) ФОРМАСЫ ---
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        const email = $('#loginEmail').val().trim();
        const password = $('#loginPassword').val();
        const storedUser = JSON.parse(localStorage.getItem('buyRocksUser'));

        if (!storedUser) {
            alert('Тіркелген пайдаланушы табылмады. Алдымен тіркеліңіз!');
            return;
        }

        if (email === storedUser.email && password === storedUser.password) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'profile.html';
        } else {
            $('#loginError').text('Email немесе құпиясөз қате!').removeClass('d-none');
        }
    });

    // --- ABOUT БЕТІНДЕГІ CONTACT ФОРМАСЫ ---
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        const phone = $('#contactPhone').val().trim();

        if (!phoneRegex.test(phone)) {
            showError('#contactPhone', 'Дұрыс телефон нөмірін енгізіңіз (+7 7XX XXX XX XX)');
        } else {
            clearError('#contactPhone');
            alert('Хабарламаңыз сәтті жіберілді!');
            this.reset();
        }
    });

    // --- LOGOUT БАТЫРМАСЫ ---
    $(document).on('click', '#logoutBtn, #navLogoutBtn', function (e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'false');
        window.location.href = 'login.html';
    });

    // --- PROFILE БЕТІНЕ ДЕРЕКТЕРДІ ШЫҒАРУ ---
    if (window.location.pathname.includes('profile.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const storedUser = JSON.parse(localStorage.getItem('buyRocksUser'));

        if (!isLoggedIn || !storedUser) {
            window.location.href = 'login.html';
        } else {
            $('#profileName').text(storedUser.name);
            $('#profileEmail').text(storedUser.email);
            $('#profilePhone').text(storedUser.phone);
        }
    }
});

// Барлық беттердегі Навбарды жаңарту
function updateNavbar() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const authNavContainer = $('#authNavLinks'); // Навбардағы арнайы блок

    if (isLoggedIn) {
        authNavContainer.html(`
            <li class="nav-item">
                <a class="nav-link fw-bold text-primary" href="profile.html">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-danger" href="#" id="navLogoutBtn">Logout</a>
            </li>
        `);
    } else {
        authNavContainer.html(`
            <li class="nav-item">
                <a class="nav-link" href="login.html">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="register.html">Register</a>
            </li>
        `);
    }
}

// Қателіктерді көрсету көмекші функциялары (Bootstrap validation стильдерімен)
function showError(selector, message) {
    $(selector).addClass('is-invalid');
    $(selector).siblings('.invalid-feedback').text(message);
}

function clearError(selector) {
    $(selector).removeClass('is-invalid').addClass('is-valid');
}
