import Knex from 'knex';

export async function up(knex: Knex) {
 return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.integer('place_id').notNullable().references('id').inTable('places');
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude ').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('points')
}


