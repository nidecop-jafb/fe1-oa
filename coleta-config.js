/* Coleta de respostas da Fisica Experimental 1.
 *
 * Cole entre as aspas a URL /exec do App da Web (Apps Script da planilha
 * FE1-Respostas-2026), faca commit e push. Isso ativa a coleta em TODOS os
 * OAs publicados de uma vez — nao ha nada a mudar em cada pagina.
 *
 * Com a url vazia (estado atual) os OAs seguem funcionando offline: o
 * estudante responde, ve a correcao automatica e exporta o comprovante .json.
 *
 * ATENCAO antes de ativar: RA fora da aba `alunos` e RECUSADO. Com a lista
 * vazia, todo envio de aluno falha. Rode conferirListaAlunos() no Apps Script
 * antes de divulgar o link para a turma.
 *
 * NUNCA coloque a chave do relatorio aqui — este arquivo e publico.
 */
window.COLETA = { url: '' };
