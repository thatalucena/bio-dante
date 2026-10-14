# DESIGN SYSTEM COMPLETO — PÁGINA PESSOAL / HUB DE PRODUTOS
## Gustavo Macedo · Forno Lab · Advisor · Founders

> Documento extraído a partir das telas fornecidas.
>
> **Nota metodológica:** medidas, fontes e tokens abaixo foram reconstruídos visualmente a partir dos screenshots. Quando não há como confirmar o valor exato apenas pela imagem, o documento registra uma **estimativa de implementação** coerente com o layout observado. O objetivo é permitir reconstrução fiel da interface.

---

# 1. VISÃO GERAL DO SISTEMA

A interface funciona como uma **landing page mobile-first / link-in-bio premium**, organizada como um hub pessoal e comercial.

Ela combina quatro objetivos:

1. apresentar a autoridade pessoal de Gustavo Macedo;
2. direcionar o visitante para o produto/serviço correto;
3. oferecer produtos com identidades próprias sem perder unidade estrutural;
4. criar caminhos rápidos de conversão por WhatsApp, live e comunidade.

O design trabalha com uma base visual extremamente simples:

- fundo claro e quente;
- preto quase absoluto;
- laranja institucional como cor de energia e CTA;
- verde para o Advisor;
- azul/creme para Founders;
- tipografia grotesca de forte peso;
- cartões grandes;
- raios arredondados;
- pouquíssima ornamentação;
- forte contraste;
- textos curtos;
- hierarquia agressiva;
- layout centrado em conversão.

O resultado visual se aproxima de uma combinação de:

- editorial contemporâneo;
- SaaS minimalista;
- landing page de creator/founder;
- cards modulares;
- mobile app;
- identidade de marca pessoal.

---

# 2. ARQUITETURA DA PÁGINA

A página principal é estruturada verticalmente em blocos.

## 2.1 Ordem observada

1. avatar / foto;
2. nome;
3. cargo;
4. promessa / instrução do quiz;
5. links sociais;
6. CTA principal do quiz;
7. seção “Como posso te ajudar hoje”;
8. cards dos produtos/serviços;
9. botão “Ver detalhes”;
10. card de live semanal;
11. card de comunidade no WhatsApp;
12. cards diretos de WhatsApp;
13. assinatura / footer.

A experiência funciona como uma sequência de decisão:

**quem é → o que oferece → qual produto faz sentido → ação imediata**

---

# 3. CONTAINER PRINCIPAL

## 3.1 Largura

O layout foi desenhado em viewport mobile.

Pelos screenshots:

- largura aproximada do conteúdo: 600–680 px em mockup de alta resolução;
- comportamento real esperado: `width: 100%`;
- `max-width` recomendado: entre `430px` e `480px`.

Exemplo:

```css
.page {
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}
```

## 3.2 Padding horizontal

Estimativa visual:

- principal: `24px`;
- áreas mais densas: `20px`;
- modais: `24px` a `28px`.

Token recomendado:

```css
--page-padding: 24px;
```

## 3.3 Fundo

Fundo off-white quente, não branco puro.

Estimativa:

```css
--color-bg: #F6F3EE;
--color-surface: #FFFFFF;
```

O fundo transmite uma sensação mais editorial e menos “app tech”.

---

# 4. PALETA DE CORES

# 4.1 Base neutra

## Preto principal

Usado em:

- cards;
- textos fortes;
- fundo de módulos;
- botões;
- headlines.

Estimativa:

```css
--black-900: #0A0A0A;
--black-800: #121212;
```

## Branco

```css
--white: #FFFFFF;
```

## Off-white / creme

```css
--cream-50: #F8F5EF;
--cream-100: #F3F0EA;
```

## Cinza de texto

Usado em textos secundários.

```css
--gray-500: #646464;
--gray-600: #515151;
--gray-300: #B8B8B8;
```

---

# 4.2 Cor institucional Forno Lab

Laranja intenso.

Estimativa:

```css
--forno-orange: #FF4B00;
--forno-orange-light: #FF6B2A;
```

Aplicações:

- ícone de fogo;
- bordas;
- CTA;
- highlights;
- rótulo “Ao vivo”;
- pequenos detalhes;
- gradiente inferior em card.

---

# 4.3 Verde Advisor

Verde médio/escuro, com estética consultiva e mais “business”.

Estimativa:

```css
--advisor-green: #238650;
--advisor-green-dark: #145D39;
--advisor-green-soft: #D7EBDD;
```

Usos:

- hero do Advisor;
- grid;
- badges;
- numeração;
- CTA;
- ícones.

---

# 4.4 Azul Founders

Azul elétrico / royal.

Estimativa:

```css
--founders-blue: #2C3ED3;
--founders-blue-dark: #2130B0;
--founders-cream: #F5F1E8;
```

Usos:

- headline;
- CTA;
- bullets;
- bordas;
- elementos editoriais.

---

# 4.5 Verde WhatsApp

O WhatsApp recebe um verde mais suave e menos saturado que o verde padrão oficial.

