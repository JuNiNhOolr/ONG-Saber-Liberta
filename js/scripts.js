// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');

    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const mainNav = document.querySelector('.main-nav');

    if (menuHamburguer && mainNav) {
        const closeMenu = () => {
            menuHamburguer.classList.remove('ativo');
            mainNav.classList.remove('ativo');
            document.body.classList.remove('no-scroll');
            menuHamburguer.setAttribute('aria-expanded', 'false');
        };

        const openMenu = () => {
            menuHamburguer.classList.add('ativo');
            mainNav.classList.add('ativo');
            document.body.classList.add('no-scroll');
            menuHamburguer.setAttribute('aria-expanded', 'true');
        };

        menuHamburguer.addEventListener('click', () => {
            const isMenuOpen = mainNav.classList.contains('ativo');
            if (isMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    const toggleContrastButton = document.getElementById('toggle-contrast');
    if (toggleContrastButton) {
        toggleContrastButton.addEventListener('click', () => {
            document.body.classList.toggle('alto-contraste');
        });
    }

    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.hostname === window.location.hostname && !link.href.includes('#') && link.pathname !== '/' && !link.pathname.endsWith('index.html')) {
            e.preventDefault();
            const url = link.getAttribute('href');
            history.pushState({}, '', url);
            loadPage(url);
        }
    });

    window.addEventListener('popstate', () => {
        loadPage(window.location.pathname);
    });

    const loadPage = async (url) => {
        window.scrollTo(0, 0);
        try {
            appContainer.style.opacity = 0;
            const response = await fetch(url);
            if (!response.ok) throw new Error('Página não encontrada.');
            const content = await response.text();
            
            setTimeout(() => {
                appContainer.innerHTML = content;
                appContainer.style.opacity = 1;
                initializePageSpecificScripts(); 
                appContainer.focus();
            }, 200);
        } catch (error) {
            console.error('Erro ao carregar página:', error);
            appContainer.innerHTML = '<h1>Erro 404: Página não encontrada</h1><p>Não foi possível carregar o conteúdo solicitado.</p>';
            appContainer.style.opacity = 1;
            appContainer.focus();
        }
    };

    function initializePageSpecificScripts() {
        console.log("Inicializando scripts específicos da página...");

        const addInputMask = (selector, maskFunction) => {
            const input = document.querySelector(selector);
            if (input) {
                input.addEventListener('input', (e) => {
                    e.target.value = maskFunction(e.target.value);
                });
            }
        };

        const cpfMask = (value) => value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2').slice(0, 14);
        const phoneMask = (value) => value.replace(/\D/g, '').replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 15);
        const cepMask = (value) => value.replace(/\D/g, '').replace(/^(\d{5})(\d)/, '$1-$2').slice(0, 9);

        addInputMask('#cpf', cpfMask);
        addInputMask('#telefone', phoneMask);
        addInputMask('#cep', cepMask);

        const valorRadios = document.querySelectorAll('input[name="valor_doacao"]');
        const customValorInput = document.querySelector('#valor_customizado');

        if (valorRadios.length > 0 && customValorInput) {
            customValorInput.disabled = true;
            valorRadios.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.value === 'outro') {
                        customValorInput.disabled = false;
                        customValorInput.focus();
                    } else {
                        customValorInput.disabled = true;
                        customValorInput.value = '';
                    }
                });
            });
        }

        function simulateFormSubmission(formSelector, successMessage) {
            const form = document.querySelector(formSelector);
            if (form) {
                form.addEventListener('submit', function(event) {
                    event.preventDefault();
                    alert(successMessage);
                    window.location.href = '/index.html';
                });
            }
        }

        simulateFormSubmission('form[action="#"]', 'Cadastro realizado com sucesso! Obrigado por apoiar nossa causa.');
        simulateFormSubmission('form[action="POST"]', 'Candidatura enviada com sucesso! Entraremos em contato em breve.');
    }

    initializePageSpecificScripts();
});
