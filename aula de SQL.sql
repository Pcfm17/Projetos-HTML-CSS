SELECT * FROM exercicio.professor;
SELECT * FROM exercicio.professor_disciplina;
SELECT * FROM exercicio.aluno;
SELECT * FROM exercicio.disciplina;
SELECT * FROM exercicio.matricula;

select disc_codigo,disc_nome  from exercicio.disciplina where disc_nome='Matemática Básica'; 
select disc_codigo from exercicio.disciplina where disc_codigo='MAT101';


select prof_rua,prof_nome from exercicio.professor where prof_nome='Marcos Santos';
select prof_rua from exercicio.professor where prof_rua='Rua Castelo Branco, 10'


select prof_numero,disc_codigo from exercicio.professor_disciplina where disc_codigo='MAT101';
select prof_numero from exercicio.professor_disciplina where prof_numero='1';

update exercicio.matricula
	set nota=8.5
	where alu_numero=4
	and disc_codigo='MAT101'
	and ano='2024'
	and semestre=1;


select alu_nome,alu_cidade from exercicio.aluno where alu_cidade='Porto Alegre';
select alu_nome from exercicio.aluno where alu_nome='Maria Almeida';


select prof_cidade,prof_nome from exercicio.professor where prof_cidade='São Paulo' or prof_cidade='Rio de Janeiro';
select prof_nome from exercicio.professor where prof_nome='Carlos Silva' or prof_nome='Maria Souza';



select alu_numero, disc_codigo, frequencia, nota from exercicio.matricula where disc_codigo='FIS202' and nota > 9;


select disc_codigo, prof_numero 
from exercicio.professor right join exercicio.professor_disciplina
on professor.prof_numero = professor_disciplina.disc_codigo
where disc_codigo='MAT101';






