Estimativa:

```css
--whatsapp-green-dark: #124B2B;
--whatsapp-green-mid: #2F8B59;
--whatsapp-green-soft: #CBE7D2;
```

---

# 5. TIPOGRAFIA

## 5.1 Família primária

A maior parte da interface utiliza uma grotesca/sans-serif contemporânea.

A aparência é próxima de:

- Inter;
- Helvetica Neue;
- SF Pro Display;
- Neue Haas Grotesk;
- Arial / Arial Nova.

Para reconstrução, a recomendação mais segura é:

```css
font-family: "Inter", sans-serif;
```

### Características

- formas compactas;
- terminais neutros;
- x-height alta;
- leitura excelente em mobile;
- pesos fortes em headings;
- uso intenso de bold e extra-bold.

---

# 5.2 Pesos tipográficos

Sistema aproximado:

```css
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

A interface depende mais de **peso** do que de variação de família.

---

# 5.3 Escala tipográfica

## Display / Hero

Exemplo:
“Gustavo Macedo”

```css
font-size: 34px–42px;
font-weight: 800–900;
line-height: 1.0–1.1;
letter-spacing: -0.03em;
```

---

## Headline grande de card

Exemplo:
“Marketing sem resultado é fofoca.”

```css
font-size: 36px–44px;
font-weight: 800–900;
line-height: 0.98–1.05;
letter-spacing: -0.04em;
```

---

## H2 / seção

Exemplo:
“COMO POSSO TE AJUDAR HOJE:”

```css
font-size: 22px–26px;
font-weight: 800;
line-height: 1.1;
letter-spacing: 0.02em;
text-transform: uppercase;
```

---

## H3

Exemplo:
“PARA QUEM É”

```css
font-size: 17px–20px;
font-weight: 700;
line-height: 1.2;
letter-spacing: 0.08em;
text-transform: uppercase;
```

---

## Body principal

```css
font-size: 20px–24px;
font-weight: 400;
line-height: 1.45–1.55;
```

---

## Body secundário

```css
font-size: 16px–19px;
font-weight: 400–500;
line-height: 1.35–1.5;
```

---

## Labels / badges

```css
font-size: 12px–15px;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
```

---

# 5.4 Tipografia especial — Founders

O card Founders utiliza uma segunda linguagem tipográfica.

A frase:

**“Quem aparece, vende.”**

é feita com uma serifada itálica de caráter editorial.

Referências prováveis:

- Cormorant Garamond Italic;
- EB Garamond Italic;
- Editorial New Italic;
- Canela Italic;
- Instrument Serif Italic.

Recomendação aproximada:

```css
font-family: "Cormorant Garamond", serif;
font-style: italic;
font-weight: 500–600;
```

Esse contraste cria uma personalidade própria para Founders.

---

# 6. HIERARQUIA TIPOGRÁFICA

A regra estrutural é:

**headline muito forte → suporte curto → corpo → CTA**

Exemplo do modal da agência:

1. eyebrow laranja;
2. headline branca grande;
3. badge Instagram;
4. descrição;
5. título de seção;
6. texto;
7. lista;
8. CTA fixo;
9. link alternativo.

O design raramente coloca mais de três níveis visuais concorrendo.

---

# 7. GRID E SISTEMA DE ESPAÇAMENTO

A interface parece seguir um sistema baseado em múltiplos de 4.

Tokens recomendados:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

---

# 7.1 Ritmo vertical

Padrão recorrente:

- título → subtítulo: 8–12px;
- bloco → bloco: 24–32px;
- seção → seção: 40–56px;
- cards empilhados: 16–24px.

O projeto utiliza bastante espaço branco para manter legibilidade.

---

# 8. BORDAS E RAIO

O sistema é altamente arredondado.

## Cards grandes

```css
border-radius: 28px–36px;
```

## Botões pill

```css
border-radius: 999px;
```

## Cards menores

```css
border-radius: 22px–28px;
```

## Modal / bottom sheet

```css
border-radius: 42px 42px 0 0;
```

ou, no mockup:

```css
border-radius: 42px;
```

---

# 9. SOMBRAS

Sombras são suaves e difusas.

Estética:

- grande blur;
- baixa opacidade;
- pouco deslocamento.

Exemplo:

```css
box-shadow:
  0 12px 30px rgba(0,0,0,.08),
  0 2px 8px rgba(0,0,0,.04);
```

No CTA do quiz existe um glow laranja discreto:

```css
box-shadow:
  0 10px 32px rgba(255,75,0,.18);
