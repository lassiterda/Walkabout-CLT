
module.exports = function(sequelize, DataTypes) {
    let Location = sequelize.define("Location", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
          type: DataTypes.TEXT,
          allowNull: false,
        },  
        address: {
            type: DataTypes.STRING,
            allowNull: false
            },
        city: {
            type: DataTypes.STRING
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        numlikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        lat: {
            type: DataTypes.DOUBLE,  //INTEGER
            allowNull: true,
            defaultValue: null,
            validate: { min: -90, max: 90 }
          },
          lng: {
            type: DataTypes.DOUBLE,  //INTEGER
            allowNull: true,
            defaultValue: null,
            validate: { min: -180, max: 180 }
          },
          Google_place_id: {
            type: DataTypes.STRING,
          }
        }, {
          validate: {
            bothCoordsOrNone() {
              if ((this.latitude === null) !== (this.longitude === null)) {
                throw new Error('Require either both latitude and longitude or neither')
                 }
              }
           }
        })
        return Location;
    };

      //      classMethods: {
//            associate: function(models)
//                location.belongsTo(models.User,
//                  {
//                     onDelete: "cascade",
//                     foreignKey: {
//                       allowNull: false
//                     }
//                   }
//                });
//              }
//            }
