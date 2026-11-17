$(document).ready(function () {
    updateNavbar();

    // Телефон паттерні (+7 немесе 8-бен басталатын формат)
    const phoneRegex = /^(\+7|8)[\s\-]?\(?7\d{2}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/;
    
    // Құпиясөз күрделілігі: кемінде 8 таңба, 1 бас әріп, 1 кіші әріп, 1 сан
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // --- 1 & 4 & 5. ТІРКЕЛУ (REGISTER) ФОРМАСЫ ---
    $('#register-form').on('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        const firstName = $('#first-name').val().trim();
        const lastName = $('#last-name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val() ? $('#phone').val().trim() : '';
        const password = $('#password').val();
        const confirmPassword = $('#confirm-password').val();

        if (firstName.length < 2) {
            showError('#first-name', 'Enter at least 2 characters.');
            isValid = false;
        } else {
            clearError('#first-name');
        }

        if (lastName.length < 2) {
            showError('#last-name', 'Enter at least 2 characters.');
            isValid = false;
        } else {
            clearError('#last-name');
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError('#email', 'Enter a valid email address.');
            isValid = false;
        } else {
            clearError('#email');
        }

        // Телефонды тексеру
        if (phone && !phoneRegex.test(phone)) {
            showError('#phone', 'Format: +7 700 123 45 67');
            isValid = false;
        } else if (phone) {
            clearError('#phone');
        }

        // Құпиясөз күрделілігін тексеру
        if (!passwordRegex.test(password)) {
            showError('#password', 'At least 8 chars, 1 uppercase, 1 lowercase & 1 number.');
            isValid = false;
        } else {
            clearError('#password');
        }

        if (password !== confirmPassword) {
            showError('#confirm-password', 'Passwords do not match.');
            isValid = false;
        } else {
            clearError('#confirm-password');
        }

        if (isValid) {
            const userData = {
                name: `${firstName} ${lastName}`,
                email: email,
                phone: phone || 'Not provided'
            };
            localStorage.setItem('buyRocksUser', JSON.stringify(userData));
            localStorage.setItem('buyRocksPassword', password);
            localStorage.setItem('isLoggedIn', 'true');

            $('#success-message').removeClass('d-none').text('Successfully registered! Redirecting...');
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 1000);
        }
    });

    // --- 2. КІРУ (LOGIN) ФОРМАСЫ ---
    $('#login-form').on('submit', function (e) {
        e.preventDefault();
        const email = $('#login-email').val().trim();
        const password = $('#login-password').val();

        const storedUser = JSON.parse(localStorage.getItem('buyRocksUser'));
        const storedPassword = localStorage.getItem('buyRocksPassword');

        if (!storedUser || !storedPassword) {
            $('#login-error').text('No registered user found. Please register first!').removeClass('d-none');
            return;
        }

        if (email === storedUser.email && password === storedPassword) {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'profile.html';
        } else {
            $('#login-error').text('Invalid email or password!').removeClass('d-none');
        }
    });

    // --- 4. ABOUT БЕТІНДЕГІ CONTACT ФОРМАСЫНА ТЕЛЕФОН ВАЛИДАЦИЯСЫ ---
    $('#contactForm').on('submit', function (e) {
        const phone = $('#contact-phone').val() ? $('#contact-phone').val().trim() : '';
        if (phone && !phoneRegex.test(phone)) {
            e.preventDefault();
            showError('#contact-phone', 'Please enter a valid phone number (+7...).');
        }
    });

    // --- 3. PROFILE БЕТІ ДЕРЕКТЕРІ ЖӘНЕ LOGOUT ---
    if (window.location.pathname.includes('profile.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const storedUser = JSON.parse(localStorage.getItem('buyRocksUser'));

        if (!isLoggedIn || !storedUser) {
            window.location.href = 'login.html';
        } else {
            $('#profile-name').text(storedUser.name);
            $('#profile-email').text(storedUser.email);
            $('#profile-phone').text(storedUser.phone);
        }
    }

    $(document).on('click', '#logout-btn', function (e) {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'false');
        window.location.href = 'login.html';
    });
});

// --- 6. НАВБАР КҮЙІН БАСҚАРУ ---
function updateNavbar() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const $navUl =$('header nav ul');

    // Бұрынғы Register / Login сілтемелерін тазалап, жаңасын қоямыз
    $navUl.find('.auth-link').remove();

    if (isLoggedIn) {
        $navUl.append(`
            <li class="auth-link"><a href="profile.html">Profile</a></li>
            <li class="auth-link"><a href="#" id="logout-btn">Logout</a></li>
        `);
    } else {
        $navUl.append(`
            <li class="auth-link"><a href="login.html">Login</a></li>
            <li class="auth-link"><a href="register.html">Register</a></li>
        `);
    }
}

function showError(selector, message) {
    $(selector).addClass('is-invalid').removeClass('is-valid');$(selector).nextAll('.invalid-feedback').first().text(message);
}

function clearError(selector) {
    $(selector).removeClass('is-invalid').addClass('is-valid');
}