```

---

# 10. ÍCONES

O sistema usa ícones lineares e sólidos simples.

Bibliotecas compatíveis:

- Lucide;
- Phosphor;
- Heroicons;
- Font Awesome;
- Remix Icons.

Visual:

- stroke médio;
- poucos detalhes;
- monocromáticos;
- centralizados em áreas circulares.

Ícones observados:

- Instagram;
- YouTube;
- LinkedIn;
- TikTok;
- WhatsApp;
- external link;
- chevron / seta;
- fechar;
- fogo.

---

# 11. AVATAR / FOTO

No topo há um avatar circular grande.

Características:

- círculo preto;
- iniciais brancas;
- anel exterior laranja muito fino;
- botão “TROCAR FOTO” sobreposto na base.

Estimativa:

```css
.avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 2px solid #FF8B64;
}
```

---

# 12. BADGE “TROCAR FOTO”

Formato:

- pill pequeno;
- fundo claro;
- borda tracejada;
- texto marrom/dourado;
- uppercase;
- tracking amplo.

```css
.photo-badge {
  border: 1px dashed #8B6A24;
  border-radius: 999px;
  padding: 6px 14px;
}
```

---

# 13. BLOCO DE IDENTIDADE PESSOAL

## Nome

“Gustavo Macedo”

- centralizado;
- extra-bold;
- preto;
- letter-spacing negativo.

## Cargo

Linha com ícone de fogo:

“Sócio da Forno Lab”

- fogo laranja;
- texto bold;
- centralizado.

## Texto auxiliar

“Responda 5 perguntas e descubra qual caminho é o certo pro seu negócio ↓”

- cinza médio;
- largura restrita;
- centralização;
- line-height confortável.

---

# 14. SOCIAL BUTTONS

Quatro botões circulares:

- Instagram;
- YouTube;
- LinkedIn;
- TikTok.

## Estrutura

- círculo branco;
- leve sombra;
- ícone preto;
- diâmetro aproximado: 64–76px;
- gap: 12–18px.

```css
.social-button {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: #fff;
}
```

Interação esperada:

```css
:hover {
  transform: translateY(-2px);
}
```

---

# 15. CTA PRINCIPAL DO QUIZ

Card preto com contorno laranja.

## Estrutura

À esquerda:

- círculo escuro;
- ícone de fogo.

Centro:

- headline:
  “Como eu posso crescer seu negócio?”
- descrição:
  “Responda 5 perguntas e eu te indico o caminho certo”

À direita:

- círculo escuro;
- seta branca.

## Dimensões

Altura visual aproximada:

`130px–150px`

## Estilo

```css
.quiz-card {
  background: #0A0A0A;
  border: 1.5px solid #FF4B00;
  border-radius: 34px;
}
```

---

# 16. TÍTULO DE SEÇÃO

“COMO POSSO TE AJUDAR HOJE:”

Acompanhado de pequeno triângulo/seta cinza à esquerda.

Características:

- uppercase;
- bold;
- alinhamento esquerdo;
- tracking leve;
- ícone pequeno e discreto.

---

# 17. CARD DE PRODUTO — FORNO LAB

## Identidade

- fundo preto;
- laranja;
- branco;
- gradiente sutil inferior.

## Elementos

1. fogo no canto superior esquerdo;
2. “AGÊNCIA” no canto superior direito;
3. wordmark FORNO LAB;
4. linha divisória laranja;
5. tagline:
   “Marketing sem resultado é fofoca.”

## Layout

Card vertical com forte impacto tipográfico.

Estimativa:

```css
.product-card {
  min-height: 360px;
  border-radius: 30px;
  padding: 28px;
}
```

---

# 18. CARD ADVISOR

O Advisor é visualmente distinto.

## Fundo

Verde com grid.

Grid aproximado:

```css
background-color: #238650;
background-image:
  linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px);
