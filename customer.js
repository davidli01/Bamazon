var mysql = require('mysql');

var connection = mysql.createConnection({
	host:"localhost",
	port: 3306,
	user: "root",
	password: "1234",
	database: "bamazon"
});

connection.connect(function(err) {
	if (err) throw err;
	start();
})

var start = function() {
	var items = ['id', 'name', 'price'];
	var query = bamazon.createQuery(items);
	connection.query(query, function(err, res) {
		function(res) {
			bamazon.printData(res, items);
			items = res[res.length -1]['id'];
				function(items) {
				  inquirer.prompt([{
				    name: "id",
				    type: "input",
				    message: "What is the item ID you would like to buy?",
				    validate: function(value) {
				      if (value>=0 && value<=max && value%1 === 0 && value.indexOf(' ')<0 && value.indexOf('.')<0) {
				        return true;
				      } else {
				        return 'Please type a whole number between 1 and ' + max + ' without a period or extra spaces';
				      }
				    }
				  } , {
				    name: "quantity",
				    type: "input",
				    message: "How many would you like to buy?",
				    validate: Bamazon.validateQuantity
				  }]).then(function(answer) {
				    checkQuantity(answer);
				  });
				};
		};
	});
};