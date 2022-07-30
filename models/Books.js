module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {

        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING(200)
        },
        total_pages: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        author: {
            allowNull: false,
            type: DataTypes.STRING(200)
        },
        release_year: {
            allowNull: false,
            type: DataTypes.STRING(50)
        },
        stock: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        tableName: 'books',
        timestamps: true
    });

    return Book;
}