background-size: 32px 32px;
```

## Badge

“6 MESES”

- pill branca;
- texto verde;
- bold.

## Timeline

Elementos:

- linha vertical branca translúcida;
- círculos vazados;
- último círculo preenchido;
- labels.

Itens:

- Diagnóstico
- Planejamento
- Rotina
- Indicadores

## Palavra gigante

“ADVISOR”

- branca;
- pesada;
- extragrande;
- pode ser parcialmente cortada.

---

# 19. CARROSSEL HORIZONTAL DE PRODUTOS

Os cards Forno Lab e Advisor aparecem lado a lado.

Comportamento sugerido:

```css
display: flex;
overflow-x: auto;
scroll-snap-type: x mandatory;
gap: 16px;
```

Cada item:

```css
min-width: 70%–78%;
scroll-snap-align: start;
```

A segunda coluna parcialmente visível funciona como affordance para swipe horizontal.

---

# 20. TÍTULO E SUBTÍTULO ABAIXO DOS CARDS

Estrutura:

**FORNO LAB** `LOGO PROVISÓRIO`

Depois:

“Agência · gestão completa”

## Badge “LOGO PROVISÓRIO”

- borda tracejada;
- bronze;
- fundo claro;
- uppercase.

---

# 21. BOTÃO “VER DETALHES”

Formato pill preto.

```css
.details-button {
  background: #0A0A0A;
  color: #fff;
  border-radius: 999px;
  padding: 16px 28px;
}
```

Texto:

- uppercase;
- bold;
- tracking leve.

---

# 22. CARD DE LIVE

Card horizontal preto.

## Coluna esquerda

Quadrado arredondado laranja:

- “AO VIVO”
- “20h”

## Centro

“Entrar na live da semana”

“Todas semana às 20h, com Dante e Gustavo”

## Direita

Ícone external link.

### Estilo

```css
background: #0B0B0B;
border-radius: 30px;
padding: 20px 24px;
```

---

# 23. CARD DE COMUNIDADE

Estrutura semelhante ao card de live.

À esquerda:

- quadrado branco;
- ícone verde do WhatsApp.

Centro:

“Comunidade no WhatsApp”

“Entre no grupo e receba o aviso das próximas lives”

Direita:

- external link.

---

# 24. CARDS DE WHATSAPP

Grandes cards verde-claro.

## Elementos

1. ícone do WhatsApp em círculo branco translúcido;
2. título “WhatsApp”;
3. telefone;
4. chamada forte;
5. botão branco/translúcido;
6. elemento gráfico de círculos grandes no fundo.

## Headline

“QUERO FALAR SOBRE A AGÊNCIA (FORNO LAB)”

ou

“QUERO FALAR SOBRE ADVISOR / FOUNDERS”

## CTA

“Iniciar conversa →”

---

# 25. GRAFISMO DOS CARDS DE WHATSAPP

No fundo do card existe um círculo/anéis de grande escala.

Estrutura sugerida:

```css
.card::after {
  content: "";
  position: absolute;
  width: 220px;
  height: 220px;
  border: 28px solid rgba(255,255,255,.18);
  border-radius: 50%;
  right: -50px;
  bottom: -30px;
}
```

---

# 26. FOOTER

Assinatura visual centralizada.

Elementos:

- ícone Instagram laranja;
- “GUSTAVO MACEDO”
- abaixo:
  fogo + “Forno Lab · Fortaleza, CE”

Tipografia:

- uppercase;
- bold;
- tracking forte no nome.

---

# 27. MODAIS / BOTTOM SHEETS

Os detalhes de cada serviço abrem em um modal.

O fundo da página fica escurecido.

## Overlay

```css
background: rgba(0,0,0,.45);
backdrop-filter: blur(2px);
```

## Sheet

- fundo branco;
- topo arredondado;
- largura quase total;
- começa alguns pixels abaixo do topo;
- área scrollável.

Estimativa:

```css
.modal-sheet {
  width: calc(100% - 24px);
  max-height: 90vh;
  background: #fff;
  border-radius: 42px 42px 0 0;
}
```

---

# 28. HANDLE DO MODAL

No topo do Advisor/Founders aparece uma barra cinza pequena.

```css
width: 56px;
height: 6px;
border-radius: 999px;
background: #D0D0D0;
```

Função:

- indicar gesto de arrastar para baixo;
- reforçar affordance de bottom sheet.

---

# 29. BOTÃO DE FECHAR

Circular, grande e muito visível.

Visual:

- círculo branco/off-white;
- ícone “x” preto;
- anel laranja externo;
- em alguns casos anel adicional escuro/verde.

Estimativa:

```css
.close-button {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 5px solid #FF4B00;
}
```

---

# 30. HERO DO MODAL FORNO LAB

Container preto dentro do modal.

## Eyebrow

“AGÊNCIA DE MARKETING”

- laranja;
- uppercase;
- bold;
- tracking.

## Headline

“Marketing sem resultado é fofoca.”

- branca;
- extra-bold;
- 2–3 linhas;
- alinhamento esquerdo.

## Badge Instagram

`@forno.lab`

- fundo cinza translúcido;
- pill;
- ícone Instagram;
- branco.

## Fundo do card

Preto, com gradiente marrom/laranja no canto inferior direito.

Exemplo:

```css
background:
  radial-gradient(circle at 100% 100%, rgba(123,48,20,.7), transparent 40%),
  #0A0A0A;
