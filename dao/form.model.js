module.exports = (sequelize, Sequelize) => {
    const Form = sequelize.define("form", {
        textValue: {
            type: Sequelize.STRING
        },
        selectedDate: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        }
    });

    return Form;
};