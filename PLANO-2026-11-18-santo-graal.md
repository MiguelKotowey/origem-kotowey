# Plano de atualização do site — achado do "santo graal" (18/11/2026)

> Este arquivo é um plano de execução pra uma sessão de IA sem contexto prévio desta conversa. Antes de tocar em qualquer página, leia `VOZ.MD` (tom/voz) e `PAGINAS.MD` (escopo de cada página) — ambos na raiz deste repositório. Siga os dois à risca.

## Contexto (resumo do achado, pra quem for executar)

Em 17/11/2026 chegaram os scans de dois registros de nascimento do Arquivo Estadual de Ternopil (ДАТО), lavrados na aldeia de **Proniatyn**, Galícia:

1. **Nicolau (Mykola) Kutovy**, nascido **04/12/1889**, casa 43. Pais no registro: *Demetrius Kutowyj, "filius Joannis" (filho de Joannes/Ivan)* e *Barbara, "filia Michaelis Wawron"* (filha de Michael Wawron).
2. **Evdóxia (Eudoxia) Kutova**, nascida **07/01/1895**. Pais: *Demetrius Kutowyj* e *Barbara "nata Wawron"* (nascida Wawron).

**Dois achados:**
- **Sobrenome de solteira da Bárbara = WAWRON**, confirmado por documento primário — converge com 5 grafias brasileiras já conhecidas (Waurin, Wauru, Waurow, Haurin, Naucin). **Pai dela: Michael Wawron.**
- **Divergência sobre o pai do Demétrio:** uma fonte brasileira antiga dizia "Miguel Kotovey"; este documento galiciano diz "Joannes/Ivan Kutowyj". **Miguel (o pesquisador) decidiu priorizar a fonte galiciana** (primária, contemporânea) sobre a brasileira (relato secundário, décadas depois) — adotar **"Ivan/Joannes"** como o nome corrente, **sem apagar "Miguel" da documentação** (ele deve aparecer como hipótese anterior, não como erro).

Fonte completa, com transcrição literal do documento: vault `👤 Pessoas/Varvara Kutovy.md`, `👤 Pessoas/Dmytro Kutovy.md` e `📄 Fontes/Ofício ДАТО 381-04-14 (2026-08-05) - Nascimentos de Mykola e Evdokia Kotowey.md`. Leia essas três notas inteiras antes de escrever qualquer texto novo pro site.

---

## 1. `diario.html`

**Escopo (ver PAGINAS.MD):** diário é a história da pesquisa em si, na ordem da descoberta — não é o fato de vida da família.

- Adicionar uma entrada nova, datada **17/11/2026** (data em que os scans chegaram — é quando "nós" descobrimos, não a data do ofício em agosto).
- Conteúdo da entrada (seguir `VOZ.MD`: sujeito é a descoberta, não o pesquisador; "foi localizado", não "eu localizei"):
  - O recebimento dos registros de nascimento de Nicolau e Evdóxia.
  - A confirmação do sobrenome Wawron.
  - A divergência sobre o pai do Demétrio, contada como parte honesta do processo (a VOZ.MD não proíbe mostrar incerteza — proíbe inventar certeza).
- **Não incluir:** logística de pagamento, qual banco foi usado, taxas — isso não pertence ao site (regra do PAGINAS.MD).
- Badge/marcação: se o diário já usa `tag doc` pra achados confirmados por documento, usar aqui também.

## 2. `arvore.html` + `perfil-dados.js`

**Escopo:** cada card/perfil traz os dados da pessoa, campo a campo, sem narrativa de como foi descoberto (isso é o diário).

- **Perfil da Bárbara (`barbara` em `perfil-dados.js`):**
  - Trocar o campo que hoje provavelmente diz "sobrenome de solteira — hipótese" por algo como `["Sobrenome de solteira", "Wawron"]` (sem "hipótese").
  - Adicionar campo `["Pai", "Michael Wawron"]` se o molde de campos permitir.
  - Rever o `q` (score de qualidade) — subiu `doc` em pelo menos +1 (novo documento primário confirmando). Ver fórmula em `vault/🔬 Pesquisa/Qualidade do Registro (métrica).md`.