```

---

# 31. BODY DO MODAL

Estrutura editorial.

Exemplo:

> A gente assume o marketing da sua empresa de ponta a ponta, pra você voltar a cuidar do negócio.

Em seguida:

### PARA QUEM É

Texto.

### O QUE A GENTE ASSUME

Lista.

### COMO A GENTE MEDE

Texto.

---

# 32. LISTAS

Bullets quadrados e coloridos.

Forno:

- quadrados laranja.

Founders:

- quadrados azuis.

Advisor:

- círculos numerados verdes.

## Bullet padrão

```css
.bullet {
  width: 10px;
  height: 10px;
  border-radius: 3px;
}
```

---

# 33. CTA FIXO / STICKY NO MODAL

Um dos elementos mais importantes.

O botão fica no rodapé do modal, acima do link secundário.

## Forno Lab

- fundo laranja;
- texto preto;
- ícone WhatsApp preto.

## Advisor

- fundo verde;
- texto branco;
- ícone branco.

## Founders

- fundo azul;
- texto branco.

Estrutura:

```css
position: sticky;
bottom: 16px;
```

ou fixed dentro do sheet.

---

# 34. LINK SECUNDÁRIO NO MODAL

Texto:

“Prefere o quiz? Descubra o caminho certo”

Características:

- centralizado;
- bold;
- sublinhado;
- preto;
- margem inferior.

É um CTA de fallback.

---

# 35. MODAL ADVISOR

## Hero

- fundo verde;
- grid;
- eyebrow;
- headline branca;
- Instagram em pill translúcida.

### Headline

“Começo, meio e fim.”

## Descrição

Texto orientado a empresas que já possuem ou terão time de marketing.

## Seção “COMO FUNCIONA”

Lista numerada.

Números:

- círculo verde;
- número branco;
- 1 a 4.

## Seção “FORMATO”

Texto explicativo.

---

# 36. MODAL FOUNDERS

## Hero

Fundo creme.

Borda fina azul.

## Eyebrow

“FOUNDER-LED GROWTH”

- azul;
- uppercase;
- tracking.

## Headline

“Quem aparece, vende.”

- serifada itálica;
- azul;
- grande;
- editorial.

## Badge Instagram

- cinza-lilás claro;
- azul.

## Corpo

Explica público:

- empresário;
- founder;
- autônomo.

## Método

“O Código do Conteúdo”

## Entregáveis

- Comunidade de empresários;
- Plataforma com IA;
- Lives semanais.

---

# 37. SISTEMA DE IDENTIDADES INTERNAS

Um ponto muito importante do sistema é que cada produto recebe personalidade própria sem romper o esqueleto principal.

## Forno Lab

### Linguagem

- preto;
- laranja;
- direta;
- contundente;
- agência;
- performance.

## Advisor

### Linguagem

- verde;
- grid;
- checklist/timeline;
- estrutura;
- implementação;
- método.

## Founders

### Linguagem

- creme;
- azul;
- serif itálica;
- editorial;
- founder-led;
- marca pessoal.

Essa diferenciação é feita principalmente por:

- cor;
- tipografia de destaque;
- grafismos;
- estrutura do hero.

O restante da interface permanece consistente.

---

# 38. BOTÕES — SISTEMA COMPLETO

## Primário escuro

```css
background: #0A0A0A;
color: white;
border-radius: 999px;
```

## Primário Forno

```css
background: #FF4B00;
color: #0A0A0A;
```

## Primário Advisor

```css
background: #238650;
color: white;
```

## Primário Founders

```css
background: #2C3ED3;
color: white;
```

## Ghost

- fundo branco translúcido;
- texto colorido/escuro.

## Icon button

- círculo;
- 48–64px;
- conteúdo centralizado.

---

# 39. ESTADOS DE BOTÃO

Recomendação coerente:

## Hover

```css
transform: translateY(-1px);
filter: brightness(.96);
```

## Active

```css
transform: translateY(0) scale(.98);
```

## Focus

```css
outline: 3px solid rgba(255,75,0,.25);
outline-offset: 3px;
```

---

# 40. ACCORDIONS

Não há accordion clássico claramente aberto nos screenshots.

Porém, a lógica de “Ver detalhes” funciona como um **disclosure progressivo**:

- card compacto;
- botão;
- modal detalhado.

Logo, o sistema prefere:

**card → modal**

em vez de:

**card → accordion inline**

Se for necessário implementar accordion adicional, ele deve respeitar:

- borda inferior mínima;
- sem caixa pesada;
- label em bold;
- ícone `+` ou chevron;
- conteúdo com padding vertical;
- animação curta.

---

# 41. VETORES E ELEMENTOS GRÁFICOS

## Elementos recorrentes

1. círculos;
2. pills;
3. grid;
4. linhas verticais;
5. pequenos triângulos;
6. anéis;
7. bullets quadrados;
8. setas;
9. glow sutil;
10. gradiente localizado.

O sistema evita:

- ilustrações complexas;
- sombras dramáticas;
- bordas decorativas pesadas;
- texturas;
- múltiplos gradientes;
- 3D.

---

# 42. ICONOGRAFIA DO FOGO

O fogo é um asset institucional.

Funções:

- marcador da Forno Lab;
- ícone de identidade;
- bullet visual;
- assinatura;
- navegação.

Deve ser consistente em todas as aplicações.

Estilo:

- silhueta simples;
- laranja;
- sem outline complexo.

---

# 43. COPYWRITING E TOM

O texto faz parte do design.

Características:

- frases diretas;
- coloquialidade controlada;
- vocabulário simples;
- pouca abstração;
- comunicação pragmática.

Exemplos:

“Marketing sem resultado é fofoca.”

“Começo, meio e fim.”

“Quem aparece, vende.”

“Como eu posso crescer seu negócio?”

O texto é tratado visualmente como peça de branding.

---

# 44. PRINCÍPIOS DE MICROCOPY

## CTA

Sempre orientado à ação:

- Ver detalhes
- Entrar na live
- Iniciar conversa
- Falar sobre...
- Descubra o caminho certo

Evitar:

- Saiba mais
- Clique aqui
- Enviar
- Continuar

---

# 45. RESPONSIVIDADE

## Mobile

Layout principal.

## Tablet

Manter container centrado.

## Desktop

Não ampliar a interface excessivamente.

Recomendação:

```css
max-width: 460px;
```

Assim o produto preserva o formato de link-in-bio / app.

Se for criada versão desktop completa, pode-se usar:

- coluna fixa central;
- background neutro;
- mockup ou painéis laterais opcionais.

---

# 46. ÁREA SEGURA DE TOQUE

Todos os elementos interativos devem ter pelo menos:

```css
min-width: 44px;
min-height: 44px;
```

Preferível:

`48–56px`.

---

# 47. ACESSIBILIDADE

## Contraste

Excelente na maior parte dos componentes:

- branco/preto;
- laranja/preto;
- branco/verde;
- branco/azul.

Atenção com:

- cinza claro em fundo branco;
- verde claro de cards WhatsApp;
- badges translúcidos.

## Font-size mínimo

Evitar menos de `14px`.

## Foco

Obrigatório em:

- botões;
- links;
- modais;
- controles sociais.

---

# 48. ANIMAÇÕES

O sistema visual pede animações discretas.

## Hover / tap

150–220 ms.

```css
transition:
  transform .18s ease,
  background-color .18s ease,
  opacity .18s ease;
