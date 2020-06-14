import Knex from 'knex'

export async function seed(knex:Knex) {

  await knex('places').insert([
    {place: 'Restaurantes', image: 'carne.svg'},
    {place: 'Descanso', image: 'dormir.svg'},
    {place: 'Banheiros', image: 'banho.svg'},
    {place: 'Mecânico', image: 'guincho.svg'},
    {place: 'Médico', image: 'medico.svg'},
    {place: 'Bem Estar', image: 'exercicio.svg'},
  ]);

}
