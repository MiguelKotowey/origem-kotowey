# Objetivo e Escopo de Cada Página

Documento vivo. Complementa a `VOZ.MD` (como escrever) definindo **o que pertence a cada página** — pra nenhum conteúdo novo (achado, documento, hipótese, foto) entrar no lugar errado só porque "também é sobre a família". Antes de adicionar qualquer coisa a uma página existente, ou de decidir ONDE um conteúdo novo deve entrar, consultar este arquivo.

**Regra de ouro:** cada página tem um **eixo organizador** diferente (tempo da família, tempo da pesquisa, pessoa, sobrenome, fonte, lugar). Quando um conteúdo novo surge, a primeira pergunta é "qual desses eixos ele segue?" — não "é sobre a família Kotowey?" (isso é verdade pra quase tudo, não ajuda a decidir).

---

## Como usar / como estender

Cada página tem uma entrada no molde abaixo. Ao criar uma página nova, copiar o molde e preencher — não pular a seção "NÃO pertence aqui", é a parte que mais evita confusão depois.

```
## arquivo.html — "Nome no menu"
**Eixo organizador:** (o que ordena o conteúdo — tempo da família? tempo da pesquisa? pessoa? sobrenome? fonte?)
**Objetivo:** (uma frase — o que essa página responde pro leitor)
**Pertence aqui:** (tipos de conteúdo que entram)
**NÃO pertence aqui:** (tipos de conteúdo parecidos que vão pra OUTRA página — dizer qual)
**Observações:** (casos de ambiguidade já resolvidos, se houver)
```

---

## index.html — "Início"
**Eixo organizador:** nenhum — é a porta de entrada, não tem conteúdo próprio de pesquisa.
**Objetivo:** orientar quem chega: o que é esse site, quem conduz, e pra onde ir.
**Pertence aqui:** apresentação do projeto, metodologia em alto nível, links pra todas as seções.
**NÃO pertence aqui:** qualquer achado, data, documento ou pessoa específica — isso é aprofundamento, pertence às páginas de destino.

---

## historia.html — "História"
**Eixo organizador:** **tempo da família** — a vida dela, em ordem cronológica dos acontecimentos (nascimento, casamento, óbito, migração).
**Objetivo:** responder "o que aconteceu, e quando" — a trajetória de vida da linha direta pesquisada, do nascimento do casal fundador até os descendentes mais recentes documentados.
**Pertence aqui:** marcos de vida da **linha direta** (nascimento, casamento, óbito, viagem) com data e local, confirmados ou aproximados (≈). Pode citar brevemente a fonte de um marco, mas não a desenvolve.
**NÃO pertence aqui:** como o achado foi feito, em que ordem foi descoberto, hipóteses em teste, buscas que deram negativo, qualquer coisa sobre **ramos colaterais/homônimos** (ex.: o Bazyli Kutowy de Proniatyn, ainda sem parentesco provado) — isso é `diario.html`. Detalhe do documento-fonte em si — isso é `documentos.html`.
**Observações:** esta foi a confusão real que já aconteceu — um achado sobre um parente **colateral** (não confirmado) ou sobre o **processo** de busca foi parar aqui por engano. Teste rápido: "isso é um fato da vida da linha direta, ou é sobre a pesquisa em si?" Se for a segunda, vai pro diário.

---

## diario.html — "Diário"
**Eixo organizador:** **tempo da pesquisa** — a ordem em que as coisas foram descobertas, não a ordem em que aconteceram na vida da família.
**Objetivo:** responder "como se sabe isso" — a história da investigação: o que foi buscado, onde, o que apareceu, o que deu errado, hipóteses levantadas e testadas (confirmadas ou não).
**Pertence aqui:** contato com arquivos, documentos localizados (o ato de achar, não só o documento), hipóteses (inclusive as que foram testadas e descartadas — isso é conteúdo válido, mostra o método), achados sobre ramos colaterais/homônimos ainda sem parentesco provado, becos sem saída relevantes.
**NÃO pertence aqui:** o fato de vida em si descontextualizado da descoberta (isso é `historia.html`, uma vez confirmado) — nem **logística de pesquisa** que não é achado (pagamento de taxa, qual banco usar, ferramenta de busca testada) — isso não vai pro site, fica só no vault interno.
**Observações:** quando um achado do diário vira fato confirmado da linha direta, ele pode (e deve) também aparecer resumido em `historia.html` — não é "ou lá ou aqui", é "aqui conta a história de como se achou, lá conta o fato já estabelecido".