```

## Modal

Entrada:

- translateY(20px);
- opacity 0 → 1;
- 240–320 ms.

## Overlay

fade de 180–240 ms.

---

# 49. COMPONENTES — INVENTÁRIO COMPLETO

O sistema pode ser convertido nos seguintes componentes:

```text
PageShell
ProfileAvatar
ProfileHeader
SocialLinks
PrimaryQuizCTA
SectionHeading
ProductCarousel
ProductCard
ProductMeta
ProductBadge
DetailsButton
LiveCard
CommunityCard
WhatsAppCard
FooterSignature
ModalOverlay
BottomSheet
SheetHandle
CloseButton
ProductHero
InstagramBadge
ContentSection
BulletList
NumberedList
StickyCTA
QuizFallbackLink
```

---

# 50. TOKENS CSS RECOMENDADOS

```css
:root {
  /* Colors */
  --bg: #F6F3EE;
  --surface: #FFFFFF;
  --black: #0A0A0A;
  --text: #111111;
  --text-muted: #5F5F5F;
  --border: #E3E0DA;

  --orange: #FF4B00;
  --green: #238650;
  --blue: #2C3ED3;

  /* Radius */
  --radius-sm: 14px;
  --radius-md: 22px;
  --radius-lg: 30px;
  --radius-xl: 38px;
  --radius-pill: 999px;

  /* Spacing */
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s5: 20px;
  --s6: 24px;
  --s8: 32px;
  --s10: 40px;
  --s12: 48px;

  /* Type */
  --font-sans: "Inter", sans-serif;
  --font-editorial: "Cormorant Garamond", serif;

  /* Shadow */
  --shadow-soft: 0 12px 30px rgba(0,0,0,.08);
}
```

---

# 51. LAYOUT — EXEMPLO DE ESTRUTURA HTML

```html
<main class="page">
  <header class="profile">
    <div class="avatar"></div>
    <h1>Gustavo Macedo</h1>
    <p class="role">🔥 Sócio da Forno Lab</p>
    <p class="intro">
      Responda 5 perguntas e descubra qual caminho é o certo pro seu negócio ↓
    </p>

    <nav class="social-links"></nav>

    <button class="quiz-card"></button>
  </header>

  <section class="products">
    <h2>Como posso te ajudar hoje:</h2>
    <div class="product-carousel"></div>
  </section>

  <section class="links">
    <div class="live-card"></div>
    <div class="community-card"></div>
  </section>

  <section class="whatsapp">
    <div class="whatsapp-card"></div>
    <div class="whatsapp-card"></div>
  </section>

  <footer></footer>
