'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {

		await queryInterface.createTable('productsImages', {
			idImage: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			idProduct: {
				type: Sequelize.INTEGER,
				allowNull: false,
				foreignKey: true,
				references: {
					model: "products",
					key: "idProduct"
				}
			},
			src: {
				type: Sequelize.TEXT('long'),
				allowNull: false,
			},
		});

		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	}
};