---

## arvore.html — "Árvore"
**Eixo organizador:** **pessoa**, organizada por relação genealógica (geração, parentesco com o casal fundador).
**Objetivo:** mostrar a estrutura familiar — quem é filho de quem, e dar acesso ao perfil de cada pessoa.
**Pertence aqui:** cards de pessoa (nome, relação, selo de qualidade do registro), estrutura de gerações.
**NÃO pertence aqui:** narrativa de qualquer tipo — cada card é só um resumo + link pro perfil.

## perfil.html (acessada via `arvore.html#slug`) — perfil individual
**Eixo organizador:** **pessoa** — uma só, em profundidade.
**Objetivo:** reunir tudo que se sabe sobre UMA pessoa específica.
**Pertence aqui:** dados dessa pessoa (datas, local, relações, fontes que a mencionam), conforme o padrão de campos já definido na `VOZ.MD`.
**NÃO pertence aqui:** comparação com outras pessoas, narrativa da busca (link pro diário se relevante, não o conteúdo em si).

---

## familias.html — "Famílias"
**Eixo organizador:** **sobrenome**, agrupado por grau (quando entrou na família via casamento).
**Objetivo:** mapear os sobrenomes que cruzam a história do Kotovey por casamento.
**Pertence aqui:** um sobrenome por entrada, quem casou com quem, grau de distância do casal fundador. Hipóteses de sobrenome de solteira (ex.: Wawrów/Wawryk) entram aqui como uma "família" em investigação.
**NÃO pertence aqui:** a história de COMO a hipótese de sobrenome foi investigada (isso é diário) — aqui só o estado atual da hipótese.

---

## documentos.html — "Documentos"
**Eixo organizador:** **fonte/documento**, agrupado por repositório de origem.
**Objetivo:** ser o repositório citável — cada documento primário, com proveniência clara, link pra página exata e pro livro completo quando existir.
**Pertence aqui:** o documento em si (imagem/PDF), fonte, descrição objetiva do que ele mostra. A seção "Possibilidades" é pra documentos reais cuja ligação com a família ainda não foi provada.
**NÃO pertence aqui:** a narrativa de como o documento foi encontrado (diário) — nem conclusões genealógicas tiradas dele além do que o documento objetivamente mostra.

---

## galeria.html — "Galeria"
**Eixo organizador:** **lugar visitado**, fotografia pessoal.
**Objetivo:** registrar visitas físicas — cemitérios, igrejas, arquivos — feitas pessoalmente pelo pesquisador.
**Pertence aqui:** fotos tiradas em visita, com legenda do lugar/contexto.
**NÃO pertence aqui:** scans de documentos de arquivo (isso é `documentos.html`, mesmo que a foto tenha sido tirada pessoalmente de um documento — o critério é "é um registro oficial?" não "quem fotografou").

---

## arte.html — "Arte"
**Eixo organizador:** nenhum dos de pesquisa — é a galeria de obras de Renato Kotowey.
**Objetivo:** expor as obras de Renato, sem ligação com a investigação genealógica.
**Pertence aqui:** imagem da obra + legenda mínima ("Obra de Renato Kotowey" — nunca especular técnica/período/ordem, ver `VOZ.MD`).
**NÃO pertence aqui:** qualquer conteúdo genealógico.

---

## Ligações
`VOZ.MD` (como escrever) · `Convenção de Grafia por Pessoa.md` no vault (qual grafia usar por pessoa) · vault `🔬 Pesquisa/` (onde fica tudo que NÃO é pra publicar ainda, ou nunca vai ser — ex. logística de pesquisa, pagamentos, contatos vivos).
