/* Dados das pessoas. Relações são relativas ao casal fundador — nunca ao pesquisador.
   q = métrica de qualidade do registro: conc (dados concretos/documentados),
   hip (dados hipotéticos/aproximados), doc (documentos-fonte). Rubrica: ver
   vault → 🔬 Pesquisa/Qualidade do Registro (métrica).md */
window.PESSOAS = {
  "miguel-kotovieg": {
    nome: "Miguel Kotovieg", orig: "Михайло Кутовий (provável)",
    rel: "Tetravô de Miguel. Pai de Demétrio. Viveu e faleceu na Galícia antes da emigração.",
    q: { conc: 0, hip: 1, doc: 1 },
    campos: [
      ["Origem", "Galícia — Áustria-Hungria (hoje Ucrânia ocidental)"],
      ["Falecimento", "antes de ≈ 1900 (inferido)"],
      ["Esposa", "Anna \[sobrenome ilegível\]"],
      ["Filho", "Demétrio Kotovey"],
    ],
    nota: "Identificado no registro de nascimento de Demétrio filho (~1900) como avô paterno: \"avós paternos Miguel Kotovieg e Anna \[ilegível\], falecidos\". O sobrenome da esposa Anna está ilegível no documento — pode ser a chave para rastrear a família na Galícia.",
  },
  demetrio: {
    nome: "Demétrio Kotovey", orig: "Dmytro Kutovy · Дмитро Кутовий",
    rel: "Casal fundador da linha pesquisada. Emigrou da Galícia em 1895.",
    q: { conc: 2, hip: 3, doc: 3 },
    campos: [
      ["Nascimento", "≈ 1854"], ["Falecimento", "≈ 1904"],
      ["Local de nascimento", "Galícia — Áustria-Hungria (hoje Ucrânia ocidental)"],
      ["Pai", "Miguel Kotovieg"], ["Mãe", "Anna \[sobrenome ilegível\]"],
      ["Casado com", "Bárbara"],
      ["Sepultamento", "Não localizado — hipótese: Cemitério dos Palhanos"],
    ],
    nota: "O local de sepultamento de Demétrio é uma questão em aberto. Por ter falecido em 1904, pode estar em cemitério distinto do de Bárbara. <b>Hipótese não verificada.</b>",
    docs: '<a class="btn" href="documentos.html#cemiterio-palhano">Recorte de jornal — cemitério →</a>',
  },
  barbara: {
    nome: "Bárbara (ou Baltina) Kotovey", orig: "Varvara Kutovy · Варвара Котовий",
    rel: "Casal fundador da linha pesquisada. Túmulo localizado e visitado.",
    q: { conc: 4, hip: 2, doc: 4 },
    campos: [
      ["Nascimento", "≈ 1857–1861"], ["Falecimento", "09/07/1927 · Campo Largo — PR"],
      ["Local de nascimento", "Galícia — Áustria-Hungria (hoje Ucrânia ocidental)"],
      ["Casada com", "Demétrio"],
      ["Também registrada como", "Baltina · Beltina"],
      ["Sobrenome de solteira", "Wawron / Waurin — hipótese principal (2 documentos primários independentes)"],
      ["Pais prováveis", "Miguel Wawron e Maria Wawron"],
      ["Túmulo", "Cemitério da Igreja Assunção de N. Sra., Araucária ✓"],
      ["Inscrição", "ВАРВАРА КОТОВИЙ (ucraniano)"],
    ],
    docs: '<a class="btn" href="galeria.html">Fotos do túmulo →</a><a class="btn" href="documentos.html">Registro de óbito →</a>',
  },
  anna: {
    nome: "Anna Kotovey (Brecailo)", rel: "Filha de Demétrio e Bárbara — nascida na Galícia (hoje Ucrânia ocidental).",
    q: { conc: 5, hip: 1, doc: 5 },
    campos: [
      ["Nascimento", "≈ 1884 · Galícia (estimativa — sem certidão primária)"],
      ["Natural de", "Ucrânia — confirmado por documento primário (reg. óbito, 1980)"],
      ["Casamento", "23/05/1908 · Campo Largo — PR"],
      ["Casada com", "Miguel Brecailo"],
      ["Identificação completa", "\"Anna Kotovey Brykailo\" — declarada pelo próprio Miguel no casamento de Alice (1945)"],
      ["Filhos", "10 — Pedro, Sofia, Paulo, Anastácia, Olga, Amélia, Antonio, Izidoro, Maria, Alice"],
      ["Falecimento", "03/04/1980 · Ponta Grossa — PR · confirmado"],
      ["Sepultamento", "Cemitério São José, Ponta Grossa — PR"],
    ],
    nota: "Viveu aproximadamente 97 anos. <b>\"Ana Iensen\":</b> a filha Olga Brykailo casou em 1932 com Gustavo Emilio Iansen — o sobrenome Iansen circulava na família por afinidade e pode explicar a confusão na memória oral. Não resolve definitivamente se \"Ana Iensen\" é a própria Anna ou outra filha do casal.",
  },
  "miguel-brecailo": {
    nome: "Miguel Brecailo", orig: "Simão Brecailo (forma nos documentos brasileiros)",
    rel: "Marido de Anna Kotovey. Entrou na família pelo casamento em 1908.",
    q: { conc: 4, hip: 1, doc: 4 },
    campos: [
      ["Nascimento", "≈ 1880–1881 · Europa (vago nos documentos)"],
      ["Pais", "Simão Brecailo + Magdalena (sobrenome incerto — lido como Silewdaney / Sliwiany)"],
      ["Casamento", "23/05/1908 · Campo Largo — PR"],
      ["Casado com", "Anna Kotovey"],
      ["Profissões", "Typographo (1911) · Artista (1913) · Lavrador (1922) · Comerciante / Operário (1939–1945)"],
      ["Filhos", "10 — Pedro, Sofia, Paulo, Anastácia, Olga, Amélia, Antonio, Izidoro, Maria, Alice"],
      ["Falecimento", "25/02/1955 · Ponta Grossa — PR · confirmado"],
      ["Causa mortis", "Insuficiência cardio-circulatória, tuberculose pulmonar crônica bilateral"],
      ["Sepultamento", "Cemitério São José, Ponta Grossa — PR"],
    ],
    nota: "Documentos alternam entre \"Simão\" e \"Miguel\" — a família usou ambas as formas. Pais confirmados em documentos primários: Simão Brecailo e Magdalena (sobrenome de solteira ainda incerto). Sobrenome original ucraniano provavelmente <em>Brykajlo</em>.",
  },
  maria: {
    nome: "Maria Kotovey", rel: "Filha de Demétrio e Bárbara — nascida na Galícia (hoje Ucrânia ocidental).",
    q: { conc: 0, hip: 1, doc: 0 },
    campos: [["Nascimento", "≈ 1883 · Galícia"]],
    nota: "Poucos registros localizados. Hipótese familiar: emigrou para a Argentina após casar — sem confirmação documental.",
  },
  nicolau: {
    nome: "Nicolau Kotowey", rel: "Filho de Demétrio e Bárbara. Linha com mais documentação levantada.",
    q: { conc: 4, hip: 0, doc: 1 },
    campos: [
      ["Nascimento", "19/01/1889 · Galícia"],
      ["Profissão", "Sapateiro"],
      ["Casado com", "Maria Olenik"],
      ["Filhos", "8 — Demétrio, Antonio, Julio, Emílio, Raphael, Jorge, Claudio, Elice"],
      ["Falecimento", "26/09/1957 · Ponta Grossa — PR"],
      ["Sepultamento", "Cemitério São José, Ponta Grossa — PR"],
    ],
    docs: '<a class="btn" href="arvore.html">Ver a árvore →</a>',
  },
  joao: {
    nome: "João Kotovey", rel: "Filho de Demétrio e Bárbara — nascido na Galícia (hoje Ucrânia ocidental).",
    q: { conc: 3, hip: 1, doc: 0 },
    campos: [
      ["Nascimento", "05/11/1890 · Galícia"],
      ["Casamento", "07/09/1921 · Bateias, Campo Largo — PR"],
      ["Casado com", "Christina Nahumets"],
      ["Falecimento", "18/04/1967 · Curitiba — PR"],
    ],
    nota: "O local de nascimento \"Tarnopol\" aparece no FamilySearch sem fonte primária associada — dado não verificado.",
  },
  eudoxia: {
    nome: "Eudóxia Kotovey", rel: "Filha de Demétrio e Bárbara — nascida na Galícia (hoje Ucrânia ocidental).",
    q: { conc: 2, hip: 1, doc: 1 },
    campos: [
      ["Nascimento", "≈ 1894 · Galícia"],
      ["Casada com", "Estefano Matias · natural da Áustria"],
      ["Filhos", "Ana, Maria, Estanislau (conforme registro de óbito)"],
      ["Falecimento", "28/04/1985 · Curitiba — PR"],
      ["Sepultamento", "Maringá — PR"],
    ],
  },
  sophia: {
    nome: "Sophia Kotovey", rel: "Filha de Demétrio e Bárbara — nascida já no Brasil.",
    q: { conc: 2, hip: 0, doc: 1 },
    campos: [
      ["Nascimento", "20/02/1898 · Brasil"],
      ["Batismo", "28/02/1898 · Araucária — PR"],
      ["Casamento", "21/03/1923 · Campo Largo — PR"],
      ["Casada com", "Paulo Tornoski"],
      ["Filho", "Antonio Tarnoski (n. 1923, Campo Largo)"],
    ],
    nota: "A recepcionista da Igreja Assunção de N. Sra. (Guajuvira, Araucária) tem o sobrenome Tornoski e confirmou a ligação com a família — lead ativo de pesquisa.",
  },
  "demetrio-filho": {
    nome: "Demétrio Kotovey (filho)", rel: "Filho de Demétrio e Bárbara — nascido já no Brasil.",
    q: { conc: 3, hip: 0, doc: 1 },
    campos: [
      ["Nascimento", "15/05/1900 · Guajuvira, Araújos — PR"],
      ["Casamento", "07/09/1921 · Campo Largo — PR"],
      ["Casado com", "Anna Kogut"],
      ["Filho", "Izidoro Kotovei (n. 1934, Curitiba)"],
      ["Falecimento", "04/08/1990 · Curitiba — PR"],
    ],
  },
  emilio: {
    nome: "Emílio Kotowey", rel: "Neto de Demétrio e Bárbara, pela linha de Nicolau.",
    q: { conc: 4, hip: 1, doc: 2 },
    campos: [
      ["Nascimento", "≈ 27/06/1925 · Irati — PR"],
      ["Profissão", "Aposentado"],
      ["Casado com", "Leonor Maria Wichert (Lola)"],
      ["Filhos", "Renato Sergio, Carlos Alberto, Carmen, Fernando"],
      ["Falecimento", "26/04/1999 · Hospital Bom Jesus, Ponta Grossa — PR"],
      ["Sepultamento", "Cemitério São José, Ponta Grossa (Túmulo 158, Q03)"],
    ],
    nota: "Foi o registro de falecimento de Emílio o primeiro documento localizado — o ponto de partida de toda a pesquisa. A lápide indica 1923, mas o guia de sepultamento (documento primário) confirma <b>1925</b> — 73 anos em abril de 1999.",
  },
  "leonor-maria": {
    nome: "Leonor Maria Wichert (Lola)", rel: "Esposa de Emílio Kotowey. Avó de Miguel pela linha de Nicolau.",
    q: { conc: 3, hip: 1, doc: 0 },
    campos: [
      ["Nascimento", "30/04/1921 · Ponta Grossa — PR (lápide)"],
      ["Sobrenome de solteira", "Wichert"],
      ["Pai", "Frederico Guilherme Wichert"],
      ["Mãe", "Maria Schnitzler"],
      ["Casada com", "Emílio Kotowey"],
      ["Filhos", "Renato Sergio, Carlos Alberto, Carmen, Fernando"],
      ["Falecimento", "15/05/2009 · Ponta Grossa — PR (lápide)"],
      ["Sepultamento", "Cemitério Municipal de Ponta Grossa — PR"],
    ],
    nota: "Datas divergem entre lápide e FamilySearch (nascimento: 1921 vs. 1928; falecimento: 2009 vs. 2008). A lápide é a fonte primária adotada. Verificação pela certidão de óbito está pendente.",
  },
  fernando: {
    nome: "Fernando Kotowey", rel: "Bisneto de Demétrio e Bárbara, pela linha de Nicolau → Emílio.",
    q: { conc: 1, hip: 0, doc: 0 },
    campos: [["Linha", "Nicolau → Emílio → Fernando"]],
  },
};

/* Métrica de qualidade do registro (0–100) e nível. Pesos: documento 12, concreto 8, hipotético 3. */
window.qualidadeRegistro = function (q) {
  q = q || {};
  var score = Math.min(100, (q.doc || 0) * 12 + (q.conc || 0) * 8 + (q.hip || 0) * 3);
  var nivel, cls;
  if (score >= 65) { nivel = "Bem documentado"; cls = "q4"; }
  else if (score >= 40) { nivel = "Consistente"; cls = "q3"; }
  else if (score >= 20) { nivel = "Inicial"; cls = "q2"; }
  else { nivel = "Esboço"; cls = "q1"; }
  return { score: score, nivel: nivel, cls: cls, confirmado: (q.doc || 0) >= 1 };
};