- **Perfil do Demétrio (`demetrio` em `perfil-dados.js`):**
  - Campo "Pai": usar **"Ivan (Joannes) Kutowyj"** como valor adotado. Se o molde de card aceitar observação/rodapé discreto (ver `VOZ.MD`, seção "Observações no rodapé, em cor discreta — nunca na linha azul"), pode anotar algo como "fonte brasileira anterior indicava Miguel" — sem alarde, só honestidade.
  - Local de nascimento: confirmar **Proniatyn** (casa 43) em vez de "Galícia (localidade desconhecida)".
- **Perfis do Nicolau e da Evdóxia:** já devem estar com a data certa (04/12/1889 e 07/01/1895) de uma atualização anterior (13/11/2026) — conferir se ainda está assim, só por garantia.

## 3. `familias.html`

**Escopo:** sobrenomes que entraram na família por casamento, por grau.

- Tem uma seção "Sobrenome de solteira · hipótese em investigação" com um card "Wawron / Waurin" marcado como "Hipótese ativa". **Atualizar esse card:**
  - Tirar "hipótese em investigação" — mover pra seção normal de sobrenomes (ou manter em seção própria, mas com status "Confirmado").
  - Trocar o texto do card pra refletir a confirmação: "Sobrenome de solteira de Bárbara Kotovey — confirmado por documento primário galiciano (registro de nascimento do filho Nicolau, Proniatyn, 1889)."
  - Pai: Michael Wawron.

## 4. `documentos.html`

**Escopo:** fontes primárias citáveis, uma por card, com link pra imagem/PDF.

- Adicionar um card novo na lista principal `DOCS` (não em `POSSIVEIS` — esse documento tem ligação comprovada com a família):
  - Fonte: "Державний архів Тернопільської області (ДАТО) — Arquivo Estadual do Oblast de Ternopil"
  - Título: "Registros de nascimento de Nicolau e Evdóxia Kotovey — Proniatyn, 1889 e 1895"
  - Descrição: menciona os nomes dos pais (Demétrio e Bárbara), a aldeia (Proniatyn), e que o documento confirma o sobrenome de solteira da Bárbara (Wawron).
  - **Antes de linkar o PDF**, copiar o arquivo de `docs/email_resposta/381)04-14.pdf` (no repositório principal `Familia_Kotowey`, fora deste repo do site) pra dentro de `documentos/` deste site, com um nome de arquivo mais limpo (ex.: `documentos/dato/registro_nascimento_nicolau_evdokia_1889_1895.pdf`). **Confirmar com Miguel antes de publicar esse PDF publicamente** — ele pode conter informação sensível que não deveria ser 100% pública, ou pode preferir recortar só a página do registro (sem a fatura/dados bancários, que estão no mesmo PDF original do repositório principal — NÃO publicar a página da fatura com dados bancários do arquivo ucraniano).

---

## Checklist final antes de publicar

- [ ] Reli `VOZ.MD` e `PAGINAS.MD` antes de escrever
- [ ] Nenhuma menção a pagamento/banco/taxa em nenhuma página pública
- [ ] Divergência Miguel/Ivan tratada com honestidade, sem fingir certeza que não existe
- [ ] PDF do ofício, se publicado em `documentos.html`, **sem a página da fatura/dados bancários**
- [ ] `q` (qualidade do registro) da Bárbara e do Demétrio revisado
- [ ] Commit no repositório `origem-kotowey` (é separado do `Familia_Kotowey` — tem remoto próprio)
- [ ] Atualizar `ATUALIZACOES` no topo do `app.js` com uma entrada nova (tipo `achado`) descrevendo essa atualização — isso também atualiza automaticamente o rodapé "Última atualização"