</main>
```

---

# 52. COMPORTAMENTO DOS MODAIS

Fluxo recomendado:

1. usuário toca “Ver detalhes”;
2. overlay aparece;
3. sheet desliza de baixo;
4. scroll interno;
5. CTA permanece acessível;
6. swipe down ou X fecha;
7. foco volta ao botão originador.

---

# 53. PADRÕES DE CONVERSÃO

A interface utiliza várias estratégias de CRO.

## 53.1 CTA repetido

- quiz;
- detalhes;
- WhatsApp;
- live;
- comunidade.

## 53.2 Baixa fricção

Os produtos são explicados em poucas linhas.

## 53.3 Segmentação

Cada oferta tem caminho próprio.

## 53.4 Fallback

Todos os modais oferecem:

“Prefere o quiz?”

Isso evita dead-end.

---

# 54. DENSIDADE VISUAL

A densidade é média.

A interface não é minimalista no sentido “vazia”, mas é extremamente disciplinada.

Regra perceptível:

> cada bloco tem uma única função.

Não há:

- cards dentro de cards excessivos;
- menus complexos;
- muitas ações simultâneas;
- descrições longas na home.

---

# 55. SISTEMA DE ALINHAMENTO

## Home

- cabeçalho: centralizado;
- produtos: esquerda;
- CTAs: misto;
- cards: alinhamento interno à esquerda.

## Modal

Quase tudo alinhado à esquerda.

Isso diferencia:

- personal branding = central;
- venda detalhada = editorial/esquerda.

---

# 56. SISTEMA DE BORDAS

Bordas são raras e estratégicas.

Usos:

- contorno laranja do quiz;
- contorno do avatar;
- borda do hero Founders;
- badges tracejados;
- fechar modal.

A regra é evitar borda em cards já resolvidos por contraste de fundo.

---

# 57. SISTEMA DE GRADIENTES

Gradiente não é linguagem dominante.

Aparece de forma discreta:

- card Forno;
- glow do CTA;
- cards WhatsApp.

Nunca deve substituir as cores chapadas.

---

# 58. FORMAS DOMINANTES

O sistema se baseia em três formas:

## 1. Círculo

- avatar;
- ícones;
- bullets;
- timeline;
- close.

## 2. Retângulo arredondado

- cards;
- CTA;
- módulos.

## 3. Pill

- badges;
- botões;
- labels.

Isso cria unidade.

---

# 59. COMPONENTE “INSTAGRAM BADGE”

Aparece dentro dos heroes.

Estrutura:

- ícone;
- handle;
- fundo translúcido;
- pill.

```css
.instagram-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
}
```

---

# 60. DIRETRIZES PARA RECRIAÇÃO FIEL

Para manter fidelidade:

1. usar fundo quente, não branco puro;
2. usar preto quase absoluto;
3. não reduzir excessivamente os raios;
4. headlines sempre muito pesadas;
5. manter no máximo uma cor acento por produto;
6. CTA grande e tátil;
7. preservar espaço vertical;
8. usar cards em largura generosa;
9. modal deve parecer bottom sheet;
10. não inserir elementos decorativos que não tenham função.

---

# 61. O QUE NÃO FAZER

Evitar:

- gradientes multicoloridos;
- glassmorphism excessivo;
- sombras pesadas;
- ícones 3D;
- fontes arredondadas infantis;
- excesso de serifadas;
- fundo cinza frio;
- botões quadrados;
- bordas duras;
- cards muito pequenos;
- grid desktop corporativo;
- excesso de informações na home.

---

# 62. PERSONALIDADE VISUAL

O sistema comunica:

- pragmatismo;
- energia;
- proximidade;
- autoridade;
- digital-native;
- empreendedorismo;
- clareza;
- execução.

A estética evita parecer:

- corporativa tradicional;
- coach;
- infoproduto barato;
- SaaS genérico;
- agência “criativa demais”.

---

# 63. RELAÇÃO ENTRE MARCA PESSOAL E PRODUTOS

A marca pessoal atua como **container**.

Cada oferta é uma submarca.

Arquitetura:

```text
Gustavo Macedo
├── Forno Lab
├── Advisor
└── Founders
```

O design resolve isso usando:

- estrutura comum;
- linguagem própria no hero;
- cor individual;
- CTA individual;
- nomenclatura consistente.

---

# 64. PRIORIDADE DE INFORMAÇÃO POR TELA

## Home

1. pessoa;
2. oferta;
3. decisão;
4. ação.

## Modal

1. promessa;
2. público;
3. mecanismo;
4. entregáveis;
5. CTA.

---

# 65. SISTEMA DE CONTEÚDO

O conteúdo se divide em cinco categorias:

## Identidade

- nome;
- cargo;
- foto;
- localização.

## Oferta

- produtos;
- serviços.

## Educação

- o que é;
- para quem é;
- como funciona.

## Prova de atividade

- live semanal;
- comunidade.

## Conversão

- WhatsApp;
- quiz.

---

# 66. MOBILE UX

Elementos especialmente acertados para mobile:

- grandes áreas de toque;
- CTA fixo;
- scroll vertical simples;
- carrossel horizontal previsível;
- bottom sheet;
- texto curto;
- poucas colunas;
- excelente contraste.

---

# 67. BREAKPOINTS SUGERIDOS

```css
/* Mobile default */
@media (min-width: 0px) {}

/* Large mobile */
@media (min-width: 390px) {}

/* Tablet */
@media (min-width: 768px) {}

