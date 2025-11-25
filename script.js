// O texto de The Last of Us, formatado para HTML com ícones de natureza
const tlouText = `
    <p><i class="fas fa-leaf"></i> A arte gráfica de The Last of Us é reconhecida como uma das mais emocionantes e realistas dos videogames. Ela não busca exageros ou cores vibrantes: o foco é naturalidade, sensação de mundo real e expressão humana. Tudo é criado para transmitir história, emoção e peso.</p>

    <h3><i class="fas fa-sun"></i> 1. Realismo Profundo e Natural</h3>
    <p>A direção artística aposta em um visual extremamente realista.</p>
    <p>Os cenários, objetos e personagens parecem vivos, com:</p>
    <ul>
        <li>texturas detalhadas (pele, roupas, sucata),</li>
        <li>iluminação natural,</li>
        <li>sombras suaves,</li>
        <li>ambientes climáticos coerentes.</li>
    </ul>
    <p>Nada é estilizado demais; tudo parece palpável.</p>

    <h3><i class="fas fa-tree"></i> 2. O Mundo Pós-Apocalíptico "Tomado Pela Natureza"</h3>
    <p>Um dos elementos mais marcantes é a forma como a natureza “engole” as cidades.</p>
    <p>Você vê:</p>
    <ul>
        <li>prédios caindo,</li>
        <li>carros enferrujados,</li>
        <li>vegetação invadindo ruas,</li>
        <li>fungos se espalhando pelas paredes.</li>
    </ul>
    <p>Esse contraste entre ruínas humanas e vida selvagem cria um visual único e melancólico.</p>

    <h3><i class="fas fa-tint"></i> 3. Tons mais Frios e Atmosfera Melancólica</h3>
    <p>A paleta de cores é mais apagada, puxando para:</p>
    <ul>
        <li>verdes,</li>
        <li>marrons,</li>
        <li>cinzas,</li>
        <li>azuis frios,</li>
        <li>luz suave.</li>
    </ul>
    <p>O objetivo é transmitir solidão, perigo e um mundo quebrado, mas ainda bonito.</p>

    <h3><i class="fas fa-user"></i> 4. Personagens Extremamente Detalhados</h3>
    <p>Os personagens são o grande destaque visual.</p>
    <p>A arte gráfica trabalha fortemente em:</p>
    <ul>
        <li>expressões faciais realistas,</li>
        <li>rugas,</li>
        <li>olhares cansados,</li>
        <li>marcas de idade,</li>
        <li>sujeira acumulada,</li>
        <li>roupas desgastadas.</li>
    </ul>
    <p>Esses detalhes aumentam a carga emocional da história.</p>

    <h3><i class="fas fa-bug"></i> 5. Os Infectados: Horror Biológico</h3>
    <p>O design dos infectados é muito marcante.</p>
    <p>Eles são inspirados no fungo *cordyceps*, e isso aparece no visual:</p>
    <ul>
        <li>rostos deformados,</li>
        <li>ossos e fungos saindo da pele,</li>
        <li>texturas orgânicas,</li>
        <li>cores que variam entre vermelho, laranja e marrom.</li>
    </ul>
    <p>É um visual de horror natural, não exagerado — algo que parece possível, o que aumenta o medo.</p>

    <h3><i class="fas fa-camera"></i> 6. Cenários Cinematográficos</h3>
    <p>Cada cenário parece uma fotografia ou um quadro de filme:</p>
    <ul>
        <li>ruínas detalhadas,</li>
        <li>paisagens amplas,</li>
        <li>cenas silenciosas com luz suave,</li>
        <li>interiores escuros com feixes de luz.</li>
    </ul>
    <p>A direção de arte conversa diretamente com o tom da narrativa.</p>

    <h3><i class="fas fa-heart"></i> 7. Visual a Serviço da Emoção</h3>
    <p>A arte de The Last of Us não é feita para apenas “ser bonita”.</p>
    <p>Ela é feita para fazer você sentir:</p>
    <ul>
        <li>tristeza,</li>
        <li>tensão,</li>
        <li>esperança,</li>
        <li>solidão,</li>
        <li>conexão com os personagens.</li>
    </ul>
    <p>É por isso que o jogo é tão lembrado: o visual conta a história tanto quanto os diálogos.</p>
`;


document.addEventListener('DOMContentLoaded', () => {
    // Busca todos os cards e elementos do modal
    const cards = document.querySelectorAll('.jogo-card');
    const body = document.body;
    const modalOverlay = document.getElementById('tlou-detalhe');
    const modalTitle = document.getElementById('detalhe-titulo');
    const modalText = document.getElementById('detalhe-texto');
    const closeModalButton = modalOverlay.querySelector('.btn-fechar');

    cards.forEach(card => {
        const button = card.querySelector('.btn-saiba-mais');
        const jogoNome = card.getAttribute('data-jogo');

        button.addEventListener('click', (event) => {
            event.stopPropagation();
            
            // --- Lógica de Personalização e Conteúdo ---
            if (jogoNome === 'The Last of Us') {
                // 1. Mudar o Tema para TLOU
                body.classList.add('tlou-theme');
                
                // 2. Injetar o Conteúdo
                modalTitle.innerHTML = `<i class="fas fa-leaf"></i> ${jogoNome}: Arte Gráfica`;
                modalText.innerHTML = tlouText;
                
                // 3. Mostrar o Modal
                modalOverlay.style.display = 'flex';
                setTimeout(() => {
                    modalOverlay.style.opacity = '1';
                }, 10);

            } else {
                // Conteúdo Padrão para Outros Jogos
                alert(`💖 Detalhes do Jogo: ${jogoNome}\n\nObrigado pelo seu interesse! A análise completa e detalhada de design será publicada em breve!`);
            }
        });
    });

    // --- Lógica para Fechar o Modal e Restaurar o Tema ---
    const fecharModal = () => {
        // 1. Ocultar o Modal
        modalOverlay.style.opacity = '0';
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 500); 

        // 2. Restaurar o Tema Pastel
        body.classList.remove('tlou-theme');
    }

    closeModalButton.addEventListener('click', fecharModal);
    
    // Fechar ao clicar fora do conteúdo
    modalOverlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('jogo-detalhe-overlay')) {
            fecharModal();
        }
    });
});