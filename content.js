// =============================================
// ADQUIRÊNCIA ACADEMY — Conteúdo do Curso
// =============================================

const COURSE = {
  title: "Adquirência Academy",
  studentName: "Lívia",
  modules: [
    // ==========================================
    // MÓDULO 1
    // ==========================================
    {
      id: "mod1",
      title: "Fundamentos da Adquirência",
      description: "Entenda o que é adquirência, seus conceitos centrais e por que ela existe no mercado financeiro.",
      icon: "🏦",
      color: "#6366f1",
      lessons: [
        {
          id: "mod1-l1",
          title: "O que é Adquirência?",
          duration: "8 min",
          content: `
<h2>Definição e Origem</h2>
<p>A <strong>adquirência</strong> é o processo pelo qual uma instituição financeira — chamada de <strong>adquirente</strong> — credencia estabelecimentos comerciais para aceitar pagamentos eletrônicos (cartão de crédito, débito, pré-pago, Pix, etc.) e garante o repasse dos valores transacionados a esses estabelecimentos.</p>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div>O termo vem do latim <em>acquirere</em> (adquirir). O adquirente "adquire" do lojista o direito de processar aquela venda — e assume a responsabilidade financeira por ela perante as bandeiras.</div>
</div>

<h2>Por que a Adquirência Existe?</h2>
<p>Antes das maquininhas, cada loja precisaria ter um contrato separado com cada banco emissor de cartão. A adquirência resolve isso: um único contrato conecta o estabelecimento a todo o ecossistema de pagamentos eletrônicos.</p>

<p>O adquirente atua como <strong>intermediário técnico e financeiro</strong> entre:</p>
<ul>
  <li>O <strong>estabelecimento comercial</strong> (quem vende)</li>
  <li>As <strong>bandeiras</strong> (Visa, Mastercard, Elo…)</li>
  <li>Os <strong>bancos emissores</strong> (que emitiram o cartão do consumidor)</li>
</ul>

<h2>Quem São os Adquirentes no Brasil?</h2>
<p>Os principais players do mercado de adquirência brasileiro incluem:</p>

<table class="concept-table">
  <thead><tr><th>Adquirente</th><th>Tipo</th><th>Destaque</th></tr></thead>
  <tbody>
    <tr><td><strong>Cielo</strong></td><td>Banco</td><td>Maior do Brasil, controle do BB e Bradesco</td></tr>
    <tr><td><strong>Rede</strong></td><td>Banco</td><td>Pertence ao Itaú Unibanco</td></tr>
    <tr><td><strong>Stone</strong></td><td>Fintech</td><td>Disruptora, forte em PMEs</td></tr>
    <tr><td><strong>GetNet</strong></td><td>Banco</td><td>Pertence ao Santander</td></tr>
    <tr><td><strong>PagSeguro</strong></td><td>Fintech</td><td>Popular entre MEI e pequenos negócios</td></tr>
    <tr><td><strong>SumUp</strong></td><td>Fintech</td><td>Foco em microempreendedores</td></tr>
  </tbody>
</table>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Relevância para PLD:</strong> O adquirente é o ponto de entrada de recursos no sistema financeiro para milhões de estabelecimentos. Uma máquina de cartão pode ser utilizada para lavar dinheiro — portanto, o adquirente tem obrigações regulatórias de prevenção e monitoramento.</div>
</div>

<h2>Regulação do Setor</h2>
<p>No Brasil, a atividade de adquirência é regulada pelo <strong>Banco Central do Brasil (BCB)</strong> por meio da Lei nº 12.865/2013 e diversas circulares. Os adquirentes são classificados como <strong>Instituições de Pagamento (IPs)</strong>.</p>
          `
        },
        {
          id: "mod1-l2",
          title: "Os Participantes do Ecossistema",
          duration: "10 min",
          content: `
<h2>Os Cinco Atores Principais</h2>
<p>Para entender adquirência, é fundamental conhecer cada participante do ecossistema de pagamentos eletrônicos:</p>

<div class="flow-steps">
  <div class="flow-step">
    <div class="flow-step-num">1</div>
    <div class="flow-step-content">
      <strong>👤 Portador / Consumidor</strong>
      Quem possui o cartão e realiza o pagamento. Tem contrato com o banco emissor.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">2</div>
    <div class="flow-step-content">
      <strong>🏪 Estabelecimento Comercial (EC)</strong>
      A loja, restaurante ou e-commerce que aceita o cartão. Tem contrato com o adquirente.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">3</div>
    <div class="flow-step-content">
      <strong>🏦 Adquirente</strong>
      Credencia o estabelecimento e processa as transações. Garante o pagamento ao EC.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">4</div>
    <div class="flow-step-content">
      <strong>🎖️ Bandeira (Scheme)</strong>
      Visa, Mastercard, Elo, Amex. Define as regras do jogo — tecnologia, segurança e compensação.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">5</div>
    <div class="flow-step-content">
      <strong>🏧 Emissor</strong>
      Banco ou fintech que emitiu o cartão ao consumidor (ex: Nubank, Itaú). Autoriza ou nega transações.
    </div>
  </div>
</div>

<h2>Outros Participantes Importantes</h2>
<table class="concept-table">
  <thead><tr><th>Participante</th><th>Função</th></tr></thead>
  <tbody>
    <tr><td><strong>Sub-adquirente</strong></td><td>Facilita transações sem ter acesso direto às bandeiras (ex: Mercado Pago, PicPay)</td></tr>
    <tr><td><strong>Processador</strong></td><td>Empresa que processa tecnicamente as transações para o adquirente</td></tr>
    <tr><td><strong>Gateway de Pagamento</strong></td><td>Intermediário técnico para e-commerce (conecta a loja ao adquirente)</td></tr>
    <tr><td><strong>Credenciador de TEF</strong></td><td>Habilita o sistema de automação de pagamentos em PDVs (pontos de venda)</td></tr>
  </tbody>
</table>

<div class="callout tip">
  <span class="callout-icon">✅</span>
  <div><strong>Dica para memorizar:</strong> Pense em quatro camadas — <em>Consumidor → Adquirente → Bandeira → Emissor</em>. O dinheiro "volta" pelo mesmo caminho: o emissor debita o consumidor, repassa à bandeira, que repassa ao adquirente, que repassa ao estabelecimento.</div>
</div>

<h2>Diferença entre Adquirente e Sub-adquirente</h2>
<p>Essa diferença é importante em PLD:</p>
<ul>
  <li>O <strong>adquirente</strong> possui contrato direto com as bandeiras e é supervisionado diretamente pelo Banco Central.</li>
  <li>O <strong>sub-adquirente</strong> opera sob a "guarda-chuva" de um adquirente. Tem menos obrigações diretas com o BCB, mas deve cumprir as regras do adquirente — que por sua vez responde pelo sub-adquirente perante o regulador.</li>
</ul>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Relevância para PLD:</strong> Sub-adquirentes que não realizam KYC adequado dos seus estabelecimentos representam um risco elevado para o adquirente que os processa. É essencial que o adquirente monitore e exija conformidade de toda a sua cadeia.</div>
</div>
          `
        },
        {
          id: "mod1-l3",
          title: "Fluxo de uma Transação com Cartão",
          duration: "8 min",
          content: `
<h2>Do Aproximar à Liquidação</h2>
<p>Quando um cliente aproxima o cartão na maquininha, parece instantâneo — mas existe um processo complexo acontecendo em milissegundos. Vamos entender cada etapa:</p>

<div class="flow-steps">
  <div class="flow-step">
    <div class="flow-step-num">1</div>
    <div class="flow-step-content">
      <strong>Captura</strong>
      O POS (maquininha) lê os dados do cartão (chip, tarja ou NFC) e envia uma mensagem de autorização ao adquirente.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">2</div>
    <div class="flow-step-content">
      <strong>Roteamento</strong>
      O adquirente identifica a bandeira e encaminha a mensagem para ela.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">3</div>
    <div class="flow-step-content">
      <strong>Autorização</strong>
      A bandeira encaminha para o emissor, que verifica: saldo/limite, status do cartão, suspeita de fraude. Responde com <strong>aprovado</strong> ou <strong>negado</strong>.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">4</div>
    <div class="flow-step-content">
      <strong>Captura Confirmada</strong>
      O comprovante é emitido. A venda está autorizada, mas ainda não liquidada.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">5</div>
    <div class="flow-step-content">
      <strong>Compensação (Clearing)</strong>
      No final do dia, o adquirente envia para a bandeira todas as transações do dia para liquidação.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">6</div>
    <div class="flow-step-content">
      <strong>Liquidação (Settlement)</strong>
      O emissor transfere os recursos à bandeira, que repassa ao adquirente. O adquirente então credita o estabelecimento (descontada a MDR — taxa do lojista).
    </div>
  </div>
</div>

<h2>Prazos de Liquidação Típicos</h2>
<table class="concept-table">
  <thead><tr><th>Modalidade</th><th>Prazo para o Lojista</th></tr></thead>
  <tbody>
    <tr><td>Débito</td><td>D+1 (próximo dia útil)</td></tr>
    <tr><td>Crédito à vista</td><td>D+30 (30 dias corridos)</td></tr>
    <tr><td>Crédito parcelado</td><td>Parcelas a cada 30 dias</td></tr>
    <tr><td>Pix</td><td>D+0 (instantâneo)</td></tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div><strong>Atenção:</strong> O prazo de 30 dias no crédito cria um "float" financeiro. O adquirente recebe antes de pagar ao lojista, gerando receita financeira — e também expondo-o a risco de crédito do estabelecimento (ex: lojista fecha antes da liquidação).</div>
</div>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Relevância para PLD:</strong> O intervalo entre a captura e a liquidação pode ser explorado em esquemas de lavagem — por exemplo, usando empresas fictícias ("laranjas") que realizam transações falsas e recebem a liquidação antes de serem identificadas.</div>
</div>
          `
        }
      ],
      quiz: {
        title: "Quiz — Módulo 1: Fundamentos",
        questions: [
          {
            text: "Qual é a principal função de um adquirente no ecossistema de pagamentos?",
            options: [
              "Emitir cartões de crédito para os consumidores",
              "Credenciar estabelecimentos comerciais para aceitar pagamentos eletrônicos",
              "Definir as regras e tecnologias do cartão (como Visa e Mastercard)",
              "Autorizar ou negar transações verificando o saldo do cliente"
            ],
            correct: 1,
            explanation: "O adquirente credencia estabelecimentos comerciais (ECs) e processa os pagamentos eletrônicos, garantindo o repasse dos valores ao EC. Emitir cartões é função do emissor; definir regras é da bandeira; autorizar é do emissor."
          },
          {
            text: "Quem é responsável por autorizar ou negar uma transação com cartão?",
            options: [
              "O adquirente",
              "A bandeira (Visa, Mastercard)",
              "O emissor (banco que emitiu o cartão)",
              "O estabelecimento comercial"
            ],
            correct: 2,
            explanation: "O emissor — o banco ou fintech que emitiu o cartão ao consumidor — verifica saldo/limite, status do cartão e suspeita de fraude, sendo o responsável pela autorização ou negação."
          },
          {
            text: "O que diferencia um sub-adquirente de um adquirente?",
            options: [
              "O sub-adquirente tem contrato direto com as bandeiras, mas não com o BCB",
              "O sub-adquirente não tem contrato direto com as bandeiras e opera sob a guarda de um adquirente",
              "O sub-adquirente processa apenas transações de débito",
              "O sub-adquirente é diretamente supervisionado pelo Banco Central"
            ],
            correct: 1,
            explanation: "O sub-adquirente não possui contrato direto com as bandeiras. Ele opera sob a 'guarda-chuva' de um adquirente, que responde perante as bandeiras e o BCB pelo comportamento do sub-adquirente."
          },
          {
            text: "Em quanto tempo tipicamente o lojista recebe o valor de uma venda no crédito à vista?",
            options: [
              "D+0 (mesmo dia)",
              "D+1 (próximo dia útil)",
              "D+30 (30 dias corridos)",
              "D+45 (45 dias corridos)"
            ],
            correct: 2,
            explanation: "Crédito à vista tem prazo padrão de D+30. Já o débito liquida em D+1 e o Pix é D+0 (instantâneo)."
          },
          {
            text: "Por que o prazo de liquidação do crédito é relevante para PLD?",
            options: [
              "Porque cria risco cambial para o adquirente",
              "Porque permite que empresas fictícias recebam liquidação antes de serem identificadas como suspeitas",
              "Porque o emissor pode reter os valores indefinidamente",
              "Porque obriga o adquirente a manter reservas em ouro"
            ],
            correct: 1,
            explanation: "O intervalo entre a captura (D+0) e a liquidação (D+30) pode ser explorado: empresas 'laranja' realizam transações fictícias e recebem a liquidação antes que os mecanismos de PLD as identifiquem e bloqueiem."
          }
        ]
      }
    },

    // ==========================================
    // MÓDULO 2
    // ==========================================
    {
      id: "mod2",
      title: "Produtos e Operações",
      description: "Conheça os produtos oferecidos pelos adquirentes, tipos de captura e modalidades de pagamento.",
      icon: "💳",
      color: "#8b5cf6",
      lessons: [
        {
          id: "mod2-l1",
          title: "Maquininhas e Tipos de Captura",
          duration: "9 min",
          content: `
<h2>O POS — Ponto de Venda Eletrônico</h2>
<p>A <strong>maquininha</strong> ou <strong>POS</strong> (Point of Sale) é o terminal eletrônico que captura os dados do cartão e inicia a transação. Existem diferentes tipos:</p>

<table class="concept-table">
  <thead><tr><th>Tipo</th><th>Descrição</th><th>Uso Típico</th></tr></thead>
  <tbody>
    <tr>
      <td><strong>POS Tradicional</strong></td>
      <td>Terminal fixo com chip, tarja e NFC; conectado à linha telefônica ou internet</td>
      <td>Supermercados, restaurantes, farmácias</td>
    </tr>
    <tr>
      <td><strong>mPOS</strong></td>
      <td>Leitor que se conecta ao smartphone via Bluetooth ou P2</td>
      <td>Profissionais autônomos, feiras, delivery</td>
    </tr>
    <tr>
      <td><strong>Smart POS</strong></td>
      <td>Terminal com Android, tela touch, câmera e apps</td>
      <td>PMEs que precisam de mais funcionalidades</td>
    </tr>
    <tr>
      <td><strong>PIN Pad</strong></td>
      <td>Dispositivo externo para entrada de senha, acoplado ao caixa do estabelecimento</td>
      <td>Lojas com sistema de caixa próprio (TEF)</td>
    </tr>
    <tr>
      <td><strong>E-commerce (Gateway)</strong></td>
      <td>Integração via API para lojas online</td>
      <td>Lojas virtuais, marketplaces</td>
    </tr>
  </tbody>
</table>

<h2>Tipos de Captura do Cartão</h2>
<p>A forma como os dados do cartão são lidos define o nível de segurança da transação:</p>

<div class="flow-steps">
  <div class="flow-step">
    <div class="flow-step-num">1</div>
    <div class="flow-step-content">
      <strong>Chip (EMV)</strong>
      Mais seguro. O chip gera um código único por transação (criptograma), impossível de clonar.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">2</div>
    <div class="flow-step-content">
      <strong>NFC / Contactless</strong>
      Aproximação. Usa tecnologia EMV sem contato. Seguro, com limite por transação sem senha.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">3</div>
    <div class="flow-step-content">
      <strong>Tarja Magnética</strong>
      Legado. Dados estáticos — mais vulnerável à clonagem. Bancos e bandeiras estão descontinuando.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">4</div>
    <div class="flow-step-content">
      <strong>Digitado (CNP — Card Not Present)</strong>
      Número do cartão digitado manualmente. Usado em e-commerce. Maior risco de fraude.
    </div>
  </div>
</div>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Relevância para PLD:</strong> Estabelecimentos que processam muitas transações do tipo CNP (digitado) sem ser e-commerce, ou que têm alta concentração de transações por tarja (suspeita de clone), são sinais de alerta no monitoramento.</div>
</div>

<h2>Conceito de MCC — Merchant Category Code</h2>
<p>O <strong>MCC</strong> é um código de 4 dígitos que classifica o tipo de atividade do estabelecimento. É definido pelas bandeiras e informa ao emissor e ao adquirente a natureza do negócio.</p>

<p>Exemplos:</p>
<ul>
  <li><strong>MCC 5411</strong> — Supermercados</li>
  <li><strong>MCC 5812</strong> — Restaurantes</li>
  <li><strong>MCC 7995</strong> — Apostas e jogos de azar</li>
  <li><strong>MCC 5912</strong> — Farmácias</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div>O <strong>MCC incorreto</strong> (laundering via MCC) é uma tipologia clássica de lavagem: credenciar um cassino como mercearia para contornar restrições de MCC e limites de monitoramento.</div>
</div>
          `
        },
        {
          id: "mod2-l2",
          title: "Crédito, Débito, Pré-pago e Pix",
          duration: "9 min",
          content: `
<h2>Modalidades de Pagamento</h2>
<p>O ecossistema de adquirência suporta diferentes modalidades, cada uma com características e riscos distintos:</p>

<h2>Cartão de Crédito</h2>
<p>O emissor concede um <strong>limite de crédito</strong> ao portador. O consumidor paga a fatura depois (no mês seguinte). O adquirente é garantidor do pagamento ao lojista.</p>
<ul>
  <li>Pode ser <strong>à vista</strong> ou <strong>parcelado</strong> (pelo lojista ou emissor)</li>
  <li>Prazo padrão: D+30 para o lojista</li>
  <li>Taxa MDR mais alta que o débito</li>
</ul>

<h2>Cartão de Débito</h2>
<p>O valor é debitado <strong>imediatamente</strong> da conta do portador. Requer saldo disponível.</p>
<ul>
  <li>Liquidação D+1 para o lojista</li>
  <li>MDR menor que o crédito</li>
  <li>Menor risco de chargeback</li>
</ul>

<h2>Cartão Pré-pago</h2>
<p>O saldo é <strong>carregado antecipadamente</strong> pelo portador. Não exige conta bancária. Exemplos: cartões de benefício, cartões presente, cartões de viagem.</p>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Relevância para PLD:</strong> Cartões pré-pagos anônimos (sem identificação do portador) são altamente explorados em lavagem de dinheiro e financiamento ao terrorismo, pois permitem movimentar recursos sem rastreabilidade. O BCB tem restringido progressivamente cartões pré-pagos anônimos.</div>
</div>

<h2>Pix na Adquirência</h2>
<p>O <strong>Pix</strong>, criado pelo BCB em 2020, é um arranjo de pagamento instantâneo. Na adquirência, aparece como:</p>
<ul>
  <li><strong>Pix no POS:</strong> QR code gerado pela maquininha; cliente escaneia e paga</li>
  <li><strong>Pix Link:</strong> Link de pagamento enviado por WhatsApp ou e-mail</li>
  <li><strong>Pix no e-commerce:</strong> QR Code ou Pix Copia e Cola no checkout</li>
</ul>

<table class="concept-table">
  <thead><tr><th>Característica</th><th>Pix</th><th>Débito</th><th>Crédito</th></tr></thead>
  <tbody>
    <tr><td>Liquidação</td><td>Imediata (D+0)</td><td>D+1</td><td>D+30</td></tr>
    <tr><td>MDR típica</td><td>0% a 0,99%</td><td>1% a 1,5%</td><td>1,5% a 3%</td></tr>
    <tr><td>Parcelamento</td><td>Não (padrão)</td><td>Não</td><td>Sim</td></tr>
    <tr><td>Chargeback</td><td>MED (Mecanismo Especial)</td><td>Sim</td><td>Sim</td></tr>
    <tr><td>Rastreabilidade</td><td>Alta (CPF/CNPJ)</td><td>Alta</td><td>Alta</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div>O Pix trouxe o <strong>MED (Mecanismo Especial de Devolução)</strong> — um processo de devolução emergencial para casos de fraude ou erro. Não é exatamente um chargeback, mas tem função similar.</div>
</div>
          `
        },
        {
          id: "mod2-l3",
          title: "MDR, Chargeback e Risco Financeiro",
          duration: "10 min",
          content: `
<h2>O que é MDR?</h2>
<p>A <strong>MDR (Merchant Discount Rate)</strong> é a taxa cobrada do estabelecimento por cada transação processada. É o principal modelo de receita do adquirente.</p>

<p>Exemplo: venda de R$ 100 com MDR de 2% → o lojista recebe R$ 98.</p>

<p>A MDR é composta por:</p>
<ul>
  <li><strong>Intercâmbio (interchange):</strong> parte repassada ao emissor, definida pelas bandeiras</li>
  <li><strong>Fee da bandeira:</strong> parte retida pela bandeira pelo uso da rede</li>
  <li><strong>Spread do adquirente:</strong> margem do adquirente</li>
</ul>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div>O Banco Central regulou o intercâmbio máximo no Brasil: <strong>0,5% para débito</strong> e <strong>0,7% para crédito</strong>, em média. Isso foi fundamental para a competição no setor.</div>
</div>

<h2>Antecipação de Recebíveis</h2>
<p>O lojista que tem crédito a receber em 30 dias pode <strong>antecipar</strong> esse valor — pagando uma taxa de antecipação ao adquirente. É uma receita importante para os adquirentes.</p>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Relevância para PLD:</strong> Esquemas de fraude podem usar a antecipação para converter crédito futuro (fruto de transações fictícias) em recursos imediatos e disponíveis.</div>
</div>

<h2>Chargeback — Estorno Contestado</h2>
<p>O <strong>chargeback</strong> ocorre quando o portador do cartão contesta uma cobrança junto ao seu banco emissor. O emissor debita o valor de volta do adquirente, que debita do estabelecimento.</p>

<p><strong>Principais motivos de chargeback:</strong></p>
<ul>
  <li>Não reconhecimento da compra (fraude)</li>
  <li>Produto não entregue ou diferente do anunciado</li>
  <li>Cobrança duplicada ou valor incorreto</li>
</ul>

<h2>Fraude no Chargeback — Friendly Fraud</h2>
<p>O <strong>friendly fraud</strong> (fraude amigável) ocorre quando o próprio portador contesta uma compra legítima para obter o produto de graça. É um desafio crescente no e-commerce.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div><strong>Limite de chargeback:</strong> As bandeiras monitoram a taxa de chargeback de cada estabelecimento. Se ultrapassar 1% das transações, o EC entra em programas de monitoramento e pode ser descredenciado.</div>
</div>

<h2>Risco de Crédito do Adquirente</h2>
<p>Como o adquirente garante o pagamento ao EC, ele assume o <strong>risco de crédito</strong>: se um estabelecimento fechar e tiver chargebacks pendentes ou valores a liquidar, o adquirente é responsável perante as bandeiras.</p>

<p>Por isso, adquirentes avaliam o risco de cada estabelecimento antes do credenciamento — e essa avaliação também é parte do processo de <strong>KYB (Know Your Business)</strong>.</p>
          `
        }
      ],
      quiz: {
        title: "Quiz — Módulo 2: Produtos e Operações",
        questions: [
          {
            text: "O que é o MCC (Merchant Category Code)?",
            options: [
              "Um código que identifica o adquirente responsável pela transação",
              "Um código de 4 dígitos que classifica o tipo de atividade do estabelecimento",
              "O número de série da maquininha (POS)",
              "O código de autorização gerado pelo emissor"
            ],
            correct: 1,
            explanation: "O MCC é um código de 4 dígitos que categoriza a atividade comercial do estabelecimento (supermercado, restaurante, etc.). É usado por emissores e adquirentes para identificar o tipo de negócio e aplicar regras específicas."
          },
          {
            text: "Por que cartões pré-pagos anônimos são considerados de alto risco para PLD?",
            options: [
              "Porque têm taxas MDR mais elevadas",
              "Porque não podem ser usados em POS físicos",
              "Porque permitem movimentar recursos sem rastreabilidade do portador",
              "Porque são emitidos exclusivamente por fintechs não reguladas"
            ],
            correct: 2,
            explanation: "Cartões pré-pagos anônimos (sem identificação do portador) permitem circular recursos sem vincular as transações a uma pessoa identificada, o que os torna instrumentos atraentes para lavagem de dinheiro e financiamento ao terrorismo."
          },
          {
            text: "O que é MDR (Merchant Discount Rate)?",
            options: [
              "A taxa de juros cobrada do consumidor no parcelamento",
              "A taxa cobrada do estabelecimento por cada transação processada",
              "O prazo máximo de liquidação definido pelo Banco Central",
              "O limite de chargeback permitido pelas bandeiras"
            ],
            correct: 1,
            explanation: "A MDR é a taxa que o adquirente cobra do estabelecimento por processar cada transação. É o principal modelo de receita da adquirência, composta por intercâmbio (emissor), fee da bandeira e spread do adquirente."
          },
          {
            text: "O que é 'friendly fraud' (fraude amigável) no contexto de chargeback?",
            options: [
              "Fraude realizada por um funcionário do próprio estabelecimento",
              "Quando o adquirente e o lojista combinam para fraudar o emissor",
              "Quando o próprio portador contesta uma compra legítima para obter o produto de graça",
              "Fraude em transações entre estabelecimentos parceiros"
            ],
            correct: 2,
            explanation: "Friendly fraud ocorre quando o consumidor faz uma compra legítima mas contesta a cobrança alegando não reconhecê-la, recebendo o dinheiro de volta e ficando com o produto. É um desafio crescente, especialmente no e-commerce."
          },
          {
            text: "Qual tipo de captura de cartão é considerado mais seguro?",
            options: [
              "Tarja magnética, por ser a tecnologia mais estabelecida",
              "Digitação manual (CNP), por não exigir o cartão físico",
              "Chip (EMV), que gera um criptograma único por transação",
              "NFC, por eliminar o contato físico com a maquininha"
            ],
            correct: 2,
            explanation: "O chip EMV é o mais seguro porque gera um criptograma criptográfico único para cada transação — impossível de reutilizar, mesmo que interceptado. A tarja magnética tem dados estáticos e é facilmente clonável."
          }
        ]
      }
    },

    // ==========================================
    // MÓDULO 3
    // ==========================================
    {
      id: "mod3",
      title: "Regulação e Supervisão",
      description: "Entenda o arcabouço regulatório que governa a adquirência no Brasil e as obrigações das IPs.",
      icon: "⚖️",
      color: "#06b6d4",
      lessons: [
        {
          id: "mod3-l1",
          title: "Banco Central e Instituições de Pagamento",
          duration: "9 min",
          content: `
<h2>O Papel do Banco Central do Brasil</h2>
<p>O <strong>Banco Central do Brasil (BCB)</strong> é o principal regulador e supervisor do sistema financeiro e de pagamentos nacional. No setor de adquirência, sua atuação se dá em duas frentes:</p>

<ul>
  <li><strong>Regulação:</strong> define as regras por meio de Resoluções, Circulares e Instruções Normativas</li>
  <li><strong>Supervisão:</strong> monitora e fiscaliza o cumprimento das normas pelas Instituições de Pagamento</li>
</ul>

<h2>O Marco Legal dos Pagamentos — Lei 12.865/2013</h2>
<p>A <strong>Lei nº 12.865/2013</strong> é o principal marco legal do setor. Ela:</p>
<ul>
  <li>Criou a figura das <strong>Instituições de Pagamento (IPs)</strong></li>
  <li>Definiu os arranjos de pagamento e suas regras</li>
  <li>Atribuiu ao BCB a supervisão do setor</li>
  <li>Estabeleceu regras de proteção ao usuário final</li>
</ul>

<h2>Categorias de Instituições de Pagamento</h2>
<table class="concept-table">
  <thead><tr><th>Categoria</th><th>Função Principal</th><th>Exemplos</th></tr></thead>
  <tbody>
    <tr><td><strong>Emissor de moeda eletrônica</strong></td><td>Gerencia contas de pagamento; emite cartões pré-pagos</td><td>Nubank (conta), PicPay</td></tr>
    <tr><td><strong>Emissor de instrumento de pagamento pós-pago</strong></td><td>Emite cartões de crédito</td><td>Nubank (crédito), C6 Bank</td></tr>
    <tr><td><strong>Credenciador (Adquirente)</strong></td><td>Credencia ECs e processa transações</td><td>Cielo, Stone, Rede</td></tr>
    <tr><td><strong>Iniciador de pagamento</strong></td><td>Inicia transações sem gerir contas</td><td>Open Finance players</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div>Antes de iniciar operações, toda IP deve ser <strong>autorizada pelo BCB</strong>. O processo inclui análise de capacidade técnica, financeira e de governança — além da avaliação dos sócios (fit and proper test).</div>
</div>

<h2>Resolução BCB nº 80/2021 — Regulamento de IPs</h2>
<p>Esta resolução consolidou as normas aplicáveis às IPs, incluindo requisitos de:</p>
<ul>
  <li>Capital mínimo</li>
  <li>Governança e controles internos</li>
  <li>Gestão de riscos operacionais</li>
  <li>Segregação de recursos dos clientes</li>
  <li>Continuidade de negócio</li>
</ul>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Relevância para PLD:</strong> O BCB pode aplicar sanções — multas, restrições operacionais e até cassação de autorização — em caso de descumprimento das normas de PLD. O custo regulatório do não-cumprimento é altíssimo.</div>
</div>
          `
        },
        {
          id: "mod3-l2",
          title: "Circular 3.978 e Obrigações de PLD",
          duration: "11 min",
          content: `
<h2>A Principal Norma de PLD para IPs</h2>
<p>A <strong>Circular BCB nº 3.978/2020</strong> (atualizada pela Resolução BCB nº 44/2021 e posteriores) é o principal normativo que disciplina as obrigações de Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo (<strong>PLD-FT</strong>) para as instituições financeiras e de pagamento.</p>

<h2>Principais Obrigações</h2>

<h2>1. Política de PLD-FT</h2>
<p>A instituição deve ter uma <strong>política formal e aprovada pelo conselho</strong>, que contemple:</p>
<ul>
  <li>Avaliação interna de risco (AIR)</li>
  <li>Procedimentos de KYC/KYB</li>
  <li>Monitoramento de transações</li>
  <li>Comunicações ao COAF</li>
  <li>Treinamento de colaboradores</li>
</ul>

<h2>2. Avaliação Interna de Risco (AIR)</h2>
<p>A AIR é um mapeamento dos riscos de LD-FT a que a instituição está exposta, considerando:</p>
<ul>
  <li>Perfil dos clientes (estabelecimentos)</li>
  <li>Produtos e serviços oferecidos</li>
  <li>Canais de distribuição</li>
  <li>Jurisdições de atuação</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">✅</span>
  <div>A AIR deve ser revisada periodicamente e sempre que houver mudanças materiais no negócio — como a entrada em novo segmento de mercado ou lançamento de produto inédito.</div>
</div>

<h2>3. Conheça Seu Cliente (KYC / KYB)</h2>
<p>Para adquirentes, o "cliente" é o <strong>estabelecimento comercial</strong> — por isso se usa o termo <strong>KYB (Know Your Business)</strong>.</p>

<p>O KYB inclui:</p>
<ul>
  <li>Identificação e verificação da pessoa jurídica (CNPJ, contrato social)</li>
  <li>Identificação dos <strong>beneficiários finais</strong> (pessoas físicas com ≥25% do capital)</li>
  <li>Verificação de listas restritivas (OFAC, ONU, COAF)</li>
  <li>Análise do modelo de negócio e capacidade financeira</li>
  <li>Diligência aprimorada para clientes de alto risco</li>
</ul>

<h2>4. Monitoramento Contínuo</h2>
<p>O adquirente deve monitorar continuamente as transações dos estabelecimentos em busca de:</p>
<ul>
  <li>Padrões atípicos de volume ou valor</li>
  <li>Transações inconsistentes com o perfil do negócio</li>
  <li>Concentração em horários ou locais incomuns</li>
  <li>Comportamentos típicos de fraude ou lavagem</li>
</ul>

<h2>5. Comunicações ao COAF</h2>
<p>Operações suspeitas ou operações acima de determinados limites (independente de suspeita) devem ser comunicadas ao <strong>COAF</strong> via sistema eletrônico.</p>

<table class="concept-table">
  <thead><tr><th>Tipo de Comunicação</th><th>Critério</th></tr></thead>
  <tbody>
    <tr><td>Operação Suspeita</td><td>Indícios de LD-FT (sem limite de valor)</td></tr>
    <tr><td>Comunicação Obrigatória (em espécie)</td><td>Depósito em espécie acima de R$ 50 mil</td></tr>
    <tr><td>Comunicação de PEP</td><td>Operações de Pessoas Politicamente Expostas</td></tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div><strong>Sigilo da comunicação:</strong> A comunicação ao COAF é sigilosa. É proibido informar ao cliente ou a terceiros que ele foi comunicado — o chamado <strong>tipping off</strong>.</div>
</div>
          `
        },
        {
          id: "mod3-l3",
          title: "COAF e o Sistema de Inteligência Financeira",
          duration: "8 min",
          content: `
<h2>O que é o COAF?</h2>
<p>O <strong>COAF (Conselho de Controle de Atividades Financeiras)</strong> é a Unidade de Inteligência Financeira (UIF) do Brasil, criado pela Lei 9.613/1998 (Lei de Lavagem de Dinheiro).</p>

<p>Está vinculado ao <strong>Banco Central do Brasil</strong> desde 2019.</p>

<h2>Funções do COAF</h2>
<ul>
  <li><strong>Receber</strong> comunicações de operações suspeitas dos setores obrigados</li>
  <li><strong>Analisar</strong> e processar as informações recebidas</li>
  <li><strong>Disseminar</strong> relatórios de inteligência para autoridades competentes (Polícia Federal, MPF, Receita Federal)</li>
  <li><strong>Coordenar</strong> o sistema de PLD-FT brasileiro</li>
</ul>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div>O COAF não investiga crimes nem prende pessoas. Ele produz <strong>inteligência financeira</strong> e compartilha com os órgãos de persecução penal que têm poderes de investigação.</div>
</div>

<h2>Setores Obrigados a Comunicar ao COAF</h2>
<p>Além das instituições financeiras e de pagamento, devem comunicar ao COAF:</p>
<ul>
  <li>Corretoras de imóveis</li>
  <li>Joalherias e relojoarias</li>
  <li>Concessionárias de veículos</li>
  <li>Cartórios</li>
  <li>Advogados (em operações específicas)</li>
  <li>Empresas de factoring</li>
  <li>Casas de câmbio</li>
</ul>

<h2>O Relatório de Inteligência Financeira (RIF)</h2>
<p>Quando o COAF identifica padrão suspeito a partir das comunicações recebidas, produz um <strong>RIF</strong> e envia às autoridades. O RIF é sigiloso e só pode ser usado em investigações formais.</p>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Relevância para PLD:</strong> A qualidade das comunicações enviadas ao COAF importa muito. Comunicações vagas ou excessivamente amplas ("SAR spam") prejudicam a inteligência. Comunicações precisas, com contexto e documentação, têm maior valor para as investigações.</div>
</div>

<h2>Lei 9.613/1998 — Lei de Lavagem de Dinheiro</h2>
<p>Esta lei define os <strong>crimes de lavagem de dinheiro</strong> no Brasil e estabelece:</p>
<ul>
  <li>Pena de 3 a 10 anos de reclusão para lavagem de dinheiro</li>
  <li>Rol de setores obrigados à prevenção</li>
  <li>Responsabilidade administrativa das instituições</li>
  <li>Criação do COAF</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div><strong>Responsabilidade:</strong> A instituição pode responder administrativamente mesmo que não seja autora do crime de lavagem — basta ter falhado em suas obrigações de prevenção (crime omissivo).</div>
</div>
          `
        }
      ],
      quiz: {
        title: "Quiz — Módulo 3: Regulação",
        questions: [
          {
            text: "Qual lei criou a figura das Instituições de Pagamento (IPs) e atribuiu ao BCB a supervisão do setor?",
            options: [
              "Lei 9.613/1998 (Lei de Lavagem de Dinheiro)",
              "Lei 12.865/2013 (Marco Legal dos Pagamentos)",
              "Circular BCB 3.978/2020",
              "Lei 4.595/1964 (Lei do Sistema Financeiro Nacional)"
            ],
            correct: 1,
            explanation: "A Lei 12.865/2013 é o marco legal dos pagamentos no Brasil. Ela criou as Instituições de Pagamento, definiu os arranjos de pagamento e atribuiu ao BCB a supervisão do setor."
          },
          {
            text: "O que é o KYB (Know Your Business) na adquirência?",
            options: [
              "Processo de identificação e verificação do consumidor que usa o cartão",
              "Auditoria interna dos sistemas tecnológicos do adquirente",
              "Processo de identificação e verificação do estabelecimento comercial credenciado",
              "Relatório enviado mensalmente ao Banco Central sobre transações suspeitas"
            ],
            correct: 2,
            explanation: "KYB é o processo de conhecer o 'cliente' do adquirente — que é o estabelecimento comercial (EC). Inclui verificação de CNPJ, contrato social, beneficiários finais, modelo de negócio e análise de risco."
          },
          {
            text: "O que é 'tipping off' e por que é proibido?",
            options: [
              "Cobrar MDR acima do limite regulatório, prejudicando o lojista",
              "Informar ao cliente ou terceiro que ele foi objeto de comunicação ao COAF",
              "Atrasar intencionalmente a liquidação de pagamentos ao estabelecimento",
              "Compartilhar dados de clientes com concorrentes"
            ],
            correct: 1,
            explanation: "Tipping off é informar ao cliente (ou terceiros) que ele foi comunicado ao COAF ou que está sendo investigado por suspeita de lavagem. É proibido porque pode levar o investigado a destruir evidências ou fugir."
          },
          {
            text: "Qual é a função principal do COAF?",
            options: [
              "Investigar e prender suspeitos de lavagem de dinheiro",
              "Receber comunicações, produzir inteligência financeira e compartilhar com autoridades",
              "Aplicar multas aos estabelecimentos comerciais suspeitos",
              "Emitir autorizações de funcionamento para instituições de pagamento"
            ],
            correct: 1,
            explanation: "O COAF é a Unidade de Inteligência Financeira (UIF) do Brasil. Recebe comunicações, analisa, produz relatórios de inteligência (RIF) e os compartilha com PF, MPF, Receita Federal. Não investiga crimes nem tem poderes de prisão."
          },
          {
            text: "O que é a Avaliação Interna de Risco (AIR) exigida pela Circular 3.978?",
            options: [
              "Uma auditoria externa obrigatória realizada pelo Banco Central anualmente",
              "Um mapeamento dos riscos de LD-FT a que a instituição está exposta",
              "O processo de avaliação de crédito dos estabelecimentos credenciados",
              "O relatório mensal de chargebacks enviado às bandeiras"
            ],
            correct: 1,
            explanation: "A AIR (Avaliação Interna de Risco) é um mapeamento que a própria instituição deve fazer dos riscos de lavagem de dinheiro e financiamento ao terrorismo a que está exposta, considerando clientes, produtos, canais e jurisdições."
          }
        ]
      }
    },

    // ==========================================
    // MÓDULO 4
    // ==========================================
    {
      id: "mod4",
      title: "Tipologias e Red Flags",
      description: "Aprenda a identificar padrões suspeitos, tipologias de lavagem e sinais de alerta na adquirência.",
      icon: "🔍",
      color: "#f59e0b",
      lessons: [
        {
          id: "mod4-l1",
          title: "Principais Tipologias de Lavagem em Adquirência",
          duration: "11 min",
          content: `
<h2>O que são Tipologias?</h2>
<p>Tipologias são <strong>padrões e técnicas conhecidos</strong> utilizados para lavar dinheiro ou financiar o terrorismo. Conhecer tipologias ajuda os profissionais de PLD a identificar comportamentos suspeitos mesmo quando não há certeza absoluta de crime.</p>

<div class="callout tip">
  <span class="callout-icon">✅</span>
  <div>O COAF publica periodicamente relatórios de tipologias identificadas no Brasil. São fontes valiosas de estudo para qualquer profissional de PLD.</div>
</div>

<h2>Tipologia 1 — Empresa Laranja (Shell EC)</h2>
<p>Um estabelecimento comercial é aberto (ou usado) exclusivamente para processar transações fictícias e "lavar" recursos ilícitos como se fossem receitas legítimas de vendas.</p>
<ul>
  <li>Empresa credenciada com CNPJ válido mas sem atividade comercial real</li>
  <li>Volume de transações inconsistente com o porte ou localização</li>
  <li>Baixa variedade de portadores (sempre os mesmos cartões)</li>
  <li>Ausência de chargeback (transações são combinadas)</li>
</ul>

<h2>Tipologia 2 — Fracionamento (Smurfing)</h2>
<p>Divisão de grandes valores em múltiplas transações menores para evitar monitoramento automático e comunicações obrigatórias.</p>
<ul>
  <li>Sequência de transações ligeiramente abaixo de limites de alerta</li>
  <li>Mesmo portador em múltiplos estabelecimentos no mesmo dia</li>
  <li>Padrão repetitivo com valores próximos</li>
</ul>

<h2>Tipologia 3 — MCC Washing</h2>
<p>Credenciar um negócio de alto risco com um MCC de baixo risco para contornar restrições e monitoramento.</p>
<ul>
  <li>Casa de câmbio informal credenciada como mercearia (MCC 5411)</li>
  <li>Cassino ilegal registrado como restaurante (MCC 5812)</li>
  <li>Atividade real é incompatível com o MCC declarado</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div><strong>Atenção:</strong> O credenciamento incorreto de MCC é uma responsabilidade do adquirente. As bandeiras podem multar pesadamente o adquirente por MCC incorreto — além do risco regulatório de PLD.</div>
</div>

<h2>Tipologia 4 — Triangulação</h2>
<p>Esquema em que um site fraudulento vende produtos (que não possui), usa o cartão do consumidor para comprar em site legítimo e entrega o produto — ficando com o recurso lavado.</p>

<h2>Tipologia 5 — Split de Pagamentos Abusivo</h2>
<p>Plataformas de marketplace que dividem pagamentos entre múltiplos recebedores podem ser usadas para distribuir recursos ilícitos para diversas contas, dificultando o rastreamento.</p>

<h2>Tipologia 6 — Uso de PEP como Sócio Oculto</h2>
<p>Pessoa Politicamente Exposta (PEP) usa nome de terceiros (laranjas) para ser beneficiária final de estabelecimentos comerciais, evitando sua identificação nos processos de KYB.</p>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Ponto crítico:</strong> A identificação do beneficiário final real (não apenas o sócio formal) é um dos pilares mais importantes do KYB. Estruturas societárias complexas ou offshore são red flags de ocultação.</div>
</div>
          `
        },
        {
          id: "mod4-l2",
          title: "Red Flags — Sinais de Alerta",
          duration: "10 min",
          content: `
<h2>O que são Red Flags?</h2>
<p>Red flags são <strong>indicadores de suspeita</strong> — comportamentos, padrões ou características que, sozinhos ou combinados, sugerem possível envolvimento em lavagem de dinheiro ou fraude. Eles não são prova de crime, mas exigem investigação e, eventualmente, comunicação ao COAF.</p>

<h2>Red Flags no Credenciamento</h2>
<ul>
  <li>Sócios com restrições em listas (OFAC, ONU, COAF)</li>
  <li>Endereço do estabelecimento inexistente ou residencial incompatível</li>
  <li>CNPJ recém-aberto com alto volume de transações projetado</li>
  <li>Beneficiário final não identificável</li>
  <li>Documentação inconsistente ou adulterada</li>
  <li>Refuga às perguntas de KYB, fornece informações contraditórias</li>
  <li>Procurador com poderes amplos e sócio com pouco envolvimento</li>
</ul>

<h2>Red Flags nas Transações</h2>
<ul>
  <li>Volume de vendas incompatível com o porte/localização do negócio</li>
  <li>Transações em horários atípicos (madrugada em padaria, por exemplo)</li>
  <li>Alta concentração de transações com valor próximo mas não idêntico</li>
  <li>Mesmo CPF comprando repetidamente em curtos intervalos</li>
  <li>Aumento súbito e sem explicação no volume de transações</li>
  <li>Taxa de chargeback anormalmente baixa (transações fictícias não são contestadas)</li>
  <li>Uso excessivo de modalidade de alto risco (digitado/CNP) sem ser e-commerce</li>
  <li>Transações em feriados ou períodos em que o negócio deveria estar fechado</li>
</ul>

<h2>Red Flags nos Clientes (Portadores)</h2>
<ul>
  <li>Mesmo portador em múltiplos estabelecimentos do mesmo titular</li>
  <li>Portadores que parecem não conhecer os produtos "comprados"</li>
  <li>Concentração de portadores de uma única região distante do EC</li>
</ul>

<h2>Red Flags no Comportamento do Estabelecimento</h2>
<ul>
  <li>Recusa em fornecer documentação de origem das mercadorias</li>
  <li>Solicitação frequente de antecipação de recebíveis logo após o credenciamento</li>
  <li>Mudança repentina no tipo de produto/serviço sem comunicação ao adquirente</li>
  <li>Contato exclusivamente por representante (nunca o sócio diretamente)</li>
</ul>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Importante:</strong> Nenhum red flag isolado é suficiente para uma conclusão. A análise deve considerar o conjunto de sinais, o contexto do negócio e a capacidade de o estabelecimento explicar os padrões observados.</div>
</div>

<h2>Matriz de Risco</h2>
<p>Adquirentes utilizam <strong>matrizes de risco</strong> para classificar estabelecimentos em categorias (baixo, médio, alto risco), combinando fatores como:</p>
<ul>
  <li>Setor de atuação (MCC)</li>
  <li>Localização geográfica</li>
  <li>Porte e tempo de operação</li>
  <li>Perfil dos sócios</li>
  <li>Histórico de transações e chargebacks</li>
</ul>
          `
        },
        {
          id: "mod4-l3",
          title: "Monitoramento de Transações e Investigação",
          duration: "10 min",
          content: `
<h2>Como Funciona o Monitoramento</h2>
<p>O monitoramento de transações é o processo contínuo de análise das operações processadas em busca de padrões suspeitos. É realizado por <strong>sistemas automatizados</strong> (regras e modelos de ML) e, para casos escalados, por <strong>analistas humanos</strong>.</p>

<h2>Camadas do Monitoramento</h2>

<div class="flow-steps">
  <div class="flow-step">
    <div class="flow-step-num">1</div>
    <div class="flow-step-content">
      <strong>Regras de Negócio (Rules Engine)</strong>
      Alertas parametrizados: ex. "transação acima de R$ 50k", "mais de X transações em 1h". Geram alto volume de alertas.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">2</div>
    <div class="flow-step-content">
      <strong>Modelos Estatísticos e ML</strong>
      Detectam desvios do perfil histórico do estabelecimento. Mais precisos, menos falsos positivos.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">3</div>
    <div class="flow-step-content">
      <strong>Triagem de Alertas</strong>
      Analistas de primeiro nível avaliam os alertas gerados e decidem: encerrar (falso positivo) ou escalar.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">4</div>
    <div class="flow-step-content">
      <strong>Investigação Aprofundada</strong>
      Analistas sênior investigam casos escalados, coletam documentação, fazem due diligence adicional.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">5</div>
    <div class="flow-step-content">
      <strong>Decisão: Comunicar ao COAF, Encerrar, ou Monitorar</strong>
      Com base na investigação, a equipe de PLD decide a ação. Comunicações ao COAF são feitas quando há suspeita fundamentada.
    </div>
  </div>
</div>

<h2>Processo de Investigação (SAR/ROS)</h2>
<p>Quando um caso é escalado para investigação, o analista deve:</p>
<ol>
  <li>Levantar o histórico completo de transações do estabelecimento</li>
  <li>Verificar atualizações cadastrais e docuementos de KYB</li>
  <li>Checar listas restritivas para sócios e beneficiários finais</li>
  <li>Analisar fontes abertas (CNPJ, redes sociais, notícias)</li>
  <li>Solicitar esclarecimentos ao estabelecimento (com cautela para não configurar tipping off)</li>
  <li>Documentar todo o raciocínio analítico</li>
</ol>

<div class="callout tip">
  <span class="callout-icon">✅</span>
  <div><strong>Documentação é fundamental:</strong> Toda a trilha de investigação deve ser registrada. Em caso de fiscalização do BCB, a instituição precisa demonstrar que tomou as providências adequadas — e a documentação é a prova disso.</div>
</div>

<h2>Descredenciamento por Suspeita de PLD</h2>
<p>Quando a investigação aponta para envolvimento do estabelecimento em atividade ilícita, o adquirente pode (e deve) realizar o <strong>descredenciamento</strong>. O processo envolve:</p>
<ul>
  <li>Encerramento do contrato de credenciamento</li>
  <li>Comunicação ao COAF (se houver suspeita de LD-FT)</li>
  <li>Retenção de valores pendentes (se houver base legal)</li>
  <li>Possível comunicação às autoridades competentes</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div>O descredenciamento não isenta a instituição de comunicar ao COAF. Se houve suspeita de LD-FT, a comunicação é obrigatória independentemente do desfecho da relação comercial.</div>
</div>
          `
        }
      ],
      quiz: {
        title: "Quiz — Módulo 4: Tipologias e Red Flags",
        questions: [
          {
            text: "O que é 'MCC Washing'?",
            options: [
              "Processo de limpeza e atualização dos MCCs no cadastro das bandeiras",
              "Credenciar um negócio de alto risco com um MCC de baixo risco para contornar restrições",
              "Prática de lavar cartões físicos para reutilização",
              "Técnica de monitoramento baseada em análise de MCC"
            ],
            correct: 1,
            explanation: "MCC Washing é credenciar um negócio de alto risco (como cassino ou câmbio informal) com um MCC de baixo risco (como mercearia ou restaurante) para evitar restrições das bandeiras e burlar o monitoramento de PLD."
          },
          {
            text: "Qual das opções a seguir é um red flag durante o credenciamento de um novo estabelecimento?",
            options: [
              "Sócio com mais de 10 anos de experiência no setor",
              "Estabelecimento com CNPJ aberto há mais de 5 anos",
              "Beneficiário final não identificável ou com estrutura societária obscura",
              "Volume de transações projetado compatível com o porte do negócio"
            ],
            correct: 2,
            explanation: "A impossibilidade de identificar o beneficiário final real é um forte sinal de alerta. Estruturas societárias complexas ou uso de laranjas para ocultar o verdadeiro dono são técnicas comuns de lavagem de dinheiro."
          },
          {
            text: "O que é 'smurfing' no contexto de lavagem de dinheiro?",
            options: [
              "Uso de identidades falsas para abertura de contas bancárias",
              "Divisão de grandes valores em múltiplas transações menores para evitar monitoramento",
              "Transferência de recursos para paraísos fiscais",
              "Uso de criptomoedas para ocultar a origem dos recursos"
            ],
            correct: 1,
            explanation: "Smurfing (ou fracionamento) é a técnica de dividir grandes quantias em múltiplas transações menores, geralmente ligeiramente abaixo dos limites de monitoramento automático, para evitar a detecção."
          },
          {
            text: "Uma padaria registra alto volume de transações entre 2h e 4h da manhã. Isso é:",
            options: [
              "Normal, pois padarias funcionam de madrugada",
              "Um red flag de horário atípico que merece investigação",
              "Apenas um sinal de expansão de horário de funcionamento",
              "Irrelevante para análise de PLD"
            ],
            correct: 1,
            explanation: "Transações em horários incompatíveis com a atividade declarada são um red flag clássico. Uma padaria pode abrir cedo, mas transações eletrônicas em massa de madrugada (2h-4h) são atípicas e merecem investigação."
          },
          {
            text: "Por que uma taxa de chargeback anormalmente BAIXA pode ser um red flag em PLD?",
            options: [
              "Porque indica que os clientes estão insatisfeitos",
              "Porque nas transações fictícias entre contas combinadas, ninguém contesta a cobrança",
              "Porque o adquirente deixa de receber receita de disputa",
              "Porque as bandeiras exigem mínimo de chargebacks para manter o credenciamento"
            ],
            correct: 1,
            explanation: "Em transações fictícias (como em empresa laranja), o próprio titular do cartão usa o cartão e sabe da operação — então nunca contesta. Uma taxa de chargeback próxima de zero pode indicar que as transações são combinadas/fictícias, sem cliente real insatisfeito."
          }
        ]
      }
    },

    // ==========================================
    // MÓDULO 5
    // ==========================================
    {
      id: "mod5",
      title: "PLD Aplicada — Casos Práticos",
      description: "Consolide o aprendizado com casos práticos, estudos de situação e boas práticas de PLD na adquirência.",
      icon: "🎓",
      color: "#10b981",
      lessons: [
        {
          id: "mod5-l1",
          title: "Caso Prático 1 — A Empresa Fantasma",
          duration: "10 min",
          content: `
<h2>Estudo de Caso: "Delícias do Norte Ltda."</h2>

<div class="callout info">
  <span class="callout-icon">📋</span>
  <div>Este é um caso fictício para fins educacionais, inspirado em tipologias reais documentadas pelo COAF e BCB.</div>
</div>

<h2>Contexto</h2>
<p>A <strong>"Delícias do Norte Ltda."</strong> solicitou credenciamento como restaurante (MCC 5812) em uma cidade do interior do Pará. Os dados fornecidos:</p>
<ul>
  <li>CNPJ aberto há 3 meses</li>
  <li>Sócia única: Maria das Graças, 67 anos, beneficiária de INSS</li>
  <li>Volume projetado: R$ 800.000/mês</li>
  <li>Endereço: rua residencial, casa simples</li>
  <li>Representante no credenciamento: sobrinho, com procuração ampla</li>
</ul>

<h2>Sinais de Alerta Identificados</h2>
<ul>
  <li>🚩 Volume projetado (R$ 800k/mês) incompatível com restaurante em endereço residencial</li>
  <li>🚩 CNPJ muito recente (3 meses)</li>
  <li>🚩 Sócia idosa, beneficiária de INSS — improvável gerir negócio de tal volume</li>
  <li>🚩 Sobrinho com procuração ampla como único contato — sócio real pode ser outro</li>
  <li>🚩 Endereço residencial incompatível com restaurante de alto volume</li>
</ul>

<h2>O que Deveria ser Feito?</h2>

<div class="flow-steps">
  <div class="flow-step">
    <div class="flow-step-num">1</div>
    <div class="flow-step-content">
      <strong>Diligência Aprimorada no KYB</strong>
      Exigir visita ao local, fotos do estabelecimento, alvará de funcionamento, cardápio, evidências de atividade real.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">2</div>
    <div class="flow-step-content">
      <strong>Investigar o Beneficiário Final Real</strong>
      Quem é o sobrinho? Tem relacionamento com outras empresas suspeitas? Há outros sócios não declarados?
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">3</div>
    <div class="flow-step-content">
      <strong>Verificar Listas Restritivas</strong>
      Consultar COAF, OFAC, PEP, CPF da sócia e do representante.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">4</div>
    <div class="flow-step-content">
      <strong>Decisão Fundamentada</strong>
      Com base na diligência, recusar o credenciamento e comunicar ao COAF se houver suspeita de LD-FT.
    </div>
  </div>
</div>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Lição-chave:</strong> O credenciamento é o primeiro — e mais importante — ponto de controle. Um KYB rigoroso evita que o adquirente seja usado como instrumento de lavagem de dinheiro desde o início da relação.</div>
</div>
          `
        },
        {
          id: "mod5-l2",
          title: "Caso Prático 2 — Padrão Transacional Suspeito",
          duration: "10 min",
          content: `
<h2>Estudo de Caso: "Auto Peças JK"</h2>

<h2>Contexto</h2>
<p>A <strong>"Auto Peças JK"</strong> é uma loja de autopeças credenciada há 8 meses. Nos primeiros 6 meses, processou em média R$ 40.000/mês com ticket médio de R$ 120. No 7º mês, o sistema de monitoramento gerou um alerta:</p>

<ul>
  <li>Volume saltou para R$ 380.000 no mês</li>
  <li>Ticket médio subiu para R$ 4.200</li>
  <li>83% das transações foram realizadas entre 18h e 22h</li>
  <li>42 CPFs únicos respondem por 91% das transações</li>
  <li>Taxa de chargeback: 0%</li>
  <li>Todas as transações: crédito à vista, captura por chip</li>
</ul>

<h2>Análise dos Alertas</h2>

<table class="concept-table">
  <thead><tr><th>Indicador</th><th>Normal (Meses 1-6)</th><th>Suspeito (Mês 7)</th></tr></thead>
  <tbody>
    <tr><td>Volume mensal</td><td>R$ 40k</td><td><strong>R$ 380k (+850%)</strong></td></tr>
    <tr><td>Ticket médio</td><td>R$ 120</td><td><strong>R$ 4.200 (+3.400%)</strong></td></tr>
    <tr><td>Horário de pico</td><td>8h-17h</td><td><strong>18h-22h</strong></td></tr>
    <tr><td>Chargeback</td><td>0,8%</td><td><strong>0%</strong></td></tr>
    <tr><td>Concentração</td><td>Variada</td><td><strong>42 CPFs = 91%</strong></td></tr>
  </tbody>
</table>

<h2>Hipóteses de Investigação</h2>
<ul>
  <li><strong>H1:</strong> Empresa laranja — transações fictícias para simular vendas</li>
  <li><strong>H2:</strong> Subfaturamento anterior + pico real agora (ex: obteve grande contrato)</li>
  <li><strong>H3:</strong> Uso indevido da maquininha para processar vendas de outro negócio</li>
</ul>

<h2>Passos da Investigação</h2>

<div class="flow-steps">
  <div class="flow-step">
    <div class="flow-step-num">1</div>
    <div class="flow-step-content">
      <strong>Contatar o estabelecimento</strong>
      Solicitar explicação para o aumento, documentação de vendas (notas fiscais), contratos que justifiquem o volume.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">2</div>
    <div class="flow-step-content">
      <strong>Analisar os 42 CPFs</strong>
      Verificar se são clientes legítimos ou se há concentração suspeita. Checar listas restritivas.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">3</div>
    <div class="flow-step-content">
      <strong>Cruzar com informações externas</strong>
      Consultar CNPJ, verificar se tem nota fiscal eletrônica emitida compatível com o volume, pesquisar em fontes abertas.
    </div>
  </div>
  <div class="flow-step">
    <div class="flow-step-num">4</div>
    <div class="flow-step-content">
      <strong>Decisão</strong>
      Se não houver justificativa plausível: suspender o credenciamento, comunicar ao COAF, reter eventuais valores.
    </div>
  </div>
</div>

<div class="callout pld">
  <span class="callout-icon">🔍</span>
  <div><strong>Lição-chave:</strong> Mudanças abruptas no perfil transacional de um estabelecimento sem explicação comercial plausível são um dos alertas mais confiáveis de uso indevido da maquininha. O histórico de comportamento do próprio EC é a melhor linha de base de comparação.</div>
</div>
          `
        },
        {
          id: "mod5-l3",
          title: "Boas Práticas e Carreira em PLD",
          duration: "8 min",
          content: `
<h2>As Boas Práticas Fundamentais em PLD</h2>

<h2>1. Abordagem Baseada em Risco (RBA)</h2>
<p>A regulação exige que as instituições adotem uma <strong>Abordagem Baseada em Risco</strong>: concentrar mais esforços de monitoramento onde os riscos são maiores, sem tratar todos os clientes igualmente.</p>

<div class="callout tip">
  <span class="callout-icon">✅</span>
  <div>Clientes de baixo risco têm processo de KYB simplificado; clientes de alto risco têm diligência aprimorada (Enhanced Due Diligence). Isso torna o processo mais eficiente sem reduzir a proteção.</div>
</div>

<h2>2. Cultura de PLD na Organização</h2>
<p>PLD não é responsabilidade apenas da equipe de compliance. Uma cultura eficaz envolve:</p>
<ul>
  <li><strong>Tone from the top:</strong> liderança sênior comprometida publicamente com PLD</li>
  <li>Treinamentos regulares para todas as áreas</li>
  <li>Canal de denúncia interno (whistleblowing) seguro e anônimo</li>
  <li>Incentivos alinhados (não apenas metas de volume, mas de qualidade de KYB)</li>
</ul>

<h2>3. Qualidade das Comunicações ao COAF</h2>
<p>Uma comunicação eficaz ao COAF deve incluir:</p>
<ul>
  <li>Descrição clara e objetiva dos fatos suspeitos</li>
  <li>Linha do tempo das transações</li>
  <li>Contexto do perfil do estabelecimento</li>
  <li>Por que a hipótese de lavagem é plausível</li>
  <li>Documentação de suporte</li>
</ul>

<h2>4. Atualização Contínua do KYB</h2>
<p>O KYB não termina no credenciamento. Deve ser revisado:</p>
<ul>
  <li>Periodicamente (pelo menos anualmente para alto risco)</li>
  <li>Quando há mudança de sócios, endereço ou atividade</li>
  <li>Quando alertas de monitoramento são acionados</li>
  <li>Quando há notícias negativas sobre o estabelecimento</li>
</ul>

<h2>Construindo Carreira em PLD</h2>

<table class="concept-table">
  <thead><tr><th>Área</th><th>O que Desenvolver</th></tr></thead>
  <tbody>
    <tr><td><strong>Conhecimento Regulatório</strong></td><td>Acompanhar publicações do BCB, COAF, FATF e notícias do setor</td></tr>
    <tr><td><strong>Análise de Dados</strong></td><td>Interpretar dashboards, entender alertas, identificar padrões</td></tr>
    <tr><td><strong>Escrita Analítica</strong></td><td>Redigir RASs (Relatórios de Análise de Suspeita) claros e fundamentados</td></tr>
    <tr><td><strong>Certificações</strong></td><td>CAMS (ACAMS), CFE (ACFE), especializações em compliance financeiro</td></tr>
    <tr><td><strong>Networking</strong></td><td>ACAMS Brasil, Febraban, grupos de discussão de compliance</td></tr>
  </tbody>
</table>

<div class="callout pld">
  <span class="callout-icon">🎓</span>
  <div><strong>Parabéns, Lívia!</strong> Você chegou ao final do conteúdo do curso. A PLD em adquirência é uma área em constante evolução — novos esquemas surgem com cada inovação tecnológica. Continue estudando, questione padrões, e confie na sua análise. O trabalho que você faz protege o sistema financeiro e a sociedade.</div>
</div>
          `
        }
      ],
      quiz: {
        title: "Quiz Final — Módulo 5: Casos Práticos",
        questions: [
          {
            text: "No caso 'Delícias do Norte', o principal red flag estrutural era:",
            options: [
              "O MCC de restaurante escolhido",
              "A sócia ter mais de 60 anos",
              "Volume projetado de R$ 800k/mês incompatível com restaurante em endereço residencial",
              "O pagamento de INSS pela sócia"
            ],
            correct: 2,
            explanation: "O principal red flag é a incompatibilidade entre o volume projetado (R$ 800k/mês) e a natureza/localização do negócio (restaurante em casa residencial simples). Isso indica que a atividade declarada provavelmente não é a real."
          },
          {
            text: "No caso 'Auto Peças JK', por que a taxa de chargeback ZERO no mês 7 é suspeita?",
            options: [
              "Porque todo estabelecimento deve ter pelo menos 1% de chargeback",
              "Porque indica que os portadores nunca recebem seus produtos",
              "Porque sugere que não há clientes reais contestando — as transações podem ser fictícias e combinadas",
              "Porque o emissor parou de processar chargebacks automaticamente"
            ],
            correct: 2,
            explanation: "Em transações legítimas com alto volume, é estatisticamente esperado algum chargeback. Zero chargebacks combinado com outros alertas (volume atípico, CPFs concentrados) sugere que não há clientes reais — as transações podem ser fictícias, realizadas por participantes que sabem do esquema e não contestam."
          },
          {
            text: "O que é a Abordagem Baseada em Risco (RBA) em PLD?",
            options: [
              "Aplicar o mesmo nível de diligência a todos os clientes, sem distinção",
              "Concentrar esforços de monitoramento proporcionalmente ao nível de risco de cada cliente",
              "Focar apenas em clientes com histórico criminal",
              "Usar apenas ferramentas tecnológicas sem análise humana"
            ],
            correct: 1,
            explanation: "A RBA determina que a intensidade dos controles de PLD deve ser proporcional ao risco apresentado. Clientes de baixo risco têm KYB simplificado; alto risco têm diligência aprimorada. Isso torna o programa mais eficiente e eficaz."
          },
          {
            text: "O que deve constar em uma comunicação de qualidade ao COAF?",
            options: [
              "Apenas o valor total das transações suspeitas",
              "Somente a identificação do estabelecimento e o CPF dos sócios",
              "Descrição clara dos fatos, linha do tempo, contexto do perfil e por que a hipótese de lavagem é plausível",
              "Apenas a cópia dos extratos bancários do estabelecimento"
            ],
            correct: 2,
            explanation: "Uma comunicação eficaz ao COAF deve ser analítica, não apenas descritiva. Deve incluir os fatos, o contexto, a linha do tempo e a fundamentação da suspeita — para que o COAF possa produzir inteligência útil às autoridades."
          },
          {
            text: "Com que frequência o KYB de estabelecimentos de ALTO risco deve ser revisado?",
            options: [
              "Apenas no credenciamento inicial",
              "A cada 5 anos",
              "Apenas quando o estabelecimento solicita aumento de limite",
              "Pelo menos anualmente, além de em eventos gatilho (mudança de sócios, alertas, notícias negativas)"
            ],
            correct: 3,
            explanation: "O KYB é um processo contínuo, não pontual. Para clientes de alto risco, a revisão deve ocorrer pelo menos anualmente e sempre que houver eventos gatilho: mudança de sócios, ativação de alertas de monitoramento, notícias negativas ou mudança na atividade."
          }
        ]
      }
    }
  ]
};
