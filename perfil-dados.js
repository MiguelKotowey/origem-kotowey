/* Dados das pessoas. Relações são relativas ao casal fundador — nunca ao pesquisador.
   q = métrica de qualidade do registro: conc (dados concretos/documentados),
   hip (dados hipotéticos/aproximados), doc (documentos-fonte). Rubrica: ver
   vault → 🔬 Pesquisa/Qualidade do Registro (métrica).md */
window.PESSOAS = {
  demetrio: {
    nome: "Demétrio Kotovey", orig: "Dmytro Kutovy · Дмитро Кутовий",
    rel: "Casal fundador da linha pesquisada. Emigrou da Galícia em 1895.",
    q: { conc: 2, hip: 3, doc: 3 },
    campos: [
      ["Nascimento", "≈ 1854"], ["Falecimento", "≈ 1904"],
      ["Local de nascimento", "Galícia — Áustria-Hungria (hoje Ucrânia ocidental)"],
      ["Pai", "Miguel Kotovieg"], ["Casado com", "Bárbara"],
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
      ["Local de nascimento", "Galícia — Áustria-Hungria (hoje Ucrânia ocidental)"], ["Casada com", "Demétrio"],
      ["Também registrada como", "Baltina · Beltina"],
      ["Túmulo", "Cemitério da Igreja Assunção de N. Sra., Araucária ✓"],
      ["Inscrição", "ВАРВАРА КОТОВИЙ (ucraniano)"],
    ],
    docs: '<a class="btn" href="galeria.html">Fotos do túmulo →</a><a class="btn" href="documentos.html">Registro de óbito →</a>',
  },
  anna: { nome: "Anna Kotovey", rel: "Filha de Demétrio e Bárbara — nascida na Galícia (hoje Ucrânia ocidental).",
    q: { conc: 3, hip: 0, doc: 1 },
    campos: [["Nascimento", "28/01/1883 · Galícia"], ["Falecimento", "03/04/1980"], ["Casada com", "Miguel Brecailo"]] },
  maria: { nome: "Maria Kotovey", rel: "Filha de Demétrio e Bárbara — nascida na Galícia (hoje Ucrânia ocidental).",
    q: { conc: 0, hip: 1, doc: 0 },
    campos: [["Nascimento", "≈ 1884 · Galícia"]], nota: "Poucos registros localizados até o momento." },
  nicolau: { nome: "Nicolau Kotowey", rel: "Filho de Demétrio e Bárbara. Linha com mais documentação levantada.",
    q: { conc: 4, hip: 0, doc: 1 },
    campos: [["Nascimento", "19/01/1889 · Galícia"], ["Falecimento", "26/09/1957"], ["Casado com", "Maria Olenik"], ["Filhos", "8"]],
    docs: '<a class="btn" href="arvore.html">Ver a árvore →</a>' },
  joao: { nome: "João Kotovey", rel: "Filho de Demétrio e Bárbara — nascido na Galícia (hoje Ucrânia ocidental).",
    q: { conc: 3, hip: 1, doc: 0 },
    campos: [["Nascimento", "05/11/1890 · Galícia"], ["Falecimento", "1967"], ["Casado com", "Christina Nahumets"]] },
  eudoxia: { nome: "Eudóxia Kotovey", rel: "Filha de Demétrio e Bárbara — nascida na Galícia (hoje Ucrânia ocidental).",
    q: { conc: 2, hip: 1, doc: 1 },
    campos: [["Nascimento", "≈ 1894 · Galícia"], ["Falecimento", "28/04/1985 · Curitiba"], ["Casada com", "Estefano Matias"]] },
  sophia: { nome: "Sophia Kotovey", rel: "Filha de Demétrio e Bárbara — nascida já no Brasil.",
    q: { conc: 2, hip: 0, doc: 1 },
    campos: [["Nascimento", "20/02/1898 · Brasil"], ["Casada com", "Paulo Tornoski"]],
    nota: "O sobrenome Tornoski reaparece na comunidade da Igreja Assunção, em Araucária — um lead ativo de pesquisa." },
  "demetrio-filho": { nome: "Demétrio Kotovey (filho)", rel: "Filho de Demétrio e Bárbara — nascido já no Brasil.",
    q: { conc: 1, hip: 1, doc: 1 },
    campos: [["Nascimento", "≈ 1900 · Brasil"], ["Falecimento", "04/08/1990"]] },
  emilio: { nome: "Emílio Kotowey", rel: "Neto de Demétrio e Bárbara, pela linha de Nicolau.",
    q: { conc: 1, hip: 0, doc: 1 },
    campos: [["Origem da pesquisa", "Registro de óbito localizado no FamilySearch, 2024"]],
    nota: "Foi o registro de falecimento de Emílio o primeiro documento localizado — o ponto de partida de toda a pesquisa." },
  fernando: { nome: "Fernando Kotowey", rel: "Bisneto de Demétrio e Bárbara, pela linha de Nicolau → Emílio.",
    q: { conc: 1, hip: 0, doc: 0 },
    campos: [["Linha", "Nicolau → Emílio → Fernando"]] },
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
