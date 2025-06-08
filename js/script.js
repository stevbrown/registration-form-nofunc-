document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

function closePage() {
    alert('The page will be reloaded in 3 seconds.');
    setTimeout(() => {
        location.reload();
    }, 3000)
}

function sendCode() {
    const element = document.getElementById('Step1-1');
    const element2 = document.getElementById('Step1-2');
    const progress = document.getElementById('S1-1');
    const progress2 = document.getElementById('S1-2');

    element.classList.remove('active');
    element.classList.add('disactive');
    progress.classList.remove('active');
    progress.style.display = 'flex';
    setTimeout(() => {
        progress.style.display = 'none';
        progress2.style.display = 'flex';
        setTimeout(() => {
            progress2.classList.add('active');
        }, 25)
    }, 450);
    setTimeout(() => {
        element.style.display = 'none';
        
        element2.style.display = 'flex';
        setTimeout(() => {
            element2.classList.add('active');
        }, 25)
    }, 1355)
};

function resendCode() {
    const codeInput = document.getElementById('codeInput');
    codeInput.value = '';
}

function confirmCode() {
    const element = document.getElementById('Step1-2');
    const element2 = document.getElementById('Step1-3');
    const progress = document.getElementById('S1-2');
    const progress2 = document.getElementById('S1-3');

    element.classList.remove('active');
    element.classList.add('disactive');
    progress.classList.remove('active');
    progress.style.display = 'flex';
    setTimeout(() => {
        progress.style.display = 'none';
        progress2.style.display = 'flex';
        setTimeout(() => {
            progress2.classList.add('active');
        }, 25)
    }, 450);
    setTimeout(() => {
        element.style.display = 'none';
        
        element2.style.display = 'flex';
        setTimeout(() => {
            element2.classList.add('active');
        }, 25)
    }, 1355)
}

function showPassword() {
    const element = document.getElementById('passwordInput');
    const img = document.getElementById('Showpass');
    const img2 = document.getElementById('Closepass');

    if (element.getAttribute('type') === 'password') {
        element.type = 'text';
        img.style.display = 'none';
        img2.style.display = 'flex';
    } else if (element.getAttribute('type') === 'text') {
        element.type = 'password';
        img2.style.display = 'none';
        img.style.display = 'flex';
    }
}

function checkPassword() {
    const element = document.getElementById('passwordInput');
    const caption = document.getElementById('captionPassword');
    const status = document.getElementById('statusPass');

    const img1 = document.getElementById('ImgBad');
    const img2 = document.getElementById('ImgWarning');
    const img3 = document.getElementById('ImgPassed');

    if (element.value.length != 0 && element.value.length > 0) {
        caption.style.display = 'flex';

        img2.style.display = 'none';
        img3.style.display = 'none';

        img1.style.display = 'flex';
        status.innerText = 'Bad password';
        status.style.color = '#E94747';
    } else {
        caption.style.display = 'none';
    }

    if (element.value.length >= 6) {
        img1.style.display = 'none';
        img3.style.display = 'none';

        img2.style.display = 'flex';
        status.innerText = 'Weak password';
        status.style.color = '#FFC506';
    }

    if (element.value.length >= 12) {
        img1.style.display = 'none';
        img2.style.display = 'none';

        img3.style.display = 'flex';
        status.innerText = 'Good password';
        status.style.color = '#34C759';
    }
}

function closeNotify() {
    const element = document.getElementById('Notify');
    element.classList.add('closed');
};

function phoneCorrector() {
    var input = document.getElementById('phoneInput');

    input.addEventListener('input', function(e) {
        let value = this.value;

        this.value = value.replace(/[^\d\-]/g, '');
        
        let start = this.selectionStart;
        let end = this.selectionEnd;
        
        this.setSelectionRange(start, end);
    });
}

function formatPhoneNumber() {
    var phoneInput = document.getElementById('phoneInput');
    var phoneValue = phoneInput.value.replace(/\D/g, '');

    var formattedPhone = 
        "(" + phoneValue.substring(0, 3) + ") " +
        phoneValue.substring(3, 6) + "-" +
        phoneValue.substring(6, 8) + "-" +
        phoneValue.substring(8);

    phoneInput.value = formattedPhone;
}