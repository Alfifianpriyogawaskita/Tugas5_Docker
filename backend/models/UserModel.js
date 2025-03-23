import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default User;

// Sinkronisasi database
(async () => {
    await db.sync({ alter: true }); // Ubah force: true jika ingin menghapus tabel lama
    console.log("Database & tables synced!");
})();