/* Desktop */
@media (min-width: 1024px) {}
```

Mas o container deve permanecer estreito.

---

# 68. DESIGN TOKENS — JSON CONCEITUAL

```json
{
  "colors": {
    "background": "#F6F3EE",
    "surface": "#FFFFFF",
    "black": "#0A0A0A",
    "orange": "#FF4B00",
    "advisorGreen": "#238650",
    "foundersBlue": "#2C3ED3"
  },
  "radius": {
    "small": 14,
    "medium": 22,
    "large": 30,
    "xlarge": 38,
    "pill": 999
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 32,
    "2xl": 48
  }
}
```

---

# 69. FIGMA — ORGANIZAÇÃO SUGERIDA

## Pages

```text
00 — Foundations
01 — Components
02 — Home
03 — Modal Forno
04 — Modal Advisor
05 — Modal Founders
06 — Responsive
```

## Foundations

- Colors
- Typography
- Spacing
- Radius
- Shadows
- Icons

## Components

- Buttons
- Cards
- Badges
- Social buttons
- Modal
- Lists
- Product hero
- CTA

---

# 70. AUTO LAYOUT

Tudo pode ser construído com Auto Layout.

## Página

Vertical.

Gap variável de 24–48px.

## Cards

Auto layout vertical ou horizontal.

## CTA

Horizontal.

## Lists

Vertical.

## Modal

Vertical com CTA sticky.

---

# 71. COMPONENT VARIANTS

## Button

```text
type:
- black
- orange
- green
- blue
- ghost

size:
- md
- lg

icon:
- none
- left
- right
```

## ProductHero

```text
brand:
- forno
- advisor
- founders
```

## Badge

```text
style:
- solid
- translucent
- dashed
```

---

# 72. ESTILO EDITORIAL

Apesar de ser uma interface digital, há um forte componente editorial.

Isso aparece em:

- tamanho de headlines;
- uso de frase-manifesto;
- espaçamento;
- uso de serifada em Founders;
- hierarquia;
- contraste.

A interface deve ser tratada mais como uma **capa editorial interativa** do que como um dashboard.

---

# 73. DADOS E INDICADORES

O Advisor usa linguagem visual de:

- roadmap;
- processo;
- milestones;
- indicadores;
- duração.

Essa associação visual fortalece o posicionamento.

---

# 74. CONSISTÊNCIA ENTRE TELAS

Elementos invariáveis:

- border-radius;
- padding;
- body font;
- estrutura do modal;
- CTA;
- link quiz;
- iconografia.

Elementos variáveis:

- cor;
- hero;
- headline;
- bullets;
- grafismos.

---

# 75. PADRÃO DE MODAL REUTILIZÁVEL

Estrutura ideal:

```text
[handle]
[close]

[hero]
  eyebrow
  headline
  badge

[description]

[section heading]
[content]

[section heading]
[list]

[sticky CTA]

[quiz fallback]
```

---

# 76. SISTEMA DE ÍCONES DE AÇÃO

## Seta simples

Indica avanço.

## External link

Indica destino externo.

## X

Fecha modal.

## WhatsApp

Conversa.

## Social icons

Perfil externo.

Nenhum ícone precisa de legenda adicional quando a ação é óbvia.

---

# 77. TAMANHO DE ÍCONES

Sugestões:

```css
--icon-sm: 18px;
--icon-md: 24px;
--icon-lg: 30px;
```

Close button:

`24–28px`.

---

# 78. SISTEMA DE GAPS EM BOTÕES

```css
gap: 10px–14px;
```

Ícone e texto ficam próximos, mas não comprimidos.

---

# 79. CARDS COM INFO SECUNDÁRIA

Live e comunidade seguem a mesma estrutura visual.

Esse padrão pode ser reutilizado para:

- agenda;
- newsletter;
- podcast;
- material gratuito.

---

# 80. ESCALABILIDADE DO SISTEMA

Para adicionar novo produto:

1. definir cor proprietária;
2. definir hero;
3. manter estrutura de modal;
4. definir CTA;
5. definir badge/Instagram;
6. manter tipografia base.

Não é necessário criar um sistema completamente novo.

---

# 81. CONCLUSÃO

O design system é construído sobre um princípio claro:

> **uma interface única, com marcas internas visualmente distintas e uma jornada de conversão extremamente simples.**

A força do sistema vem de:

- tipografia forte;
- contraste;
- estrutura modular;
- consistência de raios;
- uso disciplinado de cor;
- CTAs grandes;
- linguagem direta;
- hierarquia previsível;
- identidade individual por produto.

O sistema não depende de excesso gráfico.

Ele depende principalmente de:

**copy + tipografia + cor + composição + ação.**

---

# 82. RESUMO EXECUTIVO DOS TOKENS PRINCIPAIS

| Categoria | Valor aproximado |
|---|---|
| Fundo | `#F6F3EE` |
| Preto | `#0A0A0A` |
| Laranja | `#FF4B00` |
| Verde Advisor | `#238650` |
| Azul Founders | `#2C3ED3` |
| Fonte base | Inter / grotesca equivalente |
| Fonte editorial | Cormorant Garamond Italic / equivalente |
| Radius cards | 28–36px |
| Radius button | 999px |
| Padding página | 24px |
| Gap principal | 24–32px |
| Headline hero | 36–44px / 800–900 |
| Body | 20–24px / 400 |
| Shadow | suave, blur alto, opacidade baixa |
| Container | max-width ~460px |
| Modal | bottom sheet, ~90vh |
| CTA | grande, largura total, sticky |

---

# 83. REGRA DE OURO

Ao reconstruir ou expandir este layout:

> **não adicione complexidade visual onde hierarquia, tipografia e espaço já resolvem o problema.**

